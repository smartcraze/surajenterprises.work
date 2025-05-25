"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import toast from "react-hot-toast";

type User = {
  id: string;
  name: string;
  rate: number;
  phone: string;
  role: string;
  pictureUrl?: string | null;
  projectId?: string | null;
};


export function LabourPaymentCalculator({ users }: { users: User[] }) {
  const [selectedId, setSelectedId] = useState("");
  const [daysWorked, setDaysWorked] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [total, setTotal] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedUser = users.find((u) => u.id === selectedId);

  const handleCalculate = () => {
    if (selectedUser && (daysWorked > 0 || hoursWorked > 0)) {
      const rate = selectedUser.rate;
  
      // Full hazris from input
      let totalHazri = daysWorked;
  
      // Extra hazris from hours
      const extraHazriFromHours = Math.floor(hoursWorked / 8);
      totalHazri += extraHazriFromHours;
  
      // Remaining hours
      const remainingHours = hoursWorked % 8;
      const partialPay = (remainingHours / 8) * rate;
  
      // Final total = hazri pay + partial hour pay
      const totalAmount = totalHazri * rate + partialPay;
  
      setTotal(totalAmount);
    }
  };

  const handleAddToDashboard = async () => {
    if (!selectedUser || total === null) {
      toast.error("Please calculate the payment first");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          type: "PAYMENT",
          paymentMethod: "UPI",
          userId: selectedUser.id,
          projectId: selectedUser.projectId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || "Failed to add payment");
      }

      toast.success("Payment added successfully!");
      // Reset form
      setSelectedId("");
      setDaysWorked(0);
      setHoursWorked(0);
      setTotal(null);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
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
          value={selectedId}
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
              <Image
                src={selectedUser.pictureUrl || "/placeholder.jpg"}
                alt={selectedUser.name}
                width={64}
                height={64}
                className="rounded object-cover border"
              />

              <div>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">{selectedUser.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedUser.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rate: ₹{selectedUser.rate}/day</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Label>Days worked</Label>
                <Input
                  type="number"
                  value={daysWorked}
                  onChange={(e) => setDaysWorked(Number(e.target.value))}
                  placeholder="Days worked"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full"
                />
              </div>
              <div>
                <Label>Hours worked</Label>
                <Input
                  type="number"
                  value={hoursWorked}
                  onChange={(e) => setHoursWorked(Number(e.target.value))}
                  placeholder="Hours worked"
                />
              </div>
            </div>

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
            <Button 
              onClick={handleAddToDashboard} 
              disabled={isSubmitting || total === null}
              className="w-full"
            >
              {isSubmitting ? "Adding..." : "Add to Dashboard"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
