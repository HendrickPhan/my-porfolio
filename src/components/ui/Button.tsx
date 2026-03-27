"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-4 py-2 font-mono text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "border border-[var(--terminal-green)] text-[var(--terminal-green)] hover:bg-[var(--terminal-green)] hover:text-[var(--background)] hover:shadow-[0_0_20px_var(--terminal-green)]",
    secondary:
      "border border-[var(--terminal-amber)] text-[var(--terminal-amber)] hover:bg-[var(--terminal-amber)] hover:text-[var(--background)] hover:shadow-[0_0_20px_var(--terminal-amber)]",
    ghost:
      "border border-transparent text-[var(--terminal-green)] hover:border-[var(--terminal-green)] hover:bg-[var(--muted)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
