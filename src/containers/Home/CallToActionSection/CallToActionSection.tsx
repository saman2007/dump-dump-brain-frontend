import React from "react";
import Button from "@/components/Button/Button";
import { LogoIcon } from "@/components/Icons/LogoIcon";
import { SparklesIcon } from "@/components/Icons/SparklesIcon";

export default function CallToActionSection() {
  return (
    <section
      id="join"
      className="py-24 md:py-32 bg-surface-secondary/40 border-t border-border relative overflow-hidden"
    >
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="rounded-3xl bg-surface border border-border shadow-xs p-8 sm:p-14 md:p-16 space-y-8 relative overflow-hidden">
          {/* Logo badge */}
          <div className="w-16 h-16 flex items-center justify-center mx-auto">
            <LogoIcon className="w-16 h-16" />
          </div>

          <div className="space-y-4 max-w-xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-tight leading-tight">
              Your head is full.
              <br />
              <span className="text-primary italic">
                Let it out.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
              Stop letting fleeting epiphanies, sudden aches, and curious musings
              vanish into mental static. Create your free sanctuary and breathe again.
            </p>
          </div>

          {/* Direct Auth Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 shadow-md shadow-primary/20"
              href="/sign-up"
              icon={<SparklesIcon className="w-4 h-4" />}
            >
              Sign Up Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8"
              href="/sign-in"
            >
              Sign In
            </Button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-foreground-secondary">
            <span>Free forever for personal dumps</span>
            <span>·</span>
            <span>Zero ads</span>
            <span>·</span>
            <span>Your data is never sold</span>
          </div>
        </div>
      </div>
    </section>
  );
}
