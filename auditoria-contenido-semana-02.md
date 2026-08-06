# Auditoría de contenido · Semana 2 · De los números a la estrategia

Fecha: 6 de agosto de 2026
Alcance: `gamma-teoria-semana-02.md`, contenido publicado del Gamma S2, `semana-02/index.html` (Auditoría, Tablero, Recursos), `glosario/terminos.csv`, `sesiones.csv`, `enlaces.csv`.

---

## 0. Pre-vuelo antes de activar las pestañas

| Ítem | Estado | Acción |
|---|---|---|
| `sesiones.csv` fila 2 · `estado` | `proximamente` | cambiar a `disponible` |
| `sesiones.csv` fila 2 · `glosario` | `0` | cambiar a `1`, si no los 5 términos de S2 no entran al glosario |
| `enlaces.csv` fila 2 | completa (gamma, presentación, video, audio) | sin acción |
| `glosario/terminos.csv` · términos S2 | 5 términos cargados y bien enlazados | sin acción |
| Chequeo de tono (palabras invalidantes) | limpio en `index.html` y en el `.md` | sin acción |
| Chequeo de guiones largos | limpio en repo; **hay uno en el Gamma publicado** | ver hallazgo 10 |

---

## 1. Validación matemática (verificada por segundo método)

Todo lo siguiente cierra exacto:

| Cálculo | Resultado | ✓ |
|---|---|---|
| 87 × 3.5 | 304.5 tacos/día | ✓ |
| 304.5 × $22 | $6,699/día | ✓ |
| $6,699 × 30 | $200,970/mes | ✓ |
| Camino A: 22 × 3.5 × 30 | $2,310/mes | ✓ |
| Camino B: 22 × 87 × 0.1 × 30 | $5,742/mes | ✓ |
| Camino C: 22 × 87 × 3.5 | $6,699/mes | ✓ |
| Punto de cruce: clientes = 10 × tacos/cliente | 35 clientes/día | ✓ |
| Café Andante: 24 × 1.25 × $40 × 26 | $31,200/mes | ✓ |
| Café A: 40 × 1.25 × 26 | $1,300/mes | ✓ |
| Café B: 40 × 24 × 0.1 × 26 | $2,496/mes | ✓ |

El JS de la app coincide con la teoría en las tres palancas y en el punto de cruce (`clientesCruce = 10 × tacosCliente`). El veredicto A/B y la dirección de la inversión ("por debajo de / por arriba de") están bien orientados en los dos casos.

**Ningún error de aritmética.** Los hallazgos que siguen son de argumento y de consistencia.

---

## 2. Hallazgo crítico · el "punto de cruce" no mide lo que la teoría dice que mide

**Dónde:** diapositivas "El tamaño de cada movimiento", "Comparando las Tres Palancas" y "El punto de cruce" del Gamma.

**Qué dice la teoría:** que el Camino B rinde más porque la taquería *ya tiene muchos clientes*, y que por eso la métrica que importa depende de la proporción en la que está parado el negocio hoy.

**Qué pasa en realidad:** el resultado está determinado por los incrementos absolutos que elegimos (+1 cliente vs +0.1 tacos), no por la proporción del negocio.

Demostración: si en vez de incrementos absolutos se mueven las dos palancas la *misma fracción* `f`,

- Camino A: precio × tacos/cliente × días × (f × clientes)
- Camino B: precio × clientes × días × (f × tacos/cliente)

Son la **misma expresión**. Dan idéntico resultado siempre, para cualquier precio, clientes, tacos/cliente y días. Verificado numéricamente: con f = 1.15%, A = B = $2,311.16. **Con movimientos relativamente iguales, no existe punto de cruce.**

El cruce en 35 es exactamente el punto donde `0.1 / tacos_cliente = 1 / clientes`, es decir, donde los dos incrementos absolutos por fin pesan lo mismo en términos relativos.

**El error puntual:** la diapositiva afirma que "aumentar de 3.5 a 3.6 es un ajuste del mismo tamaño relativo que el del Camino A". Con los números base:

- Camino A: 1 / 87 = **1.15 %**
- Camino B: 0.1 / 3.5 = **2.86 %**

B es 2.49× más grande en términos relativos. Y la razón de ganancias en pesos es $5,742 / $2,310 = **2.4857**. Es el mismo número. El "B rinde más del doble" *es* la diferencia de tamaño relativo, no un hallazgo sobre la taquería.

**Riesgo:** un alumno que divida 1/87 y 0.1/3.5 encuentra la contradicción, y el argumento central de la sesión queda circular.

