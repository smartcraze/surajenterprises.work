import { NextResponse ,NextRequest} from 'next/server';
import prisma from '@/lib/db';
import z from 'zod';

enum Role {
  FITTER = 'FITTER',
  FOREMAN = 'FOREMAN',
  LABOR = 'LABOR',
  HELPER = 'HELPER',
  ADMIN = 'ADMIN',
}   

interface SignupRequestBody {
  name: string;
  address: string;
  phone: string;
  password: string; // optional
  role: Role;
  rate: number;
  bankName: string;
  bankAccountNumber: string;
  bankIFSC: string;
  pictureUrl: string; // optional
}

const signupSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string().min(10).max(10),
  password: z.string().optional(),
  role: z.nativeEnum(Role),
  rate: z.number(),
  bankName: z.string(),
  bankAccountNumber: z.string(),
  bankIFSC: z.string(),
  pictureUrl: z.string().optional(),
});




export async function POST(req: NextRequest) {
    
    const { name, address, phone, password, role, rate, bankName, bankAccountNumber, bankIFSC, pictureUrl } = signupSchema.parse(req.json());

    const existingUser = await prisma.user.findUnique({ where: { phone } });

    if (existingUser) {
        return NextResponse.json({ error: 'Phone already registered' }, { status: 409 });
    }

    const user = await prisma.user.create({
        data:{
            name: name,
            phone: phone,
            password: password || '',
            role: role,
            address: address,
            rate: rate,
            bankName: bankName,
            bankAccountNumber: bankAccountNumber,
            bankIFSC: bankIFSC,
            pictureUrl: pictureUrl,
        }
    });

   return NextResponse.json({
    message: 'User created',
    user: user,
   },{status: 201})
}


export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });
}