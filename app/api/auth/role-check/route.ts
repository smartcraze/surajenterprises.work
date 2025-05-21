import { NextRequest,NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function GET(req: NextRequest) {
  const phone = req.nextUrl.searchParams.get("phone")

  if (!phone) return NextResponse.json({ error: "Phone required" }, { status: 400 })

  const user = await prisma.user.findUnique({ where: { phone } })

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

  return NextResponse.json({ role: user.role })
}

