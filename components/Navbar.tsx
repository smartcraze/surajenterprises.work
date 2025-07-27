"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        {/* Company Logo/Name */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/images/suraj-enterprises-logo.png"
            alt="Suraj Enterprises Logo"
            width={160}
            height={40}
            priority
            sizes="(max-width: 768px) 120px, 160px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <Link href="/services/construction">
                          <div className="text-sm font-medium leading-none">Construction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Comprehensive building solutions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <Link href="/services/renovation">
                          <div className="text-sm font-medium leading-none">Renovation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Transforming existing spaces.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <Link href="/services/interior-design">
                          <div className="text-sm font-medium leading-none">Interior Design</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Aesthetic and functional space planning.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <Link href="/services/project-management">
                          <div className="text-sm font-medium leading-none">Project Management</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Efficient oversight from start to finish.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/projects">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 pt-6">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/about" className="text-lg font-medium">About Us</Link>
                <Link href="/services" className="text-lg font-medium">Services</Link>
                <Link href="/projects" className="text-lg font-medium">Projects</Link>
                <Link href="/contact" className="text-lg font-medium">Contact Us</Link>
                <Button className="mt-4" asChild>
                  <Link href="/request-quote">Request a Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
