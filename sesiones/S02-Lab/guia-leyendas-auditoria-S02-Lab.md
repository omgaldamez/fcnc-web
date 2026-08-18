# Guía de leyendas · Auditoría de S02-Lab

Cómo leer con el grupo cada texto que rodea a los deslizadores de la pestaña Auditoría. Salió del código de `semana-02/index.html`, así que dice lo que la pantalla dice hoy, no lo que debería decir.

Tres columnas por elemento: qué se ve, qué significa, y cómo conviene decirlo en voz alta. Al final, las cuatro que conviene tocar antes de proyectar.

---

## 1. Los tres deslizadores

| Control | Recorrido | Valor de arranque |
|---|---|---|
| Clientes por día | 30 a 200, de uno en uno | 87 |
| Tacos por cada cliente | 1 a 6, de décima en décima | 3.5 |
| Días abiertos al mes | 24 a 31, de uno en uno | 30 |

**Cómo presentarlos.** Los tres son proporciones, y ahí está el tema de la semana. Vale nombrarlo antes de mover nada: *"los tres números que van a mover comparan una cantidad contra otra. Ninguno es un total."*

**La banda de cada uno explica de dónde sale el número, no qué hace el control.** Es información de origen, no de operación. Si alguien pregunta "¿y qué pasa si le muevo?", la respuesta no está en la banda, está en las tarjetas de la derecha.

---

## 2. La leyenda de razón y tasa (bajo los deslizadores)

Dice que los tres son proporciones, que "3.5 tacos por cada cliente" es una **razón** (se escribe 3.5 : 1) y que "87 clientes por día" y "días abiertos al mes" son **tasas**, porque el segundo término mide tiempo.

**Cómo decirlo.** La distinción es de una sola cosa: mira el segundo término. Si mide tiempo, es tasa. Si no, es razón. No hay más.

**Dónde suele trabarse.** Alguien va a preguntar por qué importa el nombre si los dos se calculan igual. La respuesta honesta es que se calculan igual y que el nombre sirve para saber contra qué estás comparando. Una tasa se puede anualizar o pasar a semana; una razón no, porque no hay tiempo adentro. Ese es todo el uso práctico por ahora.

**Nota de continuidad:** en S01-Lab ya usaron una tasa sin llamarla así, cuando dividieron las ventas del mes entre 30 días. Vale reconectarlo, porque es el término que S03 en adelante va a dar por sabido.

---

## 3. Las tres tarjetas de palanca

Cada tarjeta trae un movimiento, un número en pesos al mes, y una leyenda que explica de qué depende ese número. Con los valores de arranque: **A +$2,310 · B +$5,742 · C +$6,699**. Verificados.

### La leyenda que más rinde en clase

Cada tarjeta termina diciendo de qué **no** depende:

| Camino | La leyenda dice | Qué demostrar en vivo |
|---|---|---|
| A · +1 cliente | "No cambia si mueves clientes por día" | Mueve el deslizador de clientes de 87 a 150. El número de A no se inmuta. |
| B · +0.1 tacos | "No cambia si mueves tacos por cada cliente" | Mueve el de tacos de 3.5 a 5. El número de B no se inmuta. |
| C · +1 día | "No cambia si mueves días abiertos" | Mueve el de días. C no se inmuta. |

**Por qué es la mejor demostración de la sesión.** Cada palanca es sorda a su propio eslabón y sensible a los otros dos. Un cliente más vale lo que se lleva un cliente, así que depende del consumo y de los días, no de cuánta gente ya venga. Es contraintuitivo, se ve en tres segundos moviendo un control, y explica sin fórmulas por qué el veredicto cambia.

Conviene pedirles que predigan antes de mover. La predicción equivocada es la que fija el concepto.

### La tarjeta del Camino C

Está en un recuadro aparte, fuera del veredicto, con la nota de que compite contra otra cosa: cuántos días quedan disponibles. Su número es el más grande de los tres, así que alguien va a proponerlo.

**Cómo responder.** No es que C sea mala, es que no es comparable. A y B son ajustes marginales sobre lo que ya pasa; C es un día completo de operación con su nómina y sus insumos, y ninguno de esos costos está en el modelo. Y sobre todo, C tiene techo: el mes tiene entre 28 y 31 días y ahí se acaba. A y B se pueden seguir empujando.

