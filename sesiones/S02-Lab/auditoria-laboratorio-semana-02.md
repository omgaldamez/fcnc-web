# Auditoría de estado · Laboratorio de Semana 2

Fecha: 16 de agosto de 2026 · sesión de mañana
Alcance: continuidad S1 a S2. Los tres `.xlsx` de S1, `guia-facilitador-semana-02.md`, `semana-02/index.html` (deslizadores, leyendas y veredicto de la auditoría), `sesiones.csv`, `enlaces.csv`.
Complementa a `auditoria-contenido-semana-02.md` (6 de agosto). No repite sus hallazgos: revisa qué quedó aplicado y qué apareció después.

---

## 0. Qué hay y qué falta (respuesta directa)

**Sí tengo los tres archivos de hoja de cálculo.** Están en la raíz de `fcnc-web`:

| Archivo | Qué es | Estructura |
|---|---|---|
| `S01-Lab-clase.xlsx` | La plantilla que se repartió antes del laboratorio de S1 | 3 hojas: Auditoría taquería, Ficha de tu negocio, Vocabulario. La ganancia por cada $100,000 cambia entre filas (10k / 15k / 20k). |
| `S01-Lab-resuelto-v1.xlsx` | Versión intermedia posterior a clase | 1 hoja, 5 bloques. La ganancia se fija en una sola celda (`B12 = $10,000`), sin porcentaje. Incluye el bloque de empujones proporcionales y las notas de sesión. |
| `S01-Lab-resuelto.xlsx` | La versión final, guardada 18 minutos después de la anterior | 1 hoja, 2 bloques. Introduce columna de porcentaje (10%) y columna de lectura en palabras. Perdió tres bloques respecto a la intermedia. |

**Lo que no tengo y conviene que subas:** la hoja tal como quedó armada en vivo en clase, la que trae `=ventas/10`. La guía de S2, sección 3.1, pide proyectarla al lado de la corregida ("Proyecta la hoja corregida al lado de la que se armó en clase"). Sin ese archivo, ese momento se cuenta pero no se muestra, y es el momento donde el error se vuelve visible.

**Contexto de S1 que sí está reconstruido:** la bitácora del semestre, las dos guías de facilitador de S1 (sesión completa y solo laboratorio), la app publicada y la auditoría de contenido de S2. Con eso el hilo queda cerrado.

---

## 1. Hallazgo crítico · la columna D de la hoja corregida muestra el error que la sesión va a llamar error

**Dónde:** `S01-Lab-resuelto.xlsx`, columna D, encabezado "Ganancia por cada $100k".

La fórmula es `=B*C`, o sea ventas por 10%. Eso da la ganancia mensual total, no la ganancia por cada $100,000:

| Fila | Ventas | Lo que muestra D | Lo que vale de verdad la ganancia por cada $100k |
|---|---|---|---|
| Piso | $100,000 | $10,000 | $10,000 |
| Tu supuesto | $200,000 | $20,000 | $10,000 |
| Techo | $300,000 | $30,000 | $10,000 |

Al 10% fijo, la ganancia por cada $100,000 es $10,000 en las tres filas por definición. La columna crece con las ventas, que es exactamente el comportamiento del error de la semana pasada.

**Por qué es crítico y no un detalle de etiqueta.** El guion de la devolución dice, palabra por palabra: *"Si las ventas son $300,000, ventas entre 10 da $30,000 de ganancia por cada $100,000. O sea 30 centavos por peso, no 10."* Y en la hoja corregida, proyectada en ese mismo momento, la fila del techo muestra **$30,000** bajo el encabezado **"Ganancia por cada $100k"**. Un alumno atento ve el número que acabas de llamar equivocado dentro de la hoja que presentas como correcta.

**Delta, dos opciones:**

1. Cambiar el encabezado de D a **"Ganancia mensual"**. La fórmula `=B*C` ya es correcta para ese nombre. Costo: cero.
2. Cambiar la fórmula a `=C*100000` y dejar el encabezado. Da $10,000 constante en las tres filas, y esa constancia es una demostración visual de que el 10% es lineal, que es justo lo que dice la nota A15.

