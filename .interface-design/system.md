# Interface Design System — eric-li.ca

Direction saved from the "Index" build. Hold to these on future edits.

## Direction & feel
Swiss monochrome minimalism — "fewer claims, more receipts." Stark, confident, editorial-restraint. The site is a table of contents for measurable work. Color is not decorative.

## Depth strategy
**Borders only.** No shadows for elevation. Separation via `--line-soft`, structure via `--line`, section rules via `--line-strong`. Sticky nav uses a blur + hairline, not a shadow.

## Spacing
Base unit **8px**. Scale tokens `--sp-1..9` (4/8/12/16/24/32/48/64/96). Sections `padding-block: 64px` (48 on mobile). Symmetrical padding.

## Type
- `--sans`: Helvetica Neue stack (UI + headlines). `--mono`: SF Mono stack (all labels, metrics, meta).
- Hero: `clamp(38px,7vw,60px)`, weight 700, letter-spacing **-0.035em**, `text-wrap: balance`.
- Hierarchy via **weight + color**, not size alone. Four text levels: `--ink` / `--graphite` / `--mute` / `--faint`.
- Metrics/numbers always `.mono` + `tabular-nums`.

## Color / tokens
One hue, lightness only. Neutrals: `--paper --raise --ink --graphite --mute --faint`. The ONLY chroma: lane pips `--lane-ai` (green), `--lane-bi` (blue) — 6px dots, nothing else. Dark mode inverts values, desaturates lanes, leans on borders.

## Signature
The **delta** — `metric  from → to`, the gain in `--ink`/700, the arrow in `--mute`. Carried from résumé numbers into every project row.

## Key patterns
- **Section head:** mono label left, mono count/link right, hard `--line-strong` rule under. The "index" motif.
- **Work row:** grid `48px · 1fr · auto` — index number / body / (case study + repo). Hairline `--line-soft` between rows, none on last.
- **Button primary:** ink bg, paper text, `10px 16px`, radius `--r-2` (9px), `:active scale(0.97)`.
- **GitHub button:** always visible — nav (primary) + hero (outline) + per-row repo link + footer.
- Radius scale: inputs/tags `--r-1` 6px · buttons `--r-2` 9px · cards `--r-3` 14px.

## Motion
`--ease-out: cubic-bezier(0.23,1,0.32,1)`. Durations <200ms. Arrows nudge `translateX(3px)` on hover. Respect `prefers-reduced-motion`.

## Stack
Astro 5, zero-JS baseline, single `global.css`, content in `src/data/content.ts`. Dark mode = `data-theme` on `<html>` + no-flash inline script + localStorage.
