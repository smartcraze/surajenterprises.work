import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/context";
import { NavbarDemo } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "@/hooks/useSearch";
// import { TransactionProvider } from "@/hooks/useTransaction";
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | SURAJ ENTERPRISES',
    default: 'SURAJ ENTERPRISES',
  },
  description: 'SURAJ ENTERPRISES | SURENDRA VISHWAKARMA',

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
                <SpeedInsights/>
              {/* </TransactionProvider> */}
            </SearchProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}