La opción 2 enseña más y cuesta lo mismo. Es el default que recomiendo.

---

## 2. Hallazgo crítico · la hoja corregida formaliza el porcentaje, y el porcentaje está reservado para Semana 4

**Dónde:** columna C de la hoja corregida ("Ganancia (% de las ventas)", valor 0.1) y guía de S2, sección 3.2 ("la ganancia queda fija en **10%**").

El precedente de S1 está en la bitácora, sección 2: el deslizador de margen se rediseñó de porcentaje a "ganancia por cada $100,000 vendidos" en pesos precisamente porque introducir el operador antes de tiempo rompe la secuencia. La bitácora lo declara extensivo: *"si un concepto no ha sido formalizado todavía en el temario, tampoco se formaliza dentro de una app"*. La guía de S1 hasta trae el riesgo previsto: *"¿Eso no es un 15%? Confirma que sí, y que en la Semana 4 se ve formalmente. Hoy se trabaja en pesos por cada cien mil."*

La versión intermedia resolvía esto bien: una sola celda verde con $10,000 por cada $100,000, misma lección de "fijar contra calcular", sin operador nuevo. La corregida retrocedió.

**Delta, dos caminos que sí son excluyentes:**

- **Volver a pesos.** C pasa a ser "Ganancia por cada $100,000" con valor $10,000, y la ganancia diaria queda `=E*(C/100000)`. Se conserva la secuencia. S4 estrena el operador como estaba planeado.
- **Mantener el porcentaje y declararlo.** Se dice en voz alta que es un adelanto, que se llama porcentaje, y que en S4 se ve completo. Cuesta el momento de estreno de S4, y hay que anotarlo en la bitácora para que S4 no lo presente como nuevo.

Recomiendo el primero por consistencia con lo ya decidido. Es tu llamada, y afecta a S4, así que conviene cerrarla hoy y no en el salón.

---

## 3. Hallazgo alto · la guía manda a un bloque 3 que no existe en la hoja corregida

**Dónde:** guía de S2, sección 6.2: *"Es el mismo hallazgo que van a ver en el bloque 3 de la hoja de cálculo corregida."*

La hoja corregida tiene dos bloques. El bloque de empujones proporcionales (celda de "Tamaño del empujón" al 25%, los dos caminos empatan siempre) existe solo en `S01-Lab-resuelto-v1.xlsx`, como bloque 4. Se perdió al corregir.

Ese bloque no es relleno: es el puente exacto al hallazgo central de la auditoría previa, que con movimientos de la misma proporción no existe punto de cruce. Es lo que sostiene la mejor pregunta de la sesión ("si moviéramos los dos un 5%, ¿cuál ganaría?").

**Delta:** reinsertarlo en la corregida como bloque 3, con la nota que ya venía redactada en la intermedia. Verificado: con las fórmulas de la corregida, A y B empatan para cualquier valor del empujón.

---

## 4. Hallazgo alto · la hoja corregida ya no coincide con la app de S1, y perdió la nota que lo explicaba

Tres juegos de números circulando sobre el mismo ejemplo:

| Fuente | Piso | Tu supuesto | Techo |
|---|---|---|---|
| App de S1 (publicada, la que usaron en clase) | $333.33 | $1,000.00 | $2,000.00 |
| Hoja corregida | $333.33 | $666.67 | $1,000.00 |

Coinciden solo en el piso. La razón es legítima: la app mueve la ganancia entre escenarios (10k, 15k, 20k) y la hoja la deja fija. Son dos modelos distintos y los dos están bien.

El problema es que la versión intermedia traía la nota que decía esto (bloque 5, "Ojo con esta diferencia") y la corregida la borró. Como la app sigue publicada, un alumno que abra las dos encuentra dos "verdades" sin explicación.

Lo mismo pasa con el contraste de palancas: en clase se mostró **+$250 (A) contra +$333 (B)**, y la hoja corregida da **+$166.67 contra +$333.33**. Verificado por segundo método.

**Delta:** una línea en la hoja y una línea en el guion. Algo así:

