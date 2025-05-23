import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; 
import { z } from "zod";

const AddUsersSchema = z.object({
  userIds: z.array(z.string()),
  projectId: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json();
    const { userIds,projectId } = AddUsersSchema.parse(body);

  

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    const users = await prisma.user.findMany({
      where: { id: { in: userIds } },
      select: { id: true, projectId: true },
    });

    if (users.length !== userIds.length) {
      return NextResponse.json(
        { error: "One or more users not found" },
        { status: 400 }
      );
    }

    // Check for users already assigned to another project
    const alreadyAssignedUsers = users.filter(
      (user) => user.projectId && user.projectId !== projectId
    );
    if (alreadyAssignedUsers.length > 0) {
      return NextResponse.json(
        {
          error: "Some users are already assigned to another project",
          users: alreadyAssignedUsers.map((u) => u.id),
        },
        { status: 400 }
      );
    }

    // Update users to associate them with the project
    await prisma.user.updateMany({
      where: { id: { in: userIds } },
      data: { projectId },
    });

    return NextResponse.json(
      { message: "Users added to project successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding users to project:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request body", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}