"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
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
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function MainNav() {
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const serviceLinks = [
    {
      href: "/services/construction",
      title: "Construction",
      desc: "Comprehensive building solutions from foundation to finish.",
    },
    {
      href: "/services/renovation",
      title: "Renovation",
      desc: "Transforming existing spaces with modern designs and functionality.",
    },
    {
      href: "/services/interior-design",
      title: "Interior Design",
      desc: "Aesthetic and functional space planning tailored to your vision.",
    },
    {
      href: "/services/project-management",
      title: "Project Management",
      desc: "Efficient oversight and execution of projects from concept to completion.",
    },
    {
      href: "/services/consultancy",
      title: "Consultancy",
      desc: "Expert advice and strategic planning for your construction ventures.",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 w-full border-b bg-background  backdrop-blur  text-foreground dark:text-gray-100 shadow-lg"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Suraj Enterprises Logo"
            width={50}
            height={50}
            priority
            className="invert dark:invert-0 rounded-md shadow-md"
            sizes="(max-width: 768px) 50px, 50px"
          />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight whitespace-nowrap text-foreground dark:text-gray-100">
            Suraj Enterprises
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Projects", href: "/projects" },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  <motion.div variants={navItemVariants} initial="hidden" animate="visible">
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        href={item.href}
                        className="text-foreground dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
              ))}

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible">
                  <NavigationMenuTrigger className="text-foreground dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="shadow-lg bg-card dark:bg-gray-800 text-card-foreground dark:text-gray-100">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-md">
                      {serviceLinks.map((service, index) => (
                        <motion.li
                          key={service.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <NavigationMenuLink
                            asChild
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent dark:hover:bg-gray-700 hover:text-accent-foreground dark:text-gray-200"
                          >
                            <Link href={service.href}>
                              <div className="text-sm font-semibold leading-none text-foreground dark:text-gray-100">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                                {service.desc}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </motion.div>
              </NavigationMenuItem>

              {/* Contact Us Button */}
              <NavigationMenuItem>
                <motion.div variants={navItemVariants} initial="hidden" animate="visible">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-200 dark:bg-primary dark:hover:bg-primary/80"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground dark:text-gray-100 hover:bg-accent dark:hover:bg-gray-700"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-background dark:bg-gray-900 text-foreground dark:text-gray-100 border-l border-border dark:border-gray-700"
            >
              <SheetHeader>
                <SheetTitle className="text-xl font-extrabold text-foreground dark:text-gray-100">
                  Suraj Enterprises
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-6">
                {["Home", "About Us", "Services", "Projects", "Contact Us"].map((text, index) => (
                  <motion.div
                    key={text}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={text === "Home" ? "/" : `/${text.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      {text}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-200 dark:bg-primary dark:hover:bg-primary/80"
                    asChild
                  >
                    <Link href="/request-quote">Request a Quote</Link>
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
