import { CreateProjectsForm } from "@/components/CreateProjectsForm";
import ListProjects from "@/components/ListProjects";
import Logout from "@/components/Logout";
import { SearchInput } from "@/components/Searchbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/db";
import { IndianRupee, Users, Briefcase, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

async function getAdminStats() {
  // Get total users
  const totalUsers = await prisma.user.count();
  
  // Get total projects
  const totalProjects = await prisma.project.count();
  
  // Get total payments
  const payments = await prisma.transaction.aggregate({
    where: {
      type: "PAYMENT"
    },
    _sum: {
      amount: true
    }
  });

  // Get total advances
  const advances = await prisma.transaction.aggregate({
    where: {
      type: "ADVANCE"
    },
    _sum: {
      amount: true
    }
  });

  // Get recent transactions
  const recentTransactions = await prisma.transaction.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      user: true,
      project: true
    }
  });

  return {
    totalUsers,
    totalProjects,
    totalPayments: payments._sum.amount || 0,
    totalAdvances: advances._sum.amount || 0,
    recentTransactions
  };
}

export default async function AdminPage() {
  const stats = await getAdminStats();

  return (
    <div className="container mx-auto p-6 space-y-8 mt-10">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ">Admin Dashboard</h1>
        <Logout />
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Briefcase className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Projects</p>
              <h3 className="text-2xl font-bold">{stats.totalProjects}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <IndianRupee className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Payments</p>
              <h3 className="text-2xl font-bold">₹{stats.totalPayments}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <TrendingUp className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Advances</p>
              <h3 className="text-2xl font-bold">₹{stats.totalAdvances}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Projects</h2>
            <CreateProjectsForm />
          </div>
          <ListProjects />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">User Search</h2>
          </div>
          <SearchInput />
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Transactions</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'PAYMENT' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {transaction.type === 'PAYMENT' 
                          ? <ArrowUpRight className="h-4 w-4" />
                          : <ArrowDownRight className="h-4 w-4" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{transaction.user?.name || 'Unknown User'}</p>
                        <p className="text-sm text-gray-500">{transaction.project?.name || 'No Project'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.type === 'PAYMENT' 
                          ? 'text-green-600' 
                          : 'text-blue-600'
                      }`}>
                        ₹{transaction.amount}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

