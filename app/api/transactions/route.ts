import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";

const transactionSchema = z.object({
  amount: z.number(),
  type: z.enum(["ADVANCE", "PAYMENT", "KHARCHI", "OTHER"]),
  paymentMethod: z.enum(["CASH", "UPI", "BANK_TRANSFER", "OTHER"]),
  userId: z.string(),
  projectId: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, type, paymentMethod, userId, projectId } = transactionSchema.parse(body);

    const transaction = await prisma.transaction.create({
      data: {
        amount,
        type,
        paymentMethod,
        userId,
        projectId,
      },
    });

    return NextResponse.json(transaction, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create transaction", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
    const { userId } = await request.json();

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const transactions = await prisma.transaction.findMany({
        where: {
            userId: userId,
        },
    });

    return NextResponse.json({ transactions }, { status: 200 });
}