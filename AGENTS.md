# Agent Instructions

## Skills

Load the `tailwind-design-system` skill before writing or editing any Tailwind CSS classes. It covers Tailwind v4 conventions, CSS-first configuration, and component patterns.

Load the `astro` skill before modifying Astro components or project configuration.

## Stack

- Astro 5 with React 19 integration
- Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.ts`)
- shadcn/ui (new-york style, CSS variables enabled)
- Design file: `design/utilities.pen`

## Tailwind & Styling Rules

All theme tokens are defined in `src/styles/global.css`. Read that file before writing any styles.

### Use semantic color tokens, never raw hex values

The `@theme` block maps CSS variables to Tailwind utilities. Use them directly as class names.

```
bg-background    not  bg-[#F2F3F0]
bg-foreground    not  bg-[#111111]
bg-primary       not  bg-[#FF8400]
bg-card          not  bg-white  or  bg-[#FFFFFF]
bg-secondary     not  bg-[#E7E8E5]
bg-muted         not  bg-[#F2F3F0]
bg-destructive   not  bg-[#D93C15]

text-foreground          not  text-[#111111]
text-primary             not  text-[#FF8400]
text-muted-foreground    not  text-[#666] or text-[#666666]
text-card-foreground     not  text-[#111111] (on cards)

border-border      not  border-[#CBCCC9]
border-secondary   not  border-[#E7E8E5]
border-primary     not  border-[#FF8400]
border-input       not  border-[#CBCCC9] (on form inputs)
```

For opacity variants, use Tailwind's modifier syntax: `bg-primary/85`, `text-foreground/70`.

Full list of available color tokens: `background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `border`, `input`, `ring`, `black`, `white`, `color-error`, `color-error-foreground`, `color-info`, `color-info-foreground`, `color-success`, `color-success-foreground`, `color-warning`, `color-warning-foreground`, `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-primary-foreground`, `sidebar-accent`, `sidebar-accent-foreground`, `sidebar-border`, `sidebar-ring`.

### Use font tokens, never manual CSS variable access

The `@theme` block registers `--font-primary` and `--font-secondary` as Tailwind font families.

```
font-primary      not  font-[family-name:var(--font-primary)]
font-secondary    not  font-[family-name:var(--font-secondary)]
```

- `font-primary` = JetBrains Mono (monospace) -- headings, badges, code, brand text
- `font-secondary` = Geist (sans-serif) -- body text, descriptions, navigation

### Use Tailwind's built-in spacing, never arbitrary pixel values

Tailwind v4 uses a 4px base (`1 unit = 0.25rem = 4px`). Divide pixel values by 4 to get the Tailwind class.

```
max-w-360    not  max-w-[1440px]     (1440 / 4 = 360)
max-w-150    not  max-w-[600px]      (600 / 4 = 150)
max-w-192    not  max-w-[768px]      (768 / 4 = 192)
max-w-70     not  max-w-[280px]      (280 / 4 = 70)
w-48         not  w-[192px]
gap-8        not  gap-[32px]
p-6          not  p-[24px]
```

Only use arbitrary values `[...]` when the value genuinely doesn't map to the spacing scale (e.g., `aspect-[16/10]`, `tracking-[0.1em]`).

### Use radius tokens

```
rounded-sm     rounded-md     rounded-lg     rounded-xl
rounded-2xl    rounded-3xl    rounded-4xl
rounded-pill   (999px, for pill shapes)
```

### Dark sections in light-mode pages

When building sections that look dark within a light-mode page, wrap the section in a container with the `dark` class so semantic tokens resolve correctly. This is preferred over hardcoding dark hex values.

```html
<!-- Correct -->
<section class="dark">
  <div class="bg-background text-foreground border-border">...</div>
</section>

<!-- Avoid -->
<section class="bg-[#111111] text-white border-[#2E2E2E]">...</section>
```

## Design File Rules (`.pen` files)

When editing `design/utilities.pen` or creating designs, use the same color values defined in `src/styles/global.css` `:root` and `.dark` selectors. Do not invent new colors. Reference the hex values from the theme tokens.

## Component Conventions

- Use shadcn/ui components from `@/components/ui/` when available
- Use `cn()` from `@/lib/utils` for conditional class merging
- Use CVA (`class-variance-authority`) for component variants
- Import paths use `@/` alias (maps to `src/`)
