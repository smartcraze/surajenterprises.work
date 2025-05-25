"use client";

import { useState } from "react";

type User = {
  id: string;
  name: string;
  rate: number;
  phone: string;
  role: string;
  pictureUrl: string;
};

export function LabourPaymentCalculator({ users }: { users: User[] }) {
  const [selectedId, setSelectedId] = useState("");
  const [daysWorked, setDaysWorked] = useState(0);
  const [total, setTotal] = useState<number | null>(null);

  const selectedUser = users.find((u) => u.id === selectedId);

  const handleCalculate = () => {
    if (selectedUser && daysWorked > 0) {
      setTotal(selectedUser.rate * daysWorked);
    }
  };

  return (
    <div className="mt-12 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Labour Payment Calculator</h2>

      <div className="flex flex-col gap-3">
        <select
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100"
          onChange={(e) => {
            setSelectedId(e.target.value);
            setTotal(null);
            setDaysWorked(0);
          }}
        >
          <option value="">Select a labour</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.role})
            </option>
          ))}
        </select>

        {selectedUser && (
          <>
            <div className="flex items-center gap-4">
              <img
                src={selectedUser.pictureUrl}
                alt={selectedUser.name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">{selectedUser.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedUser.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rate: ₹{selectedUser.rate}/day</p>
              </div>
            </div>

            <input
              type="number"
              value={daysWorked}
              onChange={(e) => setDaysWorked(Number(e.target.value))}
              placeholder="Days worked"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full"
            />

            <button
              onClick={handleCalculate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Calculate
            </button>

            {total !== null && (
              <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                Total Pay: ₹{total}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
