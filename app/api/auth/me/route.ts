import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    const token = req.headers.get('authorization')?.split(' ')[1];
    if(!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await prisma.user.findUnique({ where: { id: decoded.id  } });
    return NextResponse.json({ user }, { status: 200 });
}
