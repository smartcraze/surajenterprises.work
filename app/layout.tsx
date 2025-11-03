import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/navbar";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import WhatsAppButton from "@/components/WhatsAppButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://surajenterprises.work'),
  title: {
    default: 'Suraj Enterprises - Professional Construction Services | Bar Bending & Shuttering',
    template: '%s | Suraj Enterprises'
  },
  description: 'Leading construction contractor with 20+ years of experience in bar bending, shuttering, and concrete work across India. Trusted by Brigade, Shapoorji Pallonji, Purva, and more. 500+ skilled workforce.',
  keywords: [
    'construction services India',
    'bar bending contractors',
    'shuttering services',
    'concrete work',
    'construction labor contractor',
    'Bangalore construction',
    'skilled construction workers',
    'TMT bar bending',
    'formwork contractors',
    'construction manpower',
    'Suraj Enterprises',
    'Brigade contractor',
    'Shapoorji Pallonji contractor',
    'building construction services'
  ],
  authors: [{ name: 'Suraj Enterprises' }],
  creator: 'Suraj Enterprises',
  publisher: 'Suraj Enterprises',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://surajenterprises.work',
    siteName: 'Suraj Enterprises',
    title: 'Suraj Enterprises - Professional Construction Services',
    description: '20+ years of excellence in bar bending, shuttering & concrete work. Trusted by India\'s leading construction companies. 500+ skilled professionals.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Suraj Enterprises - Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suraj Enterprises - Professional Construction Services',
    description: '20+ years of excellence in bar bending, shuttering & concrete work. Trusted by India\'s leading construction companies.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Google Search Console
  },
  category: 'construction',
  alternates: {
    canonical: 'https://surajenterprises.work',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavbarDemo />
          {children}
          
          <WhatsAppButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
