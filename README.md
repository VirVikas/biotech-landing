# NEXORA BIO

A premium animation-driven biotechnology landing page demonstrating modern frontend engineering, interaction design, responsive implementation, and scientific visualization.

## Overview

NEXORA BIO presents computational biology as a living information system, connecting molecular data, computational intelligence, scientific research, and clinical possibilities. The experience translates complex biotechnology concepts into an accessible narrative supported by interactive diagrams, measured motion, and clear editorial content.

## Design Direction

The interface uses a dark scientific visual language with cyan and teal molecular accents, editorial typography, and scientific data-interface details. A grid-based layout establishes structure across the page, while restrained glass and technical UI treatments provide depth without obscuring the content. The molecular network and inline scientific visualizations are original, code-rendered elements created specifically for NEXORA BIO.

The final visual identity is independently designed. Assignment references were used for general inspiration only and were not copied in layout, illustration, animation, typography hierarchy, or color system.

## Sections

The page experience includes:

1. Hero — Living Molecular Intelligence
2. Innovation Platform
3. Biological Signals
4. Computational Models
5. Molecular Intelligence
6. Clinical Possibilities
7. Computational Architecture
8. Research / Molecular Discovery
9. Capabilities
10. Impact
11. Final CTA
12. Footer

Biological Signals, Computational Models, Molecular Intelligence, and Clinical Possibilities form the four-stage narrative inside the Innovation Platform section.

## Animation & Interaction Approach

Framer Motion handles entrance reveals, state transitions, hover feedback, animated SVG paths, and scroll-linked progress. The Innovation Platform uses a sticky desktop timeline whose active stage responds to scroll progress, while mobile presents the same content as a natural vertical sequence.

The Hero’s molecular network is rendered with React Three Fiber and animated through its frame loop. Platform and research experiences use interactive scientific nodes and responsive inline SVG visualizations. Ambient particles, grids, glows, and restrained hover states add depth at a deliberately low visual weight. Motion behavior adapts across screen sizes, and continuous or spatial movement is disabled or reduced where `prefers-reduced-motion` is supported.

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js and React Three Fiber
- Lucide React
- clsx and tailwind-merge

## Architecture

The project uses the Next.js App Router with a component-oriented structure:

- `app/` defines global metadata, styles, the root layout, and page composition.
- `components/ui/` contains reusable interface primitives such as `Container`, `Badge`, and `SectionHeading`.
- `components/motion/` contains reusable reveal, fade, and floating animation wrappers.
- `components/effects/` contains the molecular scene, ambient glow, animated grid, and particle effects.
- `components/layout/` and `components/layouts/` contain global navigation, loading, and footer components.
- `sections/` groups each page section with its local data, visualizations, and interaction components.
- `constants/`, `types/`, and `lib/` contain shared design values, TypeScript definitions, and utilities.
- `hooks/` is reserved for shared React hooks as the component system grows.

Static content is separated from rendering logic where appropriate, including the Innovation, Platform, Research, Capabilities, Impact, and CTA data modules.

## Responsive Design

Desktop layouts use multi-column grids, expansive scientific visualizations, and the sticky Innovation sequence. Tablet layouts progressively reduce spacing and column density. Mobile layouts stack content in logical reading order, provide a dedicated navigation menu, allow controlled horizontal scrolling for the research navigator, and avoid horizontal page overflow. Typography, visualization dimensions, and interaction targets adapt through responsive breakpoints.

## Accessibility

- Semantic landmarks, sections, navigation elements, articles, headings, and lists
- Descriptive labels for navigation controls and interactive scientific nodes
- Keyboard-operable navigation and graph interactions with visible focus states
- Decorative canvases, SVGs, glows, grids, and particles marked with `aria-hidden` where appropriate
- Reduced-motion handling across primary and decorative animation components
- Contrast-conscious text and accent colors on the dark interface

## Performance

- Static rendering through the Next.js App Router for the landing page
- Client-side state limited to interactive components that require it
- Memoized graph lookup data and deterministic particle positions
- Device pixel ratio capped for the molecular canvas
- Reduced frame activity when reduced motion is requested
- Lightweight inline SVG graphics instead of external scientific or 3D assets
- Responsive layouts and restrained decorative animation workloads
- Unused starter assets removed from the production repository

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production Build

Create and serve the optimized production build:

```bash
npm run build
npm run start
```

## Project Structure

```text
biotech-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── effects/
│   ├── layout/
│   ├── layouts/
│   ├── motion/
│   └── ui/
├── constants/
├── hooks/
├── lib/
├── sections/
│   ├── capabilities/
│   ├── cta/
│   ├── hero/
│   ├── impact/
│   ├── innovation/
│   ├── platform/
│   └── research/
├── types/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Browser Support

The site targets current stable versions of Chrome, Edge, Firefox, and Safari. CSS backdrop filtering and WebGL effects degrade gracefully where browser or device capabilities are limited.

## Credits / References

The supplied assignment references informed the broad standard of polish and scientific storytelling. NEXORA BIO’s final composition, visual system, molecular visualization, and interaction language were independently designed for this project.
