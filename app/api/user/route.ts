
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { Role } from "@/generated/prisma";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const users = await prisma.user.findMany({
        where: {
            role: role as Role
        }
    });
    return NextResponse.json(users);
}

export async function PUT(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');
    const { rate, phone } = await request.json();
    const user = await prisma.user.update({
        where: { id: id as string },
        data: { rate, phone }
    });
    return NextResponse.json({
        message: "User updated successfully",
        user
    }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');
    const user = await prisma.user.delete({ where: { id: id as string } });
    return NextResponse.json({
        message: "User deleted successfully",
        user
    }, { status: 200 });
}
