import { LabourPaymentCalculator } from "@/components/Calculator";
import prisma from "@/lib/db";
import Image from "next/image";

interface LabourPageProps {
  params: {
    id: string;
  };
}

export default async function LabourPage({ params }: LabourPageProps) {
  const { id: projectId } = params;

  const allLabours = await prisma.project.findMany({
    where: { id: projectId },
    include: { users: true },
  });

  const users = allLabours[0]?.users || [];

  return (
    <div className="container mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Labour Details</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Project ID: <span className="font-medium">{projectId}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg"
          >
            <div className="relative w-full h-48 bg-gray-100 dark:bg-zinc-800">
              <Image
                src={user.pictureUrl || "/placeholder.jpg"}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <span className="inline-block text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                {user.role}
              </span>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>📞 {user.phone}</p>
                <p>📍 {user.address}</p>
                <p>💰 ₹{user.rate}/day</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <div className="mt-12">
          <LabourPaymentCalculator users={users} />
        </div>
      )}
    </div>
  );
}
