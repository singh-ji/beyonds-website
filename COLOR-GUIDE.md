# BeyondShift Color System

Version 1.0 · Website, product apps, admin panels, and analytics dashboards

## 1. Brand character

The BeyondShift palette should feel grounded, hopeful, human, and trustworthy.

- **Midnight Navy** creates structure, authority, and focus.
- **Warm Paper** keeps interfaces approachable and avoids a clinical white look.
- **Shift Orange** represents forward movement and is the primary action color.
- **Growth Sage** represents learning, wellbeing, and steady progress.
- **Sunrise Gold** is an expressive accent for dark surfaces.

The product should remain mostly neutral. Use brand colors deliberately rather than filling every component with color.

## 2. Core palette

| Token | Hex | Primary role |
|---|---:|---|¯
| `navy.900` | `#101920` | Deep footer, highest-emphasis dark surface |
| `navy.800` | `#17222C` | Primary text and primary dark surface |
| `navy.700` | `#24333E` | Elevated surface on navy |
| `cream.50` | `#FFFAF0` | Hovered warm surface |
| `cream.100` | `#F5F1E7` | Default application background |
| `cream.200` | `#E9E1D2` | Secondary background and grouped sections |
| `orange.500` | `#EF8B31` | Primary action and brand accent |
| `orange.400` | `#FF9B40` | Primary-action hover |
| `gold.300` | `#FFC97C` | Accent on dark surfaces only |
| `sage.600` | `#5E7964` | Secondary brand surface and positive emphasis |
| `slate.600` | `#5C666D` | Secondary text on light surfaces |
| `slate.500` | `#77838A` | Low-emphasis text on dark surfaces |

## 3. Semantic color schema

Product code should consume semantic tokens, not raw palette values. This lets teams adjust themes without rewriting components.

| Semantic token | Value | Use |
|---|---:|---|
| `bg.canvas` | `cream.100` | App/page background |
| `bg.subtle` | `cream.200` | Filter areas, grouped sections, empty states |
| `bg.surface` | `#FFFFFF` | Cards, menus, drawers, tables |
| `bg.inverse` | `navy.800` | Dark navigation, feature panels, footer |
| `bg.inverseRaised` | `navy.700` | Cards placed on dark surfaces |
| `text.primary` | `navy.800` | Headings and body text |
| `text.secondary` | `slate.600` | Supporting copy and metadata |
| `text.inverse` | `#FFFFFF` | Text on navy or sage |
| `text.inverseMuted` | `#AEB8BD` | Secondary text on navy |
| `text.brand` | `orange.500` | Brand highlights, labels, active indicators |
| `action.primary` | `orange.500` | Primary buttons and major calls to action |
| `action.primaryHover` | `orange.400` | Primary-button hover |
| `action.onPrimary` | `navy.800` | Text/icons inside orange buttons |
| `action.secondary` | `navy.800` | Secondary button border and text |
| `focus.ring` | `orange.500` | Keyboard focus ring |
| `border.default` | `navy.800 / 16%` | Card, table, and field boundaries |
| `border.inverse` | `cream.100 / 18%` | Dividers on navy |
| `selection.active` | `orange.500 / 14%` | Selected rows and navigation items |

## 4. Recommended distribution

For standard product screens:

- **70% neutral:** cream canvas, white cards, navy text.
- **20% structural:** borders, secondary text, dark navigation, grouped backgrounds.
- **10% brand:** orange actions, sage progress cues, gold highlights.

Only one solid orange primary button should dominate a view or card group. Secondary actions should be outlined, text-only, or neutral.

## 5. App and dashboard application

### Navigation

- Use `navy.800` for a dark sidebar or `cream.100` for a light sidebar.
- The active destination uses a 3px `orange.500` indicator.
- On dark navigation, use white for active text and `#AEB8BD` for inactive text.
- Avoid orange-filled navigation items; orange should identify the active edge or icon.

### Cards and panels

- Default cards: white on `cream.100`, with `border.default`.
- Grouped/secondary panels: `cream.200`.
- Featured dark cards: `navy.800`, with `text.inverse`.
- Do not use shadows as the main separation method. Prefer borders and surface contrast.

### Tables

- Header background: `cream.200` or transparent.
- Header text: `text.secondary`; uppercase is optional for short labels.
- Row dividers: `border.default`.
- Hovered row: `cream.50`.
- Selected row: `selection.active`, with an orange left indicator.
- Zebra striping is discouraged unless a table is extremely dense.

