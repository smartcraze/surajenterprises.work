import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";

const projectSchema = z.object({
    name: z.string(),
    address: z.string(),
    startDate: z.string(),
    endDate: z.string(),
});

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { name, address, startDate, endDate } = projectSchema.parse(body);

        const project = await prisma.project.update({
            where: { id },
            data: {
                name,
                address,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            },
        });

        return NextResponse.json(project);
    } catch (error: any) {
        return NextResponse.json({
            message: "Failed to update project",
            error: error.message,
        }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const project = await prisma.project.delete({
            where: { id }
        });

        return NextResponse.json(project);
    } catch (error: any) {
        return NextResponse.json({
            message: "Failed to delete project",
            error: error.message,
        }, { status: 500 });
    }
}
