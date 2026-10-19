import React from "react";

export type BadgeVariant =
  | "default"
  | "primary"
  | "outline"
  | "subtle"
  | "accent";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
  icon,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors";

  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-surface-secondary text-foreground-secondary border border-border",
    primary: "bg-primary/10 text-primary border border-primary/25",
    outline: "bg-transparent text-foreground border border-border",
    subtle: "bg-surface text-foreground-secondary shadow-xs border border-border/80",
    accent: "bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/40",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
