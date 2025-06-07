import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";
import { PaymentMethod, TransactionType } from "@/generated/prisma";

const ledgerSchema = z.object({
  amount: z.coerce.number(),
  type: z.nativeEnum(TransactionType),
  paymentMethod: z.nativeEnum(PaymentMethod),
  LabourName: z.string(),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Incoming body:", body);

    const parsed = ledgerSchema.safeParse(body);

    if (!parsed.success) {
      console.error("Validation error:", parsed.error.flatten());
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const parsedBody = parsed.data;

    const ledgerEntry = await prisma.ledgerBook.create({
      data: {
        date: new Date(),
        amount: parsedBody.amount,
        type: parsedBody.type,
        paymentMethod: parsedBody.paymentMethod,
        LabourName: parsedBody.LabourName,
        phoneNumber: parsedBody.phoneNumber,
      },
    });

    return NextResponse.json(ledgerEntry, { status: 201 });
  } catch (err) {
    console.error("Error creating ledger entry:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}



export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const labourName = searchParams.get("labourName")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")
    const month = searchParams.get("month")
    const year = searchParams.get("year")

    const page = parseInt(searchParams.get("page") || "1", 10)
    const limit = parseInt(searchParams.get("limit") || "20", 10)
    const skip = (page - 1) * limit

    const where: any = {}

    if (labourName) {
      where.LabourName = {
        contains: labourName,
        mode: "insensitive",
      }
    }

    // 📅 Date Filters
    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      }
    } else if (month && year) {
      const start = new Date(Number(year), Number(month) - 1, 1)
      const end = new Date(Number(year), Number(month), 0, 23, 59, 59, 999)
      where.date = {
        gte: start,
        lte: end,
      }
    }

    const totalCount = await prisma.ledgerBook.count({ where })

    const ledgerEntries = await prisma.ledgerBook.findMany({
      where,
      skip,
      take: limit,
      orderBy: { date: "desc" },
    })

    return NextResponse.json(
      {
        data: ledgerEntries,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
      { status: 200 }
    )
  } catch (err) {
    console.error("Error fetching ledger entries:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
