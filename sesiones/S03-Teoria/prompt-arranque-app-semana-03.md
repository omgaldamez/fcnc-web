# Prompt de arranque · App interactiva de Semana 3 (para Sonnet 5)

> **Cómo usarlo.** Abre una sesión nueva en Cowork con el modelo Sonnet 5, con la carpeta `fcnc-web/` conectada, y pega todo lo que está debajo de la línea. La arquitectura ya está cerrada y validada; esta tarea es ejecución mecánica (construir el HTML/CSS/JS). No hay que rediseñar nada, solo construir según la especificación.

---

Eres el constructor del prototipo de la app interactiva de **Semana 3** del curso *Fundamentos Cuantitativos para Negocios Creativos* (CENTRO). La arquitectura ya fue diseñada y aprobada en otra sesión; tu trabajo es **construirla**, no rediseñarla.

## 0. Antes de escribir código, lee en este orden de precedencia
1. `metodologia-transferible-cursos.md`
2. `contexto-programa-intro-matematicas-centro.md`
3. `contexto-fcnc-semestre.md`
4. `bitacora-fcnc-semestre.md`: **manda sobre los anteriores donde haya conflicto**
5. El `CLAUDE.md` del repo (convenciones técnicas)
6. `semana-01/index.html` y `semana-02/index.html`: son tu patrón exacto a copiar (estructura, IDs, jsPDF)
7. `assets/styles.css`: sistema de diseño compartido; **reutilízalo, no lo reescribas**. Lo específico de la semana va en un `<style>` inline dentro del propio `index.html`, como en S1 y S2.

## 1. Naturaleza de esta ronda (importante)
Es un **prototipo para revisión del área académica**, no una versión cerrada. Todo caso de estudio, ejemplo numérico o referente concreto se marca **explícitamente dentro del material** como *propuesta reemplazable* (usa el patrón `.propuesta-tag` / `.propuesta-nota` de `semana-02/index.html`), de modo que el área académica pueda sustituirlo sin romper la arquitectura.

## 2. Reglas no negociables (perfil de audiencia sin matemáticas previas)
- **Nada de operador `%`** en texto ni en controles. La proporción/margen como porcentaje está reservada a Semana 4. Aquí todo va en **pesos y conteos**.
- Concepto en **lenguaje llano y ejemplo concreto primero**, notación/fórmula después.
- Prohibido: "obviamente", "simplemente", "es fácil", "es intuitivo", "como ya saben".
- **Validación matemática obligatoria:** todo número que muestre la app se verifica (o se resuelve por segundo método) antes de darlo por bueno. Ver cifras ya validadas en §5.
- No re-explicar términos ya definidos en semanas previas (precio, unidades por día, días abiertos, tablero de supuestos): se referencian.

## 3. Qué es Semana 3 (arquitectura cerrada)
**Tema:** Operar con intención. **Teoría (foco):** la jerarquía de operaciones como *gramática* que hace que el costo salga bien, no como regla arbitraria. **Lectura:** Cap. 2 «A mano y a máquina» de Alessandro Maccarrone. **Artefacto de portafolio:** calculadora de costo unitario (export PDF). **Herramienta digital (se enseña aparte en clase, no en la app):** fórmulas y referencias de celda relativas/absolutas: el "fijos ÷ unidades" es su ancla.

**Continuidad con S2:** las unidades por mes vienen del tablero de S2 (`clientes/día × unidades por cliente × días abiertos`); el precio viene de S1/S2. El modelo del alumno crece, no reinicia. Dilo explícitamente en la app.

**La cadena de cálculo (cierra con ganancia por unidad: decisión de alcance aprobada):**
- `unidades por mes = clientes por día × unidades por cada cliente × días abiertos`
- `costo por unidad = (suma de costos directos por unidad) + (costos fijos del mes ÷ unidades por mes)`
- `ganancia por unidad = precio − costo por unidad`  (en pesos; **no** como margen `%`)

