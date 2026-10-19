import { IconProps } from "@/types/types";

export const HandHeartIcon = ({
  className = "w-5 h-5",
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
    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
    <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
    <path d="m2 15 6 6" />
    <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.8 2.8 0 0 0 18.2 3c-1.4 0-2.2.8-2.7 1.5-.5-.7-1.3-1.5-2.7-1.5A2.8 2.8 0 0 0 10 5.8c0 1.1.8 2 1.5 2.7l3.5 3.5Z" />
  </svg>
);

export default HandHeartIcon;
