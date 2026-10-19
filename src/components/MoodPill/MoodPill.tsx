import { DumpMood, MoodMeta } from "@/types/types";
import { MOOD_META } from "@/data/dumpMoods";

export interface MoodPillProps {
  mood: DumpMood | MoodMeta;
  selected?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
}

export default function MoodPill({
  mood,
  selected = false,
  onClick,
  size = "md",
  interactive = false,
  className = "",
}: MoodPillProps) {
  const meta: MoodMeta = typeof mood === "string" ? MOOD_META[mood] : mood;

  const sizeClasses = {
    sm: "text-xs px-2.5 py-1 gap-1.5",
    md: "text-xs sm:text-sm px-3.5 py-1.5 gap-2",
    lg: "text-sm sm:text-base px-4 py-2 gap-2.5",
  };

  const Component = interactive ? "button" : "span";

  return (
    <Component
      type={interactive ? "button" : undefined}
      onClick={interactive ? onClick : undefined}
      className={`inline-flex items-center rounded-full border font-medium transition-all duration-150 select-none ${
        sizeClasses[size]
      } ${
        selected
          ? "bg-primary text-white border-primary shadow-xs font-semibold ring-2 ring-primary/25"
          : "bg-surface text-foreground border-border hover:bg-surface-secondary hover:border-foreground/20"
      } ${interactive ? "cursor-pointer active:scale-95" : ""} ${className}`}
    >
      <span
        className="text-sm leading-none shrink-0"
        role="img"
        aria-label={meta.label}
      >
        {meta.emoji}
      </span>
      <span>{meta.label}</span>
    </Component>
  );
}
