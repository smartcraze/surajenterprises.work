"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ledgerSchema = z.object({
  amount: z.coerce.number().min(1, "Amount is required"),
  type: z.enum(["ADVANCE", "PAYMENT", "KHARCHI", "OTHER"]),
  paymentMethod: z.enum(["CASH", "UPI", "BANK_TRANSFER", "OTHER"]),
  LabourName: z.string().min(1, "Labour name is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
});

type LedgerFormData = z.infer<typeof ledgerSchema>;

export default function LedgerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<LedgerFormData>({
    resolver: zodResolver(ledgerSchema),
    defaultValues: {
      type: "ADVANCE",
      paymentMethod: "CASH"
    }
  });

  const onSubmit = async (data: LedgerFormData) => {
    try {
      const res = await fetch("/api/ledger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error?.message || "Failed to add ledger entry");
        return;
      }

      toast.success("Ledger entry added successfully!");
      reset();
    } catch {
      toast.error("Network error occurred");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">Add Ledger Entry</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Ledger Entry</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new ledger entry.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              {...register("amount")}
              className="border p-2 rounded w-full"
            />
            {errors.amount && (
              <p className="text-red-600 text-sm mt-1">{errors.amount.message}</p>
            )}
          </div>
          <div className="flex gap-2 justify-between">
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <Select onValueChange={(value) => setValue("type", value as LedgerFormData["type"])} defaultValue="ADVANCE">
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADVANCE">Advance</SelectItem>
                  <SelectItem value="PAYMENT">Payment</SelectItem>
                  <SelectItem value="KHARCHI">Kharchi</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-red-600 text-sm mt-1">{errors.type.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select onValueChange={(value) => setValue("paymentMethod", value as LedgerFormData["paymentMethod"])} defaultValue="CASH">
                <SelectTrigger>
                  <SelectValue placeholder="Select Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CASH">Cash</SelectItem>
                  <SelectItem value="UPI">UPI</SelectItem>
                  <SelectItem value="BANK_TRANSFER">Bank Transfer</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.paymentMethod && (
                <p className="text-red-600 text-sm mt-1">{errors.paymentMethod.message}</p>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="LabourName">Labour Name</Label>
            <Input
              id="LabourName"
              type="text"
              {...register("LabourName")}
              className="border p-2 rounded w-full"
            />
            {errors.LabourName && (
              <p className="text-red-600 text-sm mt-1">{errors.LabourName.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="text"
              {...register("phoneNumber")}
              className="border p-2 rounded w-full"
              maxLength={10}
            />
            {errors.phoneNumber && (
              <p className="text-red-600 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          <DialogFooter className="pt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
