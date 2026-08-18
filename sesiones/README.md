# `sesiones/` · Materiales de clase

Todo lo que sirve para **preparar y dar** una sesión vive aquí. Nada de esta carpeta está enlazado desde el sitio, así que se puede mover, renombrar o reorganizar sin tocar la web.

La raíz del repo se queda solo con lo que se publica: `index.html`, `evaluacion.html`, `assets/`, `glosario/`, `semana-XX/`, `sesiones.csv` y `enlaces.csv`.

---

## Cómo se nombra

Cada semana del temario tiene dos sesiones: **`S0X-Teoria`** y **`S0X-Lab`**, con el número a dos dígitos.

La numeración sigue la **semana del temario, no el calendario**. El laboratorio de la Semana 2 es `S02-Lab` aunque sea la cuarta sesión impartida del semestre.

Los identificadores de Brightspace ya publicados (`S01 · Reflexión audio y video`, `S02 · Tablero de supuestos v1`) se quedan como están, para no romper entregas en curso.

---

## Las tres fotos de cada laboratorio

Cada `S0X-Lab/` guarda el estado de la hoja de cálculo en tres momentos. Son fotos congeladas: una vez que la sesión pasa, no se vuelven a tocar.

| Archivo | Cuándo se genera | Qué es |
|---|---|---|
| `S0X-Lab-clase.xlsx` | antes de la sesión | lo que se repartió, con las celdas por construir vacías |
| `S0X-Lab-en-vivo.xlsx` | al terminar la sesión | lo que quedó armado en clase, **sin corregir**, con los errores incluidos |
| `S0X-Lab-resuelto.xlsx` | entre sesiones | la versión corregida, con formatos y notas, la que se devuelve la clase siguiente |

Si hubo versiones intermedias del resuelto, llevan sufijo: `S0X-Lab-resuelto-v1.xlsx`.

**El `-en-vivo` es el que más cuesta recuperar y el que más sirve.** El bloque de devolución de la sesión siguiente lo necesita proyectado al lado del resuelto. Se pide al cerrar el laboratorio, antes de generar la corrección.

---

## Qué va en cada carpeta

### `_curso/`

Lo que no pertenece a una sola sesión.

| Archivo | Qué es |
|---|---|
| `bitacora-fcnc-semestre.md` | Documento vivo. Tiene precedencia sobre los contextos estáticos: lo que realmente pasó gana sobre lo que se había planeado. |
| `contexto-fcnc-semestre.md` | Temario, audiencia, estructura del semestre. |
| `contexto-programa-intro-matematicas-centro.md` | El programa oficial de CENTRO. |
| `metodologia-transferible-cursos.md` | El método, escrito para poder reusarlo en otro curso. |
| `prompt-arranque-glosario-network-graph.md` | Arranque de la red de términos. |
| `FCNC-Modelo-de-tu-negocio.xlsx` | **El libro vivo del alumno.** Una pestaña por laboratorio, todas leyendo de `Tu negocio`. Este es el que crece. |
| `FCNC-Modelo-de-tu-negocio-RESUELTO.xlsx` | El mismo libro resuelto, con un negocio de ejemplo conectado de punta a punta. |

**Vivo y foto no son lo mismo, aunque hoy sean idénticos.** `FCNC-Modelo-de-tu-negocio.xlsx` y `S02-Lab/S02-Lab-clase.xlsx` tienen el mismo contenido en este momento, porque S02 es el laboratorio más reciente. En cuanto S03 le agregue su pestaña, el vivo avanza y la foto de S02 se queda como estaba. Ahí empieza a servir la separación.

### `S0X-Teoria/`

- `gamma-teoria-semana-XX.md`: la fuente del deck. **Su formato no se cambia**, porque es lo que Gamma resume bien.
- `gamma-S0X-Teoria.pdf`: el deck exportado, como registro de lo que realmente se proyectó.
- La guía de facilitador de esa sesión, las fuentes primarias del capítulo, los prompts y los formularios de revisión.

### `S0X-Lab/`

- Las tres fotos de la hoja de cálculo (arriba).
- La guía de facilitador del laboratorio, en `.md` y en `.docx`.
- `registro-S0X-Lab.md`: qué pasó realmente en clase, reconstruido celda por celda desde el `-en-vivo`.
- Las guías de lectura de la app y las auditorías de esa sesión.
- `respaldos/`: copias con marca de tiempo, de cuando se edita un `index.html` ya publicado.

---

## Dos reglas que salieron de tropezar

**Guardar siempre la hoja en vivo.** Al preparar S02-Lab se descubrió que la guía citaba números de memoria y se había perdido un síntoma del error de S01: el Camino B había salido en negativo en clase, o sea que el camino llamado "ganar mejor" apareció empeorando las cosas. Eso no estaba escrito en ningún lado.

**Guardar el PDF del Gamma.** El deck publicado y su `.md` fuente derivan entre sí: Gamma resume, reordena y agrega diapositivas. Sin el PDF no hay forma de auditar qué vio el grupo. Al recuperar los de S01 y S02 se confirmó que dos correcciones que se creían pendientes sí se habían aplicado.

---

## Al abrir una sesión de trabajo nueva

Adjuntar `bitacora-fcnc-semestre.md` siempre. Si algo ahí contradice a los contextos estáticos, gana la bitácora.
