import React from "react";
import { FeatherIcon, SparklesIcon, HandHeartIcon } from "@/components/Icons";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 bg-surface-secondary/40 border-y border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-tight leading-[1.15]">
              Social feeds made us perform.
              <br />
              <span className="text-primary italic">
                We just wanted to be ourselves.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-3 lg:pl-8 lg:border-l lg:border-border m-auto">
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed font-normal">
              Sometimes you just want to be yourself. You just want to share
              your thoughts with someone. But you may be ashamed to talk about
              them, even to the closest people in your life.
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="rounded-3xl bg-surface border border-border p-7 sm:p-9 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center hover:border-primary/30 transition-colors">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                  <FeatherIcon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal text-foreground tracking-tight">
                  Dumping thoughts makes you calm
                </h3>
              </div>
              <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                Sometimes you get stuck overthinking something and you just need
                to get it out of your head. But reaching out to a stranger feels
                awkward, and opening up to a close friend can feel too
                embarrassing. Yet what truly brings you peace and calm is simply
                sharing what you're thinking with someone.
              </p>
            </div>

            <div className="lg:col-span-5 bg-surface-secondary/60 rounded-2xl p-5 sm:p-6 border border-border/70 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                <span>Note</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                Don't think about how you should write a dump. Just write what
                is coming out of your mind. It doesn't matter how you are
                writing it and don't think about it. A purpose of dumping your
                thoughts is to make you calm.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-surface border border-border p-7 sm:p-9 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center hover:border-primary/30 transition-colors">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal text-foreground tracking-tight">
                  Hearing the others opens your mind
                </h3>
              </div>
              <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                Reading people's honest thoughts is genuinely fascinating. You
                get to see what they're thinking, how they process the world,
                and what mood they're in while doing it. It constantly opens
                your mind to those sudden 'Oh, I never thought about it like
                that!' realizations. On top of learning something new, it's just
                fun to see what's quietly happening in other minds — with their
                permission, of course.
              </p>
            </div>

            <div className="lg:col-span-5 bg-surface-secondary/60 rounded-2xl p-5 sm:p-6 border border-border/70 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                <span>Note</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                People shouldn't be judged for their thoughts. The moment
                judgment enters the room, people hide who they truly are. Here,
                you can explore new perspectives, share what is on your mind,
                and listen without judgment.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-surface border border-border p-7 sm:p-9 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center hover:border-primary/30 transition-colors">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                  <HandHeartIcon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal text-foreground tracking-tight">
                  Get help with what you carry
                </h3>
              </div>
              <p className="text-foreground-secondary leading-relaxed text-sm sm:text-base">
                Sometimes you get stuck on a dilemma and feel completely drowned
                in your thoughts. Putting it out there and hearing how others
                see it can take the weight off your shoulders. You might
                discover a fresh solution or finally find the clarity you were
                looking for.
              </p>
            </div>

            <div className="lg:col-span-5 bg-surface-secondary/60 rounded-2xl p-5 sm:p-6 border border-border/70 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                <span>Note</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                You don't need a confident conclusion or a brave face. Be honest
                about what has you stuck — people here reflect and share lived
                experiences with zero judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
