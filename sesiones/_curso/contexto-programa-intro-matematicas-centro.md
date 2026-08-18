# Contexto del Programa: Fundamentos Cuantitativos para Negocios Creativos
**CENTRO: Negocios e Industrias Creativas, Ciudad de México**
*(Nombre tentativo previo: "Introducción a las Matemáticas".) Documento de trabajo para diseño continuo de sesiones. Última actualización: julio 2026 (temario cargado).*

> **Cómo usar este documento.** Es el contexto raíz del curso. Para diseñar una sesión específica, adjuntar este archivo junto con `metodologia-transferible-cursos.md` y el contexto del semestre `contexto-fcnc-semestre.md`. El contexto del semestre precisa y confirma lo que aquí estaba "por definir"; este raíz sigue rigiendo los cuidados de audiencia (Bloque 2) y las convenciones editoriales (Bloque 4).

---

## Bloque 1: Información del curso

| Campo | Detalle |
|---|---|
| Nombre confirmado | Fundamentos Cuantitativos para Negocios Creativos |
| Institución | CENTRO: Negocios e Industrias Creativas |
| Ciudad | México, CDMX |
| Audiencia | Alumnos de primer semestre del programa de Negocios e Industrias Creativas, sin formación matemática previa |
| Responsable de diseño e instrucción | Omar Galdámez |
| Estructura semanal | 2 sesiones de 4 h por semana (día teórico + día de laboratorio) = 8 h/semana |
| Duración total | 15 semanas · 5 unidades (ver `contexto-fcnc-semestre.md`) |
| Pregunta rectora | ¿Cómo se convierten los números en una herramienta de imaginación y de poder para quien crea, emprende y decide en las industrias creativas? |

---

## Bloque 2: Perfil de la audiencia y cuidados especiales

Esta es la diferencia central frente a PCIA: la audiencia no llega con experiencia previa en el tema ni con motivación garantizada. Puede llegar con ansiedad matemática, experiencias escolares negativas previas, o la creencia de que "no se les dan las matemáticas".

**Cuidados no negociables para todo material y toda sesión:**

- Nunca asumir conocimiento previo no confirmado. Nada de "como ya saben" o "esto es un repaso rápido de..." sin verificar primero.
- Evitar palabras que invalidan la dificultad real de un concepto para quien recién lo ve: "obviamente", "simplemente", "es fácil", "es intuitivo". Si un concepto requiere tres pasos para entenderse, se explican los tres.
- La notación formal se introduce **después** de que la idea ya fue explicada en lenguaje llano y con un ejemplo concreto, nunca antes.
- Ningún ejercicio empieza en blanco: siempre hay un punto de partida (un ejemplo resuelto, una plantilla, un caso análogo) que el alumno adapta.
- El error se trata como parte esperada del proceso, no como falla. El lenguaje de retroalimentación es descriptivo ("aquí el signo cambió de lugar"), no evaluativo ("está mal").
- Ejemplos y escenarios usan contextos reconocibles para un estudiante de primer semestre. Reconciliación con el dominio del curso (confirmada con el temario): el **negocio creativo es el contexto y la motivación** de cada concepto (es el campo de estudio propio de estos alumnos, no un dominio técnico ajeno), pero la **matemática se construye desde cero, sin asumir nada**. Además, los **términos de negocio se andamian y entran al glosario igual que los matemáticos**: no se asume que un alumno de primer semestre ya sabe qué es CAC, LTV, markup o punto de equilibrio, igual que no se asume que sabe qué es una función. Cada término de negocio se define en lenguaje llano la primera vez que aparece.

---

## Bloque 3: Estructura semanal

### Día teórico (1 por semana)
- **Entregable principal:** presentación Gamma (Markdown), generada con la misma lógica de PCIA: Markdown detallado y rico que Gamma sintetiza visualmente.
- **Opcional:** una app simple en Google AI Studio, o una demostración/escenario construido directamente en el chat, para hacer tangible el concepto teórico (por ejemplo, simular un escenario numérico, visualizar una función, mostrar el efecto de cambiar una variable).
- **Refuerzo NotebookLM:** a partir del Markdown de la sesión teórica, se genera un audio (Deep Dive) y un video (Explainer) en español, con nivel de lenguaje ajustado a alguien que ve el tema por primera vez (no nivel "practicante senior" como en PCIA).

### Día práctico (1 por semana, posterior al teórico)
- **Entregables:** ejercicios individuales (no "tarea") y guía del facilitador.
- Los ejercicios refuerzan exactamente lo visto en la teoría de esa semana, con andamiaje (ejemplo resuelto o punto de partida antes de cada ejercicio nuevo).

