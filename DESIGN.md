---
name: Nocturne Reserve
colors:
  surface: '#151312'
  surface-dim: '#151312'
  surface-bright: '#3c3837'
  surface-container-lowest: '#100e0d'
  surface-container-low: '#1d1b1a'
  surface-container: '#221f1e'
  surface-container-high: '#2c2928'
  surface-container-highest: '#373433'
  on-surface: '#e8e1df'
  on-surface-variant: '#d3c4b3'
  inverse-surface: '#e8e1df'
  inverse-on-surface: '#33302e'
  outline: '#9c8f7f'
  outline-variant: '#4f4538'
  surface-tint: '#f2be71'
  primary: '#f2be71'
  on-primary: '#442b00'
  primary-container: '#d4a359'
  on-primary-container: '#583a00'
  inverse-primary: '#7e5713'
  secondary: '#f7b98e'
  on-secondary: '#4c2707'
  secondary-container: '#6a3f1d'
  on-secondary-container: '#e8ac81'
  tertiary: '#d3c5aa'
  on-tertiary: '#382f1d'
  tertiary-container: '#b7aa90'
  on-tertiary-container: '#483f2b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb1'
  primary-fixed-dim: '#f2be71'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#614000'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#f7b98e'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#673d1b'
  tertiary-fixed: '#f0e1c5'
  tertiary-fixed-dim: '#d3c5aa'
  on-tertiary-fixed: '#221b0a'
  on-tertiary-fixed-variant: '#4f4631'
  background: '#151312'
  on-background: '#e8e1df'
  surface-variant: '#373433'
typography:
  display-hero:
    fontFamily: Amiri
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 72px
  display-hero-mobile:
    fontFamily: Amiri
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg:
    fontFamily: Amiri
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
  headline-lg-mobile:
    fontFamily: Amiri
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Cairo
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Cairo
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Cairo
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Cairo
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Cairo
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Cairo
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: Cairo
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Cairo
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 3.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the sensory intimacy, nocturnal quietude, and refined luxury of an artisanal specialty coffee roastery. It caters to discerning connoisseurs, evening thinkers, and specialty beverage enthusiasts who view coffee not as a rushed commodity, but as a ritualistic experience.

The visual style unites **High-Contrast Luxury Minimalism** with **Tactile Nocturnal Depth**:
- **Atmospheric Palette:** Built on deep obsidian and espresso tones, illuminated by golden embers and brushed warm brass.
- **Arabic-First Hierarchy:** Designed natively for Right-to-Left (RTL) reading experiences, giving pride of place to fluid typographic proportion, sweeping calligraphic cadence, and balanced whitespace.
- **Sensory Presence:** Surfaces suggest matte paper packaging, velvet espresso crema, and metallic foil stamping, evoking the feel of handling exclusive small-batch roasts in an intimate, dimly lit salon.

## Colors

The color palette translates the visual signature of the brand's metallic golden script, roasted beans, and deep matte vessel surfaces into an accessible digital architecture.

- **Primary Gold (`#D4A359`):** Represents the gilded calligraphic identity. Used for primary CTAs, active highlights, key iconography, and premium accents. Its illuminated state (`#F3C97E`) provides elevated hover presence.
- **Secondary Roast (`#8A5A36`):** Captures the warm hues of freshly roasted Arabica beans. Serves as a grounding accent, subtle borders, tags, and category chips.
- **Tertiary Crema (`#F5E6CA`):** A soft, warm parchment tint used for primary text headers, crisp typographic details, and moments needing softer radiance without harsh white glare.
- **Neutral Obsidian (`#0D0B0A`):** The foundational night backdrop. Canvas surfaces stack progressively from `#0D0B0A` (base background) through `#171311` (surface card) to `#241C18` (elevated interaction layer).
- **Text & Contrast:** Primary text utilizes `#F5E6CA` (88% opacity), secondary copy utilizes warm muted brown-gray (`#A89F91`), and interactive borders leverage warm gold hairline strokes (`rgba(212, 163, 89, 0.25)`).

## Typography

Typography honors Arabic editorial tradition, contrasting the poetic curves of **Amiri** for hero displays with the architectural legibility of **Cairo** for functional UI, telemetry, and pricing.

- **RTL Baseline Alignment:** Cairo and Amiri require adjusted vertical padding and generous line-heights (1.5x–1.7x) to accommodate extensive diacritics, descenders, and poetic ligatures without clipping.
- **Display Treatment:** Hero titles in Amiri evoke classical literary warmth and premium packaging typography. When paired with gold gradient clipping, they echo the brand's metallic calligraphy.
- **Numerals & Metrics:** Arabic-Indic or Western numerals retain geometric consistency across roast flavor profiles, weights (e.g. ٢٥٠ غ / 250g), and roasting batch dates.

