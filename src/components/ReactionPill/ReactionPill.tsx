import { DumpReaction } from "@/types/types";
import { REACTION_META } from "@/data/dumpReactions";

export interface ReactionPillProps {
  reaction?: DumpReaction;
  emoji?: string;
  label?: string;
  count: number;
  reacted?: boolean;
  onClick?: () => void;
  size?: "sm" | "md";
}

export default function ReactionPill({
  reaction,
  emoji: customEmoji,
  label: customLabel,
  count,
  reacted = false,
  onClick,
  size = "sm",
}: ReactionPillProps) {
  const meta = reaction ? REACTION_META[reaction] : null;
  const emoji = customEmoji || meta?.emoji || "❤️";
  const label = customLabel || meta?.label || "React";

  const sizeClasses = {
    sm: "text-xs px-2.5 py-1 gap-1.5",
    md: "text-sm px-3 py-1.5 gap-2",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full border transition-all duration-200 cursor-pointer select-none active:scale-95 ${
        sizeClasses[size]
      } ${
        reacted
          ? "bg-primary/10 border-primary text-primary font-medium shadow-xs"
          : "bg-surface text-foreground-secondary border-border hover:border-foreground/30 hover:bg-surface-secondary/70"
      }`}
      aria-pressed={reacted}
      aria-label={`${label}, ${count} reactions`}
      title={meta?.meaning}
    >
      <span
        className="shrink-0 text-xs sm:text-sm"
        role="img"
        aria-hidden="true"
      >
        {emoji}
      </span>
      <span className="font-normal">{label}</span>
      <span
        className={`ml-0.5 text-[11px] font-semibold tabular-nums ${
          reacted ? "text-primary" : "text-foreground-secondary/80"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
