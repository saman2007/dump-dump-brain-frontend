"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DUMP_MOOD, MOOD_META } from "@/data/dumpMoods";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";

type EmblaCarouselType = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;

export interface MoodFilterSliderProps {
  selectedMood: string;
  onSelectMood: (mood: string) => void;
  totalCount: number;
  className?: string;
}

export default function MoodFilterSlider({
  selectedMood,
  onSelectMood,
  totalCount,
  className = "",
}: MoodFilterSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollState(emblaApi);

    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    emblaApi.on("scroll", updateScrollState);

    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
      emblaApi.off("scroll", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSelect = (mood: string, index: number) => {
    onSelectMood(mood);

    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className={`relative w-full group/slider ${className}`}>
      <div
        className={`absolute left-0 top-0 bottom-0 z-10 flex items-center pr-4 bg-gradient-to-r from-surface-secondary/90 via-surface-secondary/60 to-transparent transition-opacity duration-200 pointer-events-none ${
          canScrollPrev ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Scroll moods left"
          className="pointer-events-auto w-8 h-8 rounded-full bg-surface/95 border border-border shadow-md flex items-center justify-center text-foreground hover:bg-surface-secondary hover:text-primary transition-all duration-150 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 -ml-1"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-hidden px-1 py-1" ref={emblaRef}>
        <div className="flex gap-2 select-none items-center">
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => handleSelect("all", 0)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 shrink-0 cursor-pointer select-none border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-95 ${
                selectedMood === "all"
                  ? "bg-primary text-white border-primary shadow-xs ring-2 ring-primary/20 font-semibold"
                  : "bg-surface text-foreground-secondary border-border hover:bg-surface-secondary hover:text-foreground hover:border-foreground/20"
              }`}
            >
              <span>All Dumps</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold tabular-nums ${
                  selectedMood === "all"
                    ? "bg-white/20 text-white"
                    : "bg-surface-secondary text-foreground-secondary"
                }`}
              >
                {totalCount}
              </span>
            </button>
          </div>

          {DUMP_MOOD.map((mood, idx) => {
            const meta = MOOD_META[mood];
            const isSelected = selectedMood === mood;
            return (
              <div key={mood} className="shrink-0">
                <button
                  type="button"
                  onClick={() => handleSelect(mood, idx + 1)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 shrink-0 cursor-pointer select-none border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-95 ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-xs ring-2 ring-primary/20 font-semibold"
                      : "bg-surface text-foreground-secondary border-border hover:bg-surface-secondary hover:text-foreground hover:border-foreground/20"
                  }`}
                >
                  <span
                    className="text-sm leading-none shrink-0"
                    role="img"
                    aria-hidden="true"
                  >
                    {meta.emoji}
                  </span>
                  <span>{meta.label}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`absolute right-0 top-0 bottom-0 z-10 flex items-center pl-4 bg-gradient-to-l from-surface-secondary/90 via-surface-secondary/60 to-transparent transition-opacity duration-200 pointer-events-none ${
          canScrollNext ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Scroll moods right"
          className="pointer-events-auto w-8 h-8 rounded-full bg-surface/95 border border-border shadow-md flex items-center justify-center text-foreground hover:bg-surface-secondary hover:text-primary transition-all duration-150 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 -mr-1"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