---

## 4. El veredicto (la franja bajo las tarjetas A y B)

Cambia solo, con tres estados: gana B, gana A, o empatan. Siempre nombra el punto de cruce.

**Cómo usarlo.** Baja el deslizador de clientes desde 87 y que el grupo avise cuándo se voltea. Ocurre en **35**. Pregunta por qué justo ahí antes de explicar.

La regla, si alguien la quiere: **clientes = 10 × tacos por cada cliente**. Con 3.5 tacos, el cruce está en 35. Se puede comprobar moviendo el deslizador de tacos y viendo cómo el número del veredicto se mueve con él.

El botón "Punto de cruce exacto" deja los tres controles justo ahí, por si conviene llegar de un salto.

---

## 5. Los cinco casos precargados

| Botón | Deja | Para qué sirve |
|---|---|---|
| Taquería concurrida | 87 · 3.5 · 30 | el punto de partida |
| Puesto nuevo | 30 · 3.5 · 26 | el otro lado del cruce, gana A |
| Punto de cruce exacto | 35 · 3.5 · 30 | el empate |
| Pocos clientes, consumo alto | 40 · 6 · 30 | cruce en 60, gana A pese a tener buen consumo |
| Muchos clientes, consumo bajo | 150 · 1.5 · 30 | cruce en 15, gana B con creces |

Los dos últimos son los que cierran el argumento: **no es "muchos clientes gana B" a secas, es la relación entre los dos números.** Con 40 clientes y 6 tacos cada uno gana A, aunque el consumo sea alto. Vale correrlos en ese orden.

---

## 6. Las cuatro leyendas que conviene revisar antes de proyectar

Las pongo aparte porque son decisiones tuyas, no lecturas.

> **Estado al 18 de agosto de 2026.** Los puntos **a**, **b** y **c** se aplicaron a `semana-02/index.html` la noche del 17 de agosto, antes de la clase; hay un respaldo con marca de tiempo en `respaldos/`. El punto **d**, el aviso de fuera de rango, **no se aplicó**: sigue abierto y se decide en S03.

**a) La nota de arriba de las palancas dice "la misma cantidad de esfuerzo".** El texto completo es *"La misma 'cantidad de esfuerzo' en cada camino no rinde igual. Depende de la proporción actual."* Esa frase es justo la que quedó desmontada: +1 cliente sobre 87 es 1.15%, +0.1 tacos sobre 3.5 es 2.86%, y la razón entre esos dos porcentajes es 2.4857, idéntica a la razón entre $5,742 y $2,310. No son la misma cantidad de esfuerzo. Alternativa: *"El empujón más chico que cada camino puede dar en la práctica no rinde igual. Cuánto rinde depende de la base sobre la que cae."*

**b) El veredicto dice "como ya tienes muchos clientes".** Es cierto pero incompleto, y es la versión del argumento que la teoría ya corrigió. Alternativa: *"con esta proporción, esa décima cae sobre cada uno de los clientes que ya tienes"*.

**c) Con el deslizador de días en 31, la tarjeta C ofrece un día 32.** Sigue mostrando "+1 día abierto al mes" con su número, y tres líneas abajo la app dice que el mes tiene entre 28 y 31 días. Si no se toca, la salida es decirlo en voz alta cuando alguien llegue al tope, y convertirlo en la demostración de por qué C no compite.

**d) No hay aviso de fuera de rango.** En S01 los deslizadores avisaban en naranja al salirse de lo reportado, y eso se usó como momento de enseñanza. En S02 no existe: un alumno puede dejar 200 clientes con 6 tacos sin ninguna señal. Si no se agrega hoy, conviene decirlo: *"esta pantalla los deja llegar a cualquier lado. Que el número se pueda mover no quiere decir que la taquería pueda."*

Los cuatro son ediciones de texto sobre un archivo ya definido. Con el criterio aprobado, son ejecución mecánica.

---

*Guía de leyendas · Auditoría de S02-Lab. Números verificados contra el código el 17 de agosto de 2026.*
