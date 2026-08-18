# Prompt de arranque · Markdown de Gamma para la teoría (Semanas 2 y 3)

> **Cómo usarlo.** Abre una sesión con la carpeta `fcnc-web/` conectada y pega lo que está debajo de la línea. Pídele **una semana a la vez** (primero S2, luego S3) para revisar cada salida con calma. El resultado es un Markdown rico y detallado que luego pegas en Gamma para que lo sintetice visualmente (mismo flujo que la presentación de Semana 1), y que además sirve como fuente para NotebookLM (audio Deep Dive + video Explainer, es-MX, nivel "primera vez").

---

Vas a generar el **Markdown de la presentación teórica** de una semana del curso *Fundamentos Cuantitativos para Negocios Creativos* (CENTRO). Es contenido que verá un alumno de primer semestre **sin formación matemática previa**, que puede llegar con ansiedad hacia las matemáticas.

## 0. Lee primero, en orden de precedencia
1. `metodologia-transferible-cursos.md`
2. `contexto-programa-intro-matematicas-centro.md`
3. `contexto-fcnc-semestre.md`
4. `bitacora-fcnc-semestre.md`: **manda donde haya conflicto**

Fíjate en cómo quedó la teoría de Semana 1 (misma lógica: Markdown detallado que Gamma sintetiza; abre con lectura + pregunta de asombro; ~18–21 secciones/slides).

## 1. Reglas no negociables (perfil de audiencia)
- **Nada de operador `%`** hasta Semana 4. Toda proporción va en lenguaje llano ("por cada") y en pesos/conteos.
- Cada concepto: **idea en lenguaje llano + ejemplo concreto primero**, notación/símbolo después (y con su lectura en palabras la primera vez).
- Prohibidas las palabras que invalidan: "obviamente", "simplemente", "es fácil", "es intuitivo", "como ya saben". Nada de aperturas motivacionales ("hoy vamos a…", "¿listos?").
- Los **términos de negocio se andamian igual que los matemáticos**: se definen en llano la primera vez.
- El error se trata como parte del proceso, con lenguaje descriptivo, no evaluativo.
- Prosa sobre viñetas en lo dirigido al alumno.
- **Nombre correcto del autor del libro: Alessandro Maccarrone** (no "Ángel Alberto"; ese dato está mal en los archivos estáticos y se corrige aquí).
- **Validación:** cualquier número o cuenta que aparezca en las slides se verifica antes de darlo por bueno.

## 2. Estructura de cada presentación teórica
1. Apertura con la **lectura breve del libro + una pregunta de asombro** (el libro aporta el asombro; el laboratorio, la aplicación al negocio).
2. El **problema de negocio** concreto que motiva el concepto (problem-first).
3. El **concepto en llano**, construido paso a paso, con un ejemplo numérico concreto.
4. La **notación o fórmula**, ya después de la idea.
5. Cómo se conecta con **el laboratorio de esa semana** (el mismo caso/ejemplo que usa la app, para que teoría y práctica embonen).
6. Cierre: los **términos que quedan en el glosario** y un puente hacia lo que sigue.

Coherencia teoría↔app: usa **los mismos ejemplos numéricos que ya viven en la app** de esa semana (los de abajo), para que el alumno reconozca las cifras en el laboratorio.

---

## SEMANA 2 · De los números a la estrategia
- **Foco:** la métrica que importa; de dato a decisión. **Lente: proporción** (tratada como "por cada", nunca `%`).
- **Lectura de apertura:** cierre del Cap. 1 «Uno, dos, muchos» + prólogo del autor. Pregunta de asombro sugerida: del "uno, dos, muchos" del libro a *¿cómo pasamos de contar a decidir con lo contado?*
- **Concepto:** proporción/razón como "por cada"; el paso **de dato a decisión** (un número crudo no decide; la proporción sí); **la métrica que importa** = la palanca que más mueve el resultado.
- **Ejemplos que ya usa la app (úsalos):** taquería: comparar dos palancas: *Camino A* (+1 cliente/día, +$2,310/mes) vs *Camino B* (+0.1 tacos por cliente, +$5,742/mes) con 87 clientes/día, 3.5 tacos/cliente, taco a $22 (ingreso ~$200,970/mes); el punto de cruce está en ~35 clientes/día. Café Andante: su métrica que importa resulta ser "unidades por cada cliente" (+$2,496/mes). Tablero de supuestos como artefacto.
- **Términos al glosario:** proporción / razón ("por cada") · tasa · la métrica que importa · palanca · tablero de supuestos.

## SEMANA 3 · Operar con intención
- **Foco:** la **jerarquía de operaciones** como gramática que hace que el costo salga bien, no como regla arbitraria.
- **Lectura de apertura:** Cap. 2 «A mano y a máquina». Pregunta de asombro sugerida: si una máquina calcula igual que a mano, *¿por qué el orden en que operas cambia el resultado?*
- **Concepto:** costos **directos por unidad** vs **fijos del mes**; repartir los fijos entre las unidades del mes (dividir); por qué **el orden importa**; costo unitario; y **ganancia por unidad = precio − costo unitario** (en pesos, no `%`).
- **Ejemplo central que ya usa la app (úsalo):** la misma expresión `7.5 + 60000 ÷ 9135` da **$14.07** en el orden correcto (dividir antes de sumar) vs **$6.57** en el orden ingenuo (ese contraste ES la lección de jerarquía. Costo del taco $14.07, ganancia por taco $7.93 (precio $22). Café Andante: costo unitario $37.08, ganancia por unidad $2.92 (precio $40)) mucho precio, poca ganancia, por bajo volumen.
- **Continuidad:** las unidades/mes vienen del tablero de S2; el precio, de S1/S2.
- **Términos al glosario:** costo directo (variable) por unidad · costo fijo mensual · costo unitario · jerarquía de operaciones · ganancia por unidad.

---

Entrega **un archivo Markdown por semana** (por ejemplo `gamma-teoria-semana-02.md`), listo para pegar en Gamma. Incluye al final una breve **sección de fuentes** con el origen de cualquier cifra citada (las de la taquería son ilustrativas dentro de rangos reportados en Semana 1: INEGI/DENUE, caso Los Cocuyos).