> La app de la Semana 1 mueve la ganancia entre escenarios y esta hoja la deja fija. Por eso el piso coincide y el techo no. No es un error de ninguno de los dos: son dos preguntas distintas hechas al mismo negocio.

---

## 5. Hallazgo alto · la guía dice "columna F" y en la hoja corregida es la columna G

**Dónde:** guía de S2, sección 3.3, titulada "El signo negativo de la columna F". Y la propia hoja corregida, nota A16: *"Sobre el signo de la columna F"*.

En la corregida, F es "Ganancia diaria" y G es "Diferencia vs tu supuesto". La referencia quedó de la versión intermedia, donde sí era F. Al insertar las columnas C y D todo se recorrió y la nota no siguió.

**Delta:** F pasa a G en la nota A16 de la hoja y en el título y el cuerpo de la sección 3.3 de la guía. Si se aplica el delta 1 quitando la columna D redundante, verificar de nuevo la letra antes de imprimir.

---

## 6. Hallazgo alto · la sesión de mañana es laboratorio y la guía de S2 está escrita para sesión completa

`guia-facilitador-semana-02.md` reparte 120 minutos con 30 de teoría en Gamma (sección 5). Esa teoría ya se dio. Corriendo la guía tal cual, sobran alrededor de 25 minutos y falta el bloque que el laboratorio necesita.

Y aquí está el hueco de fondo: **el minuto a minuto de S2 no asigna tiempo a construir nada en la hoja de cálculo.** Sheets aparece solo en la lista de entregas, como "guardar su copia". La auditoría del 6 de agosto ya lo daba por existente cuando dijo que la tira semanal *"es el ancla del ejercicio de Google Sheets"* (hallazgo 4), pero ese ejercicio nunca se diseñó.

S1 sí resolvió esto: existe `guia-facilitador-semana-01-laboratorio.md` como variante, con 14 minutos de construcción en Sheets al proyector y su propio contraste de palancas verificado. No existe el equivalente para S2.

**Presupuesto que queda si se corre como laboratorio:** los 12 minutos de devolución se quedan intactos (es una deuda con el grupo), la teoría baja de 30 a unos 8 de repaso proyectado, y quedan cerca de **22 minutos libres** para el bloque de hoja de cálculo sin tocar la auditoría ni el tablero.

---

## 7. Deslizadores y leyendas de la auditoría (lo que recordabas)

Verifiqué los tres deslizadores, sus bandas de texto, las tres tarjetas de palanca y el veredicto. La aritmética está bien en todos los casos: A = $2,310, B = $5,742, C = $6,699 con los valores base, y el cruce en 35 clientes. Los problemas son de leyenda, no de cálculo.

**a) El día 32.** `audDiasSlider` ahora llega a 31, que fue el arreglo pedido en la auditoría previa. Con el deslizador en 31, la tarjeta del Camino C sigue diciendo "+1 día abierto al mes" y muestra un número. Ese día no existe. La nota que está tres líneas abajo dice *"El mes solo tiene entre 28 y 31 días: ese es su techo"*, así que la app se contradice sola en el extremo del recorrido. El arreglo del tope creó el borde.
**Delta:** cuando días llegue a 31, atenuar la tarjeta C y cambiar su texto a "ya no quedan días que abrir: aquí es donde el Camino C se topa con su techo". Convierte el error en la mejor demostración posible de por qué C no compite.

**b) Se perdió el aviso de fuera de rango.** En S1 los dos deslizadores avisaban en naranja al salirse del rango reportado, y la guía de S1 lo usaba como momento de enseñanza: *"la app no te prohíbe nada, te avisa"*. En S2 los tres deslizadores de la auditoría no tienen ese aviso. Un alumno puede dejar 200 clientes con 6 tacos cada uno sin ninguna señal de que salió de lo que las fuentes reportan. Es una regresión respecto a un momento que ya se enseñó.

**c) La banda de clientes describe un solo escenario.** Dice *"una taquería concurrida recibe decenas a un par de cientos de clientes al día"*, pero el recorrido va de 30 a 200 y uno de los casos precargados ("Puesto nuevo") deja el deslizador en 30, el mínimo. La leyenda habla de una taquería concurrida mientras el control está puesto en un puesto nuevo.

