import prisma from "@/lib/db"
import { TransactionType, PaymentMethod } from "@/generated/prisma"

export default async function TransactionTable({ userId }: { userId: string }) {
    
    const transactions = await prisma.transaction.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            project: true
        }
    });

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Transaction History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Payment Method</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Project</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                    {transaction.createdAt.toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`text-sm font-medium ${transaction.type === 'PAYMENT' || transaction.type === 'ADVANCE' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                        {transaction.type === 'PAYMENT' || transaction.type === 'ADVANCE' ? '+' : '-'}₹{transaction.amount}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                    {transaction.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                    {transaction.paymentMethod}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                    {transaction.project?.name || '-'}
                                </td>
                            </tr>
                        ))}
                        {transactions.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-300">
                                    No transactions found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
