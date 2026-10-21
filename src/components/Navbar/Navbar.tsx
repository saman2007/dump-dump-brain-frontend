"use client";

import React, { useState } from "react";
import Button from "../Button/Button";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { LogoIcon } from "../Icons/LogoIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollTo("about")}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 -m-1 text-left cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <LogoIcon className="w-9 h-9" />
          </div>
          <div className="flex flex-col">
            <span className="font-hand font-normal tracking-tight text-foreground text-2xl leading-none flex items-center gap-1.5">
              dump dump brain
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground-secondary">
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("philosophy")}
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo("stream")}
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Live Dumps
          </button>
        </nav>

        {/* Desktop Auth & Theme Actions - hidden when hamburger menu is displayed */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle size="sm" />
          <Button variant="ghost" size="sm" href="/sign-in">
            Sign In
          </Button>
          <Button variant="primary" size="sm" href="/sign-up">
            Sign Up
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-surface-secondary cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-secondary cursor-pointer transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("philosophy")}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-secondary cursor-pointer transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo("stream")}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-secondary cursor-pointer transition-colors"
            >
              Live Dumps
            </button>
          </div>

          {/* Theme switcher inside mobile menu */}
          <div className="pt-3 border-t border-border flex items-center justify-between px-3">
            <span className="text-sm font-medium text-foreground-secondary">
              Theme
            </span>
            <ThemeToggle size="sm" />
          </div>

          {/* Auth buttons inside mobile menu */}
          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="outline"
              size="md"
              className="w-full"
              href="/sign-in"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              href="/sign-up"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
