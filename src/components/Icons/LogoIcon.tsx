import { IconProps } from "@/types/types";
import classNames from "classnames";

export const LogoIcon = ({ className, size, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="200 240 600 520"
      width={size || "100%"}
      height="100%"
      role="img"
      aria-label="Brain speech bubble logo"
      className={classNames("brain-logo", className)}
      {...props}
    >
      <path
        className="brain-left"
        fill="var(--brain-left-color, #08B1BC)"
        d="M 374 285
       A 58.5 58.5 0 0 1 488 295
       A 41 41 0 0 1 462.5 330
       A 86 86 0 0 0 495 495
       A 72 67 0 0 1 567 562
       A 149 149 0 0 1 378 705
       L 283 754
       A 165 165 0 0 0 306 660
       A 66 66 0 0 1 235 561
       A 66 66 0 0 1 234 451
       A 66 66 0 0 1 283 353
       A 64.5 64.5 0 0 1 374 285
       Z"
      />

      <path
        className="brain-right"
        fill="var(--brain-right-color, #092E38)"
        d="M 626 285
       A 58.5 58.5 0 0 0 512 295
       A 52 52 0 0 1 477 344
       A 64 64 0 0 0 497 469
       A 95 89 0 0 1 592 558
       A 162 162 0 0 1 525 696
       A 149 149 0 0 0 622 705
       L 717 754
       A 165 165 0 0 1 694 660
       A 66 66 0 0 0 765 561
       A 66 66 0 0 0 766 451
       A 66 66 0 0 0 717 353
       A 64.5 64.5 0 0 0 626 285
       Z"
      />
    </svg>
  );
};

export default LogoIcon;
