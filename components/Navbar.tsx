"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ThemeToggler";

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
        <div onMouseEnter={() => setActive("Home")} onMouseLeave={() => setActive(null)}>
          <HoveredLink href="/">Home</HoveredLink>
        </div>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/consulting">Consulting</HoveredLink>
            <HoveredLink href="/services/development">Development</HoveredLink>
            <HoveredLink href="/services/support">Support</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/login">Login</HoveredLink>
            <HoveredLink href="/signup">Sign Up</HoveredLink>
            <HoveredLink href="/dashboard">Dashboard</HoveredLink>
          </div>
        </MenuItem>
        <ModeToggle />
      </Menu>
    </div>
  );
}
