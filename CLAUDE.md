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
├── index.html           # Course landing page: renders the 15-week list from sesiones.csv
├── sesiones.csv         # Release controller: per-session visibility + per-tab visibility
├── enlaces.csv          # All external links per session (Gamma, slides, NotebookLM video/audio)
├── assets/styles.css    # Shared design system (variables, layout, all components)
├── assets/sesiones.js   # Shared controller that reads sesiones.csv (only shared .js file)
├── glosario/
│   ├── index.html       # Cumulative glossary, renders terminos.csv client-side
│   └── terminos.csv     # termino,definicion,semana,semana_titulo,categoria_principal,categorias_secundarias
├── semana-XX/
│   └── index.html       # One self-contained module per week
└── sesiones/            # Teaching materials. NOT part of the deployed site: nothing here is linked from any page.
    ├── _curso/          # Cross-session: bitacora, contexto, methodology, the cumulative student workbook
    ├── S0X-Teoria/      # Per theory session: gamma-teoria-semana-XX.md, exported deck PDF, facilitator guide
    └── S0X-Lab/         # Per lab session: facilitator guide, class record, spreadsheets, audits
```

Sessions are named `S0X-Teoria` and `S0X-Lab` by syllabus week, not by calendar order. Editing anything under `sesiones/` never requires touching the site, and vice versa.

Each `semana-XX/index.html` is a **fully self-contained module** that links back to the root. All weeks share `../assets/styles.css`. The only external dependency is jsPDF 2.5.1 (loaded via CDN in weeks that generate PDFs).

## Frontera del temario

Ningún material puede usar una operación o un concepto que el temario aún no haya visto, sin importar el formato: presentación, app, hoja de cálculo o guía. Antes de entregar, revisar cada bloque contra la semana en que ese tema entra. Si un bloque necesita una herramienta futura, se reescribe con las que ya tienen o se pospone a la semana que corresponde. En caso de duda, se pospone.

Reference: the percentage operator belongs to Week 4, algebra to Weeks 6-7. A block that needs either one before its week is out of bounds even if the arithmetic is correct. This rule started as an app-only convention (the Week 1 margin slider was redesigned from percent to pesos) and was extended to every format after a spreadsheet block in S02-Lab compared 1/87 against 0.1/3.5 as percentages and had to be cut mid-session.

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

## Release control (`sesiones.csv`)

`sesiones.csv` is the single source of truth for what students can see. It is hand-edited by the instructor: no other file should be touched to open or close a session.

One row per session, columns: `sesion,titulo,unidad,estado,etiqueta,teoria,auditoria,ficha,recursos,glosario`

- `estado`: `disponible` (clickable), `proximamente` (visible in the list but greyed and not clickable), `oculta` (not rendered at all)
- `etiqueta`: optional custom badge text; blank falls back to "Disponible" / "Próximamente"
- `teoria` / `auditoria` / `ficha` / `recursos`: `1` shows that tab inside the week, `0` hides the tab button entirely. If the default active tab is off, the first enabled tab opens instead. If all four are off, the session renders as closed.
- `glosario`: `1` lets that session's terms into `glosario/index.html` and `glosario/red.html`. Terms from sessions that are not `disponible` are filtered out regardless.

`assets/sesiones.js` is the only shared `.js` file in the project and is a deliberate exception to the inline-JS convention below: it is cross-cutting and would otherwise be duplicated in 18+ files. It resolves `sesiones.csv` relative to its own `src`, so it works from the root, from `semana-XX/`, and from `glosario/`. It exposes `FCNC.pintarIndice(idContenedor)` (landing), `FCNC.aplicarSesion(n)` (week pages: access guard + tab visibility), and `FCNC.visiblesGlosario()` (glossary and network filter).

Because the app now fetches CSVs on every page, opening `index.html` by double-clicking will not work: use a local HTTP server. This is a soft gate for course pacing, not access control: the CSV is public and a student who reads it can reach a closed page.

## External links (`enlaces.csv`)

No external media URL is hardcoded in a week's HTML. `enlaces.csv` holds one row per session, columns: `sesion,gamma_url,presentacion_url,video_url,video_modo,audio_url,audio_modo`

- `gamma_url`: the Gamma deck. Either the normal `/docs/<id>` link or the `/embed/<id>` one: `assets/sesiones.js` normalizes it to `/embed/` before setting the iframe `src`. Blank hides the iframe and shows a "todavía no está publicada" note inside the Teoría panel.
- `presentacion_url`: file behind the "↓ Descargar sesión" button in the header. Blank hides the button.
- `video_url` / `audio_url`: the NotebookLM assets. Paste the Google Drive share link exactly as copied (`.../view?usp=...`); the code derives the `/preview` variant for the embedded player and a normalized `/view?usp=drive_link` for the download button. A non-Drive URL is used verbatim for both. Blank hides that whole card.
- `video_modo` / `audio_modo`: `ambos` (default, blank behaves the same), `embed` (player only, no download button), `descarga` (download button only, no player).

`FCNC.aplicarSesion(n)` calls `FCNC.aplicarEnlaces(n)` internally, so week pages need no extra call. The wiring depends on these ids existing in each week's HTML, which is why `semana-01/` is the template to copy: `descargaSesion`, `gammaFrame`, `cardVideo` / `videoFrame` / `videoDescarga`, `cardAudio` / `audioFrame` / `audioDescarga`. The frames ship with `src="about:blank"` and the download links with `href="#"` plus `display:none`, and JS fills and reveals them.

## Adding New Weeks

1. Copy `semana-01/` to `semana-XX/`
2. Update the case study data, sliders, and calculations for the new week's topic
3. Keep the `<script src="../assets/sesiones.js"></script>` + `FCNC.aplicarSesion(XX)` block at the end of `<body>`, updating the number. Leave the media ids and their placeholder `about:blank` / `#` values untouched.
4. Fill that session's row in `enlaces.csv` with the Gamma and Drive links
5. Open the week by setting its row in `sesiones.csv` to `disponible`. Do NOT edit `index.html`: the landing list is generated from the CSV.
6. All Spanish content; currency formatting uses `es-MX` locale

## Key Conventions

- JavaScript is written inline in `<script>` tags inside each HTML file: no separate `.js` files
- Interactive calculations update live via `oninput` callbacks on sliders and inputs
- PDF layout is hand-coded with jsPDF's coordinate system (units in mm, origin top-left)
- Progress tracking is done by counting non-empty key fields and updating a `<progress>` bar
- New glossary terms go in `glosario/terminos.csv`, one row per term, never rewritten: `categoria_principal` is exactly one of `general` / `matematico` / `negocio`; `categorias_secundarias` is a `;`-separated list of up to 3 tags from the fixed set defined in `glosario/index.html` (`ETIQUETAS_SEC`: fundamentos, proporcion-tasa, palancas, costos, notacion). Introducing a new secondary tag means adding both a CSS color (`.tag-sec.<tag>`) and a legend entry, not just a CSV value. The CSV's simple client-side parser supports quoted fields with embedded commas, but does not support escaped quotes inside a field, so avoid literal `"` characters within any field.
