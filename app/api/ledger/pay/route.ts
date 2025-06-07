import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { TransactionType } from "@/generated/prisma"
import { getTotalAmountByType } from "@/lib/ledger"

const schema = z.object({
  type: z.nativeEnum(TransactionType),
  month: z.number().min(0).max(11).optional(),
  year: z.number().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, month, year } = schema.parse(body)

    // Call the lib function with optional filters
    const result = await getTotalAmountByType(type, month, year)

    return NextResponse.json({ type, ...result }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 422 })
    }
    return NextResponse.json({ error: (error as Error).message || "Internal Server Error" }, { status: 500 })
  }
}
