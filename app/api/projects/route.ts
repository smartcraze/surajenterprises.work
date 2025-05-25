import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";

const projectSchema = z.object({
    name: z.string(),
    address: z.string(),
    startDate: z.string(),
    endDate: z.string(),
});

export async function GET() {
    try {
        const projects = await prisma.project.findMany();
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch projects",
            error,
        }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, address, startDate, endDate } = projectSchema.parse(body);

        if (startDate > endDate) {
            return NextResponse.json({
                message: "Start date cannot be greater than end date"
            }, { status: 400 });
        }

        const project = await prisma.project.create({
            data: {
                name,
                address,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                totalAmount: 0
            }
        });

        return NextResponse.json(project);

    } catch (error: any) {
        return NextResponse.json({
            message: "Failed to create project",
            error: error.message
        }, { status: 500 });
    }
}
