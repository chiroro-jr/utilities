# Utilities

A modern, responsive landing page for a utility infrastructure management platform. Built with Astro, React, TypeScript, and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-FF8400?style=flat-square)](https://github.com/chiroro-jr/utilities)
[![Astro](https://img.shields.io/badge/Astro-5.17-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

## Features

- **Modern Design System** — Dark/light sections with orange (#FF8400) accent color
- **Fully Responsive** — Desktop, tablet, and mobile optimized layouts
- **Interactive Components** — Mobile navigation, FAQ accordion, smooth interactions
- **Performance Optimized** — Static site generation with Astro's island architecture
- **TypeScript** — Full type safety throughout the codebase

## Sections

1. **Header** — Sticky navigation with mobile hamburger menu
2. **Hero** — CTA-focused hero with beta badge and screenshot placeholder
3. **Trust Logos** — Client logo showcase
4. **How It Works** — 3-step onboarding process
5. **Core Features** — 3 alternating feature blocks (Dashboard, Smart Meters, Outage Management)
6. **Capabilities** — 6-card grid showcasing key capabilities
7. **Social Proof** — Stats and testimonials
8. **Pricing** — 3-tier pricing cards (Starter, Professional, Enterprise)
9. **FAQ** — Interactive accordion with 5 common questions
10. **Final CTA** — Call-to-action section
11. **Footer** — Links, social icons, copyright

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **[React](https://react.dev)** — Interactive components
- **[TypeScript](https://typescriptlang.org)** — Type safety
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com)** — UI components (accordion, buttons)
- **[Lucide React](https://lucide.dev)** — Icons

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+)
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chiroro-jr/utilities.git
cd utilities

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

```bash
# Build the site
pnpm build

# Preview the build locally
pnpm preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── FaqSection.tsx      # FAQ accordion component
│   │   ├── MobileNav.tsx       # Mobile navigation overlay
│   │   └── ui/                 # shadcn/ui components
│   ├── layouts/
│   │   └── base-layout.astro   # Base HTML layout
│   ├── pages/
│   │   └── index.astro         # Landing page
│   ├── styles/
│   │   └── global.css          # Global styles & Tailwind config
│   └── lib/
│       └── utils.ts            # Utility functions
├── design/
│   └── utilities.pen           # Pencil design file
├── public/
├── package.json
└── README.md
```

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#FF8400` | Primary accent, buttons, highlights |
| `--background` | `#F2F3F0` | Light section backgrounds |
| `--foreground` | `#111111` | Dark section backgrounds, text |
| `--card` | `#FFFFFF` | Card backgrounds on light sections |

### Typography

- **Primary Font**: JetBrains Mono (headings, monospace)
- **Secondary Font**: Geist (body text, UI)

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run oxlint for code quality |
| `pnpm lint:fix` | Fix linting issues automatically |
| `pnpm fmt` | Format code with oxfmt |
| `pnpm fmt:check` | Check code formatting |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License — see LICENSE file for details.

## Acknowledgments

- Design created with [Pencil](https://pencil.so) design tool
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
