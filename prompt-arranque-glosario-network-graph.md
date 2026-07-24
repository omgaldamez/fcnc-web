# Prompt de arranque · Network graph del glosario (para la siguiente sesión)

> **Cómo usarlo.** Abre una sesión nueva (para no seguir compactando esta), con la carpeta `fcnc-web/` conectada, y pega todo lo que está debajo de la línea. A diferencia de los prompts de arranque de semanas (S3, etc.), esta ronda **sí tiene decisiones de arquitectura abiertas**: no es ejecución mecánica todavía. Antes de escribir código, resuelve la sección 3 (preguntas abiertas) con quien esté en esa sesión.

---

Eres quien continúa el trabajo del glosario de *Fundamentos Cuantitativos para Negocios Creativos* (CENTRO). El glosario ya existe y funciona (`glosario/index.html` + `glosario/terminos.csv`); esta ronda agrega una vista nueva: un **network graph interactivo** de los términos, con un sidebar de información descriptiva, usando la taxonomía de categorías que ya existe.

## 0. Antes de tocar código, lee en este orden

1. `CLAUDE.md` (convenciones técnicas del repo, incluida la sección de glosario)
2. `glosario/terminos.csv` (fuente de verdad actual: ábrelo y revisa las 15 filas)
3. `glosario/index.html` completo (vistas "Por semana" / "Alfabético", buscador, leyenda clickeable como filtro)
4. `assets/styles.css` (sistema de diseño: colores, tipografía, tarjetas): la vista nueva debe sentirse parte de la misma app, no un widget pegado

## 1. Qué existe ya (no rediseñar esto, extenderlo)

- **`glosario/terminos.csv`**: columnas `termino,definicion,semana,semana_titulo,categoria_principal,categorias_secundarias`. `categoria_principal` es una de `general` / `matematico` / `negocio`. `categorias_secundarias` es una lista separada por `;` (máx. 3) del set fijo `fundamentos, proporcion-tasa, palancas, costos, notacion`, definido en el JS de `glosario/index.html` como `ETIQUETAS_SEC`.
- **`glosario/index.html`**: parsea el CSV client-side (parser propio, sin librería: soporta comillas para campos con comas, no soporta comillas escapadas dentro de un campo), tiene dos vistas (por semana, alfabética), un buscador de texto libre, y una leyenda de categorías que ahora es **clickeable como filtro** (`toggleFiltroTag`, `filtroPrincipal`/`filtroSecundaria` como `Set`, `terminosFiltrados()` centraliza el filtro combinado). Cualquier vista nueva debería poder reusar `terminosFiltrados()` para respetar el mismo filtro de leyenda.
- Colores ya asignados: principal (`general` gris, `matematico` azul, `negocio` naranja) y secundaria (`fundamentos` morado `#6d28d9`, `proporcion-tasa` verde azulado `#0f766e`, `palancas` rosa `#be185d`, `costos` verde `#15803d`, `notacion` índigo `#4338ca`). Reusa esta paleta para los nodos del grafo en vez de inventar una nueva.

## 2. Lo que se pide

Una sección o pestaña nueva dentro de `glosario/index.html` (o un archivo hermano, ver pregunta abierta 3) con:

- Un **network graph** de los términos del glosario: nodo = término, con algún criterio de arista (ver pregunta abierta 1) y color de nodo derivado de `categoria_principal` (y quizás un borde o forma según `categorias_secundarias`).
- Un **sidebar** que muestre la info descriptiva del término seleccionado (nombre, definición completa, semana en la que aparece, categoría principal, categorías secundarias): esencialmente la misma información que ya arma `crearCard()`, pero como panel fijo en vez de tarjeta en una lista.
- La leyenda de colores ya existente se reutiliza aquí también (mismo componente, mismo comportamiento de filtro si es razonable extenderlo al grafo).
- Visualmente atractivo y consistente con el sistema de diseño del sitio (Fraunces/Public Sans/IBM Plex Mono, paleta azul/naranja, radios y sombras ya definidos en `styles.css`), no un widget genérico de librería sin estilizar.

