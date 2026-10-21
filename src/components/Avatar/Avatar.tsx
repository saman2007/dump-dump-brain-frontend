export interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  moodEmoji?: string;
  className?: string;
}

const AVATAR_PALETTES = [
  "bg-teal-100 text-teal-800 border-teal-200",
  "bg-amber-100 text-amber-800 border-amber-200",
  "bg-rose-100 text-rose-800 border-rose-200",
  "bg-indigo-100 text-indigo-800 border-indigo-200",
  "bg-emerald-100 text-emerald-800 border-emerald-200",
  "bg-purple-100 text-purple-800 border-purple-200",
];

export default function Avatar({
  name,
  size = "md",
  moodEmoji,
  className = "",
}: AvatarProps) {
  // Deterministic palette based on name length/char
  const paletteIndex = name.charCodeAt(0) % AVATAR_PALETTES.length;
  const palette = AVATAR_PALETTES[paletteIndex];

  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base",
  };

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`relative inline-block shrink-0 ${className}`}>
      <div
        className={`rounded-full flex items-center justify-center font-semibold border ${palette} ${sizeClasses[size]}`}
      >
        {initials}
      </div>
      {moodEmoji && (
        <span
          className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface border border-border text-[10px] shadow-xs"
          role="img"
          aria-label="Mood"
        >
          {moodEmoji}
        </span>
      )}
    </div>
  );
}
