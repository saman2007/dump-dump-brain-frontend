import { DUMP_MOOD } from "@/data/dumpMoods";
import { DUMP_REACTION } from "@/data/dumpReactions";
import React from "react";

export interface IconProps extends React.ComponentProps<"svg"> {
  size?: number;
}

export type DumpMood = (typeof DUMP_MOOD)[number];

export interface MoodMeta {
  id: DumpMood;
  emoji: string;
  label: string;
  vibe: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export type DumpReaction = (typeof DUMP_REACTION)[number];

export interface ReactionMeta {
  id: DumpReaction;
  emoji: string;
  label: string;
  meaning: string;
}
