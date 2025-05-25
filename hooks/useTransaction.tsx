"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useCallback,
} from "react";

type TransactionType = "ADVANCE" | "PAYMENT" | "KHARCHI" | "OTHER";
type PaymentMethod = "CASH" | "UPI" | "BANK_TRANSFER" | "OTHER";

interface Transaction {
  amount: number;
  type: TransactionType;
  paymentMethod: PaymentMethod;
  userId: string;
  projectId?: string;
}

interface TransactionContextType {
  isLoading: boolean;
  error: string | null;
  createTransaction: (data: Transaction) => Promise<any>; // You can replace `any` with `Transaction` response type if defined
}

const TransactionContext = createContext<TransactionContextType | null>(null);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTransaction = useCallback(async (data: Transaction) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create transaction");
      }

      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      error,
      createTransaction,
    }),
    [isLoading, error, createTransaction]
  );

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = (): TransactionContextType => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
