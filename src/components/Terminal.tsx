"use client";

import { ReactNode } from "react";

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Terminal({ title = "terminal", children, className = "" }: TerminalProps) {
  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-xs text-gray-400 ml-2">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}

interface TerminalLineProps {
  prompt?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalLine({
  prompt = ">",
  children,
  className = "",
}: TerminalLineProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <span className="text-[var(--terminal-green)]">{prompt}</span>
      <span>{children}</span>
    </div>
  );
}
