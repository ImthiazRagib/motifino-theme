  What It Does

  A multi-step belt bundle customizer for Motifino (Italian luxury belts).
  Customers build a custom bundle by picking a tier and configuring
  individual belts.
  
  ---
  5-Screen Flow

  1. Selector — Choose a tier: Single (1), Double (2), Triple (3), or
  Infinity (4+)
  2. Composer — For each belt, pick:
    - Length: 130cm or 150cm
    - Buckle: 4 styles (Classic Matt, Silver, Gold, Mirror Chrome)
    - Strap: 9 colors (Nero, Marrone, Cognac, White, Sand, 2× Croco, Blue,
  Gray)
    - Live preview photo updates on every selection, plus a "worn" modal and
   360° spin viewer
  3. Review — See all belts, edit/delete, add more (moves to Infinity tier),
   see tier pricing
  4. Cart — Qty controls per bundle, shows total
  5. Confirm → Confirmed — Final review then checkout

  ---
  Data Model
  
  State is persisted to localStorage (motifino:bundle:v1, 7-day TTL).

  What gets added to the Shopify cart:
  - One main bundle variant (determined by total belt count)
  - Extra belt variants for each belt beyond 4 (Infinity tier)
  - NFC card per belt
  - Hidden strap + buckle variants (€0, for inventory tracking only)
  - All linked by a _bundle_id property for grouped removal

  Pricing:
  - 1–4 belts: €49.99 / €79.99 / €99.99 / €119.99
  - 5+ belts: Infinity base + (qty − 4) × €19.99

  ---
  Config

  - bundle-builder-catalog.json — SKU → Shopify variant ID map (27 entries)
  - bundle-builder-media.json — All photo URLs: per-strap, per-buckle, and
  per-combination (strap + length + buckle)
  - Section schema (Liquid) exposes all IDs and settings to the theme editor

  ---
  Key Files

  File: assets/bundle-builder.js
  Purpose: Core app logic (~2368 lines)
  ────────────────────────────────────────
  File: assets/bundle-builder.css
  Purpose: Base styles
  ────────────────────────────────────────
  File: assets/bb-screen-composer.css
  Purpose: Carousel + hero styles
  ────────────────────────────────────────
  File: assets/bb-screen-review.css
  Purpose: Review layout
  ────────────────────────────────────────
  File: sections/bundle-builder.liquid
  Purpose: Section shell + schema + window globals
  ────────────────────────────────────────
  File: snippets/bb-screen-composer.liquid
  Purpose: Composer DOM
  ────────────────────────────────────────
  File: snippets/bb-screen-review.liquid
  Purpose: Review DOM

  What do you want to change or build on top of this?




  <!-- ----------------- -->

Here are your theme commands for 099701-dd.myshopify.com:

List all themes:


shopify theme list --store 099701-dd.myshopify.com
Pull theme:
shopify theme pull --store 099701-dd.myshopify.com --theme 192309952838

Push theme:
shopify theme push --store 099701-dd.myshopify.com --theme 192362152262

Push unpublished (safe preview):
shopify theme push --store 099701-dd.myshopify.com --theme 192309952838 --unpublished

Dev (live preview with hot reload):
shopify theme dev --store 099701-dd.myshopify.com --theme THEME_ID

Run the list command first to get your THEME_ID, then substitute it into the pull/push commands.


MOTIFINO - 1	56856499913030
MOTIFINO - 2	56856501223750
MOTIFINO - 3	56856511021382
EXTRA MOTIFINO - 4	56856511971654