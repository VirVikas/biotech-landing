# Nexora Bio

Nexora Bio is a premium, animation-driven biotechnology landing page focused on computational biology and molecular intelligence.

## Overview

The project demonstrates how interactive scientific visualization and modern frontend engineering can communicate complex biological systems. It combines molecular intelligence, computational biology, responsive editorial layouts, and restrained motion in a production-ready Next.js experience.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js
- React Three Fiber
- Lucide React

## Features

- Interactive molecular and DNA-inspired Hero visualization
- Scroll-driven Innovation story with an active timeline
- Computational architecture graph with animated SVG connections
- Interactive research explorer and scientific diagrams
- Asymmetric capabilities bento system
- Animated Impact metrics and biological signal visualization
- Final conversion CTA with an original SVG pathway graphic
- Responsive desktop, tablet, and mobile layouts
- Semantic landmarks and keyboard-accessible controls
- Reduced-motion support across major decorative animations

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` — App Router layout, metadata, global styles, and page composition
- `components/` — reusable UI, layout, motion, and visual-effect components
- `sections/` — focused feature sections and their data/visualization modules
- `hooks/` — shared React hooks
- `lib/` — framework-independent utilities
- `types/` — shared TypeScript interfaces
- `constants/` — design tokens and shared constants

## Design Approach

The interface uses a dark scientific visual language with editorial typography, restrained cyan accents, molecular network imagery, subtle data overlays, SVG diagrams, and scroll-driven storytelling. Reusable components keep repeated visual and interaction patterns consistent without turning the page into a generic card template.

## Animation Approach

Framer Motion powers viewport reveals, scroll progress, state transitions, hover interactions, and SVG animation. React Three Fiber renders the Hero’s lightweight molecular scene. Continuous decorative motion is disabled or reduced when `prefers-reduced-motion` is enabled, while all content remains visible.
