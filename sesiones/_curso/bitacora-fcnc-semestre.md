# Bitácora del semestre · Fundamentos Cuantitativos para Negocios Creativos
**CENTRO: Negocios e Industrias Creativas, Ciudad de México**
*Documento vivo. Se reemplaza después de cada sesión con la versión que sale de esa conversación. Última actualización: cierre de Semana 2 (julio 2026).*

---

## Cómo leer este documento

Este archivo tiene precedencia sobre `metodologia-transferible-cursos.md`, `contexto-programa-intro-matematicas-centro.md` y `contexto-fcnc-semestre.md` en cualquier punto donde entren en conflicto. Esos tres archivos siguen siendo la base (principios, audiencia, temario), pero lo que **realmente se decidió y se construyó** al trabajar cada semana tiene más autoridad que lo que esos documentos planeaban antes de que existiera evidencia de aula. Es la aplicación literal de la regla de oro de la metodología: *lo que realmente pasó tiene precedencia sobre el plan.*

Adjuntar este archivo junto con los tres estáticos al abrir una sesión nueva (en Cowork o donde sea). Si algo aquí contradice a los estáticos, se sigue esto.

---

## 1. Correcciones confirmadas contra los archivos estáticos

| Campo | Los archivos estáticos dicen | Lo confirmado | Acción pendiente |
|---|---|---|---|
| Autor del libro | Ángel Alberto Maccarrone | **Alessandro Maccarrone** | Corregir en `contexto-fcnc-semestre.md` (sección 1) y en cualquier material que lo cite. Ya usado correctamente desde S1. |
| Pickup Coffee, origen | (no estaba precisado en el raíz) | Origen **filipino**, no coreano | Ya reflejado en la presentación Gamma de S1. Anotado para no repetir el error si la marca reaparece. |
| Sección de fuentes en el handoff de diseño → generación | No la exigía como regla | **Ahora es obligatoria** | Pendiente aplicar manualmente esta línea a `metodologia-transferible-cursos.md`, sección 1 (archivo de solo lectura para mí; la edición la hace Omar). |
| Nombre del documento puente hacia Claude Code | `protocolo-despliegue-web.md` lo llama "handoff de despliegue" | "Handoff" es término reservado para el puente diseño→generación y para esta bitácora | **Pendiente de decisión final** (propuesta: "nota de despliegue"). No renombrar nada hasta que Omar confirme. |
| Título/estructura de la lectura de apertura de S1 |: | El libro no tiene "prólogo" formal, sino una sección llamada **"A modo de introducción"** (p. 13) que cumple esa función | A partir de S2 se cita como "introducción del autor", no "prólogo", cuando se referencia con precisión. |

---

## 2. Semana 1 · qué se cerró realmente

Resumen de referencia para dar continuidad a las semanas siguientes. No duplica el contenido ya escrito en el `CLAUDE.md` del repo ni en el Gamma de la sesión: solo lo que importa como precedente de diseño.

**Teoría.** Tema: "¿Por qué los números?". Concepto central: el número como tecnología de decisión, con la lente de **modelar**. Abre con Introducción + Cap. 1 "Uno, dos, muchos" de Maccarrone. Sin notación matemática formal: lo único que se formaliza esta semana es vocabulario (dato, métrica, modelo, supuesto, referente), no símbolos. Contraste ilustrativo (no se calcula, es semilla): Sede Café (mexicana, no franquicia, fundada febrero 2024 por Javier Arrigunaga Palacios, 48 sucursales) vs. Pickup Coffee (origen filipino, llegó a México en diciembre 2023, precio de entrada $13 MXN). 18 slides de Gamma + 3 agregadas (objetivos, rúbrica, bibliografía) = 21 total.

**Laboratorio.** Orden fijo: auditoría primero (andamiaje con datos reales y citados), ficha después (aplicación al negocio propio del alumno).
- *Auditoría*: taquería como referente, con cifras de INEGI/DENUE (más de 145,000 puestos registrados, mercado >$200 mil millones MXN/año) y el caso de evolución de precio de Los Cocuyos ($10 en 2015 a $22 actual). El escenario de ventas/ganancia se declara explícitamente como *ilustrativo dentro de un rango real reportado*, no como la contabilidad de un negocio específico.
- *Ficha del negocio*: plantilla con ejemplo ya resuelto (Café Andante, ficticio) para que ningún alumno empiece en blanco. Seis campos cerrados: nombre tentativo, problema que resuelve, cliente, qué vende, primera intuición numérica, métrica a rastrear.

