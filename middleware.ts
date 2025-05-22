import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, type JWTPayload } from 'jose';

const protectedRoutes = ['/dashboard', '/admin'];

function getJwtSecretKey(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not defined');
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const pathname = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  if (!isProtectedRoute) return NextResponse.next();
  if (!token) return NextResponse.redirect(new URL('/login', req.url));
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    const requestHeaders = new Headers(req.headers);
    if (payload?.id) requestHeaders.set('x-user-id', payload.id as string);
    if (payload?.role) requestHeaders.set('x-user-role', payload.role as string);
    if (payload?.name) requestHeaders.set('x-user-name', payload.name as string);
    if (payload?.url) requestHeaders.set('x-user-url', payload.url as string);
    
    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (err) {
    console.error('JWT verification error:', err);
    return NextResponse.redirect(new URL('/login?error=invalid_token', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