## 4. Las tres pestañas (mismo patrón que S1/S2)
1. **Teoría**: placeholder de Gamma claramente marcado ("aquí va el embed una vez generado el Gamma"), idéntico en espíritu al de `semana-02/index.html`. No bloquea el resto.
2. **Auditoría de un referente**: la **taquería** *(reutilizada, marcar reemplazable)*. El corazón es el **contraste de orden de operaciones**: la misma expresión `7.5 + 60000 ÷ 9135` resuelta en el **orden correcto = $14.07** (dividir antes de sumar) vs. el **orden ingenuo = $6.57** (sumar antes de dividir). Muéstralos lado a lado para que el alumno *vea* por qué la jerarquía importa, y nómbrala después. Cierra con la **ganancia por taco = $22 − $14.07 = $7.93**. Slider(s) recomendados: costos fijos del mes y unidades/mes (o clientes/día y tacos/cliente que producen las unidades), recalculando costo unitario y ganancia por unidad en vivo. Escenario declarado ilustrativo dentro de rangos reportados en S1.
3. **Tu calculadora de costo unitario**: el alumno captura: varias filas de **costos directos por unidad** (materiales/ingredientes), su **bulto de costos fijos del mes**, y sus **unidades/mes** (traídas de su tablero de S2: puede reingresar clientes/día, unidades por cliente y días, o capturar unidades/mes directo). Devuelve **costo unitario** y **ganancia por unidad** en un ticket. Incluye el **ejemplo resuelto Café Andante** (ficticio, marcar reemplazable): directos $14, fijos $18,000/mes, 780 unidades/mes → fijo por unidad $23.08 → **costo unitario $37.08**, con precio $40 → **ganancia por unidad $2.92**. Es un contraste didáctico deliberado: mucho precio pero poca ganancia por unidad, porque su bajo volumen infla el costo fijo por unidad (conecta con la lente de volumen de S2). El botón flotante exporta el PDF = **calculadora de costo unitario** para el portafolio.

## 5. Cifras ya validadas (verifícalas de nuevo, pero deben dar esto)
Referente taquería (ilustrativo): directos por taco tortilla $1.5 + carne $5 + extras $1 = **$7.50**; fijos **$60,000/mes**; unidades/mes = 87 × 3.5 × 30 = **9,135**; fijo por taco = 60000 ÷ 9135 = **$6.57**; **costo unitario = $14.07**; precio $22 → **ganancia por unidad = $7.93**. Orden ingenuo (sumar antes de dividir): (7.5 + 60000) ÷ 9135 = **$6.57**.
Café Andante: directos **$14**, fijos **$18,000**, unidades/mes **780** → fijo/unidad **$23.08** → costo unitario **$37.08** → ganancia/unidad **$2.92** (precio $40).

## 6. Términos que le corresponden al glosario en S3 (no generes el glosario, solo respétalos si los nombras)
costo directo (variable) por unidad · costo fijo mensual · costo unitario · jerarquía de operaciones · ganancia por unidad.

## 7. Convenciones técnicas
- Un solo archivo autocontenido `semana-03/index.html`, enlazando `../assets/styles.css` y jsPDF 2.5.1 por CDN.
- Formato de moneda `es-MX`. Cálculos en vivo con `oninput`. Barra de progreso de campos clave. Aviso `beforeunload` si hay datos sin guardar (como S1/S2).
- Header/tabs/ticket/fab reutilizando las clases existentes. Estilos nuevos (filas de costos, contraste de orden, etc.) en `<style>` inline.
- Footer: "…· Semana 3 de 15 · Prototipo para revisión académica".

## 8. Entregables de esta sesión
1. `semana-03/index.html`: la app.
2. `formulario-revision-semana-03.md`: mismo formato que `formulario-revision-semana-02.md`: sección A (fijo por arquitectura), sección B (decisiones-propuesta con `[ ] aprobar / [ ] cambiar por → ___`), sección C (notas del revisor). Las propuestas reemplazables de S3 son: referente taquería, partidas y valores de costo directo, monto de costos fijos, producto de ejemplo (Café Andante), y el cierre con "ganancia por unidad" como decisión de alcance.
3. Verificación matemática (por script o segundo método) antes de entregar.

## 9. Fuentes (para el pie del PDF y para NotebookLM)
Cifras del referente son ilustrativas dentro de rangos reportados en Semana 1 (INEGI/DENUE; caso Los Cocuyos). No introduce datos de investigación nuevos; si añades alguno, cítalo.

No generes guía del facilitador. Trabaja con aprobación incremental: propón la estructura del `index.html` antes de volcarlo completo si tienes dudas; si no, constrúyelo y valida.
