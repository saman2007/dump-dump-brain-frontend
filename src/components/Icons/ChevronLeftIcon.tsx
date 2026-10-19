import { IconProps } from "@/types/types";

export const ChevronLeftIcon = ({
  className = "w-4 h-4",
  size,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
