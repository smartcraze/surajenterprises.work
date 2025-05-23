"use client"
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddUsersToProject() {
    const router = useRouter();
    const params = useParams();
    const projectId = params?.projectId as string; // FIXED: grab it from the URL

    const [users, setUsers] = useState<any[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch("/api/user/all");
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        }
        fetchUsers();
    }, []);

    function toggleUserSelection(userId: string) {
        setSelectedUsers(prev => {
            const newSet = new Set(prev);
            if (newSet.has(userId)) newSet.delete(userId);
            else newSet.add(userId);
            return newSet;
        });
    }

    async function handleSubmit() {
  const res = await fetch(`/api/projects/add-users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId, // ✅ make sure this is defined from useParams
      userIds: Array.from(selectedUsers),
    }),
  });

  if (res.ok) {
    router.push(`/projects/${projectId}`);
  } else {
    const errorData = await res.json();
    if (errorData.error) {
      toast.error(errorData.error);
    } else {
      toast.error("An unknown error occurred");
    }
  }
}

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Users to Project</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Select</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="text-center border border-gray-300">
                            <td className="border border-gray-300 p-2">
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.has(user.id)}
                                    onChange={() => toggleUserSelection(user.id)}
                                />
                            </td>
                            <td className="border border-gray-300 p-2">{user.name}</td>
                            <td className="border border-gray-300 p-2">{user.phone}</td>
                            <td className="border border-gray-300 p-2">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleSubmit}
                disabled={selectedUsers.size === 0}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                Add Selected Users
            </button>
        </div>
    );
}
