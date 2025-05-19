import { NextResponse ,NextRequest} from 'next/server';
import prisma from '@/lib/db';
import z from 'zod';
import jwt from 'jsonwebtoken';
enum Role {
  FITTER = 'FITTER',
  FOREMAN = 'FOREMAN',
  LABOR = 'LABOR',
  HELPER = 'HELPER',
  ADMIN = 'ADMIN',
}   

interface SignupRequestBody {
  phone: string;
  password: string;
}

const signupSchema = z.object({
    phone: z.string().min(10).max(10),
    password: z.string().optional()
});




export async function POST(req: NextRequest) {
    
    const { phone, password } = signupSchema.parse(req.json());

    const existingUser = await prisma.user.findUnique({ where: { phone } });

    if (!existingUser) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if(existingUser.role === 'ADMIN' || existingUser.role === 'FOREMAN') {
        if(existingUser.password !== password) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }
    }

    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET!);

    return NextResponse.json({
        message: 'User logged in',
        token: token,
    },{status: 200})

}