**Corrección recomendada (no destruye la sesión, la endereza):** cambiar la justificación del incremento. En vez de "mismo tamaño relativo", usar el criterio que la propia app ya usa en sus tooltips: **la unidad operativa más chica de cada palanca**. No hay medio cliente; 0.1 tacos por cliente es lo más chico que un negocio real puede medir y perseguir. Con eso, la lección verdadera y defendible queda:

> Un mismo movimiento absoluto no pesa igual en las dos palancas. Cuánto rinde depende de la base sobre la que cae. Por eso la métrica que importa cambia según en qué proporción esté parado el negocio.

Eso sí es cierto, sí se sostiene con los números, y llega a la misma conclusión práctica. Nota: los tooltips ⓘ del Tablero ya dicen exactamente esto ("la unidad natural más chica de esta palanca"). **La app es hoy más honesta que el Gamma.** Alinear el Gamma a la app, no al revés.

---

## 3. Hallazgo alto · el selector de 4 palancas del Tablero contradice a la Auditoría

**Dónde:** pestaña "Tu tablero de supuestos", bloque "La métrica que importa".

Dos problemas encadenados:

**a) "Precio por unidad" aparece sin haber sido tratado en teoría.** El Gamma compara tres caminos (clientes, consumo, días) y deja el precio fijo a propósito ("Precio del taco fijo en $22, para aislar el efecto de la proporción"). Pero el Tablero introduce una cuarta palanca, +$1 al precio, que nunca se discutió. Y con los números de la taquería **gana por mucho**:

| Palanca | Impacto/mes (taquería) |
|---|---|
| Precio +$1 | **$9,135** |
| Días +1 | $6,699 |
| Unidades +0.1 | $5,742 |
| Clientes +1 | $2,310 |

+$1 sobre $22 es un movimiento de 4.5 %, el más grande de los cuatro. El alumno racional elige "subir el precio" y aprende lo contrario de lo que la sesión quiere enseñar.

**b) "Días abiertos" aparece como par, cuando la Auditoría dice explícitamente que no compite.** La Auditoría saca el Camino C del veredicto y explica por qué (techo físico de 28–31 días, agota un recurso finito, no es palanca escalable). El Tablero lo vuelve a poner en la misma lista, con su número al lado, listo para elegirse.

**Corrección recomendada:** el texto del bloque dice hoy "un empujón chico y comparable". No son comparables. Dos opciones:

1. *Mínima:* cambiar el copy a "un empujón de la unidad más chica de cada palanca" y agregar una nota que replique el argumento de la Auditoría para precio y días (precio: no está modelado si el cliente deja de venir; días: tiene techo y trae su propio costo). Los tooltips ⓘ ya lo dicen; súbelo al nivel del texto visible.
2. *Estructural:* separar visualmente las cuatro en dos grupos, igual que la Auditoría: **palancas de proporción** (clientes, unidades) arriba y con veredicto, **palancas con condición** (precio, días) abajo y evaluadas aparte.

La opción 2 hace que la Auditoría y el Tablero enseñen lo mismo. Default recomendado: opción 2.

---

## 4. Hallazgo alto · "Ingreso por semana" contradice "días abiertos al mes"

**Dónde:** ticket "Tu tablero de supuestos v1" y tira "Primeras sumas: tu semana, celda por celda".

`ingresoSemana = ingresoDia × 7` asume que el negocio abre los 7 días, pero justo arriba el alumno declaró cuántos días abre al mes. Con Café Andante (26 días):

- Ingreso/semana × 4 = $33,600
- Ingreso/mes real = $31,200

No cuadran, y la tira semanal muestra Lun a Dom todos abiertos con el mismo monto.

**Por qué importa esta semana en particular:** esa tira es el ancla del ejercicio de Google Sheets. El alumno va a reconstruir esa suma en la hoja y la diferencia va a aparecer ahí.

**Corrección recomendada:** derivar los días de la semana del supuesto mensual, `diasSemana = dias / 30 × 7` redondeado, y dejar en gris las celdas de los días cerrados. Si se prefiere no complicar la tira, quitar la fila "Ingreso por semana" del ticket y dejar la tira como ilustración explícita de "una semana si abrieras los 7 días".

---

## 5. Hallazgo medio · "Tasa" se enseña y nunca se usa

El Gamma dedica una diapositiva completa a razón (`a : b`) y tasa (segundo término = tiempo), y ambos entran al glosario. En toda la app **no aparece ninguna de las dos palabras ni la notación `a : b`**.

Resultado: dos de los cinco términos del glosario de la semana no tienen refuerzo práctico. Es el término que S3 en adelante va a dar por sabido.

