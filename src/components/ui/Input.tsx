"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-xs text-[var(--terminal-green)] uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] px-4 py-3 font-mono text-sm focus:outline-none focus:border-[var(--terminal-green)] focus:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all duration-200 ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-[var(--terminal-red)]">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-xs text-[var(--terminal-green)] uppercase tracking-wider">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] px-4 py-3 font-mono text-sm focus:outline-none focus:border-[var(--terminal-green)] focus:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all duration-200 resize-none ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-[var(--terminal-red)]">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
