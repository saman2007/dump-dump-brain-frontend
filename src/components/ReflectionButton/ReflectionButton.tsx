import React from "react";
import { ChatBubbleIcon } from "@/components/Icons/ChatBubbleIcon";

export interface ReflectionButtonProps {
  count: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "md";
  className?: string;
}

export default function ReflectionButton({
  count,
  onClick,
  size = "sm",
  className = "",
}: ReflectionButtonProps) {
  const sizeClasses = {
    sm: "text-xs py-1 px-2 gap-1.5",
    md: "text-sm py-1.5 px-3 gap-2",
  };

  const label = `${count} ${count === 1 ? "reflection" : "reflections"}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center rounded-lg text-foreground-secondary border border-transparent hover:border-border hover:bg-surface-secondary hover:text-foreground transition-all duration-150 cursor-pointer select-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${sizeClasses[size]} ${className}`}
      aria-label={label}
      title={label}
    >
      <ChatBubbleIcon className="w-3.5 h-3.5 text-primary shrink-0 transition-transform group-hover:scale-110" />
      <span className="font-medium text-[11px] tabular-nums">
        {label}
      </span>
    </button>
  );
}
