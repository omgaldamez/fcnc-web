# Handoff FCNC — S02-Lab: estado real y planificación de S03

> **Cómo usar este documento.** Adjuntarlo junto con `_curso/bitacora-fcnc-semestre.md` al abrir la conversación de S03. Este handoff tiene precedencia sobre el plan original cuando se contradigan.
>
> Fecha de cierre: 18 de agosto de 2026. S02-Lab se impartió el 17 de agosto.

---

## 0. Lo primero que hay que saber

Dos entregables de esta sesión están **sin probar** y pueden cambiar:

- **`sesiones/S02-Lab/S02-Lab-resuelto.xlsx`** — Omar todavía no lo abre ni lo recorre. Puede haber ajustes de contenido, de formato o de estructura.
- **`sesiones/S02-Lab/gamma-S02-Lab-el-empate.md`** — todavía no se pasa por Gamma. El resultado puede pedir cambios al Markdown.

No dar por cerrado ninguno de los dos. **Los dos se revisan como parte de la auditoría de S03**, no como un paso previo: son el primer punto de esa revisión.

---

## 1. Delta entre plan y ejecución real

| Elemento | Planeado | Real | Estado |
|---|---|---|---|
| Devolución de S01-Lab | proyectar la hoja en vivo al lado de la corregida | se dio | ✅ |
| Bloque 1 · cadena de "por cada" | 4 datos + 3 fórmulas | se construyó | ✅ |
| Bloque 2 · las tres palancas | 3 fórmulas | se construyó, con confusión fuerte | ⚠️ |
| Bloque 3 · tamaño del empujón | 4 fórmulas, comparación en porcentajes | **no se dio**: demasiado complejo | ❌ |
| Bloque 4 · misma proporción | 1 dato + 3 fórmulas | **no se dio** | ❌ |
| Bloque 5 · tu negocio | 4 conexiones + 6 fórmulas | **no se alcanzó** | ❌ |
| Vocabulario | "tacos" | se cambió a **unidades** en vivo | ⚠️ |
| Días abiertos de la taquería | 30 fijo | **26, y se volvió variable** | ⚠️ |
| Bloque de escenarios completos | no estaba planeado | **lo agregó Omar en clase** | ✅ nuevo |

**Lectura del delta.** La sesión salió más confusa de lo previsto. Se construyeron dos de los cinco bloques planeados, y en su lugar Omar agregó uno propio que resultó mejor que dos de los que se cayeron.

---

## 2. Hallazgos que no estaban planeados

**La pregunta que desarmó el bloque 2.** Los alumnos preguntaron repetidamente por qué el 3.5 no aparecía en la fórmula del Camino B. La respuesta que faltaba, y que ya quedó escrita en el resuelto: **cada fórmula trae todos los números del negocio menos el que está moviendo**, porque a ese lo reemplaza el movimiento. El 3.5 sí está en A y en C; falta solo en B porque B es el que lo mueve.

**La segunda duda, del mismo origen.** "¿Por qué unos caminos son por mes y el Camino C es por día?" Los tres son por mes. El Camino C coincide con el ingreso diario porque agregar un día al mes le suma justo lo que vende un día, no porque cambie de unidad. Escribirlo como `=B16` escondía el patrón; escrito completo (`clientes × unidades por cliente × precio × días adicionales`) se ve.

**El bloque 3 violaba una regla que no estaba escrita.** Comparaba 1/87 contra 0.1/3.5 **como porcentajes**, y el porcentaje es Semana 4. La regla existía pero vivía solo en la bitácora y con alcance de app. Ya se subió a `CLAUDE.md` como **«Frontera del temario»** y se guardó en memoria de proyecto. Falta que Omar la suba también a las instrucciones del proyecto.

**Omar generalizó el modelo en vivo.** Agregó celdas para días adicionales y para la relación de unidad extra, volviendo variables los movimientos que estaban fijos. Fue una mejora: es lo que permitió reescribir los tres caminos con la misma forma.

**El hallazgo más útil, y salió después de clase.** Con los números de la taquería gana el Camino B (subirle a cada cliente), y con el negocio de ejemplo del alumno gana el Camino A (traer clientes), porque tiene pocos clientes y consumo alto. Esa contradicción aparente demuestra en una pantalla que la métrica que importa depende de la proporción de cada negocio y no de una regla fija. Está en el Panel.

---

## 3. Estado real al cierre

**S02-Lab quedó reestructurado en seis bloques**, sin porcentajes, con las tres celdas verdes de movimiento juntas en su propio bloque y las tres palancas escritas con la misma forma. El bloque 6 (el empate) reemplaza al de porcentajes: compara **3.5 contra 17.4 unidades al día** y calcula el empate como un reparto (3.5 entre 87 clientes = 0.04).

**Nace el Panel**, primera pestaña del libro. Acumula una sección por sesión con columnas *Qué · La taquería · Tu negocio · Dónde se vio*, esta última con la celda exacta de donde sale cada número. Absorbió la leyenda de colores y el mapa de pestañas, y sustituyó a «Cómo usar este libro». Lo armamos nosotros; el alumno solo lo lee.

**La pestaña `Tu negocio` no se tocó.** Omar la considera prematura. Queda con los números que usó en clase.

**El bloque «tu negocio» ya no vive dentro de S02-Lab.** Se decidió no cargar la hoja ni obligar a scrollear: el negocio del alumno aparece en el Panel.

