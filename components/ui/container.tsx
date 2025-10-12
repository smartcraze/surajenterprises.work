import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md", 
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-7xl",
};

const paddingClasses = {
  none: "",
  sm: "px-4 py-6 md:py-8",
  md: "px-4 py-8 md:py-12",
  lg: "px-4 py-12 md:py-16",
  xl: "px-4 py-16 md:py-20",
};

export function Container({ 
  children, 
  className,
  size = "full",
  padding = "md"
}: ContainerProps) {
  return (
    <div 
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({ 
  children, 
  className,
  variant = "default"
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent";
}) {
  const variantClasses = {
    default: "",
    muted: "bg-muted/20",
    accent: "bg-gradient-to-b from-background to-muted/40",
  };

  return (
    <section className={cn(variantClasses[variant], className)}>
      {children}
    </section>
  );
}