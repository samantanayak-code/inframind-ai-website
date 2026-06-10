"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]";

  const variants = {
    primary: "bg-linear-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-[var(--shadow-glow-strong)] shadow-[var(--shadow-glow)] border border-white/10",
    secondary: "bg-white/5 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30 hover:bg-white/10 hover:border-[var(--color-primary)]/50",
    ghost: "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-white/5",
  };

  const sizes = {
    sm: "text-sm px-[var(--space-2)] py-[var(--space-1)] gap-[var(--space-1)]",
    md: "text-sm px-[var(--space-3)] py-[var(--space-2)] gap-[var(--space-2)]",
    lg: "text-base px-[var(--space-4)] py-[var(--space-3)] gap-[var(--space-2)]",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
