"use client";

import { useState } from "react";
import Card from "@/components/Card/Card";
import Avatar from "@/components/Avatar/Avatar";
import MoodPill from "@/components/MoodPill/MoodPill";
import ReactionPill from "@/components/ReactionPill/ReactionPill";
import ReflectionButton from "@/components/ReflectionButton/ReflectionButton";
import { DumpMood, DumpReaction } from "@/types/types";
import { MOOD_META } from "@/data/dumpMoods";

export interface DumpPost {
  id: string;
  author: string;
  handle: string;
  timeAgo: string;
  mood: DumpMood;
  content: string;
  reactions: Array<{ reaction: DumpReaction; count: number }>;
  replyCount: number;
}

export default function DumpCard({ post }: { post: DumpPost }) {
  const [userReaction, setUserReaction] = useState<DumpReaction | null>(null);
  const meta = MOOD_META[post.mood];

  const toggleReaction = (reaction: DumpReaction) => {
    setUserReaction((prev) => (prev === reaction ? null : reaction));
  };

  return (
    <Card
      variant="surface"
      hoverable
      padding="md"
      className="border border-border flex flex-col justify-between"
    >
      <div className="space-y-3.5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar name={post.author} size="md" moodEmoji={meta.emoji} />
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-sm font-semibold text-foreground">
                  {post.author}
                </span>
                <span className="text-xs text-foreground-secondary">
                  {post.handle}
                </span>
                <span className="text-xs text-foreground-secondary/70">
                  · {post.timeAgo}
                </span>
              </div>
              <div className="mt-1">
                <MoodPill mood={post.mood} size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Post content */}
        <p className="font-hand text-lg sm:text-xl text-foreground/95 leading-snug tracking-wide whitespace-pre-line">
          {post.content}
        </p>
      </div>

      {/* Footer / Available Reactions & Reflection count */}
      <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {post.reactions.map((r) => {
            const isReacted = userReaction === r.reaction;
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

        <ReflectionButton count={post.replyCount} />
      </div>
    </Card>
  );
}
