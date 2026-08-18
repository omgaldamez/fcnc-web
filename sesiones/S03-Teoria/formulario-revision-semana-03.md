# Formulario de revisión · Semana 3

**Fundamentos Cuantitativos para Negocios Creativos · CENTRO**
*Operar con intención · Prototipo para revisión del área académica*

---

## Cómo usar este formulario

Este prototipo de Semana 3 **no es una versión cerrada**. Cada punto de abajo es una **decisión-propuesta**: algo que elegimos para que el material funcione completo, pero que el área académica puede aprobar o sustituir sin romper la arquitectura.

Para cada punto, marca una opción y, si eliges cambiar, escribe con qué. Este archivo, ya lleno, se vuelve el documento de contexto para la siguiente ronda de ajustes de Semana 3. **No hace falta rehacer el prototipo por un cambio puntual**: cada propuesta está aislada para poder sustituirse sola.

Convención: `[ ]` aprobar · `[ ]` cambiar por → ________

---

## A. Lo que NO se puede mover sin rediseñar (fijo por arquitectura)

Se listan solo para dejar claro qué está fuera de discusión en este formulario, porque sostiene el resto:

- El foco de la semana es la **jerarquía de operaciones**, tratada como la gramática que hace que el costo salga bien. **No se usa el operador `%`** en ningún texto ni control: el porcentaje formal está reservado para Semana 4.
- La cadena de cálculo cierra con **ganancia por unidad** (en pesos, no como margen), decisión de alcance ya aprobada para esta ronda.
- Estructura de tres pestañas heredada de Semanas 1–2 (Teoría · Auditoría · Tu calculadora) y sistema de diseño compartido (`assets/styles.css`).
- La cadena de cálculo de la calculadora: `unidades por mes = clientes por día × unidades por cada cliente × días abiertos`; `costo por unidad = costos directos por unidad + (costos fijos del mes ÷ unidades por mes)`; `ganancia por unidad = precio − costo por unidad`.
- El artefacto que va al portafolio es la **calculadora de costo unitario** (export PDF).
- Continuidad explícita: las unidades por mes de la calculadora se conectan al tablero de Semana 2, con opción de reingresarlas por sus tres componentes o capturarlas directo.

Si el área académica quiere mover alguno de estos, ya no es un ajuste puntual sino un cambio de arquitectura: se trata en conversación aparte, no en este formulario.

---

## B. Decisiones-propuesta (aprobar / cambiar)

### B1. Referente de la auditoría
Se reutiliza **la taquería** de Semanas 1 y 2, por continuidad de arco. Cambiarlo solo afecta la pestaña "Auditoría de un referente"; la calculadora del alumno no depende de este caso.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B2. Partidas y valores de costo directo del referente
Tortilla $1.50 + carne $5.00 + extras $1.00 = **$7.50 por taco**, fijo (no es slider). Precio de venta fijo en $22 (caso Los Cocuyos, Semana 1).

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B3. Monto de costos fijos del mes del referente
Slider de **costos fijos del mes**: rango $30,000–$100,000, valor inicial **$60,000**.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B4. Sliders que producen las unidades por mes del referente
Clientes por día (rango 30–200, inicial 87) y tacos por cada cliente (rango 1–6, inicial 3.5), con 30 días abiertos fijos. Producen 9,135 unidades/mes con los valores iniciales, dentro del rango reportado en Semana 1.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B5. El contraste de orden de operaciones
Con los valores iniciales: orden correcto (dividir antes de sumar) = $14.07/taco; orden ingenuo (sumar antes de dividir) = $6.57/taco. Ambos números se recalculan en vivo con los sliders, para mostrar que la diferencia no es un caso aislado.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B6. Cierre de la auditoría con ganancia por unidad
Con los valores iniciales: ganancia por taco = $22 − $14.07 = $7.93.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B7. Negocio de ejemplo resuelto (andamiaje de la calculadora)
**Café Andante** (ficticio, ya usado en Semanas 1 y 2): directos $14, fijos $18,000/mes, 780 unidades/mes → fijo por unidad $23.08 → costo unitario $37.08, con precio $40 → ganancia por unidad $2.92. Contraste didáctico deliberado: precio alto, ganancia por unidad baja, por bajo volumen.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B8. Estructura de la calculadora del alumno
Filas agregables de costos directos por unidad (nombre + valor) · costos fijos del mes · unidades por mes (captura directa, con mini-calculadora opcional desde clientes/día, unidades/cliente y días abiertos) · precio por unidad. Devuelve costo unitario y ganancia por unidad.

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

### B9. Términos nuevos que entrarían al glosario en esta semana
costo directo (variable) por unidad · costo fijo mensual · costo unitario · jerarquía de operaciones · ganancia por unidad.
*(El glosario no se genera en esta ronda; aquí solo se valida qué términos le corresponden a S3.)*

`[ ]` aprobar `[ ]` cambiar por → __________________________________________

---

## C. Notas abiertas del revisor

Espacio para cualquier observación que no encaje arriba (tono, ejemplos, orden de las pestañas, lo que sea):

________________________________________________________________

________________________________________________________________

________________________________________________________________

---

*Al terminar, guarda este archivo lleno. Es el insumo de contexto para cerrar Semana 3.*
