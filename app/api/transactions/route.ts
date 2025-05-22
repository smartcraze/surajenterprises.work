import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";


interface Transaction {
    id: string;
    amount: number;
    status: string;
    createdAt: Date;
}

export async function POST(request: NextRequest) {
    const { userId } = await request.json();

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    if (!user ) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.role !== "ADMIN") {
        return NextResponse.json({ error: "User is not an admin" }, { status: 403 });
    }

    const transactions = await prisma.transaction.findMany({
        where: {
            userId: userId,
        },
    });

    return NextResponse.json({ transactions }, { status: 200 });
}