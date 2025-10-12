"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Suraj Enterprises Logo"
            width={40}
            height={40}
            className="h-10 w-auto invert"
          />
          <span className="text-xl font-bold text-primary">
            Suraj Enterprises
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Projects", "Manpower", "About", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col items-start p-6 space-y-4 max-w-7xl mx-auto">
            {[
              "Home",
              "Services",
              "Projects",
              "Manpower",
              "About",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full mt-3">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
