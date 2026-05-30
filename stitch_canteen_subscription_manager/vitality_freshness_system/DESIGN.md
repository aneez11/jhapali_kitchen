---
name: Jhapali Kitchen
colors:
  surface: "#f8f9ff"
  surface-dim: "#cbdbf5"
  surface-bright: "#f8f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#eff4ff"
  surface-container: "#e5eeff"
  surface-container-high: "#dce9ff"
  surface-container-highest: "#d3e4fe"
  on-surface: "#0b1c30"
  on-surface-variant: "#3c4a42"
  inverse-surface: "#213145"
  inverse-on-surface: "#eaf1ff"
  outline: "#6c7a71"
  outline-variant: "#bbcabf"
  surface-tint: "#006c49"
  primary: "#006c49"
  on-primary: "#ffffff"
  primary-container: "#10b981"
  on-primary-container: "#00422b"
  inverse-primary: "#4edea3"
  secondary: "#855300"
  on-secondary: "#ffffff"
  secondary-container: "#fea619"
  on-secondary-container: "#684000"
  tertiary: "#005ac2"
  on-tertiary: "#ffffff"
  tertiary-container: "#71a1ff"
  on-tertiary-container: "#00367a"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#6ffbbe"
  primary-fixed-dim: "#4edea3"
  on-primary-fixed: "#002113"
  on-primary-fixed-variant: "#005236"
  secondary-fixed: "#ffddb8"
  secondary-fixed-dim: "#ffb95f"
  on-secondary-fixed: "#2a1700"
  on-secondary-fixed-variant: "#653e00"
  tertiary-fixed: "#d8e2ff"
  tertiary-fixed-dim: "#adc6ff"
  on-tertiary-fixed: "#001a42"
  on-tertiary-fixed-variant: "#004395"
  background: "#f8f9ff"
  on-background: "#0b1c30"
  surface-variant: "#d3e4fe"
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 1rem
  stack-gap: 1rem
  section-gap: 2rem
  gutter: 1rem
---

## Brand & Style

The brand personality of the design system is centered on **Vitality, Efficiency, and Reliability**. It is designed for a modern workforce or student body that values health and seamless logistics. The emotional response should be one of "effortless nourishment"—where managing a daily meal plan feels like a premium, refreshing experience rather than a chore.

The design style follows a **Modern / Corporate** aesthetic with a strong lean toward **Minimalism**. It utilizes expansive whitespace to reduce cognitive load during the busy lunch hour. The visual language is defined by high-contrast typography and vibrant accents, ensuring that the food and nutritional information remain the focal point of the interface.

## Colors

The color palette is rooted in the "Emerald Green" primary, chosen to evoke feelings of health, freshness, and growth. This is the dominant color for success states, primary actions, and brand identification.

- **Primary (Emerald):** Used for CTA buttons, active navigation states, and "subscribed" indicators.
- **Secondary (Amber):** Reserved for "Warning" or "Override" states, such as a subscription about to expire or a meal cancellation.
- **Neutral (Slate):** A range of cool grays used for body text (#1e293b) and subtle borders (#e2e8f0).
- **Background:** A clean, paper-white (#ffffff) is used for cards, while a very soft off-white (#f8fafc) is used for the global background to provide subtle depth between the screen and the content containers.

## Typography

This design system utilizes **Inter** exclusively to achieve a systematic, high-contrast, and premium feel. The type hierarchy relies on significant weight shifts (Bold for headlines vs. Regular for body) to guide the user's eye.

- **Headlines:** Use tight letter-spacing (-0.02em) to give a modern, "tight" editorial feel.
- **Body:** Standard spacing for maximum legibility on mobile screens.
- **Labels:** Use uppercase for category headers and metadata to provide a distinct visual break from the narrative body text.
- **Contrast:** High contrast is maintained by using Slate-900 (#0f172a) for primary headings and Slate-500 (#64748b) for secondary supporting text.

## Layout & Spacing

The layout utilizes a **Fixed Grid** philosophy optimized for mobile viewports. It follows a 4-column structure for mobile devices with a standard 16px (1rem) outer margin.

- **Rhythm:** An 8px base grid is used for all internal component spacing to ensure mathematical harmony.
- **Safe Areas:** All content is inset from the screen edges by the `container-margin` to ensure tap targets are not obscured by phone cases or bezel edges.
- **Vertical Flow:** Content "stacks" use a consistent 16px gap. Transitions between major sections (e.g., from the Calendar to the Meal List) use a 32px (2rem) gap to clearly denote a change in context.

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Soft Ambient Shadows** to create a sense of organized hierarchy.

- **Surface Levels:** The base application background is the lowest level (Level 0). Cards and interactive containers sit on Level 1.
- **Shadows:** Level 1 cards use a very soft, diffused shadow: `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)`. This creates a subtle lift without feeling heavy.
- **Borders:** To maintain a "clean" look, borders are kept at a minimal 1px thickness using a light Slate-200. These are used primarily on input fields and cards to define their boundaries against the white background.
- **Glassmorphism:** Bottom navigation bars and floating action headers may use a background blur (`backdrop-filter: blur(8px)`) with a 90% white opacity to maintain context of the content scrolling beneath them.

## Shapes

The shape language is friendly and approachable. Following the "rounded-2xl" utility, the standard corner radius for primary containers (Meal Cards, Subscription Overviews) is **16px (1rem)**.

- **Small Elements:** Buttons and Input fields use a **12px** radius to feel cohesive with the larger cards.
- **Interactive Chips:** Categories and status tags use a **Pill-shape** (fully rounded) to differentiate them from actionable cards.
- **Iconography:** Use rounded-corner icons (e.g., Feather or Lucide) to match the UI’s softness. Avoid sharp, jagged edges.

## Components

### Buttons

Primary buttons are solid Emerald Green with white text and 12px rounded corners. Secondary buttons use a light Emerald tint (10% opacity) with Emerald text. Buttons must have a minimum height of 48px for mobile accessibility.

### Cards

Meal cards are the centerpiece. They feature a 1px border and a soft shadow. Images within cards should be top-aligned and inherit the 16px top-corner radius. Nutritional information is displayed using `label-caps` typography.

### Horizontal Calendar Strip

A signature component for the subscription system. It consists of a scrollable row of cards. The "Active/Selected" date is highlighted with a solid Emerald background and white text, while unselected dates use a white background with a thin border.

### Bottom Navigation

A persistent bar with a subtle top border and backdrop blur. Active states use the primary Emerald color for the icon and a small 4px dot indicator underneath.

### Inputs & Selectors

Form fields use a Slate-100 background and a 12px radius. On focus, the border transitions to a 2px Emerald stroke.

### Chips

Used for meal tags (e.g., "Vegan," "Gluten-Free"). These are small, pill-shaped elements with a soft gray background and `body-sm` text weight.
