import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  try {
    const id = req.headers.get('x-user-id');
    if (!id) {
      return NextResponse.json({ error: 'Unauthorized: No user ID provided' }, { status: 401 });
    }
    const user = await prisma.user.findUnique({ where: { id: id } });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/auth/me:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
