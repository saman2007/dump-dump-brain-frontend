import React from "react";
import DumpStreamVisual from "./DumpStreamVisual";
import Button from "@/components/Button/Button";
import { SparklesIcon } from "@/components/Icons/SparklesIcon";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Soft atmospheric gradient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-300/10 dark:bg-teal-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Vision */}
          <div className="lg:col-span-7 space-y-7">
            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground tracking-tight leading-[1.12]">
              The place for thoughts you don&apos;t need to polish.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary leading-relaxed max-w-xl font-normal">
              No drafts folder, no second-guessing, and no pressure to sound
              clever. Just drop whatever thought, question, or mood is on your
              mind right now.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                variant="primary"
                size="lg"
                href="/sign-up"
                icon={<SparklesIcon className="w-4 h-4" />}
                className="shadow-md shadow-primary/25"
              >
                Start Dumping Thoughts
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#stream"
                icon={<ArrowRightIcon className="w-4 h-4" />}
              >
                Explore Live Dumps
              </Button>
            </div>
          </div>

          {/* Right Column: Tactile Stream Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <DumpStreamVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