### Set de entregables por sesión (definido)
- Presentación Gamma (MD): día teórico.
- Ejercicios individuales (docx): día práctico.
- Guía del facilitador: día práctico.
- Actualización de glosario (MD): acumulativo, cronológico, se cierra al final de cada semana.
- Handoff de contexto hacia la siguiente semana (siempre, aunque el resto del set sea reducido).

Nota: se dejó fuera del set el "ejercicio en clase" separado, por decisión explícita. El glosario sí se incluye desde el inicio, por el perfil de audiencia (sin formación previa): sostener vocabulario técnico entre semanas es más crítico aquí que en PCIA, donde los participantes ya llegaban con vocabulario técnico previo.

### Sobre el glosario
- Es un único documento vivo que crece semana con semana (no uno nuevo por sesión). Cada actualización es un delta: se agregan los términos nuevos de esa semana, nunca se reescribe lo ya cerrado.
- Cada término se define en lenguaje llano primero, con la notación formal (si aplica) después, siguiendo la misma regla del Bloque 2.
- El glosario carga **términos matemáticos y de negocio** (por ejemplo: función, pendiente, y también CAC, LTV, markup, punto de equilibrio). Ambos tipos se andamian por igual, por el perfil de audiencia.
- Se referencia en las sesiones posteriores cuando un término ya definido reaparece, para reforzar continuidad de arco.

---

## Bloque 4: Convenciones editoriales

**Heredadas de PCIA (se mantienen sin cambio):**
- Sin frases motivacionales de apertura.
- Prosa sobre viñetas en material dirigido al estudiante.
- "Ejercicios individuales", nunca "tarea".
- Aprobación incremental: correcciones en delta, no regeneraciones completas.
- Esquema de color CENTRO: azul #2B579A para encabezados, naranja #E8792F para acentos, fuente Arial en documentos Word.
- Todo material en español.

**Añadidas para este curso (por el perfil de audiencia):**
- Ver Bloque 2 (cuidados de lenguaje y andamiaje). Estas reglas tienen prioridad sobre cualquier plantilla o convención heredada si entran en conflicto.
- Notación matemática siempre acompañada de su lectura en palabras la primera vez que aparece.

---

## Bloque 5: Stack de herramientas

| Función | Herramienta |
|---|---|
| Presentación teórica | Gamma (Markdown) |
| Demostración/escenario teórico opcional | Google AI Studio (app simple) o demo directa en chat |
| Refuerzo de teoría | NotebookLM (audio Deep Dive + video Explainer, es-MX) |
| Ejercicios y guía | docx (patrones del skill docx: `ShadingType.CLEAR`, numeración a nivel Document, `dCell()` con `fill`) |

---

## Bloque 6: Temario y estructura por semanas

**Temario cargado (julio 2026).** El curso son **15 semanas** organizadas en **5 unidades**, con día teórico + día de laboratorio por semana. El detalle completo (ADN, hilo conductor, orden de temas, semana por semana, evaluación y progresión de herramientas) vive en el documento de contexto del semestre: **`contexto-fcnc-semestre.md`** (equivalente a `contexto-modulo4-datos-memoria.md` en PCIA).

Resumen de unidades: U1 Estrategia (sem 1–2) · U2 Operaciones (sem 3–5) · U3 Álgebra aplicada (sem 6–8) · U4 Pre-cálculo (sem 9–12) · U5 Digital, ética y cierre (sem 13–15).

**Hilo conductor:** cada alumno define en la Semana 1 su propio micro-emprendimiento y construye semana a semana su modelo cuantitativo; el portafolio acumulado se presenta en un pitch final (Semana 15).

**Pendientes de coordinación** (no bloquean el diseño de sem 1–3): cerrar el mapeo de 9 lecturas del libro contra el índice, confirmar nombre oficial, y anclar el calendario de fechas. Ver sección 8 de `contexto-fcnc-semestre.md`. El estado de avance por semana se lleva en `bitacora-fcnc-semestre.md`.

---

## Bloque 7: Protocolo de trabajo

Ver `metodologia-transferible-cursos.md`, secciones 1 y 2, sin modificaciones. Se aplica tal cual: conversación de diseño → handoff → conversación de generación, con aprobación incremental en cada paso.

---

*Este documento se actualiza a medida que avanza el diseño del curso. Los campos marcados como "por definir" deben completarse antes de iniciar la producción de materiales de cada semana.*