**Corrección recomendada (barata):** una línea en la Auditoría, debajo de los tres deslizadores:

> "87 clientes por día" es una **tasa** (el segundo término es tiempo). "3.5 tacos por cada cliente" es una **razón**, se escribe 3.5 : 1. Los dos son proporciones; solo uno mide contra el tiempo.

Ahí quedan las tres etiquetas ancladas a números que el alumno acaba de mover.

---

## 6. Hallazgo medio · las preguntas de reflexión cubren 1 de los 4 objetivos

Mapa contra los objetivos declarados de la sesión:

| Objetivo de la sesión | Pregunta que lo cubre |
|---|---|
| 1. Dato vs. decisión | **ninguna** |
| 2. Cadena de proporciones ("por cada") | **ninguna** |
| 3. Comparar palancas y justificar | Video 1, Audio 1, Audio 2 |
| 4. Tablero de supuestos v1 | **ninguna** |

Detalle por pregunta:

- **Video 1** (atraer cliente nuevo vs. consumo, qué datos tienes/faltan): buena, ancla en A vs B y pide inventario de datos. **Conservar.**
- **Video 2** ("¿Qué te están diciendo tus números que hagas hoy para crecer mañana?"): no nombra ningún concepto de la sesión. Es motivacional, no evaluable contra la rúbrica. **Reemplazar.**
- **Audio 1** ("¿cuál es la palanca que más pesos movería...? justifica con la proporción actual"): correcta, pero es **casi literalmente la misma consigna** del textarea "¿Por qué esa es la métrica que importa para tu negocio?" en el Tablero. El alumno entrega dos veces la misma respuesta en dos PDFs distintos. **Reemplazar.**
- **Audio 2** (¿de qué lado del punto de cruce estás?): buena y bien conectada. **Conservar.**

Además, el resumen del audio menciona explícitamente a los Baniwa y el "dato aislado que no decide", y ninguna pregunta lo aprovecha.

**Reemplazos propuestos, con seguimiento a la teoría:**

> **Video 2 (nuevo) · objetivo 2, cadena de proporciones.**
> Escribe la cadena de "por cada" de tu propio negocio, del primer eslabón al ingreso mensual (clientes por día → unidades por cada cliente → pesos por cada unidad → días abiertos al mes). Pon el número que hoy le pondrías a cada eslabón y señala cuál de esos números es el que tienes menos fundamentado.

> **Audio 1 (nuevo) · objetivo 1 + objetivo 4, dato vs. decisión y supuesto.**
> El episodio arranca con los Baniwa y con que $200,970 al mes, por sí solo, no decide nada. Toma un número que hoy usas para hablar de tu negocio y explica qué decisión concreta **no** puedes tomar solo con él. ¿Contra qué segundo número tendrías que dividirlo para que empiece a decidir algo?

Con esos dos cambios la cobertura queda: objetivo 1 (Audio 1), objetivo 2 (Video 2), objetivo 3 (Video 1 + Audio 2), objetivo 4 (Audio 1, parcial, más el artefacto del Tablero). Y se elimina la duplicación con el Tablero.

---

## 7. Hallazgo medio · atribución de la fuente académica

El `.md` fuente aclara correctamente que Frank et al. (2008) y Gordon (2004) documentan el fenómeno "uno, dos, muchos" **en los Pirahã, no en los Baniwa**. El Gamma publicado y el resumen del audio en la app dejaron caer esa aclaración y presentan a los Baniwa respaldados por esos dos estudios.

La rúbrica de la sesión evalúa "Comunicación honesta". Conviene que la fuente lo sea.

**Corrección:** restituir la nota en la diapositiva de Fuentes del Gamma. Una línea: *el respaldo académico documenta el mismo tipo de sistema numérico en los Pirahã, otro pueblo amazónico.*

---

## 8. Bug · el PDF del tablero rompe la convención de nombres

`semana-02/index.html`, línea 1123:

```js
doc.save(`fcnc-s2-tablero-${nombreAlumno.replace(/\s+/g,'_')}.pdf`);
```

S1 usa en sus dos PDFs `nombreArchivoAlumno() + '_Reporte' + CODIGO_SESION + '.pdf'`. El PDF de reflexión de S2 sí respeta la convención (línea 785); el del tablero no: usa `s2` en minúscula sin cero, y el nombre crudo con acentos y espacios.

**Delta:**

```js
doc.save(nombreArchivoAlumno() + '_Tablero' + CODIGO_SESION + '.pdf');
```

Y ajustar la `entrega-nota` correspondiente si se agrega (ver hallazgo 9).

---

## 9. Hallazgos menores

