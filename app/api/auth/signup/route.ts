import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import z from 'zod';
import { uploadBuffer } from '@/lib/cloudinary';

enum Role {
  FITTER = 'FITTER',
  FOREMAN = 'FOREMAN',
  LABOR = 'LABOR',
  HELPER = 'HELPER',
  ADMIN = 'ADMIN',
}

const signupSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  password: z.string().optional(),
  role: z.nativeEnum(Role),
  rate: z.string(),
  bankName: z.string(),
  bankAccountNumber: z.string(),
  bankIFSC: z.string(),
});

type FormDataValues = {
  name: string;
  address: string;
  phone: string;
  password: string;
  role: string;
  rate: string;
  bankName: string;
  bankAccountNumber: string;
  bankIFSC: string;
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ 
        error: "Profile picture is required"
      }, { status: 400 });
    }

    const formValues: FormDataValues = {
      name: formData.get('name')?.toString() || '',
      address: formData.get('address')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      role: formData.get('role')?.toString() || '',
      rate: formData.get('rate')?.toString() || '',
      bankName: formData.get('bankName')?.toString() || '',
      bankAccountNumber: formData.get('bankAccountNumber')?.toString() || '',
      bankIFSC: formData.get('bankIFSC')?.toString() || '',
    };

    const parsed = signupSchema.safeParse(formValues);

    if (!parsed.success) {
      return NextResponse.json({ 
        error: "Validation failed",
        details: parsed.error.format()
      }, { status: 400 });
    }

    const data = parsed.data;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadBuffer(buffer, {
      folder: "Labour-Management",
      resource_type: "image"
    });

    const user = await prisma.user.create({
      data: {
        ...data,
        role: data.role as Role,
        rate: parseFloat(data.rate),
        pictureUrl: result.secure_url,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
  } catch (error) {
    console.error('Error in signup:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred during signup', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
}
