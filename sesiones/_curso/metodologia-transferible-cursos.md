# Metodología Transferible de Diseño de Cursos
**Extraída del proyecto PCIA (CENTRO) para replicarse en cualquier curso nuevo.**
*Este documento no pertenece a un curso específico. Se adjunta como referencia de método, junto con el contexto propio de cada curso nuevo.*

---

## 1. Patrón de producción por sesión

**Flujo de dos conversaciones:**

1. **Conversación de diseño** (arquitectura, decisiones pedagógicas, qué entra y qué no entra en la sesión). Aquí se resuelven las preguntas abiertas antes de generar nada.
2. **Handoff markdown**: documento breve que captura las decisiones cerradas de la conversación de diseño, en formato listo para pegar en la siguiente conversación. Cuando la conversación de diseño incluyó investigación (datos de mercado, cifras, casos reales), el handoff incluye una sección de fuentes con el origen de cada dato usado, para que la conversación de generación no tenga que volver a buscarlas y para que sirvan también como insumo de otros entregables (ej. NotebookLM).
3. **Conversación de generación**: aquí se producen los entregables reales, ya con las decisiones tomadas.

Nunca se generan entregables en la misma conversación donde todavía se está decidiendo la estructura.

**Regla de oro:** lo que realmente pasó en clase tiene precedencia sobre el plan original al generar materiales de cierre o de la siguiente sesión. Si en clase surgió un hallazgo, una confusión recurrente, o un cambio de ruta, el handoff documenta ese delta explícitamente (planeado vs. real) antes de diseñar lo siguiente.

---

## 2. Protocolo de trabajo (aplica a cada conversación de diseño)

1. Cargar los archivos de contexto en orden de precedencia antes de proponer nada.
2. Hacer preguntas de aclaración antes de proponer una estructura. Identificar primero qué información falta.
3. Presentar rutas estructurales alternativas con sus contrapesos **solo cuando existe una decisión arquitectónica real** que lo amerite. No aplicar esto a cada respuesta.
4. Obtener aprobación incremental antes de generar artefactos completos.
5. Aplicar cambios como delta (ediciones puntuales), no como regeneraciones completas, salvo que se pida explícitamente.
6. Proponer la estructura de un documento antes de generarlo completo.

---

## 3. Principios pedagógicos (Enfoque B)

- **Problem-first, no taxonomía primero:** cada concepto nuevo se presenta como respuesta a un problema concreto que la audiencia ya experimenta o puede experimentar fácilmente, no como una lista de definiciones a memorizar.
- **Cold starts con andamiaje:** todo ejercicio incluye un punto de partida ya armado (plantilla, prompt, esquema) para copiar y adaptar. Nunca se pide partir de una hoja en blanco.
- **Disciplina de scope:** cada sesión cubre solo lo que le corresponde. Los conceptos que puedan sobrecargar se posponen explícitamente y se documentan como pendientes, no se meten "de paso".
- **Continuidad de arco:** los materiales de cada sesión referencian las anteriores. Si existe glosario, es acumulativo y cronológico.
- **Descubrimiento iterativo como pedagogía:** cuando algo emerge en vivo (un error común, una pregunta que revela una laguna, una solución que el grupo construyó distinto al plan), ese hallazgo se documenta como el aprendizaje central de la sesión, no como una desviación a corregir.

---

## 4. Convenciones editoriales base (heredables, ajustables por curso)

- Sin frases motivacionales de apertura ("hoy vamos a...", "¿Todos listos?").
- Prosa sobre listas con viñetas en todo material dirigido al participante.
- Los ejercicios se llaman "ejercicios individuales", nunca "tarea".
- Aprobación incremental documentada: no se regenera un documento completo por una corrección puntual.
- Los números o identificadores internos de sesión no se exponen al participante si eso puede sentirse como jerarquía o presión.
- Todo material e interfaz en español.

Estas convenciones se heredan por default. Cada curso nuevo puede añadir convenciones propias encima (nunca quitar las base sin decisión explícita).

---

## 5. Entregables por sesión (ajustable según el curso)

En PCIA/Módulo 4 el set completo es: presentación Gamma (MD), ejercicio en clase (docx), ejercicios individuales (docx), guía del facilitador (PDF), actualización de glosario (MD), y un handoff de contexto para la siguiente sesión.

El set se puede reducir según la naturaleza del curso (por ejemplo: solo Gamma + ejercicios + guía, sin ejercicio en clase separado ni glosario formal). Lo que nunca se omite es el **handoff de contexto**, porque es lo que sostiene la continuidad entre sesiones y conversaciones.

---

## 6. Refuerzo con NotebookLM

Patrón reutilizable: la teoría de cada sesión, una vez cerrada en Gamma, se convierte en una fuente para NotebookLM y se genera:
- Un audio en formato Deep Dive (conversación entre dos voces que explica el tema).
- Un video Explainer.

El nivel de lenguaje de esos audios/videos debe ajustarse al nivel real de la audiencia (no asumir que el formato "senior practitioner" usado en PCIA aplica a otro público; para audiencias sin formación previa, el guion debe evitar jerga no explicada y construir cada término desde cero).

---

## 7. Manejo de riesgo: la trampa de la plausibilidad

Cuando se usa IA generativa para producir contenido técnico o de contenido factual/exacto (código, datos, o en un curso nuevo: fórmulas, pasos de solución, ejemplos numéricos), existe el riesgo de que el modelo genere algo que **suena correcto pero no lo es** (plausibility trap, arXiv:2601.15130). En PCIA esto se mitiga validando cada salida contra el esquema real antes de usarla en clase.

Este principio es transferible a cualquier dominio donde la audiencia no tiene el criterio propio para detectar un error: **toda salida generada por IA que vaya a mostrarse como verdad frente al grupo debe validarse manualmente antes de usarse**, sin excepción, y con más rigor cuanto menos preparada esté la audiencia para detectar el error por sí misma.

---

## 8. Convenciones de archivo

- Ruta de salida: `/mnt/user-data/outputs/`.
- Nombres en kebab-case siguiendo un prefijo por curso: `[prefijo-curso]-s[n]-[tipo]-[descripcion].md`.
- `str_replace` para ediciones puntuales; siempre revisar el rango de líneas exacto antes de editar.
- Documentos grandes con contenido embebido: generar vía script antes que edición manual directa.

---

*Fin del documento de metodología transferible. Para aplicarlo a un curso nuevo, se combina con un documento de contexto propio de ese curso (público, estructura, entregables definidos, convenciones adicionales).*