**App interactiva: decisión que se volvió precedente para el resto del curso.** El slider de margen se rediseñó de porcentaje a **"ganancia por cada $100,000 vendidos" en pesos**, porque introducir el operador de porcentaje antes de tiempo viola la secuencia pedagógica (el porcentaje formal está reservado para Semana 4). **Esta regla se extiende a cualquier control interactivo, no solo al texto de las presentaciones**: si un concepto de negocio o matemático no ha sido formalizado todavía en el temario, tampoco se formaliza dentro de una app.

**Glosario.** Página `glosario/index.html`, estructura híbrida: cronológica por semana + buscador en vivo, con etiqueta de categoría (azul = matemático, naranja = negocio). Los 5 términos de Semana 1 llevan una tercera etiqueta, **"general"**.

**Portafolio.** Primer artefacto de 15: ficha del negocio + auditoría, generado como PDF vía jsPDF desde la propia app.

**Sitio web.** Repo `fcnc-web/` estructurado y desplegado: landing con las 5 unidades, `assets/styles.css` como sistema de diseño compartido, y `semana-01/index.html` como primer módulo semanal.

---

## 3. Semana 2 · qué se cerró realmente

**Teoría.** Tema: "De los números a la estrategia". Concepto central: la proporción ("por cada") como el paso de dato a decisión; **la métrica que importa** = la palanca que, con los supuestos actuales del negocio, más mueve el resultado. Sin operador `%` (reservado a S4).

**Lectura de apertura (mejora sobre el método de S1.** A diferencia de S1 (donde la lectura de apertura se reconstruyó a partir de reseñas públicas del libro, sin acceso al texto), en S2 Omar compartió el **capítulo 1 completo** ("Uno, dos, muchos") desde su ejemplar físico. Esto permitió corregir la reconstrucción inicial del Markdown de teoría (que había sido razonable pero no verificada) por el contenido real: la anécdota de los **Baniwa** (pueblo de la cuenca del río Negro, frontera Colombia/Brasil/Venezuela, que usan *Patsialu*/*Enaba*/*Srúpeli* para "uno"/"dos"/"muchos"), y las secciones del capítulo sobre ordenar, clasificar y conservar (Piaget). El texto completo se guardó como fuente aparte, **`fuente-cap1-uno-dos-muchos-maccarrone.md`**, separado del Markdown de Gamma, para subir a NotebookLM sin mezclar fuente primaria con el material sintetizado. Se agregó respaldo académico complementario sobre el mismo fenómeno documentado en otro pueblo amazónico (Frank et al. 2008 y Gordon 2004, sobre los Pirahã) no hay paper académico específico sobre los Baniwa).

**Precedente para semanas futuras:** cuando Omar tenga o consiga el texto real del capítulo de la semana, se usa ese texto y se guarda como fuente aparte (`fuente-capN-...md`); si no está disponible, la reconstrucción por reseñas se marca explícitamente como no verificada hasta que se confirme.

**Caso real agregado (segundo precedente.** A pedido de Omar, la teoría ya no descansa solo en el caso ilustrativo fijo de la app (la taquería): se incorporó un caso real y actual de México, deliberadamente **no limitado al rubro de alimentos**) el Hot Sale 2025 (AMVO: 19.2 millones de órdenes, 38.8 millones de productos, ~2 productos por cada orden, ticket promedio $1,100) contrastado con un análisis de 2026 de Propty («El Mito del Ticket Promedio») que cuestiona que el ticket promedio por sí solo explique el desempeño de una tienda. Se insertó como slide propio entre "El problema de negocio" y "De contar a comparar", antes de los ejemplos fijos de la app (taquería, Café Andante).

**Precedente:** cada teoría semanal debe incluir al menos un caso real mexicano y actual, preferentemente de un rubro distinto al de la app de esa semana, que ilustre el concepto antes de entrar a los ejemplos ya fijos.

