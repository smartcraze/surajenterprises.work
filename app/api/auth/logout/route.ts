import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        cookieStore.set({
            name: 'token',
            value: "",
            httpOnly: true,
            path: '/',
            maxAge: 0,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });
        const response = NextResponse.json(
            {
                message: 'Logout successful',
                success: true,
            },
            { status: 200 }
        );
        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Logout failed' }, { status: 500 });

    }
}