**d) El veredicto conserva el argumento que la auditoría previa desmontó.** Este es el importante. El hallazgo 2 del 6 de agosto pedía cambiar la justificación del incremento, y la corrección se aplicó en los tooltips del tablero. En la pestaña de auditoría no se aplicó. Siguen ahí dos textos:

- Arriba de las palancas: *"La misma 'cantidad de esfuerzo' en cada camino no rinde igual."*
- En el veredicto: *"Gana el Camino B: como ya tienes muchos clientes, que cada uno lleve un poco más rinde más que traer uno nuevo."*

"La misma cantidad de esfuerzo" es literalmente la frase que el hallazgo desarmó: +1 cliente sobre 87 es 1.15%, +0.1 tacos sobre 3.5 es 2.86%, dos veces y media más grande. Verificado: la razón entre esos dos porcentajes, 2.4857, es idéntica a la razón entre $5,742 y $2,310.

Y hay un detalle de calendario que importa mañana: la guía, sección 5.4, enseña la **versión corregida** del argumento. Si el alumno abre la app, lee la versión vieja del mismo argumento en pantalla mientras tú explicas la nueva.

**Delta mínimo:** cambiar la nota de arriba a *"El empujón más chico que cada camino puede dar en la práctica no rinde igual. Cuánto rinde depende de la base sobre la que cae."* Y en el veredicto, sustituir "como ya tienes muchos clientes" por *"con esta proporción, esa décima cae sobre cada uno de los clientes que ya tienes"*.

---

## 8. Pendientes de la auditoría previa que siguen abiertos

De la sección 10 del 6 de agosto, tres siguen marcados como pendientes y ninguno se puede verificar desde el repo porque viven en Gamma:

| # | Qué | Estado a confirmar |
|---|---|---|
| 1 | Diapositiva "El tamaño de cada movimiento", justificación del incremento | ¿se corrigió antes de proyectar la teoría? |
| 6 | Atribución académica: Frank y Gordon documentan a los Pirahã, no a los Baniwa | ¿se restituyó la nota en la diapositiva de Fuentes? |
| 8e | Deriva entre `gamma-teoria-semana-02.md` y el Gamma publicado | pendiente, no bloquea mañana |

Si el 1 no se corrigió en vivo, mañana es la oportunidad. Decirlo abiertamente encaja con la rúbrica de comunicación honesta que ya está en juego con la devolución de la hoja, y refuerza el mismo mensaje en vez de competir con él.

**Verificado y en orden:** `sesiones.csv` fila 2 en `disponible` con `glosario=1`, `enlaces.csv` fila 2 completa con Gamma, presentación, video y audio, y las siete correcciones marcadas como aplicadas en `semana-02/index.html` están efectivamente en el archivo (grupos de palancas separados, tira semanal derivada de los días abiertos, seis campos de progreso, tope del deslizador en 31, nota de entrega del tablero, validación cruzada con S1, nombre del PDF).

---

## 9. Orden sugerido para hoy

1. Decidir el punto 2 (porcentaje contra pesos por cada $100,000). Todo lo demás de la hoja depende de esa decisión.
2. Aplicar los deltas 1, 3, 4 y 5 sobre la hoja corregida y regenerar el `.xlsx` con formatos y comentarios, como se hizo en S1.
3. Aplicar los cuatro deltas de leyenda del punto 7 sobre `semana-02/index.html`.
4. Escribir `guia-facilitador-semana-02-laboratorio.md` con el bloque de hoja de cálculo en los 22 minutos que quedan libres.
5. Subir la hoja del error, si la tienes, para el momento de la devolución.

Los pasos 2 y 3 son ediciones puntuales sobre archivos ya definidos. Una vez aprobado el criterio de cada uno, son ejecución mecánica y se pueden correr en un modelo más ligero.

---

*Auditoría de estado · laboratorio de Semana 2 · complementa a `auditoria-contenido-semana-02.md`.*
