import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/db';
import z from 'zod';
import jwt from 'jsonwebtoken';

enum Role {
  FITTER = 'FITTER',
  FOREMAN = 'FOREMAN',
  LABOR = 'LABOR',
  HELPER = 'HELPER',
  ADMIN = 'ADMIN',
}

const signupSchema = z.object({
  phone: z.string().min(10).max(10),
  password: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, password } = signupSchema.parse(body);

    const existingUser = await prisma.user.findUnique({ where: { phone } });

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (existingUser.role === Role.ADMIN || existingUser.role === Role.FOREMAN) {
      if (!password || existingUser.password !== password) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
      }
    }

    const token = jwt.sign(
      {
        id: existingUser.id,
        role: existingUser.role,
        name: existingUser.name,
        url: existingUser.pictureUrl,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    return NextResponse.json(
      {
        message: 'User logged in',
        token: token,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
