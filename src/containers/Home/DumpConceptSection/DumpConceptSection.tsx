"use client";

import React, { useState } from "react";
import MoodPill from "@/components/MoodPill/MoodPill";
import ReactionPill from "@/components/ReactionPill/ReactionPill";
import Avatar from "@/components/Avatar/Avatar";
import { FeatherIcon } from "@/components/Icons/FeatherIcon";
import { CompassIcon } from "@/components/Icons/CompassIcon";
import { BrainIcon } from "@/components/Icons/BrainIcon";
import { SparklesIcon } from "@/components/Icons/SparklesIcon";
import ReflectionButton from "@/components/ReflectionButton/ReflectionButton";
import { DumpReaction } from "@/types/types";

export default function DumpConceptSection() {
  const [activeReaction, setActiveReaction] = useState<DumpReaction | null>("understand");

  const toggleReaction = (reaction: DumpReaction) => {
    setActiveReaction((prev) => (prev === reaction ? null : reaction));
  };

  const principles = [
    {
      icon: <FeatherIcon className="w-5 h-5" />,
      title: "Write without overthinking",
      description:
        "No opening hooks, style guides, or drafts piling up. If an idea is a three-word fragment or an unfinished realization, dump it as it arrived.",
    },
    {
      icon: <CompassIcon className="w-5 h-5" />,
      title: "Your mood carries the tone",
      description:
        "Never apologize for being brief or agonize over sounding cold. Your mood indicator sets the exact emotional climate for your words.",
    },
    {
      icon: <BrainIcon className="w-5 h-5" />,
      title: "No audience performance",
      description:
        "No follower counts, no reach optimization, and no need to sound profound. Everyday musings are just as valuable as big epiphanies.",
    },
    {
      icon: <SparklesIcon className="w-5 h-5" />,
      title: "Mental RAM relief",
      description:
        "Dumping is cognitive hygiene, not content creation. Offload the thought so your mind stops looping on it, and walk away lighter.",
    },
  ];

  return (
    <section id="concept" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-tight leading-[1.12]">
            You don&apos;t need to think about how you should write.
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed font-normal">
            When you remove the stage, the anxiety disappears. Here is the permission slip you didn&apos;t know you needed:
          </p>
        </div>

        {/* 2-Column Showcase: 2x2 Feature Cards + Live Tactile Dump */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Principle Cards in 2x2 layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-surface border border-border p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs hover:border-primary/40 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {p.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-base sm:text-lg font-normal text-foreground tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Tactile Dump Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative">
              {/* Subtle ambient glow behind card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-3xl blur-xl -z-10 pointer-events-none" />

              <div className="rounded-3xl bg-surface border border-border shadow-xs p-6 sm:p-7 space-y-5">
                {/* Author & Mood */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar name="Kian R." size="md" moodEmoji="😰" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground leading-tight">
                        Kian R.
                      </h4>
                      <span className="text-[11px] text-foreground-secondary">
                        @kian · 4:18 PM
                      </span>
                    </div>
                  </div>
                  <MoodPill mood="anxious" size="sm" />
                </div>

                {/* Raw, Unfiltered Thought */}
                <p className="font-hand text-lg sm:text-xl text-foreground/95 leading-snug tracking-wide py-1">
                  &ldquo;Chest feels like a hummingbird trapped in a glass jar right now. Nothing bad has actually happened, but my nervous system has decided we are currently hunting mammoths in a blizzard.&rdquo;
                </p>

                {/* Single Reaction Selector & Reflection count */}
                <div className="pt-3 border-t border-border flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[
                      { reaction: "understand" as const, count: 68 },
                      { reaction: "loved" as const, count: 42 },
                      { reaction: "melting" as const, count: 19 },
                    ].map((r) => {
                      const isReacted = activeReaction === r.reaction;
                      return (
                        <ReactionPill
                          key={r.reaction}
                          reaction={r.reaction}
                          count={isReacted ? r.count + 1 : r.count}
                          reacted={isReacted}
                          onClick={() => toggleReaction(r.reaction)}
                          size="sm"
                        />
                      );
                    })}
                  </div>

                  <ReflectionButton count={8} />
                </div>
              </div>

              {/* Footnote */}
              <div className="mt-3 px-2 flex items-center gap-2 text-xs text-foreground-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Raw thought captured in 8 seconds · zero rehearsal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
