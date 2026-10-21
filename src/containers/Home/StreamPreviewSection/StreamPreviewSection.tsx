"use client";

import { useState } from "react";
import DumpCard, { DumpPost } from "./DumpCard";
import Button from "@/components/Button/Button";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";
import MoodFilterSlider from "@/containers/Home/StreamPreviewSection/MoodFilterSlider";
const SAMPLE_POSTS: DumpPost[] = [
  {
    id: "post-1",
    author: "Hannah Lin",
    handle: "@hannah",
    timeAgo: "4m ago",
    mood: "peaceful",
    content:
      "Just finished reading a book that completely altered my internal weather. Sitting here listening to the refrigerator hum and the wind against the blinds. Not rushing to the next thing.",
    reactions: [
      { reaction: "loved", count: 24 },
      { reaction: "melting", count: 19 },
      { reaction: "understand", count: 11 },
    ],
    replyCount: 3,
  },
  {
    id: "post-2",
    author: "Tariq Moss",
    handle: "@tariq",
    timeAgo: "12m ago",
    mood: "inspired",
    content:
      "We spend our whole 20s trying to look confident to people who are also faking it. The biggest superpower is just saying 'I don't know yet, but I'm curious.'",
    reactions: [
      { reaction: "mind_blown", count: 83 },
      { reaction: "understand", count: 47 },
      { reaction: "loved", count: 35 },
    ],
    replyCount: 7,
  },
  {
    id: "post-3",
    author: "Samira K.",
    handle: "@samira_3am",
    timeAgo: "23m ago",
    mood: "thinking",
    content:
      "Why is 3:00 AM either the most terrifyingly vulnerable hour of your life or the hour where you solve existential questions with zero hesitation?",
    reactions: [
      { reaction: "mind_blown", count: 64 },
      { reaction: "understand", count: 52 },
    ],
    replyCount: 5,
  },
  {
    id: "post-4",
    author: "Lucas Chen",
    handle: "@lucas",
    timeAgo: "35m ago",
    mood: "confused",
    content:
      "Sent a thumbs up emoji in Slack to my manager and immediately agonized for 20 minutes if it looked dismissive. Decided to follow up with a polite sentence just to overcompensate.",
    reactions: [
      { reaction: "funny", count: 91 },
      { reaction: "understand", count: 72 },
    ],
    replyCount: 11,
  },
  {
    id: "post-5",
    author: "Zoe Hart",
    handle: "@zoe_h",
    timeAgo: "48m ago",
    mood: "sad",
    content:
      "Cleaning out my closet and found an old postcard from college that just says 'remember Tuesday.' I have completely forgotten what happened on that Tuesday, but someone loved me enough to stamp and mail it.",
    reactions: [
      { reaction: "heart_break", count: 58 },
      { reaction: "melting", count: 44 },
      { reaction: "loved", count: 31 },
    ],
    replyCount: 4,
  },
  {
    id: "post-6",
    author: "Nico Ramos",
    handle: "@nico",
    timeAgo: "1h ago",
    mood: "happy",
    content:
      "Bought fresh flowers for the dining table for no reason at all other than they were yellow.",
    reactions: [
      { reaction: "loved", count: 62 },
      { reaction: "melting", count: 39 },
    ],
    replyCount: 2,
  },
  {
    id: "post-7",
    author: "Devon M.",
    handle: "@devon",
    timeAgo: "2h ago",
    mood: "exhausted",
    content:
      "I have reached the point in the work week where even picking which podcast to listen to feels like a high-stakes life decision. Silence it is.",
    reactions: [
      { reaction: "understand", count: 118 },
      { reaction: "melting", count: 45 },
    ],
    replyCount: 6,
  },
  {
    id: "post-8",
    author: "Zara Chen",
    handle: "@zara",
    timeAgo: "3h ago",
    mood: "pensive",
    content:
      "Every year passes faster than the last because each year is a smaller percentage of your total lived existence. To a five-year-old, a year is 20% of their life. To a 30-year-old, it's 3.3%. Time physically accelerates.",
    reactions: [
      { reaction: "mind_blown", count: 142 },
      { reaction: "understand", count: 79 },
    ],
    replyCount: 14,
  },
  {
    id: "post-9",
    author: "Maya L.",
    handle: "@maya",
    timeAgo: "4h ago",
    mood: "funny",
    content:
      "Accidentally made eye contact with a dog in a stroller wearing sunglasses. He looked like he had better credit than me.",
    reactions: [
      { reaction: "funny", count: 156 },
      { reaction: "loved", count: 88 },
    ],
    replyCount: 9,
  },
  {
    id: "post-10",
    author: "Mateo Silva",
    handle: "@mateo",
    timeAgo: "5h ago",
    mood: "meh",
    content:
      "Sitting on the subway staring at an advertisement for dental insurance. I have no strong opinions about today, the weather, or anything in the galaxy. Just taking up physical space until dinner.",
    reactions: [
      { reaction: "understand", count: 71 },
      { reaction: "funny", count: 44 },
    ],
    replyCount: 5,
  },
  {
    id: "post-11",
    author: "Rohan V.",
    handle: "@rohan",
    timeAgo: "6h ago",
    mood: "angry",
    content:
      "Why does every single piece of software now require a subscription, two-factor authentication via SMS, and a password with an ancient hieroglyphic? I just wanted to crop a JPG.",
    reactions: [
      { reaction: "understand", count: 89 },
      { reaction: "funny", count: 62 },
      { reaction: "mind_blown", count: 14 },
    ],
    replyCount: 8,
  },
  {
    id: "post-12",
    author: "Aria Sol",
    handle: "@aria",
    timeAgo: "7h ago",
    mood: "hyped",
    content:
      "I finally figured out the plot twist for chapter 12 after pacing around my living room like an excited villain for 45 minutes! Everything connects!",
    reactions: [
      { reaction: "mind_blown", count: 95 },
      { reaction: "loved", count: 68 },
    ],
    replyCount: 12,
  },
  {
    id: "post-13",
    author: "Kian R.",
    handle: "@kian",
    timeAgo: "8h ago",
    mood: "anxious",
    content:
      "Chest feels like a hummingbird trapped in a glass jar right now. Nothing bad has actually happened, but my nervous system has decided we are currently hunting mammoths in a blizzard.",
    reactions: [
      { reaction: "understand", count: 68 },
      { reaction: "loved", count: 42 },
      { reaction: "melting", count: 19 },
    ],
    replyCount: 6,
  },
];

export default function StreamPreviewSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredPosts =
    filter === "all"
      ? SAMPLE_POSTS
      : SAMPLE_POSTS.filter((post) => post.mood === filter);

  return (
    <section
      id="stream"
      className="py-16 md:py-24 bg-surface-secondary/25 border-b border-border/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Mood Filter Slider */}
        <MoodFilterSlider
          selectedMood={filter}
          onSelectMood={setFilter}
          totalCount={SAMPLE_POSTS.length}
        />

        {/* Masonry Stream Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] [&>*]:break-inside-avoid [&>*]:mb-6">
          {filteredPosts.map((post) => (
            <DumpCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="pt-6 text-center">
          <Button
            variant="outline"
            size="lg"
            icon={<ArrowRightIcon className="w-4 h-4" />}
            href="/sign-up"
          >
            Join Dump Dump Brain to start dumping
          </Button>
        </div>
      </div>
    </section>
  );
}
