import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import z from 'zod';
import { uploadBuffer, CloudinaryUploadResult } from '@/lib/cloudinary';

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

export async function POST(req: NextRequest) {
  try {
    

    const formData = await req.formData();
    
    const rawFormData: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      rawFormData[key] = value;
    }
    // console.log('Raw form data:', rawFormData);

    const file = formData.get('file') as File | null;
    

    if (!file) {
      return NextResponse.json({ 
        error: "Profile picture is required",
        receivedData: rawFormData
      }, { status: 400 });
    }

    const formValues = {
      name: formData.get('name') || '',
      address: formData.get('address') || '',
      phone: formData.get('phone') || '',
      password: formData.get('password') || '',
      role: formData.get('role') || '',
      rate: formData.get('rate') || '',
      bankName: formData.get('bankName') || '',
      bankAccountNumber: formData.get('bankAccountNumber') || '',
      bankIFSC: formData.get('bankIFSC') || '',
    };

    // console.log('Processed form values:', formValues);

    const parsed = signupSchema.safeParse(formValues);

    if (!parsed.success) {
      console.log('Validation errors:', parsed.error.format());
      return NextResponse.json({ 
        error: "Validation failed",
        details: parsed.error.format(),
        receivedData: formValues
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
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
}
