import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const headersId = req.headers.get('x-user-id');
    const urlId = req.nextUrl.searchParams.get('id');

    if (!urlId && !headersId) {
      return NextResponse.json({ error: 'Unauthorized: No user ID provided' }, { status: 401 });
    }

    // Use findFirst with OR condition
    const orConditions = [];
    if (headersId) orConditions.push({ id: headersId });
    if (urlId) orConditions.push({ id: urlId });

    const user = await prisma.user.findFirst({
      where: orConditions.length > 1
        ? { OR: orConditions }
        : orConditions.length === 1
        ? orConditions[0]
        : {},
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/auth/me:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
