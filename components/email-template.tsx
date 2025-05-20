import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
    companyName: string;
    location: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    phone,
    message,
    companyName,
    location,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
        <h2 style={{ color: '#4F46E5' }}>📩 New Contact Form Submission</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Name:</td>
                    <td style={{ padding: '8px' }}>{name}</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Email:</td>
                    <td style={{ padding: '8px' }}>{email}</td>
                </tr>
                <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Phone:</td>
                    <td style={{ padding: '8px' }}>{phone}</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Company Name:</td>
                    <td style={{ padding: '8px' }}>{companyName}</td>
                </tr>
                <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Location:</td>
                    <td style={{ padding: '8px' }}>{location}</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Message:</td>
                    <td style={{ padding: '8px' }}>{message}</td>
                </tr>
            </tbody>
        </table>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
            📅 Submitted on: <strong>{new Date().toLocaleString()}</strong>
        </p>
    </div>
);
