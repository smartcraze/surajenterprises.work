import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const totalUsers = await prisma.user.count();

        const totalProjects = await prisma.project.count();

        const payments = await prisma.transaction.aggregate({
            where: {
                type: "PAYMENT"
            },
            _sum: {
                amount: true
            }
        });

        const advances = await prisma.transaction.aggregate({
            where: {
                type: "ADVANCE"
            },
            _sum: {
                amount: true
            }
        });

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

        return NextResponse.json({
            success: true,
            data: {
                totalUsers,
                totalProjects,
                totalPayments: payments._sum.amount || 0,
                totalAdvances: advances._sum.amount || 0,
                recentTransactions
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Admin stats error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch admin statistics'
            },
            { status: 500 }
        );
    }
}