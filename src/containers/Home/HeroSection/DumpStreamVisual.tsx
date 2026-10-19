"use client";

import React, { useState } from "react";
import MoodPill from "@/components/MoodPill/MoodPill";
import ReactionPill from "@/components/ReactionPill/ReactionPill";
import Avatar from "@/components/Avatar/Avatar";
import ReflectionButton from "@/components/ReflectionButton/ReflectionButton";
import { DumpMood, DumpReaction } from "@/types/types";
import { MOOD_META } from "@/data/dumpMoods";

interface StreamSnippet {
  id: string;
  author: string;
  handle: string;
  time: string;
  mood: DumpMood;
  text: string;
  reactions: Array<{ reaction: DumpReaction; count: number }>;
  replyCount: number;
  accentBorder?: string;
  rotation?: string;
}

const INITIAL_SNIPPETS: StreamSnippet[] = [
  {
    id: "snip-1",
    author: "Elena B.",
    handle: "@elena",
    time: "3m ago",
    mood: "peaceful",
    text: "Sunday afternoon light stretching across the kitchen tile. In moments like this, nothing in the future feels like an emergency.",
    reactions: [
      { reaction: "loved", count: 47 },
      { reaction: "melting", count: 28 },
    ],
    replyCount: 5,
    rotation: "sm:-rotate-1",
  },
  {
    id: "snip-2",
    author: "Julian K.",
    handle: "@julian_k",
    time: "8m ago",
    mood: "thinking",
    text: "Why don't we have a word for the nostalgia you feel for a city you've never visited? My brain is homesick for imaginary train stations.",
    reactions: [
      { reaction: "mind_blown", count: 62 },
      { reaction: "understand", count: 39 },
    ],
    replyCount: 12,
    rotation: "sm:rotate-1.5 sm:translate-x-3",
  },
  {
    id: "snip-3",
    author: "Sora T.",
    handle: "@sora_spark",
    time: "14m ago",
    mood: "inspired",
    text: "Wrote three lines of code that solved an issue I wrestled with for four days. The coffee suddenly tastes like liquid gold.",
    reactions: [
      { reaction: "understand", count: 53 },
      { reaction: "funny", count: 31 },
    ],
    replyCount: 8,
    rotation: "sm:-rotate-1 sm:-translate-x-2",
  },
];

export default function DumpStreamVisual() {
  const [userReactions, setUserReactions] = useState<
    Record<string, DumpReaction | null>
  >({});

  const toggleReaction = (snippetId: string, reaction: DumpReaction) => {
    setUserReactions((prev) => ({
      ...prev,
      [snippetId]: prev[snippetId] === reaction ? null : reaction,
    }));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient ethereal backdrop glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Dynamic cards stack */}
      <div className="space-y-3.5">
        {INITIAL_SNIPPETS.map((item) => {
          const meta = MOOD_META[item.mood];
          const activeReaction = userReactions[item.id] ?? null;

          return (
            <div
              key={item.id}
              className={`rounded-2xl bg-surface border border-border p-4.5 sm:p-5 shadow-xs hover:shadow-md hover:border-border-hover transition-all duration-300 transform ${
                item.rotation || ""
              } hover:rotate-0 hover:translate-x-0`}
            >
              {/* Card Header: Avatar + Author + Mood */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <Avatar name={item.author} size="sm" moodEmoji={meta.emoji} />
                  <div>
                    <span className="text-xs font-semibold text-foreground block leading-tight">
                      {item.author}
                    </span>
                    <span className="text-[10px] text-foreground-secondary">
                      {item.time}
                    </span>
                  </div>
                </div>
                <MoodPill mood={item.mood} size="sm" />
              </div>

              {/* Thought Body */}
              <p className="font-hand text-lg text-foreground/95 font-normal leading-snug tracking-wide">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Card Footer: Interactive Reactions */}
              <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.reactions.map((r) => {
                    const isReacted = activeReaction === r.reaction;
                    return (
                      <ReactionPill
                        key={r.reaction}
                        reaction={r.reaction}
                        count={isReacted ? r.count + 1 : r.count}
                        reacted={isReacted}
                        onClick={() => toggleReaction(item.id, r.reaction)}
                        size="sm"
                      />
                    );
                  })}
                </div>

                <ReflectionButton count={item.replyCount} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
