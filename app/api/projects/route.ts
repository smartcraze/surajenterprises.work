import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: NextRequest) {
    try {
        const projects = await prisma.project.findMany();
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch projects",
            error: error
        }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        
    } catch (error) {
        
    }
    
}