**a) La conclusión de la Auditoría no cuenta en el progreso.** `conclusionAuditoria` llama a `actualizarProgreso()` pero no está en `camposClave` (5 campos). Va en el PDF del tablero como "Conclusión de la auditoría", así que es evaluable, pero el alumno puede dejarla vacía y aun así ver el botón en verde ✓. Decidir una de dos: contarla (6 campos) o sacarla del PDF.

**b) Tope del deslizador de días.** `audDiasSlider` tiene `max=30`, pero el Camino C en el valor por defecto significa pasar a 31, y el input del Tablero (`fDias`) sí acepta hasta 31. El Gamma dice "un mes tiene entre 28 y 31 días". Subir el `max` a 31 alinea las tres cosas.

**c) Sin instrucción de entrega para el tablero.** El Gamma llama al tablero de supuestos "el artefacto que se queda en tu portafolio esta semana", pero la pestaña no tiene `entrega-nota` con la actividad de Brightspace (Recursos sí la tiene: `S02 · Reflexión audio y video`). S1 tiene el mismo hueco, así que es una brecha del curso, no una regresión de S2. Si se cierra, sugerido: **S02 · Tablero de supuestos v1**.

**d) Sin validación cruzada con S1.** El Tablero pide clientes/día y unidades/cliente; en S1 el alumno declaró unidades/día. No hay señal de si `clientes × unidades/cliente` se parece a lo que puso en S1. Una nota basta: *"Multiplicados, estos dos deberían acercarse a las unidades por día que pusiste en Semana 1. Si no, uno de los dos supuestos hay que revisarlo."* Es refuerzo de S1 gratis.

**e) Deriva entre el `.md` fuente y el Gamma publicado.** El Gamma tiene todo un arco que no está en `gamma-teoria-semana-02.md`: "Las Palancas de Crecimiento" con tres caminos, "El tamaño de cada movimiento", "El Techo del Camino C". El `.md` solo compara **dos** palancas. Además el Gamma introdujo un guion largo ("Esa elección —justificada, no adivinada— es el artefacto"), que el `.md` resuelve con paréntesis según la convención del proyecto. Conviene re-sincronizar el `.md` para que siga siendo la fuente de verdad de S3 en adelante.

---

## 10. Estado de atención

Aplicado el 6 de agosto de 2026:

| # | Hallazgo | Tipo | Dónde | Estado |
|---|---|---|---|---|
| 1 | Justificación del incremento (hallazgo 2) | Argumento | Gamma S2, 1 diapositiva | **pendiente, manual en Gamma** |
| 2 | Selector de 4 palancas (hallazgo 3) | Consistencia | `semana-02/index.html` | aplicado |
| 3 | Ingreso por semana vs. días abiertos (hallazgo 4) | Cálculo/UX | `semana-02/index.html` | aplicado |
| 4 | Preguntas de video y audio (hallazgo 6) | Cobertura | `semana-02/index.html` | aplicado |
| 5 | Razón y tasa sin refuerzo (hallazgo 5) | Cobertura | `semana-02/index.html` | aplicado |
| 6 | Atribución Pirahã/Baniwa (hallazgo 7) | Integridad | Gamma S2, Fuentes | **pendiente, manual en Gamma** |
| 7 | Nombre del PDF (hallazgo 8) | Bug | `semana-02/index.html` | aplicado |
| 8a | Conclusión no contaba en el progreso | Decisión | `semana-02/index.html` | aplicado: 5 → 6 campos |
| 8b | Tope del deslizador de días | Menor | `semana-02/index.html` | aplicado: max 30 → 31 |
| 8c | `entrega-nota` del tablero | Decisión | `semana-02/index.html` | aplicado: `S02 · Tablero de supuestos v1` |
| 8d | Validación cruzada con S1 | Menor | `semana-02/index.html` | aplicado |
| 8e | Deriva entre el `.md` fuente y el Gamma | Mantenimiento | `gamma-teoria-semana-02.md` | **pendiente** |
| — | Apertura de la sesión | Release | `sesiones.csv` | aplicado: `disponible`, `glosario=1` |

**Dependencia externa:** la actividad **S02 · Tablero de supuestos v1** tiene que existir en Brightspace antes de abrir la sesión, o el alumno lee una instrucción que no puede cumplir. La Semana 1 no tiene esta nota de entrega en su ficha: si se quiere consistencia hacia atrás, hay que agregarla también ahí.

Los puntos 2, 3, 4, 5, 7 y los menores son ediciones puntuales sobre un archivo ya definido: ejecución mecánica, no arquitectura. Se pueden aplicar en un modelo más ligero una vez aprobado el criterio de cada uno.
