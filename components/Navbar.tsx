"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ThemeToggler";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-center">
          <Image src="/logo.png"
            alt="crane"
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
        </div>

        <Link href="/" className="text-black dark:text-neutral-200 hover:text-black">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/consulting">Consulting</HoveredLink>
            <HoveredLink href="/services/development">Development</HoveredLink>
            <HoveredLink href="/services/support">Support</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/dashboard">Dashboard</HoveredLink>
            <HoveredLink href="/login">Login</HoveredLink>
            <HoveredLink href="/sign-up">Sign Up</HoveredLink>
            <HoveredLink href="/admin">Admin</HoveredLink>
          </div>
        </MenuItem>
        <div className="px-4">
          <ModeToggle />
        </div>
      </Menu>
    </div>
  );
}
