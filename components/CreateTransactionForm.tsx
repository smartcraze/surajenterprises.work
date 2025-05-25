"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearch } from "@/hooks/useSearch";
import { useTransaction } from "@/hooks/useTransaction";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Loader2 } from "lucide-react";

// 👤 User type definition
interface User {
  id: string;
  name: string;
  phone: string;
  projectId?: string;
}

// 🧠 Zod Schema
const formSchema = z.object({
  userId: z.string().min(1, "Please select a user"),
  projectId: z.string().optional(),
  amount: z.coerce.number().min(1, "Amount must be greater than 0"),
  type: z.enum(["ADVANCE", "PAYMENT", "KHARCHI", "OTHER"]),
  paymentMethod: z.enum(["CASH", "UPI", "BANK_TRANSFER", "OTHER"]),
});

export function CreateTransactionForm() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [submitError, setSubmitError] = useState("");

  const { searchTerm, setSearchTerm, searchResults, isLoading: isSearching } = useSearch();
  const { createTransaction, isLoading: isSubmitting } = useTransaction();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      projectId: undefined,
      amount: 0,
      type: "ADVANCE",
      paymentMethod: "CASH",
    },
  });

  const handleOpenChange = useCallback((isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      form.reset();
      setSelectedUser(null);
      setSearchTerm("");
      setSubmitError("");
    }
  }, [form, setSearchTerm]);

  const handleUserSelect = useCallback((user: User) => {
    setSelectedUser(user);
    form.setValue("userId", user.id);
    form.setValue("projectId", user.projectId || undefined);
    setSearchTerm("");
  }, [form, setSearchTerm]);

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitError("");
      const submitData = {
        ...values,
        projectId: values.projectId || undefined,
      };
      await createTransaction(submitData);
      handleOpenChange(false);
    } catch (error: any) {
      setSubmitError(error?.message || "Failed to create transaction.");
    }
  }, [createTransaction, handleOpenChange]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Transaction</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 👤 User Search */}
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>User</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Search user by name or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      {isSearching && (
                        <div className="absolute right-2 top-2">
                          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        </div>
                      )}
                      {searchResults.length > 0 && searchTerm && (
                        <Command className="absolute top-full left-0 right-0 z-50 bg-white border rounded-md mt-1 max-h-48 overflow-auto">
                          <CommandGroup>
                            {searchResults.map((user: User) => (
                              <CommandItem
                                key={user.id}
                                onSelect={() => handleUserSelect(user)}
                              >
                                <div className="flex flex-col">
                                  <span>{user.name}</span>
                                  <span className="text-sm text-gray-500">
                                    {user.phone}
                                  </span>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      )}
                    </div>
                  </FormControl>
                  {selectedUser && (
                    <div className="text-sm text-gray-500 mt-1">
                      Selected: {selectedUser.name}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 💸 Amount */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 🔁 Transaction Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ADVANCE">Advance</SelectItem>
                      <SelectItem value="PAYMENT">Payment</SelectItem>
                      <SelectItem value="KHARCHI">Kharchi</SelectItem>
                      <SelectItem value="OTHER">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 💳 Payment Method */}
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="CASH">Cash</SelectItem>
                      <SelectItem value="UPI">UPI</SelectItem>
                      <SelectItem value="BANK_TRANSFER">Bank Transfer</SelectItem>
                      <SelectItem value="OTHER">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            
            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}

            {/* ✅ Submit Button */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Transaction
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
