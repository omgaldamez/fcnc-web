# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static web application for **"Fundamentos Cuantitativos para Negocios Creativos"** (a 15-week course by CENTRO teaching quantitative reasoning through real creative business scenarios. No build system, no npm, no framework) just HTML, CSS, and vanilla JavaScript.

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
├── index.html           # Course landing page: lists all 15 weeks by unit
├── assets/styles.css    # Shared design system (variables, layout, all components)
├── glosario/
│   ├── index.html       # Cumulative glossary, renders terminos.csv client-side
│   └── terminos.csv     # termino,definicion,semana,semana_titulo,categoria_principal,categorias_secundarias
├── gamma-teoria-semana-XX.md   # Source content for each week's Gamma theory deck
└── semana-XX/
    └── index.html       # One self-contained module per week
```

Each `semana-XX/index.html` is a **fully self-contained module** that links back to the root. All weeks share `../assets/styles.css`. The only external dependency is jsPDF 2.5.1 (loaded via CDN in weeks that generate PDFs).

## Week Module Structure

Each week module follows a tabbed layout with four sections:
1. **Teoría**: embedded presentation (Gamma App iframe)
2. **Auditoría**: interactive case study with sliders, dynamic calculations, charts
3. **Ficha de tu negocio** (name varies by week, e.g. "Tu tablero de supuestos"): student's own business form (feeds into PDF export)
4. **Recursos**: NotebookLM video + audio embeds (2-column `.grid-two`), plus a graded reflection accordion below each card

The PDF generation (`Generar reporte PDF` / `Generar tablero PDF` button) uses jsPDF with inline layout code: there is no separate JS file, all logic lives in `<script>` tags inside the week's `index.html`.

### Recursos tab pattern

- Video card and audio card sit in a `.grid-two.grid-two-parejo` (2 columns). Directly below them, in the same grid, sit two `.acordeon.acordeon-col` blocks (video reflection, then audio reflection, in that order) so the grid naturally lays out as 2 rows × 2 columns: card row on top, its matching reflection accordion underneath.
- Each `.acordeon` wraps a native `<details>/<summary>` pair; `.acordeon-contenido` holds 1-2 prose paragraphs summarizing the audio/video plus an "Preguntas de reflexión" list. These questions are a graded deliverable, not optional review: each question should explicitly ask the student to develop the answer (example, number, or calculation), not just answer in one line.
- A `.entrega-nota` paragraph sits above the grid, naming the Brightspace activity the student uploads to. Naming convention: **S0X · Reflexión audio y video** (zero-padded session number, e.g. S01, S02, S09, S15). Keep this `S0X` numbering convention consistent for any future session-numbered identifier across the app (Brightspace activity names, filenames, etc.).
- Each reflection question has its own `<textarea class="reflexion-textarea" minlength="N">`, inside a `.reflexion-item`, grouped under a `.reflexion-bloque` (`data-bloque` names the block, e.g. "Video · <título>"). A second, independent fab/PDF pair (`fabReflexion` / `fabAvisoReflexion` / `generarPDFReflexion()`) lives alongside the Ficha's fab and only shows while the Recursos tab is active; it enforces the `minlength` on each textarea (default 150 characters) before marking the report as complete, same warn/ok pattern as the Ficha PDF. The `generarPDFReflexion()` JS is written generically (reads `document.title`, walks `.reflexion-bloque`/`.reflexion-item` in the DOM) so it can be copied verbatim into new weeks without edits.

## Design System (`assets/styles.css`)

- **Colors**: Blue `#2B579A` (primary), Orange `#E8792F` (accent), defined as CSS custom properties
- **Typography**: Fraunces (serif headers), Public Sans (body), IBM Plex Mono (data/labels): all from Google Fonts
- **Breakpoint**: 820px (two-column → single-column)
- **Components**: `.card`, `.ticket`, `.tab-*`, `.slider-*`, `.gauge-*`, `.bar-chart-*`, `.acordeon` (native `<details>`; `.acordeon-col` modifier removes the outer max-width/padding so it can sit inside a `.grid-two` cell), `.entrega-nota` (callout for a gradable deliverable/upload instruction)
- **Style rule**: no em dashes inside running text anywhere in student-facing content or app copy (this file included). Use parentheses for an aside, a colon to introduce an explanation, or `·` (middle dot, already used as a label separator like "NotebookLM · Video") for title/header separators.

## Adding New Weeks

1. Copy `semana-01/` to `semana-XX/`
2. Update the case study data, sliders, and calculations for the new week's topic
3. Update root `index.html` to change the week's status from `Próximamente` to `Disponible` and add the link
4. All Spanish content; currency formatting uses `es-MX` locale

## Key Conventions

- JavaScript is written inline in `<script>` tags inside each HTML file: no separate `.js` files
- Interactive calculations update live via `oninput` callbacks on sliders and inputs
- PDF layout is hand-coded with jsPDF's coordinate system (units in mm, origin top-left)
- Progress tracking is done by counting non-empty key fields and updating a `<progress>` bar
- New glossary terms go in `glosario/terminos.csv`, one row per term, never rewritten: `categoria_principal` is exactly one of `general` / `matematico` / `negocio`; `categorias_secundarias` is a `;`-separated list of up to 3 tags from the fixed set defined in `glosario/index.html` (`ETIQUETAS_SEC`: fundamentos, proporcion-tasa, palancas, costos, notacion). Introducing a new secondary tag means adding both a CSS color (`.tag-sec.<tag>`) and a legend entry, not just a CSV value. The CSV's simple client-side parser supports quoted fields with embedded commas, but does not support escaped quotes inside a field, so avoid literal `"` characters within any field.
