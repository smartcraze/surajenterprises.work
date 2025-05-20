import { NextRequest, NextResponse } from "next/server"
import { sendWhatsAppMessage } from "@/lib/sendWhatsAppMessage"

export async function POST(req: NextRequest) {
  const { phone, name, date } = await req.json()

  try {
    await sendWhatsAppMessage(
      phone,
      `Hi ${name}, your kharchi for ${new Date(date).toLocaleDateString()} has been paid.`
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