**Corrección pedagógica (el caso del "0.1".** Al revisar el contraste Camino A (+1 cliente/día) vs. Camino B (+0.1 tacos por cliente) de la auditoría, Omar notó que la cifra 0.1 no se explicaba: ¿por qué no +1 taco entero? La razón es que 0.1 iguala el tamaño relativo del esfuerzo entre ambos caminos (subir 1 taco entero por cliente sería casi duplicar el consumo promedio) un cambio mucho mayor que sumar 1 cliente entre 87). Se agregó al Markdown una explicación de esa razón y se tradujo "0.1 tacos por cliente" a una imagen contable: "1 de cada 10 clientes pide un taco extra".

**Precedente:** cualquier comparación de palancas con incrementos fraccionarios debe explicar por qué se usa esa fracción (no solo mostrarla) y, si es posible, traducirla a un conteo entero ("1 de cada N").

**Patrón NotebookLM confirmado.** Cada semana teórica cierra con: (1) el Markdown de Gamma (`gamma-teoria-semana-0X.md`), (2) un bloque de audio Deep Dive (tres párrafos: concepto de la lectura + caso real con datos + cierre) y uno de video Explainer (más corto, con una analogía accesible aplicada al caso del laboratorio), siguiendo el ejemplo textual que Omar compartió de S1, y (3) una lista de fuentes lista para copiar y pegar en NotebookLM (Markdown de la teoría + cualquier fuente de capítulo guardada aparte + fuentes de negocio/caso real + respaldo académico si existe). Este patrón está documentado también en la memoria de proyecto para no tener que pedir el ejemplo de nuevo cada semana.

**Portafolio.** Segundo artefacto: tablero de supuestos v1 (export PDF), ya construido en `semana-02/index.html`.

---

## 4. División de trabajo confirmada

- **Diseño y construcción de la app** (arquitectura, iteración visual, aprobación incremental): en este espacio de trabajo: antes el chat principal de claude.ai, ahora Cowork.
- **Claude Code**: solo coloca archivos, actualiza el landing, y hace commit/push. No decide contenido pedagógico ni diseño visual.
- El puente entre ambos es un documento de una sola sesión (ver punto pendiente en la tabla de la sección 1 sobre su nombre definitivo).

---

## 5. Estado de avance por semana

| Semana | Unidad | Estatus |
|---|---|---|
| 1 | U1 | **Cerrada.** Teoría, laboratorio, app, glosario y sitio desplegados. |
| 2 | U1 | **App y teoría (Gamma) cerradas.** `semana-02/index.html` construido; `gamma-teoria-semana-02.md` cerrado con caso real, fuente del capítulo 1 y corrección del "0.1". Pendiente: generar el audio/video reales en NotebookLM (los prompts y la lista de fuentes ya están listos) y el glosario formal de los 5 términos nuevos. |
| 3 | U2 | **App ya construida** (`semana-03/index.html`, ejecución mecánica ya aprobada, con `formulario-revision-semana-03.md` pendiente de que el área académica lo llene). **Teoría (Gamma) en curso**: ver sección 3 de este documento y el resto de la sesión. |
| 4–5 | U2 | Pendiente de diseño. |
| 6–8 | U3 | Pendiente de diseño. |
| 9–12 | U4 | Pendiente de diseño. |
| 13–15 | U5 | Pendiente de diseño. |

---

## 6. Pendientes abiertos

1. **Guía del facilitador de Semana 1**: formato checklist acordado, todavía no generada.
2. **Nombre definitivo del documento puente hacia Code**: confirmar si se llama "nota de despliegue" u otra cosa (ver sección 1).
3. **Corrección del nombre del autor**: aplicar "Alessandro Maccarrone" en `contexto-fcnc-semestre.md` y volver a subir el archivo al proyecto.
4. **Prueba en móvil** de la interacción del tooltip de advertencia en la app de Semana 1.
5. **Limpieza de CSS**: clases sin usar (`.rubrica-tabla`, `.bib-lista`) en `assets/styles.css`.
6. **Documento de cierre pedagógico de Semana 1** (qué pasó realmente en clase vs. lo planeado): pendiente hasta que se imparta.
7. **`glosario-fcnc.md`** (versión markdown portátil del glosario): pendiente de generar el espejo en Markdown de `glosario/index.html`.
8. **Glosario de Semana 2**: los 5 términos nuevos (proporción/razón, tasa, la métrica que importa, palanca, tablero de supuestos) están validados en `gamma-teoria-semana-02.md` pero no se han agregado todavía a `glosario/index.html` ni a `glosario/terminos.csv`.
9. **Audio y video reales de NotebookLM de Semana 2**: los prompts y la lista de fuentes están listos (ver sección 3); falta generarlos en NotebookLM y subirlos a la pestaña "Recursos" (patrón ya visible como placeholder en `semana-03/index.html`).
10. **Formulario de revisión de Semana 3**: `formulario-revision-semana-03.md` generado junto con la app; pendiente de que el área académica lo llene.
11. **Acceso al libro para semanas futuras**: Omar no tiene el capítulo 2 («A mano y a máquina») ni versión digital del libro, y no hay certeza de que vaya a conseguir el ejemplar físico. `gamma-teoria-semana-03.md` ya no depende del libro (ver convención nueva arriba); probable que varias de las semanas con lectura "por confirmar" en `contexto-fcnc-semestre.md` (sem 4, 5, 6, 8, 9, 10, 11, 12, 14) enfrenten el mismo problema y necesiten el mismo tratamiento.

