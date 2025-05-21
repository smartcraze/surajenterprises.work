import { NextResponse, NextRequest } from 'next/server';
import { JWTPayload, SignJWT } from 'jose';
import prisma from '@/lib/db';
import z from 'zod';
import { cookies } from 'next/headers';

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



async function signToken(payload: JWTPayload) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') 
    .sign(secret);
}



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
    
    const token = await signToken({
      id: existingUser.id,
      role: existingUser.role,
      name: existingUser.name,
      url: existingUser.pictureUrl,
    });
    
    
    const response = NextResponse.json(
      {
        message: 'User logged in',
        user: {
          id: existingUser.id,
          role: existingUser.role,
          name: existingUser.name,
          url: existingUser.pictureUrl,
        },
      },
      { status: 200 }
    );
    
    const cookieStore = await cookies()
    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',          
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',    
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
