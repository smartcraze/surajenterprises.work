import prisma from "@/lib/db";
import Image from "next/image";

interface LabourPageProps {
  params: {
    id: string;
  };
}

export default async function LabourPage({ params }: LabourPageProps) {
  const { id: projectId } = await params;

  const allLabours = await prisma.project.findMany({
    where: {
      id: projectId,
    },
    include: {
      users: true,
    },
  });

  const users = allLabours[0]?.users || [];

  return (
    <div className="container mx-auto p-4 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Labour Page</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Project ID: {projectId}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
          >
            <div className="relative w-full h-48">
              <Image
                src={user.pictureUrl || "/placeholder.jpg"}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-xs inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium px-2 py-1 rounded-full mt-1">
                {user.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">📞 {user.phone}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">📍 {user.address}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">💰 ₹{user.rate}/day</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
