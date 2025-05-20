import { EmailTemplate } from "@/components/email-template";
import { NextRequest } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message, companyName, location } = body;

        if (!process.env.RESEND_API_KEY) {
            return Response.json(
                { error: 'Resend API key is not configured' },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: `${name} <onboarding@surajv.me>`,
            to: ['try.surajv@gmail.com'],
            subject: `Query from Contact Form, ${name}`,
            react: EmailTemplate({
                name,
                email,
                phone,
                message,
                companyName,
                location,
            }) as React.ReactNode,
        });

        if (error) {
            console.error('Resend API error:', error);
            return Response.json(
                { errors: 'Failed to send email',
                    error,
                    
                 },
                { status: 500 }
            );
        }

        return Response.json({ success: true, data });
        
        
    } catch (error) {
        console.error('Server error:', error);
        return Response.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}