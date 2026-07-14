# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static web application for **"Fundamentos Cuantitativos para Negocios Creativos"** — a 15-week course by CENTRO teaching quantitative reasoning through real creative business scenarios. No build system, no npm, no framework — just HTML, CSS, and vanilla JavaScript.

## Running Locally

Open `index.html` directly in a browser, or serve with a local HTTP server:

```bash
python -m http.server 8000
# or
npx http-server
```

No build step, no dependencies to install.

## Architecture

```
fcnc-web/
├── index.html           # Course landing page — lists all 15 weeks by unit
├── assets/styles.css    # Shared design system (variables, layout, all components)
└── semana-XX/
    └── index.html       # One self-contained module per week
```

Each `semana-XX/index.html` is a **fully self-contained module** that links back to the root. All weeks share `../assets/styles.css`. The only external dependency is jsPDF 2.5.1 (loaded via CDN in weeks that generate PDFs).

## Week Module Structure

Each week module follows a tabbed layout with three sections:
1. **Teoría** — embedded presentation (Gamma App iframe)
2. **Auditoría** — interactive case study with sliders, dynamic calculations, charts
3. **Ficha de tu negocio** — student's own business form (feeds into PDF export)

The PDF generation (`Generar reporte PDF` button) uses jsPDF with inline layout code — there is no separate JS file, all logic lives in `<script>` tags inside the week's `index.html`.

## Design System (`assets/styles.css`)

- **Colors**: Blue `#2B579A` (primary), Orange `#E8792F` (accent), defined as CSS custom properties
- **Typography**: Fraunces (serif headers), Public Sans (body), IBM Plex Mono (data/labels) — all from Google Fonts
- **Breakpoint**: 820px (two-column → single-column)
- **Components**: `.card`, `.ticket`, `.tab-*`, `.slider-*`, `.gauge-*`, `.bar-chart-*`, `.accordion-*`

## Adding New Weeks

1. Copy `semana-01/` to `semana-XX/`
2. Update the case study data, sliders, and calculations for the new week's topic
3. Update root `index.html` to change the week's status from `Próximamente` to `Disponible` and add the link
4. All Spanish content; currency formatting uses `es-MX` locale

## Key Conventions

- JavaScript is written inline in `<script>` tags inside each HTML file — no separate `.js` files
- Interactive calculations update live via `oninput` callbacks on sliders and inputs
- PDF layout is hand-coded with jsPDF's coordinate system (units in mm, origin top-left)
- Progress tracking is done by counting non-empty key fields and updating a `<progress>` bar