## Layout & Spacing

The layout employs a high-end 12-column fluid grid tailored for spacious desktop viewports and seamless RTL reflow on tablets and mobile devices.

- **Desktop (1024px+):** 12 columns, 32px (`2rem`) gutters, and dynamic margins of 56px (`3.5rem`) expandable up to a centered container max-width of `1440px`. Layout reads organically from right to left, placing hero coffee features and primary narratives in the right visual pole.
- **Tablet (768px - 1023px):** 8 columns, 24px (`1.5rem`) gutters, 32px margins. Product catalogs transition into dual-column cards with persistent right-aligned filters.
- **Mobile (< 768px):** 4 columns, 16px gutters, 20px canvas margins. Interactive product showcases and origin notes stack vertically with fluid edge-to-edge tactile imagery.
- **Spacing Cadence:** Vertical breathing room between curated collection rows utilizes `space-xl` (48px) to reinforce an unhurried, gallery-like commerce presence.

## Elevation & Depth

Visual hierarchy is generated without heavy drop shadows, instead using **Chiaroscuro Tonal Stacking** and **Warm Amber Diffusion**:

- **Ground (Level 0):** Pure matte black-charcoal (`#0D0B0A`).
- **Surface (Level 1):** Rich coffee cellar tint (`#171311`) with an ultra-fine perimeter line: `border: 1px solid rgba(212, 163, 89, 0.12)`.
- **Raised (Level 2):** Elevated cards and drawers (`#221A15`) featuring an ambient warm amber halo: `box-shadow: 0 12px 32px -8px rgba(212, 163, 89, 0.08), 0 4px 12px rgba(0, 0, 0, 0.6)`.
- **Floating Overlays & Dialogs (Level 3):** Frosted smoky glass with backdrop blur: `backdrop-filter: blur(16px)`, background `rgba(23, 19, 17, 0.82)`, and subtle metallic borders `rgba(212, 163, 89, 0.3)`.

## Shapes

The design uses **Soft Geometric Silhouettes** (`roundedness: 1`), conveying the structured, crisp edges of premium boxed coffee beans combined with subtly softened corners:

- **Base Radius (0.25rem / 4px):** Used on input elements, minor tags, and table cells.
- **Large Radius (0.5rem / 8px):** Applied to product cards, packaging display containers, and modal dialogs.
- **Extra Large (0.75rem / 12px):** Reserved for elevated sensory tasting notes and featured roaster callouts.
- **Pill Exception:** Status pills and tasting notes badges (e.g., "تحميص داكن", "إثيوبيا يرجاشيفي") use full radius (9999px) to mimic natural coffee bean cross-sections.

## Components

### Buttons
- **Primary Action (Gold Foil):** Background gradient from `#D4A359` to `#B6833D`, text in obsidian `#0D0B0A` with bold Cairo weight, 0.25rem radius. Hover triggers an inner golden shimmer and subtle warm glow (`box-shadow: 0 0 20px rgba(212, 163, 89, 0.35)`).
- **Secondary (Obsidian & Wire):** Transparent background with `1px solid rgba(212, 163, 89, 0.4)`, text in `#F5E6CA`. Hover transitions background to `rgba(212, 163, 89, 0.1)`.
- **Text Link:** Crema text with an animated gold underline growing from right to left upon hover.

### Cards (Product & Origin Showcase)
- Dark obsidian base (`#171311`), 8px border radius, 1px gold hairline border (`rgba(212, 163, 89, 0.15)`).
- Image area showcases coffee packaging and steam plumes over deep dark vignettes. Hover induces a gentle 1.02x scale on product visuals with border luminescence increasing to `rgba(212, 163, 89, 0.5)`.

### Chips & Flavor Tags
- Rounded pill containers (`padding: 4px 12px`) rendered in `#241C18` with subtle amber text (`#D4A359`).
- Tasting notes tags (e.g., "شوكولاتة داكنة", "هيل", "كراميل") feature an optional leading golden icon or dot.

### Form Inputs & Search
- Dark matte background (`#130F0D`), padded right-to-left for Arabic glyphs.
- Border is muted roast tone (`rgba(138, 90, 54, 0.3)`), shifting cleanly on focus to gold (`#D4A359`) with a soft inner amber ambient reflection. Placeholder text in `#7E7365`.

### Lists & Menu Tiers
- Menu items delineated by subtle gradient divider lines (`radial-gradient(ellipse at right, rgba(212, 163, 89, 0.25), transparent 70%)`).
- Arabic titles set in Cairo Bold on the right, with prices rendered in gold Amiri numerals on the left.

### Custom Component: Coffee Profile Meter
- Specialized radial or linear progress meter indicating Roasting Level (درجة التحميص), Acidity (الحموضة), and Body (القوام) rendered with gold gradient fills over charcoal groove tracks.