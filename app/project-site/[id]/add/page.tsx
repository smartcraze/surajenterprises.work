"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddUsersToProject() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.id as string;

  const [users, setUsers] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/user/all");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        toast.error("Failed to fetch users");
      }
    }
    fetchUsers();
  }, []);

  function toggleUserSelection(userId: string) {
    setSelectedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) newSet.delete(userId);
      else newSet.add(userId);
      return newSet;
    });
  }

  async function handleSubmit() {
    if (!projectId) {
      toast.error("Project ID is missing");
      return;
    }
    if (selectedUsers.size === 0) {
      toast.error("Select at least one user");
      return;
    }

    const payload = {
      projectId,
      userIds: Array.from(selectedUsers),
    };

    toast.loading("Adding users to project...");

    try {
      const res = await fetch(`/api/projects/add-users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast.dismiss();

      if (res.ok) {
        toast.success("Users added successfully!");
        setSelectedUsers(new Set()); // Clear selection on success
        router.push(`/admin`); // Redirect after adding users
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "An unknown error occurred");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Add Users to Project
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading users...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-300 dark:border-zinc-700">
          <table className="w-full table-auto border-collapse text-gray-900 dark:text-gray-100">
            <thead className="bg-gray-100 dark:bg-zinc-800">
              <tr>
                <th className="p-3 border-b border-gray-300 dark:border-zinc-700 w-16">Select</th>
                <th className="p-3 border-b border-gray-300 dark:border-zinc-700 text-left">Name</th>
                <th className="p-3 border-b border-gray-300 dark:border-zinc-700 text-left">Phone</th>
                <th className="p-3 border-b border-gray-300 dark:border-zinc-700 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                const isSelected = selectedUsers.has(user.id);
                return (
                  <tr
                    key={user.id}
                    className={`cursor-pointer transition-colors ${
                      i % 2 === 0
                        ? "bg-white dark:bg-zinc-900"
                        : "bg-gray-50 dark:bg-zinc-800"
                    } ${isSelected ? "bg-blue-100 dark:bg-blue-900" : ""} hover:bg-blue-200 dark:hover:bg-blue-800`}
                    onClick={() => toggleUserSelection(user.id)}
                  >
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onClick={(e) => e.stopPropagation()}
                        onChange={() => toggleUserSelection(user.id)}
                        className="w-5 h-5 cursor-pointer"
                        aria-label={`Select user ${user.name}`}
                      />
                    </td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.phone}</td>
                    <td className="p-3">{user.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={selectedUsers.size === 0 || !projectId}
        className="mt-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Add Selected Users
      </button>
    </div>
  );
}