### Forms

- Inputs use white or transparent surfaces with navy text.
- Default border: `border.default`; focused border and ring: `focus.ring`.
- Placeholder text must be darker than `#8B918D` on cream/white.
- Required or invalid states use semantic status colors, not orange.

### Buttons

| Variant | Background | Label | Border |
|---|---|---|---|
| Primary | `orange.500` | `navy.800` | none |
| Primary hover | `orange.400` | `navy.800` | none |
| Secondary | transparent | `navy.800` | `navy.800` |
| Inverse | transparent | white | `cream.100 / 45%` |
| Destructive | `status.danger` | white | none |
| Disabled | `navy.800 / 8%` | `navy.800 / 38%` | none |

### Data visualization

Use the series in this order so charts remain consistent across teams:

1. `orange.500` — primary metric
2. `sage.600` — secondary metric
3. `navy.700` — third metric
4. `gold.300` — fourth metric
5. `data.blue` — fifth metric
6. `data.plum` — sixth metric

Never communicate chart meaning through color alone. Add labels, distinct line styles, or markers. Reserve red and amber for status meaning; do not use them as ordinary categorical series.

## 6. Status colors

Status colors extend the brand system for applications while remaining visually compatible.

| Token | Strong | Soft background | Use |
|---|---:|---:|---|
| `status.success` | `#3F6B4A` | `#E2EDE3` | Completed, healthy, approved |
| `status.warning` | `#9A641F` | `#F8E8CC` | Needs attention, pending risk |
| `status.danger` | `#A84330` | `#F5DDD7` | Error, destructive, overdue |
| `status.info` | `#396A86` | `#DDEAF0` | Informational, in progress |

Orange remains a brand/action color. It should not automatically mean warning.

## 7. Accessibility rules

- `navy.800` on `cream.100` has a **14.30:1** contrast ratio and is approved for all text.
- `slate.600` on `cream.100` has a **5.21:1** ratio and is approved for normal secondary text.
- `orange.500` on `navy.800` has a **6.46:1** ratio and is approved for text and icons.
- `gold.300` on `navy.800` has a **10.68:1** ratio and is approved for dark-mode highlights.
- `orange.500` on `cream.100` is only **2.21:1**. Do not use orange for small body text on cream.
- White on `sage.600` has a **4.78:1** ratio and is approved for normal text.
- `cream.100` on `sage.600` is only **4.24:1**; reserve it for large headings or use white instead.
- Text below 18px should meet at least WCAG AA 4.5:1. Large text and essential UI boundaries should meet at least 3:1.
- Focus must never be indicated by color alone; use the 2px orange ring with a 4px offset.

## 8. Dark-mode mapping

Dark mode is a semantic swap, not a color inversion.

| Light token | Dark value |
|---|---:|
| `bg.canvas` | `navy.900` |
| `bg.subtle` | `navy.800` |
| `bg.surface` | `navy.700` |
| `text.primary` | `#FFFFFF` |
| `text.secondary` | `#AEB8BD` |
| `border.default` | `cream.100 / 18%` |
| `action.primary` | `orange.500` |
| `action.onPrimary` | `navy.800` |

Do not change the meaning of status colors between themes. Use their strong colors for icons/text and derive dark soft surfaces at approximately 18–24% opacity.

## 9. Governance

1. Teams import `design-tokens.json` as the shared source of truth.
2. Components reference semantic tokens such as `text.primary`, never `#17222C` directly.
3. New colors require a documented role, light and dark behavior, and contrast validation.
4. Product screenshots and reviews should flag any unexplained raw hex value.
5. Version token changes using semantic versioning: breaking role changes increase the major version; additions increase the minor version; corrections increase the patch version.

## 10. CSS mapping example

```css
:root {
  --color-bg-canvas: #f5f1e7;
  --color-bg-surface: #ffffff;
  --color-text-primary: #17222c;
  --color-text-secondary: #5c666d;
  --color-action-primary: #ef8b31;
  --color-action-on-primary: #17222c;
  --color-border-default: rgb(23 34 44 / 16%);
  --color-focus-ring: #ef8b31;
}
```

The accompanying `design-tokens.json` contains the complete machine-readable schema.
