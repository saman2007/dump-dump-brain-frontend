import React from "react";
import MoodPill from "@/components/MoodPill/MoodPill";
import ReactionPill from "@/components/ReactionPill/ReactionPill";
import { FeatherIcon } from "@/components/Icons/FeatherIcon";
import { CompassIcon } from "@/components/Icons/CompassIcon";
import { HeartHandIcon } from "@/components/Icons/HeartHandIcon";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 bg-surface-secondary/40 border-y border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-tight leading-[1.15]">
            Social feeds made us perform.
            <br />
            <span className="text-primary italic">
              We just wanted to talk.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
            Every digital platform slowly morphed into a stage. Users started
            auditioning for an imaginary audience. Dump Dump Brain is designed
            as a quiet room where the stage doesn&apos;t exist.
          </p>
        </div>

        {/* Dynamic Asymmetrical Manifest Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Block 1: Low Friction & Raw Expression (Large Feature Block) */}
          <div className="lg:col-span-7 rounded-3xl bg-surface border border-border p-8 sm:p-10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <FeatherIcon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-normal text-foreground tracking-tight">
                Low friction, zero rehearsal
              </h3>
              <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                The gap between thinking something and sharing it is where self-doubt
                kills truth. On traditional platforms, you rewrite a thought four
                times to sound clever. Here, an unfinished fragment or a 3:00 AM
                realization is already whole.
              </p>
            </div>

            {/* Tactile note illustration */}
            <div className="rounded-2xl bg-surface-secondary/70 p-4 border border-border font-hand text-base sm:text-lg text-foreground/95 leading-snug">
              &ldquo;I wonder how many brilliant, comforting thoughts were deleted right before posting because someone wondered: &lsquo;Will anyone retweet this?&rsquo;&rdquo;
            </div>
          </div>

          {/* Block 2: Emotional Humidity (Interactive Tone Demystifier) */}
          <div className="lg:col-span-5 rounded-3xl bg-surface border border-border p-8 sm:p-10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <CompassIcon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-normal text-foreground tracking-tight">
                Words need climate
              </h3>
              <p className="text-foreground-secondary leading-relaxed text-sm">
                Flat text creates endless misunderstandings. A single mood indicator
                anchors your post in your exact headspace.
              </p>
            </div>

            {/* Visual contrast */}
            <div className="space-y-3 pt-2">
              <div className="rounded-xl bg-surface-secondary/50 p-3.5 border border-border text-xs text-foreground-secondary space-y-1">
                <span className="text-[10px] uppercase font-bold text-foreground-secondary/70 tracking-wider">
                  Flat text alone
                </span>
                <p className="italic text-foreground">&ldquo;Sitting by the window watching the rain.&rdquo;</p>
                <p className="text-[11px] text-foreground-secondary">
                  (Are they sad? peaceful? bored? depressed?)
                </p>
              </div>

              <div className="rounded-xl bg-surface-secondary/80 p-3.5 border border-primary/25 text-xs text-foreground space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-wider">
                    Dump Dump Brain
                  </span>
                  <MoodPill mood="peaceful" size="sm" />
                </div>
                <p className="font-hand text-base font-normal">&ldquo;Sitting by the window watching the rain.&rdquo;</p>
                <p className="text-[11px] text-primary font-medium">
                  Instant clarity: gentle peace, cozy comfort.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3: Resonance Over Metrics (Full Width Banner) */}
          <div className="lg:col-span-12 rounded-3xl bg-surface border border-border/80 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <HeartHandIcon className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-normal text-foreground tracking-tight">
                  Meaningful resonance over empty numbers
                </h3>
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                A thumbs-up like tells you nothing. A reaction that says &ldquo;I Understand&rdquo; or &ldquo;Heartbreak&rdquo; or &ldquo;Mind Blown&rdquo; tells you a real human being read your words and felt a tremor in their chest.
              </p>
            </div>

            {/* Reaction Pill Cluster */}
            <div className="flex flex-wrap items-center gap-2">
              <ReactionPill reaction="understand" count={128} reacted size="sm" />
              <ReactionPill reaction="loved" count={94} size="sm" />
              <ReactionPill reaction="melting" count={43} size="sm" />
              <ReactionPill reaction="mind_blown" count={76} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
