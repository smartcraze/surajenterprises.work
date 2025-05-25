import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/context";
import { NavbarDemo } from "@/components/Navbar";
import { PT_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "@/hooks/useSearch";
// import { TransactionProvider } from "@/hooks/useTransaction";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SURAJ ENTERPRISES",
  description: "Suraj's Construction || suraj Enterprises",

  keywords: "Suraj's Construction, suraj Enterprises, Construction, Building, Construction Company, Construction Services, Construction Company in India, Construction Company in banglore , contractor in banglore, contractor in india, construction services in banglore, construction services in india, construction company in banglore, construction company in india, construction contractor in banglore, construction contractor in india, construction services in banglore, construction services in india, construction company in banglore, construction company in india, construction contractor in banglore, construction contractor in india",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SearchProvider>
              {/* <TransactionProvider> */}
                <NavbarDemo />
                {children}
              {/* </TransactionProvider> */}
            </SearchProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}