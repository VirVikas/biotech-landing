# Nexora Bio

Computational intelligence for biological discovery.

## Overview

Nexora Bio is a premium biotechnology landing page focused on computational biology and molecular intelligence. It combines scientific visualization, editorial layouts, and restrained motion in a responsive Next.js experience.

## Features

- Interactive molecular and DNA-inspired Hero visualization
- Scroll-driven Innovation story with an active timeline
- Computational architecture graph with animated SVG connections
- Interactive research explorer and scientific diagrams
- Asymmetric capabilities layout
- Animated impact metrics and biological signal visualization
- Conversion-focused CTA and responsive global navigation
- Semantic landmarks, keyboard-accessible controls, and reduced-motion support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js and React Three Fiber
- GSAP
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Run static analysis with:

```bash
npm run lint
```

## Production Build

Create and run an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

- `app/` — App Router layout, metadata, global styles, and page composition
- `components/` — reusable UI, layout, motion, and visual-effect components
- `sections/` — page sections and their data and visualization modules
- `hooks/` — shared React hooks
- `lib/` — framework-independent utilities
- `types/` — shared TypeScript interfaces
- `constants/` — design tokens and shared constants

## Design Approach

The interface uses a dark scientific visual language with editorial typography, restrained cyan accents, molecular network imagery, subtle data overlays, and original SVG diagrams. Reusable components keep repeated visual and interaction patterns consistent while each section retains a distinct visual role.

## Animation Approach

Framer Motion powers viewport reveals, scroll progress, state transitions, hover interactions, and SVG animation. React Three Fiber renders the Hero’s lightweight molecular scene, while GSAP supports targeted motion behavior. Continuous decorative motion is disabled or reduced when `prefers-reduced-motion` is enabled, and all content remains available without animation.
