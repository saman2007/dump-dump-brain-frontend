import { DumpReaction, ReactionMeta } from "@/types/types";

export const DUMP_REACTION = [
  "understand",
  "loved",
  "heart_break",
  "melting",
  "funny",
  "mind_blown",
] as const;

export const REACTION_META: Record<DumpReaction, ReactionMeta> = {
  understand: {
    id: "understand",
    emoji: "🫂",
    label: "Understand",
    meaning: "I see you and I get where you're coming from",
  },
  loved: {
    id: "loved",
    emoji: "❤️",
    label: "Loved",
    meaning: "Sending genuine love and appreciation",
  },
  heart_break: {
    id: "heart_break",
    emoji: "💔",
    label: "Heartbreak",
    meaning: "Hurting with you / aching alongside your words",
  },
  melting: {
    id: "melting",
    emoji: "🫠",
    label: "Melting",
    meaning: "Softening up / overwhelmed with sweetness or empathy",
  },
  funny: {
    id: "funny",
    emoji: "😂",
    label: "Funny",
    meaning: "Cracked a smile or laughed out loud",
  },
  mind_blown: {
    id: "mind_blown",
    emoji: "🤯",
    label: "Mind Blown",
    meaning: "Altered my perspective / mind blown",
  },
};