**Fuente de verdad:** por decisión ya tomada, se prefiere seguir usando `terminos.csv` como única fuente (opción A) en vez de crear un dataset paralelo (opción B, descartada). Lo que sí hay que validar al abrir la sesión es **qué tanto necesita crecer el CSV** para soportar el grafo (ver pregunta abierta 1): puede que solo con las columnas actuales alcance (aristas inferidas por categoría compartida), o puede que se necesite una columna nueva de relaciones explícitas.

## 3. Preguntas abiertas a resolver primero (no asumir, preguntar)

Esto es justo el tipo de decisión que, por el protocolo de este proyecto, se presenta con rutas y trade-offs antes de construir (afecta cómo se mantiene el glosario en semanas futuras, no es reversible sin retrabajo):

1. **¿Cómo se definen las aristas (conexiones) entre términos?**
   - *Opción A (aristas inferidas de categorías compartidas):* dos términos se conectan si comparten `categoria_principal` y/o alguna `categoria_secundaria`. Cero cambios al CSV, pero el grafo puede saturarse de conexiones poco significativas (ej. todos los términos "negocio" conectados entre sí).
   - *Opción B (aristas inferidas de semana compartida):* términos de la misma semana se conectan (ya existe la columna `semana`). Simple, pero es básicamente la vista "por semana" actual con otra forma.
   - *Opción C (columna nueva `terminos_relacionados` en el CSV):* cada fila declara explícitamente con qué otros términos se relaciona conceptualmente (ej. "Palanca" → "La métrica que importa", "Tablero de supuestos"). Más trabajo de captura (hay que llenarla a mano para las 15 filas existentes y cada fila nueva), pero el grafo refleja relaciones conceptuales reales, no solo coincidencia de etiqueta.
   - Es razonable combinar (p. ej. C si existe, si no cae a A), pero hay que decidirlo antes de programar el parser y el layout del grafo.

2. **¿Qué librería de grafo?** El repo no tiene build system ni npm: todo external dependency se carga por CDN (como jsPDF 2.5.1 hoy). Candidatas típicas para esto: `vis-network`, `cytoscape.js`, `d3` (force-directed a mano), `sigma.js`. Cada una tiene distinto peso, distinta facilidad de estilizar nodos/aristas con la paleta del sitio, y distinto soporte de interacción (click en nodo, zoom, arrastrar). Evalúa con quien esté en la sesión antes de instalar/cargar nada.

3. **¿Dónde vive esta vista?** Opciones: (a) una tercera pestaña de vista dentro de `glosario/index.html` junto a "Por semana" / "Alfabético" (mismo patrón `vista-toggle`), o (b) una página nueva `glosario/red.html` (o similar) enlazada desde el glosario, si el grafo es pesado o necesita su propio layout de página completa (sidebar fijo, canvas grande) que no cabe bien en el `max-width:820px` actual de `.glosario-main`.

## 4. Convenciones a respetar (heredadas del resto del repo)

- Sin em dashes en ningún texto visible (ver regla en `CLAUDE.md`).
- Sin `npm`/build step: cualquier librería se carga por `<script src="https://cdnjs...">` en el propio `glosario/index.html` (o el archivo nuevo que se decida en la pregunta 3).
- El parser CSV propio no soporta comillas escapadas dentro de un campo: si la columna nueva de relaciones (si se decide la opción C) necesita listar varios términos, usa un separador que no sea coma (p. ej. `;`, como ya se hace con `categorias_secundarias`) para no tener que tocar el parser.
- Mantén la doble fuente de verdad en mente: si el grafo necesita datos que hoy no están en el CSV, agrégalos al CSV (no a un JSON aparte), para no romper "el CSV es la fuente de verdad".

## 5. Entregable de esta ronda

1. Resolver las 3 preguntas abiertas de la sección 3 (con quien abra la sesión).
2. Si la opción C se elige: actualizar `glosario/terminos.csv` con la columna nueva y llenar las 15 filas existentes.
3. La vista/página del network graph, funcional y estilizada, con su sidebar.
4. Verificación: abrir el glosario en un navegador real (o describir cómo probarlo) y confirmar que el grafo carga, los nodos son clickeables, el sidebar se actualiza, y no rompe las vistas existentes ("Por semana" / "Alfabético" siguen funcionando igual).
