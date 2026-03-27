"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[var(--terminal-green)]"
      >
        {/* Terminal window */}
        <rect
          x="2"
          y="6"
          width="36"
          height="28"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="var(--background)"
        />

        {/* Terminal header dots */}
        <circle cx="10" cy="12" r="2" fill="#ff5f56" />
        <circle cx="16" cy="12" r="2" fill="#ffbd2e" />
        <circle cx="22" cy="12" r="2" fill="#27ca40" />

        {/* MH initials in terminal style */}
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="bold"
          fill="currentColor"
        >
          MH
        </text>

        {/* Cursor blink effect */}
        <rect
          x="28"
          y="20"
          width="6"
          height="12"
          fill="currentColor"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.8;0;0.8"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      <span className="text-[var(--terminal-green)] font-bold text-lg tracking-tight hidden sm:inline">
        {"<minh-hieu />"}
      </span>
    </motion.div>
  );
}

// Alternative: Code bracket logo
export function LogoBracket({ className = "" }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left bracket */}
        <path
          d="M12 8L4 20L12 32"
          stroke="var(--terminal-green)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right bracket */}
        <path
          d="M28 8L36 20L28 32"
          stroke="var(--terminal-amber)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Slash in middle */}
        <path
          d="M22 8L18 32"
          stroke="var(--terminal-cyan)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-[var(--terminal-green)] font-bold text-lg tracking-tight hidden sm:inline">
        minh-hieu
      </span>
    </motion.div>
  );
}

// Alternative: Hexagon tech logo
export function LogoHex({ className = "" }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        width="40"
        height="44"
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon outline */}
        <path
          d="M20 2L38 12V32L20 42L2 32V12L20 2Z"
          stroke="var(--terminal-green)"
          strokeWidth="2"
          fill="var(--background)"
        />

        {/* MH text */}
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="bold"
          fill="var(--terminal-green)"
        >
          MH
        </text>

        {/* Glowing dots */}
        <circle cx="20" cy="2" r="2" fill="var(--terminal-green)">
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <span className="text-[var(--terminal-green)] font-bold text-lg tracking-tight hidden sm:inline">
        {"<minh-hieu />"}
      </span>
    </motion.div>
  );
}
