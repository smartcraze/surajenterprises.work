import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("user")?.toLowerCase();

    if (!searchTerm || searchTerm.trim() === "") {
      return NextResponse.json([], { status: 200 });
    }

    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: searchTerm, mode: "insensitive" } },
          { phone: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        name: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
