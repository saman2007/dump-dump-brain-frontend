import { cacheLife } from "next/cache";
import { LogoIcon } from "../Icons/LogoIcon";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default async function Footer() {
  "use cache";

  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);
  const secondsUntilNewYear = Math.max(
    1,
    Math.ceil((nextYear.getTime() - now.getTime()) / 1000),
  );

  cacheLife({
    stale: 60 * 60, // 1 hour
    revalidate: 60 * 60 * 24, // 1 day
    expire: secondsUntilNewYear + 60 * 61, // To make it greater than stale time
  });

  return (
    <footer className="border-t border-border bg-surface-secondary/40 transition-colors py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-8 h-8" />
            <span className="font-hand font-normal text-foreground text-xl">
              dump dump brain
            </span>
          </div>
          <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
            A personal digital sanctuary for unfiltered thoughts, fleeting
            ideas, and genuine emotional states. No performative hot takes. No
            algorithmic popularity contests. Just raw human consciousness
            finding kindred minds.
          </p>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-secondary">
          <p>
            © {new Date().getFullYear()} Dump Dump Brain. Made for authentic
            minds everywhere.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Manifesto
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Kindness Code
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Changelog
            </a>
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
