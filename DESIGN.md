---
name: PokéVault
colors:
  surface: '#faf8ff'
  surface-dim: '#d6d9e9'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedfd'
  surface-container-high: '#e5e7f7'
  surface-container-highest: '#dfe2f1'
  on-surface: '#171b26'
  on-surface-variant: '#5b403f'
  inverse-surface: '#2c303c'
  inverse-on-surface: '#eef0ff'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#745b00'
  on-secondary: '#ffffff'
  secondary-container: '#ffcb09'
  on-secondary-container: '#6f5700'
  tertiary: '#0058be'
  on-tertiary: '#ffffff'
  tertiary-container: '#2170e4'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#ffe08d'
  secondary-fixed-dim: '#f2c000'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#faf8ff'
  on-background: '#171b26'
  surface-variant: '#dfe2f1'
typography:
  display:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  price-lg:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
  price-md:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system defines a minimalist, flat, and modern e-commerce experience tailored for trading card game collectors and enthusiasts. The aesthetic balances collector prestige with utilitarian e-commerce clarity. Rather than leaning on overt novelty or heavy skeuomorphism, the visual voice relies on crisp architectural alignment, disciplined whitespace, pure flat color fills, and sharp contrast. 

The visual style is strictly Flat Minimalist. Surfaces avoid gradients, drop shadows, and glassmorphic blurs entirely. Visual hierarchy is established solely through precise typographic scale, alternating surface fields (#FFFFFF and #F5F7FA), and fine architectural divider lines (#E4E8EF). High-saturation thematic accents—Poké Red (#E63946), Electric Yellow (#FFCB05), and Cerulean Blue (#3B82F6)—are deployed sparingly as functional focal points (actions, price callouts, link triggers), ensuring collector cards remain the visual hero of every screen.

## Colors

The palette is light-first, crisp, and high-contrast, structured to keep card artwork vibrant without visual interference:

- **Primary Canvas & Surfaces:**
  - Base Background: `#FFFFFF` (pure white for cards and primary layout canvas).
  - Alternate Section Surface: `#F5F7FA` (cool neutral tinted white for filters, banners, and table headers).
  - Divider / Stroke: `#E4E8EF` (hairline structural separators and input borders).

- **Typography & Content:**
  - Primary Text: `#1B1F2A` (deep slate ink for maximum legibility on white surfaces).
  - Secondary Text: `#5B6475` (slate gray for card metadata, set numbers, and secondary attributes).
  - Muted Text: `#8D99AE` (timestamps, placeholder values, and disabled indicators).

- **Brand & Action Accents:**
  - Pokémon Red (`#E63946`): Primary call-to-actions, cart counters, live stock badges, and critical action triggers.
  - Pikachu Yellow (`#FFCB05`): Price highlights, promotion tags, and selected rating stars. Paired with `#1B1F2A` text for readability.
  - Cerulean Blue (`#3B82F6`): Hyperlinks, active tab indicators, and active input focus rings.

- **Rarity Token Accents:**
  - Common: Background `#F1F3F5`, Text `#495057`, Border `#E9ECEF`.
  - Rare: Background `#EFF6FF`, Text `#1D4ED8`, Border `#DBEAFE`.
  - Holo: Background `#FEF9C3`, Text `#854D0E`, Border `#FEF08A`.
  - Ultra Rare: Background `#F3E8FF`, Text `#6B21A8`, Border `#E9D5FF`.

## Typography

The typographic hierarchy uses a geometric sans headline font (Outfit) for confident, structured titles, and an ultra-legible neutral sans (Inter) for functional UI copy, card statistics, pricing grids, and long-form specifications.

Titles use heavy weights (700 and 800) to anchor the page, contrasting with clean, rhythmic body text. Numbers and prices are treated as structural design elements: primary prices leverage bold geometric numerals to establish instant value recognition. Line heights are compact to preserve vertical density in catalog grids while maintaining high legibility.

## Layout & Spacing

The layout is built upon a 12-column fluid grid system on desktop (max width: 1320px) transitioning into a 6-column grid on tablet and a 2-column or 4-column layout on mobile.

- **Desktop (>= 1024px):** 12 columns, 1.25rem (20px) gutters, 2rem (32px) outer margins. Catalogs deploy a strict 4-column or 5-column product tile pattern.
- **Tablet (768px - 1023px):** 6 columns, 1rem (16px) gutters, 1.5rem (24px) margins.
- **Mobile (< 768px):** 2 columns for card grids to maximize visual preview width without horizontal scrolling, 0.75rem (12px) gutters, and 1rem (16px) margins.

Spacing follows an 8px base rhythm. Content blocks and sections transition cleanly across full-width alternate strips of `#FFFFFF` and `#F5F7FA`, demarcated with `#E4E8EF` 1px horizontal borders instead of container elevations.

## Elevation & Depth

This design system uses a strict **Zero-Elevation / Pure Flat** model:
- **No Shadows:** `box-shadow: none` across all components, including popovers, dropdowns, cards, and buttons.
- **Hairline Outlines:** Depth and bounding contexts are established exclusively through 1px solid borders in `#E4E8EF`.
- **Tonal Contrast:** Active, resting, and selected states rely entirely on background color shifts between `#FFFFFF`, `#F5F7FA`, and light tinted fills.
- **Layering Overlays:** Modals and flyout drawers use a flat semi-translucent backdrop (`rgba(27, 31, 42, 0.4)`) and a crisp white container framed with an `#E4E8EF` border.

## Shapes

The shape system is controlled, subtle, and geometric. It avoids round, playful aesthetics in favor of crisp, engineered corners:
- Standard components (buttons, input fields, badges, and catalog tiles) use a unified 6px to 8px border radius (`roundedness: 1`).
- Card artwork retains its inner physical 6px contour.
- Small indicator badges (such as quantity bubbles) maintain an exact circle or 4px micro-radius, avoiding oversized pill shapes.

## Components

### Card Containment Rule
To preserve a clean editorial architecture, rectangular bordered cards are **strictly reserved** for:
1. Product Catalog Items (Pokémon card preview tiles).
2. Cart & Checkout Summary Box (Order total summary).
All other elements (filter sidebars, navigation bars, search bars, customer reviews, card specifications tables) must be rendered borderless directly on the canvas or segmented using 1px horizontal `#E4E8EF` rule lines and alternating surface fills.

---

### Buttons
- **Primary:** Solid `#E63946` fill, `#FFFFFF` bold text, 0 border, 8px radius. Hover: `#D62839`. Active: `#BA1829`.
- **Secondary / Action Outlined:** 1px solid `#E4E8EF` border, `#FFFFFF` background, `#1B1F2A` text. Hover: `#F5F7FA` background, `#1B1F2A` text.
- **Tertiary / Link:** Transparent background, `#3B82F6` text, no border. Hover: text underline.
- **Yellow Accent Button (Special Deals):** Solid `#FFCB05`, `#1B1F2A` text, 0 border. Hover: `#E6B800`.

### Catalog Product Card
- **Structure:** 1px solid `#E4E8EF` border, pure white `#FFFFFF` surface, 8px radius, no shadows.
- **Padding:** 12px internal padding.
- **Image Frame:** `#F5F7FA` neutral background pocket for the card image with consistent aspect ratio.
- **Hover State:** Border transitions cleanly from `#E4E8EF` to `#1B1F2A` (or `#3B82F6`) with no elevation lift.

### Rarity Chips & Tags
- Height: 24px, 6px border radius, 8px horizontal padding.
- 1px matching tinted border, flat light-tinted background, medium bold uppercase typography.
- Variations:
  - *Common:* `#F1F3F5` fill, `#495057` text, `#E9ECEF` border.
  - *Rare:* `#EFF6FF` fill, `#1D4ED8` text, `#DBEAFE` border.
  - *Holo:* `#FEF9C3` fill, `#854D0E` text, `#FEF08A` border.
  - *Ultra Rare:* `#F3E8FF` fill, `#6B21A8` text, `#E9D5FF` border.

### Inputs & Search Bars
- 1px solid `#E4E8EF` border, `#FFFFFF` fill, 8px radius, 12px 16px padding.
- Placeholder text: `#8D99AE`.
- Focus state: 1.5px solid `#3B82F6`, zero glow or blur.

### Form Controls (Checkboxes & Radios)
- Checkboxes: 18x18px square with 4px border radius. 1px solid `#E4E8EF`. Checked: Solid `#E63946` fill with white checkmark.
- Radio Buttons: 18x18px circle. Checked: `#E63946` ring with solid inner dot.

### Cart Summary Container
- 1px solid `#E4E8EF` border, `#FFFFFF` background, 8px radius.
- Divided internally with 1px `#E4E8EF` rules separating subtotal, shipping, and grand total.
- Total price highlighted using `price-lg` in `#1B1F2A` with `#FFCB05` accent tag indicator.