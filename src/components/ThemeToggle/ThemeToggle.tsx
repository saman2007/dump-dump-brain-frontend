"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";

export interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export default function ThemeToggle({
  className = "",
  size = "md",
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-9 h-9 p-2",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-xl border border-border bg-surface text-foreground-secondary hover:text-foreground hover:bg-surface-secondary transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${sizeClasses[size]} ${className}`}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      title={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
    >
      {/* If not yet mounted, render fallback icon without mismatch */}
      {!mounted ? (
        <span className={`${iconSizes[size]} opacity-0`} />
      ) : isDark ? (
        <SunIcon className={`${iconSizes[size]} text-amber-400`} />
      ) : (
        <MoonIcon className={`${iconSizes[size]} text-primary`} />
      )}
    </button>
  );
}
