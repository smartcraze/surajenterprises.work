// app/api/ledger/available-dates/route.ts

import { NextResponse } from "next/server"
import { getAvailableYearsMonths } from "@/lib/ledger"

export async function GET() {
  const data = await getAvailableYearsMonths()
  return NextResponse.json(data)
}
