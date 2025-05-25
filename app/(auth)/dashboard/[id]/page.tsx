import TransactionTable from '@/components/TransactionTable';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default async function DashboardWithId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id;

  let userData = null;

  if (userId) {
    const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': userId,
        id: userId,
      },
      cache: 'no-store',
    });

    const userJson = await userRes.json();
    userData = userJson?.user || null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <Card className="w-full border-2 border-dotted border-gray-300 dark:border-zinc-700 rounded-2xl shadow-md bg-white dark:bg-zinc-900 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Dashboard
            </CardTitle>
            <CardDescription className="text-base text-gray-600 dark:text-gray-400">
              Welcome back, {userData?.name || '...'}
            </CardDescription>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {userData ? (
              <>
                {/* Column 1 */}
                <div className="space-y-2">
                  <div><span className="font-medium">ID:</span> {userData.id}</div>
                  <div><span className="font-medium">Role:</span> {userData.role}</div>
                  <div><span className="font-medium">Phone:</span> {userData.phone}</div>
                  <div><span className="font-medium">Address:</span> {userData.address}</div>
                </div>

                {/* Column 2 */}
                <div className="space-y-2">
                  <div><span className="font-medium">Bank Name:</span> {userData.bankName}</div>
                  <div><span className="font-medium">Account No:</span> {userData.bankAccountNumber}</div>
                  <div><span className="font-medium">IFSC:</span> {userData.bankIFSC}</div>
                  <div><span className="font-medium">Rate:</span> ₹{userData.rate}/day</div>
                </div>

                {/* Column 3 */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src={userData.pictureUrl}
                      alt="User"
                      width={100}
                      height={100}
                      className="rounded-lg border border-gray-300 dark:border-zinc-700 object-cover"
                    />
                    <span className="text-base font-semibold">{userData.name}</span>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm text-muted-foreground col-span-3">
                No user data available.
              </p>
            )}
          </CardContent>
        </Card>

        <div>
          <TransactionTable userId={userData?.id} />
        </div>
      </div>
    </div>
  );
}
