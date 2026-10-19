<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## About The Project

### What is Dump Dump Brain?

Dump Dump Brain is a personal social platform created for "brain dumping"—a dedicated space for people to instantly capture and share unfiltered thoughts, fleeting ideas, daily musings, and emotional states as they happen.

While platforms like Twitter/X or Threads often focus on public debate, news commentary, or curated self-promotion, Dump Dump Brain is designed to be more personal, reflective, and authentic. It serves as a digital stream-of-consciousness hub, with plans to expand into a hybrid platform supporting both spontaneous micro-thoughts and long-form personal blogs.

### Core Concept & Philosophy

Low Friction, Raw Expression: Users don't need polished articles or performative hot takes—they just "dump" whatever is on their mind.
Emotional Context: Thoughts are deeply tied to emotions. Every post carries a mood indicator that gives readers the vibe and sentiment behind the words.
Meaningful Engagement: Instead of generic thumbs-up likes, engagement is expressive and conversational through emotion-aligned reactions and threaded replies. Each dump can have at most one reaction by a specific user (single reaction per user per dump).

### Moods and Reactions

- **Available Moods (`DUMP_MOOD`)**: `sad`, `happy`, `thinking`, `pensive`, `meh`, `angry`, `exhausted`, `confused`, `inspired`, `hyped`, `funny`, `peaceful`, `anxious`. Each dump is tagged with exactly one mood.
- **Available Reactions (`DUMP_REACTION`)**: `understand`, `loved`, `heart_break`, `melting`, `funny`, `mind_blown`.
- **Reaction Constraint**: A user can only choose at most one reaction on any given dump (reacting with another reaction replaces the previous one, and clicking the active reaction removes it).

## General Rules

1. For some UI parts, create reusable components and use them. Try not to repeat yourself. For example if you see that a button or badge in a page could be used in other pages and sections, create reusable components for them.

2. Generate texts for sections, that are friendly and natural.

3. For typescript types, if you noticed that a type or an interface is general, create that type or interface in `/src/types`.

4. No need to add comments inside jsx templates.

5. Do NOT use HTML entities (such as `&apos;`, `&quot;`, `&lsquo;`, `&rsquo;`, `&ldquo;`, `&rdquo;`) for punctuation in JSX text. Always use standard characters directly (e.g. `'`, `"`, `-`).

## Folder Structure and Naming Convention

- Components name, files name(inside a folder of `/src/{folderName}`, only in `components` and `containers` folders) and folders name(inside a folder of `/src/{folderName}`, only in `components` and `containers` folders) should be in pascal case.
- Components that are related to a specific page must be in `/src/containers/{PageName}/{SectionName}/{ComponentName}.tsx`. For example if there is a hero section in home page, `HeroSection` component should be in `src/containers/Home/HeroSection/HeroSection.tsx` and inside `src/containers/Home/HeroSection/` there are components related to `HeroSection`.
- Components that are for general use cases should be inside `/src/components/` and in a folder with their name or their group name. For example if we have a component called `Badge`, this component is a general component and should be in `/src/components/Badge/Badge.tsx`. For example if we have form related components like `TextArea`, `Input`, `CheckBox`, etc, these components should be inside `/src/components/Form/{ComponentName}.tsx`.