---

## 7. Convenciones aprendidas que aplican hacia adelante

- El principio "lenguaje llano antes que notación formal" aplica igual a controles interactivos (sliders, inputs). Un concepto no formalizado en el temario tampoco se formaliza en la interfaz.
- Cuando un término de glosario no encaja claramente en "matemático" o "de negocio", se etiqueta "general" en vez de forzarlo a una categoría.
- Las correcciones a datos reales usados como ilustración se marcan explícitamente para que no se repitan en semanas futuras si la misma marca o dato vuelve a aparecer.
- **(Nuevo, S2)** Cada teoría semanal incluye al menos un caso real mexicano y actual, de preferencia de un rubro distinto al del ejemplo fijo de la app, insertado antes de los ejemplos ya fijos (taquería, Café Andante).
- **(Nuevo, S2)** Cuando exista el texto real de la lectura de apertura, se usa ese texto y se guarda como fuente aparte (`fuente-capN-...md`); si no está disponible, la reconstrucción por reseñas se marca como no verificada.
- **(Nuevo, S2)** Toda comparación de palancas con incrementos fraccionarios explica por qué se usa esa fracción y, si es posible, se traduce a un conteo entero.
- **(Nuevo, S2)** El patrón de audio/video/fuentes de NotebookLM se repite igual cada semana (ver sección 3); no hace falta pedir el ejemplo de nuevo.
- **(Nuevo, S3)** Cuando el capítulo del libro de esa semana no esté disponible (ni físico ni digital) y no haya certeza de que vaya a estarlo, la lectura de apertura no se pospone ni se reconstruye por reseñas: se sustituye por una fuente real e investigada sobre el tema del capítulo (por ejemplo, en S3, la historia documentada de la jerarquía de operaciones en vez del capítulo «A mano y a máquina»), citada y verificada igual que cualquier otra fuente. Se quita toda referencia al libro/capítulo específico del Markdown de esa semana en vez de dejarla como pendiente indefinida.

---

## 8. Fuentes usadas en Semana 1 (referencia para NotebookLM)

- INEGI/DENUE: cifras de puestos de tacos y antojitos registrados en México, tamaño del mercado anual.
- Caso de evolución de precio de Los Cocuyos (Centro Histórico, CDMX).
- Sede Café: fundación, fundador, número de sucursales.
- Pickup Coffee: origen, año de llegada a México, precio de entrada.

---

## 9. Fuentes usadas en Semana 2 (referencia para NotebookLM)

- Alessandro Maccarrone, *El infinito placer de las matemáticas* (Blackie Books, 2023), capítulo 1 «Uno, dos, muchos» e introducción: texto completo en `fuente-cap1-uno-dos-muchos-maccarrone.md`.
- Michael C. Frank et al., «Number as a cognitive technology: Evidence from Pirahã language and cognition», *Cognition* 108(3), 2008.
- Peter Gordon, «Numerical Cognition Without Words: Evidence from Amazonia», *Science* 306(5695), 2004.
- Asociación Mexicana de Venta Online (AMVO), *Reporte de Resultados Hot Sale 2025* (julio de 2025).
- Propty Real Estate, «El Mito del Ticket Promedio» (22 de abril de 2026).
- INEGI/DENUE, El Imparcial, ADN40, SDP Noticias/Statista, Xataka México, La Verdad Noticias: continuidad de la auditoría de la taquería desde S1.

---

*Fin de la bitácora. Se reemplaza en el proyecto o en Cowork después de cada sesión nueva.*
