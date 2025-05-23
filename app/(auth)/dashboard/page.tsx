
import Logout from '@/components/Logout';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { headers } from 'next/headers';
import Image from 'next/image';

export default async function Dashboard() {
    const headersList = await headers();
    const userId = headersList.get('x-user-id');

    let userData = null;

    if (userId) {
        const userRes = await fetch('http://localhost:3000/api/auth/me', {
            method: 'GET',
            headers: {
                'x-user-id': userId,
            },
            cache: 'no-store',
        });

        const userJson = await userRes.json();
        userData = userJson?.user || null;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Card className="w-full min-h-[55vh] border-2 border-dotted border-gray-300 dark:border-zinc-700 rounded-2xl shadow-md bg-blue-100 dark:bg-zinc-900 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                            Dashboard
                        </CardTitle>
                        <CardDescription className="text-base text-gray-500 dark:text-gray-400">
                            Welcome back, {userData?.name || '...'}
                        </CardDescription>
                    </CardHeader>
                    <div className="flex justify-end p-4">
                        <Logout />
                    </div>
                    

                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-gray-700 dark:text-gray-300">
                        {userData ? (
                            <>
                                {/* Column 1 */}
                                <div className="space-y-3">
                                    <div><strong>ID:</strong> {userData.id}</div>
                                    <div><strong>Role:</strong> {userData.role}</div>
                                    <div><strong>Phone:</strong> {userData.phone}</div>
                                    <div><strong>Address:</strong> {userData.address}</div>
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-3">
                                    <div><strong>Bank Name:</strong> {userData.bankName}</div>
                                    <div><strong>Account No:</strong> {userData.bankAccountNumber}</div>
                                    <div><strong>IFSC:</strong> {userData.bankIFSC}</div>
                                    <div><strong>Rate:</strong> ₹{userData.rate}/day</div>
                                </div>

                                {/* Column 3 */}
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-3">
                                        <Image
                                            src={userData.pictureUrl}
                                            alt="User"
                                            width={120}
                                            height={120}
                                            className="rounded-xl border border-gray-300 dark:border-zinc-700 object-cover"
                                        />
                                        <span className="text-lg font-medium">{userData.name}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p className="text-sm text-muted-foreground col-span-3">No user data available.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
