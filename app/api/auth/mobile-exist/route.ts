import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  const { phone } = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      phone: phone,
    },
  });

  return NextResponse.json({ 
    message: "Mobile number exists",
    user: user,
  });
}