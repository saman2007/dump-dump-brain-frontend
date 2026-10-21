import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "secondary" | "subtle" | "bordered";
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  variant = "surface",
  hoverable = false,
  padding = "md",
  children,
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    surface: "bg-surface text-foreground border border-border shadow-xs",
    secondary: "bg-surface-secondary text-foreground border border-border/80",
    subtle: "bg-background text-foreground border border-border/60",
    bordered: "bg-surface text-foreground border-2 border-foreground/10",
  };

  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`rounded-2xl transition-all duration-200 ${variantStyles[variant]} ${
        paddingStyles[padding]
      } ${
        hoverable
          ? "hover:border-primary hover:shadow-md hover:-translate-y-0.5"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