**Números verificados por segundo método** con 26 días: mes $174,174 · Camino A $2,002 · Camino B $9,952.80 · Camino C $6,699 · escenarios $176,176 / $184,126.80 / $180,873 · empate en 0.0402 unidades. Sesenta y seis fórmulas, cero errores de cálculo.

---

## 4. Entregables generados

| Entregable | Archivo | Estado |
|---|---|---|
| Registro de la hoja armada en clase | `sesiones/S02-Lab/S02-Lab-en-vivo.xlsx` | ✅ |
| Libro resuelto, reestructurado, con Panel | `sesiones/S02-Lab/S02-Lab-resuelto.xlsx` | ⚠️ **sin probar** |
| Mini deck del empate, para Gamma | `sesiones/S02-Lab/gamma-S02-Lab-el-empate.md` | ⚠️ **sin pasar por Gamma** |
| Archivo con el que se entró a clase | `sesiones/S02-Lab/S02-Lab-clase.xlsx` | ✅ |
| Guía del facilitador | `sesiones/S02-Lab/guia-facilitador-S02-Lab.docx` | ❌ **desactualizada** |
| Guía de leyendas de la app | `sesiones/S02-Lab/guia-leyendas-auditoria-S02-Lab.md` | ✅ |
| Auditoría previa al laboratorio | `sesiones/S02-Lab/auditoria-laboratorio-semana-02.md` | ✅ |
| Registro de clase de S01 | `sesiones/S01-Lab/registro-S01-Lab.md` | ✅ |
| Regla nueva en el repo | `CLAUDE.md`, sección «Frontera del temario» | ✅ |

**Cambios de estructura del repo hechos en esta sesión:** la raíz quedó solo con lo que se publica y todo el material de clase se movió a `sesiones/`, organizado en `_curso/`, `S0X-Teoria/` y `S0X-Lab/`. Ver `sesiones/README.md`. Se verificó que ningún HTML, CSS ni CSV del sitio referencia un `.md`, `.xlsx` o `.pdf`, así que la separación no rompió nada.

---

## 5. Deuda acumulada

1. **Recorrer `S02-Lab-resuelto.xlsx`.** Decidido el 18 de agosto: **no se prueba aparte, se incorpora a la auditoría de S03** como primer punto de esa revisión.
2. **Pasar `gamma-S02-Lab-el-empate.md` por Gamma.** Igual que el anterior: **entra en la auditoría de S03**, no antes.
3. **La guía del facilitador de S02-Lab está desactualizada.** Se escribió para la distribución de celdas anterior, la de cinco bloques con porcentajes. Regenerarla solo cuando el resuelto esté aprobado, y no antes: se rehace sobre el layout final.
4. **`Tu negocio` tiene un problema conocido y aplazado.** `unidades por cliente` es una fórmula derivada (`=C8/C13`), lo que vuelve tautológico su bloque de comprobación contra S01: siempre dirá "se parecen". Omar decidió no tocarlo por ahora. Revisar cuando se retome esa pestaña.
5. **La regla «Frontera del temario» falta en las instrucciones del proyecto.** Ya está en `CLAUDE.md` y en memoria; las instrucciones del proyecto las edita Omar.
6. ~~La bitácora del semestre no incluye todavía S02-Lab.~~ **Cerrado el 18 de agosto:** `_curso/bitacora-fcnc-semestre.md` ya tiene la sección «3 bis. S02-Lab», la tabla de avance corregida, los pendientes nuevos y seis convenciones agregadas.
7. **`_to_delete/` tiene cuatro archivos** esperando que Omar la vacíe. No se pueden borrar desde esta herramienta.

---

## 6. Decisiones de diseño para S03

**El orden de la sesión.** S03 abre **aterrizando lo del xlsx** (el Panel, lo que quedó de S02 y el negocio del alumno) y solo después entra la teoría. Es lo contrario del orden habitual, y es deliberado: S02-Lab quedó abierto.

**Las preguntas de reflexión cambian de criterio.** Las guías de las preguntas de audio y de video tienen que ser **sobre el audio y el video**, no sobre el negocio del alumno. Nada de "aplica esto a tu negocio" en ese bloque. Esto corrige lo que la auditoría de S02 había recomendado, que sí metía el negocio propio en una de las preguntas de video.

**Vocabulario.** Se dice **unidades**, no tacos, en todo el material nuevo. La app de S02 y el Gamma de S02 se quedan como están: ya se dieron.

**Frontera del temario para S03.** El tema es jerarquía de operaciones y costos. El porcentaje sigue prohibido hasta S04; variable y ecuaciones hasta S06; despeje hasta S07. Revisar cada bloque contra ese calendario antes de entregarlo.

**Nombres.** `S03-Teoria` y `S03-Lab`, numerados por semana del temario y no por orden en el calendario.

**El laboratorio se construye, no se reparte.** `S03-Lab-clase.xlsx` lleva su pestaña vacía y se arma en vivo desde el proyector; la versión limpia llega la clase siguiente. El libro acumulativo gana una pestaña `S03-Lab` y el Panel gana una sección.

**Lo que ya funcionó y conviene repetir.** La columna «Qué número NO aparece» del bloque de palancas resolvió una duda que se había llevado media sesión. El patrón general: cuando una fórmula omite algo a propósito, decirlo en la hoja en vez de esperar la pregunta.
