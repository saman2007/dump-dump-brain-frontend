import React from "react";
import { HeartHandIcon } from "../Icons/HeartHandIcon";
import { ShieldHeartIcon } from "../Icons/ShieldHeartIcon";
import { LogoIcon } from "../Icons/LogoIcon";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-secondary/40 transition-colors py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <LogoIcon className="w-9 h-9" />
              <span className="font-heading font-normal text-foreground text-xl">
                dump dump brain
              </span>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-md">
              A personal digital sanctuary for unfiltered thoughts, fleeting
              ideas, and genuine emotional states. No performative hot takes. No
              algorithmic popularity contests. Just raw human consciousness
              finding kindred minds.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground tracking-wider uppercase">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>
                <a
                  href="#philosophy"
                  className="hover:text-foreground transition-colors"
                >
                  Low Friction Dumps
                </a>
              </li>
              <li>
                <a
                  href="#stream"
                  className="hover:text-foreground transition-colors"
                >
                  Mood Stream
                </a>
              </li>
              <li>
                <a
                  href="#stream"
                  className="hover:text-foreground transition-colors"
                >
                  Emotion-Aligned Reactions
                </a>
              </li>
              <li>
                <a
                  href="#concept"
                  className="hover:text-foreground transition-colors"
                >
                  The Freedom of Dumping
                </a>
              </li>
            </ul>
          </div>

          {/* Sanctuary Pledge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground tracking-wider uppercase">
              Our Sanctuary Pledge
            </h4>
            <p className="text-xs text-foreground-secondary leading-relaxed">
              We believe social platforms broke when they prioritized rage,
              clickbait, and engagement farming. We are building a space where
              you can share that weird midnight thought without feeling judged.
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs font-medium text-primary">
                Unload your mental RAM.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-secondary">
          <p>
            © {new Date().getFullYear()} Dump Dump Brain. Made for authentic
            minds everywhere.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Manifesto
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Kindness Code
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Changelog
            </a>
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
