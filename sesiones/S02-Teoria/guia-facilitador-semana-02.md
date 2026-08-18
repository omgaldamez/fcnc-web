# Guía del facilitador · Semana 2

**Fundamentos Cuantitativos para Negocios Creativos · CENTRO**
Sesión 2 de 15 · Duración: 2 horas · Grupo: 10 a 12 alumnos
Tema: *De los números a la estrategia* · Lente: **comparar**

> Esta sesión hace tres cosas. Cierra el pendiente de la Semana 1 devolviendo la hoja de cálculo corregida (y reconociendo en voz alta el error que se coló en vivo). Instala la lente de proporción: el "por cada". Y deja armado el tablero de supuestos v1, que es el artefacto de portafolio de la semana.
>
> A diferencia de la Semana 1, hoy el alumno **sí empieza a llenar su propio tablero en clase**. No lo termina, pero sale con los cuatro supuestos puestos.

---

## 1. Antes de entrar al salón

- [ ] Confirmar que `sesiones.csv` tiene la fila 2 en `disponible` y `glosario` en `1`. Ya quedó así, pero vale verificarlo abriendo la app.
- [ ] Abrir la app de Semana 2 y comprobar que cargan las cuatro pestañas y que el Gamma se ve dentro del iframe de Teoría.
- [ ] Mover los tres deslizadores de la auditoría una vez, para verificar que las tarjetas de Camino A, B y C responden en la máquina del salón.
- [ ] **Aplicar las tres correcciones al Gamma antes de proyectarlo.** Están listadas en `auditoria-contenido-semana-02.md`, sección 10. La más importante es la de la diapositiva "El tamaño de cada movimiento": sin ella, el argumento central de la sesión queda circular y un alumno que divida puede desarmarlo en el momento.
- [ ] Confirmar que existe en Brightspace la actividad **S02 · Tablero de supuestos v1**. La app ya le dice al alumno que suba ahí; si no existe, lee una instrucción que no puede cumplir.
- [ ] Subir `S01-Lab-resuelto.xlsx` a Drive, abrirlo con Google Sheets y compartirlo en modo copia. Es la versión corregida de la hoja que se armó en vivo la semana pasada. **Si no alcanza a quedar lista, la sesión corre igual:** la sección 3 se puede dar en el pizarrón con los seis números de la tabla, y la hoja se comparte después por Brightspace.
- [ ] Tener a la mano los números de la sección 3, porque la devolución de la hoja abre la sesión y conviene no buscarlos en el momento.

---

## 2. Minuto a minuto

| Min | Bloque | Qué pasa |
|---|---|---|
| 0 a 12 | **Devolución de la hoja de S1** | Se entrega la plantilla corregida y se nombra el error. Sección 3. |
| 12 a 22 | **Puente al tema de hoy** | Del dato exacto a la proporción. Sección 4. |
| 22 a 52 | **Teoría** | Gamma: la cadena de "por cada" y las palancas. Sección 5. |
| 52 a 82 | **Auditoría en la app** | Taquería: Camino A, B, C y el punto de cruce. Sección 6. |
| 82 a 107 | **Tablero de supuestos v1** | Demo y arranque real. Sección 7. |
| 107 a 115 | **Recursos y entregas** | Qué se sube, dónde, para cuándo. Sección 8. |
| 115 a 120 | **Cierre** | Sección 9. |

**Colchón:** si algo se alarga, el recorte se hace en la sección 7, dejando el tablero como trabajo completo de casa en vez de arrancarlo en clase. La auditoría y la devolución de la hoja no se tocan: la primera es el corazón de la sesión y la segunda es una deuda con el grupo.

---

## 3. Devolución de la hoja de Semana 1 (12 min)

Este bloque no es relleno administrativo. Es la rúbrica de **comunicación honesta** ocurriendo en vivo, con el profesor como sujeto. Vale más que cualquier discurso sobre el tema.

### 3.1 El error, dicho completo (5 min)

Proyecta la hoja corregida al lado de la que se armó en clase. Di la secuencia tal cual:

> "En la hoja que armamos quisimos dejar fija la ganancia en 10 centavos por cada peso vendido, para que dejara de verse como un número sacado de la manga. La intención estaba bien. La fórmula no. Escribimos *ventas entre 10*, y eso no fija nada: hace lo contrario."

Muéstralo con el número que lo delata:

> "Si las ventas son $300,000, *ventas entre 10* da $30,000 de ganancia por cada $100,000. O sea 30 centavos por peso, no 10. La fórmula subía el margen sola cada vez que subían las ventas."

Luego los resultados, con los números en pantalla:

| Fila | Lo que salió en clase | Lo correcto |
|---|---|---|
| Piso | $333.33 al día | $333.33 al día |
| Tu supuesto | $1,333.33 al día | $666.67 al día |
| Techo | $3,000.00 al día | $1,000.00 al día |

**El detalle que conviene señalar:** el piso salió bien. Por eso nadie lo notó. Una fórmula equivocada que acierta en el primer caso es más peligrosa que una que falla en todos, porque pasa la primera revisión.

Si el grupo aguanta el paso, muestra de dónde venía: al escribir `=ventas/10`, la ganancia diaria terminaba multiplicando ventas por ventas, así que crecía al cuadrado. Triplicar las ventas no triplicaba la ganancia diaria, la multiplicaba por nueve. No hace falta nombrar "cuadrática" todavía (eso es Semana 9); basta con que vean que el resultado crecía más rápido de lo que debía.

**La lección que vale más que la corrección:** fijar un número y calcularlo no son lo mismo. Un número fijo se escribe una vez y se lee desde donde haga falta. En cuanto se calcula a partir de otra cosa, deja de estar fijo aunque uno crea que sí.

### 3.2 Cómo quedó "¿por qué 15 mil?" (4 min)

Esta pregunta salió en clase, fue buena, y la hoja corregida la responde sacando el número de la discusión.

> "Preguntaron por qué $15,000. Fue una buena pregunta. Lo que hicimos fue dejar de mover ese número entre escenarios: la ganancia queda fija en **10%**, igual en el piso, en tu supuesto y en el techo. Así las tres filas se diferencian solo por las ventas, que es justo lo que queríamos comparar."

Y la propiedad que hay que nombrar, porque es la que hace que el modelo se entienda:

> "Ese 10% es **lineal**. Es el mismo porcentaje sin importar cuánto vendas. Si vendes el doble, ganas el doble. Ni más ni menos."

Muéstralo en vivo con las tres filas en pantalla: $100,000 dan $333.33 al día, $200,000 dan $666.67, $300,000 dan $1,000. El triple de ventas, el triple de ganancia. Esa proporcionalidad es la que la fórmula equivocada rompía.

Reconecta con el término **supuesto**, que ya está en el glosario desde la Semana 1. No hay que redefinirlo: basta con señalar que este es un ejemplo de uno bien puesto, fijado a propósito y dicho en voz alta.

### 3.3 El signo negativo de la columna F (3 min)

> "Varios notaron que en la fila del Piso la diferencia sale negativa. Está bien que salga así, y no quiere decir pérdida. La resta siempre es *esta fila menos tu supuesto*. Que el piso salga negativo significa que el piso deja menos al día que tu supuesto, o sea que ustedes están **por arriba** del piso. Es buena noticia escrita con signo menos."

La hoja corregida ya trae una columna que traduce eso a texto en cada fila. Señálala: es la primera vez que ven una celda que devuelve palabras en vez de números, y eso solo ya vale el minuto.

**Cierre del bloque:** "La hoja corregida está en el enlace. Hagan su copia. Lo que acaba de pasar es exactamente lo que este curso quiere que aprendan a hacer: encontrar el error, decirlo, y arreglar el modelo."

---

## 4. Puente al tema de hoy (10 min)

Arranca con el número que ya conocen y quítale el piso.

> "La taquería vende $200,970 al mes. Es un número exacto, verificable, nada de 'muchos'. Ahora díganme: ¿conviene gastar ese dinero en publicidad para que entre más gente, o en capacitar al equipo para que cada quien se lleve más?"

Recoge respuestas sin corregir. Cuando alguien argumente, pregunta con qué número lo sostiene. La respuesta honesta es que con $200,970 solo no se puede decidir ninguna de las dos.

> "Ese es el tema de hoy. La Semana 1 fue sobre conseguir el número correcto. Hoy vamos a ver que el número correcto, solo, no decide nada."

**Lectura de apertura.** Cierra el capítulo 1 de Maccarrone, "Uno, dos, muchos": los Baniwa tienen palabras para uno, dos y muchos. Contar con precisión es una construcción, no algo dado. Y hoy vamos a ver que contar preciso tampoco alcanza.

**Precisión que conviene tener lista.** Si alguien pregunta por el respaldo académico: los estudios de Frank y de Gordon documentan este tipo de sistema numérico en los **Pirahã**, otro pueblo amazónico, no en los Baniwa. El fenómeno es el mismo; el pueblo estudiado, no. Vale decirlo si sale, porque es justo la clase de precisión que la sesión pide.

---

## 5. Teoría (30 min) · pestaña Teoría de la app

Corre el Gamma. Los momentos donde conviene detenerse:

### 5.1 De contar a comparar

La definición, en lenguaje llano antes que en notación: una **proporción** es un número dividido entre otro para ver qué tanto corresponde a cada unidad del segundo. Se lee siempre "por cada".

Ancla con el ejemplo: 304.5 tacos entre 87 clientes son 3.5 tacos por cada cliente. Ese "3.5 por cada" dice algo que "304.5 tacos" no dice.

### 5.2 La cadena de "por cada"

Este es el corazón de la sesión. Vale escribirlo en el pizarrón mientras el Gamma lo muestra:

```
87 clientes/día  ×  3.5 tacos/cliente  =  304.5 tacos/día
304.5 tacos/día  ×  $22/taco           =  $6,699/día
$6,699/día       ×  30 días/mes        =  $200,970/mes
```

Pregunta al grupo: *"¿cuántas proporciones distintas hay en esas tres líneas?"* Son tres, y cada una se puede mover por separado. Ahí está toda la sesión.

### 5.3 Razón y tasa (la notación, después del concepto)

Solo después de que la cadena esté clara:

- **Razón:** "3.5 tacos por cada cliente". Se escribe `3.5 : 1`. El 1 casi siempre se omite.
- **Tasa:** "87 clientes por día". La diferencia es que el segundo término mide tiempo.

La app tiene este bloque escrito en la pestaña Auditoría, debajo de los deslizadores. Sirve de respaldo si alguien lo quiere releer.

### 5.4 El tamaño de cada movimiento

**Atención aquí, es la diapositiva corregida.** El punto que hay que dejar dicho, y que no conviene saltarse:

> "+1 cliente y +0.1 tacos son la unidad más chica que cada palanca puede mover en la práctica. No hay medio cliente, y nadie pide 0.1 tacos: eso describe que 1 de cada 10 clientes pide uno extra. Pero ojo, esas dos unidades **no son del mismo tamaño entre sí**. Un cliente más sobre 87 es 1.15%. Una décima de taco sobre 3.5 es 2.86%, dos veces y media más grande. Guárdense ese dato."

**Por qué importa tanto:** más adelante van a ver que el Camino B rinde 2.49 veces más que el A. Ese número es exactamente la razón entre 2.86% y 1.15%. Si un alumno lo descubre solo, es la mejor cosa que puede pasar en la sesión: significa que entendió que la diferencia en pesos viene del tamaño del empujón, no de una virtud escondida de la taquería.

### 5.5 Glosario de la semana

Cinco términos nuevos. Los cinco ya están cargados en el glosario acumulativo de la app, así que se proyectan, no se dictan.

| Término | En una línea |
|---|---|
| Proporción / razón | Qué tanto corresponde de una cantidad por cada unidad de otra. |
| Tasa | Proporción donde el segundo término es tiempo. |
| Palanca | Un número del modelo que, al cambiarlo, cambia el resultado. |
| La métrica que importa | La palanca que, con los supuestos de hoy, más mueve el resultado. |
| Tablero de supuestos | Los supuestos de un negocio puestos juntos y editables. |

Los términos de la Semana 1 (dato, métrica, supuesto, piso, techo) ya están en el glosario. Si alguien los necesita, se referencian ahí, no se vuelven a explicar.

---

## 6. Auditoría en la app (30 min) · pestaña Auditoría de un referente

### 6.1 Los tres caminos, en pesos (12 min)

Deja los valores por defecto (87 clientes, 3.5 tacos, 30 días, taco a $22) y lee las tres tarjetas en voz alta antes de mover nada:

| Camino | Movimiento | Resultado |
|---|---|---|
| A | +1 cliente por día | +$2,310 al mes |
| B | +0.1 tacos por cliente | +$5,742 al mes |
| C | +1 día abierto al mes | +$6,699 al mes |

Pregunta: *"C es el más grande. ¿Entonces ya está, abrimos un día más?"*

Deja que discutan. El argumento que tiene que salir, y si no sale lo pones tú: C no es comparable. A y B son ajustes marginales; C es un día completo de operación con su nómina y sus insumos. Y sobre todo, C tiene techo: el mes tiene entre 28 y 31 días y ahí se acaba. A y B pueden seguir moviéndose.

Por eso la app deja a C en un recuadro aparte, fuera del veredicto.

### 6.2 El punto de cruce (10 min)

Ahora baja el deslizador de clientes de 87 hacia abajo y que el grupo vea el momento en que el veredicto se voltea. Ocurre en **35 clientes por día**.

Pregunta antes de explicar: *"¿por qué justo ahí?"*

La respuesta, en lenguaje llano: con 3.5 tacos por cliente, mover 0.1 tacos pesa lo mismo que mover 1 cliente cuando hay 35 clientes. Arriba de 35, subirle a cada quien multiplica por más gente. Abajo de 35, traer gente nueva pesa más.

La regla, si alguien la quiere: el cruce está en `clientes = 10 × tacos por cliente`.

**Si sobra tiempo y el grupo va bien**, esta es la mejor pregunta de la sesión: *"si en vez de +1 cliente y +0.1 tacos moviéramos los dos un 5%, ¿cuál ganaría?"* La respuesta es que empatarían exacto, siempre. Es el mismo hallazgo que van a ver en el bloque 3 de la hoja de cálculo corregida. Si llegan ahí, el concepto quedó.

### 6.3 Conclusión escrita (8 min)

Cada quien escribe la conclusión en el campo de la app. Cuenta para el PDF y para el progreso de la sesión, así que no es opcional. Circula y empuja a que la justificación use la proporción y no solo el total.

---

## 7. Tablero de supuestos v1 (25 min) · pestaña Tu tablero de supuestos

### 7.1 Qué cambia respecto a la Semana 1 (5 min)

> "En su ficha de la Semana 1 su negocio quedó con dos números: precio por unidad y unidades por día. Ahí había dos supuestos escondidos que dimos por hechos: que cada cliente compra una unidad, y que el mes tiene 30 días de venta. Hoy los sacamos a la luz."

Proyecta el ejemplo de Café Andante, que ya está resuelto en la app:

- $40 por unidad, 24 clientes al día, 1.25 unidades por cliente, 26 días abiertos
- Ingreso mensual: $31,200
- Camino A (+1 cliente): +$1,300 al mes
- Camino B (+0.1 unidades): +$2,496 al mes

Para Café Andante la métrica que importa es "unidades por cada cliente". No porque lo sea siempre, sino porque con su proporción actual esa es la palanca que más mueve.

### 7.2 Trabajo real (15 min)

Cada quien llena sus cuatro supuestos. Tú circulas. Tres cosas que conviene revisar de mesa en mesa:

1. **La comprobación con la Semana 1.** Clientes por día × unidades por cliente debería acercarse a las unidades por día que pusieron la semana pasada. La app trae la nota, pero conviene decirlo en voz alta: si no se parecen, uno de los dos supuestos hay que revisarlo.
2. **Los días abiertos.** Muchos van a poner 30 por inercia. Pregunta si de verdad abren todos los días. La tira semanal de la app raya los días cerrados, así que se nota de inmediato.
3. **La elección de métrica.** La app ahora separa las cuatro palancas en dos grupos: las de proporción (clientes, unidades) compiten entre sí y tienen veredicto; las de condición (precio, días) están aparte.

**El error que van a cometer, y hay que estar listo:** casi todos van a ver que "+$1 al precio" da el número más grande y lo van a elegir. Es una elección legítima, pero tiene que hacerse cargo de su condición: el modelo supone que el cliente sigue comprando al precio nuevo, y eso no está calculado en ningún lado. Si alguien elige precio, la pregunta es *"¿cuántos clientes puedes perder antes de que ese peso extra deje de convenirte?"*. No tienen que saber responderla hoy; tienen que reconocer que existe.

### 7.3 Justificación (5 min)

Escriben por qué esa es su métrica. El criterio de la rúbrica es doble: cuánto mueve **y** qué tan realista es moverla. Una justificación que solo dice "es la que da más pesos" está incompleta.

---

## 8. Recursos y entregas (8 min)

Abre la pestaña Recursos y muestra dónde está cada cosa. Lo que se llevan, en el orden en que lo van a hacer:

1. **Ver el video y escuchar el podcast** de la pestaña Recursos.
2. **Terminar el tablero de supuestos** si no quedó completo en clase.
3. **Responder las cuatro preguntas de reflexión**, mínimo 150 caracteres cada una.
4. **Descargar los dos PDF** y subirlos a Brightspace: el tablero va en **S02 · Tablero de supuestos v1** y las reflexiones en **S02 · Reflexión audio y video**.
5. **Guardar su copia** de la plantilla de Sheets corregida.

Vale advertir sobre dos de las preguntas de reflexión, porque piden trabajo real y no una frase:

- La segunda del video pide **escribir la cadena de "por cada" completa** de su negocio y señalar cuál eslabón tienen menos fundamentado. Es la que más se conecta con la clase de hoy.
- La primera del audio pide tomar un número que ya usan y decir **qué decisión no pueden tomar solo con él**. Es la pregunta de apertura de hoy, devuelta como tarea.

---

## 9. Cierre (5 min)

> "Empezamos hoy con un ingreso exacto que, solo, no decidía nada. Terminamos con ese mismo ingreso partido en una cadena de 'por cada', donde cada eslabón se puede mover por separado y comparar contra los otros. Eso es la diferencia entre tener un dato y tener una estrategia: la estrategia elige qué eslabón mover primero, y por qué."

**Puente a la Semana 3:** el tablero de hoy solo mira lo que entra. La semana que viene se abre la otra mitad, lo que cuesta producir cada unidad, y ahí va a importar algo que hoy no tocamos: el orden en que se hacen las operaciones, porque ese orden puede cambiar el resultado.

---

## 10. Riesgos de esta sesión y qué hacer

| Riesgo | Señal | Qué hacer |
|---|---|---|
| **Alguien desarma el argumento de las palancas** | "Pero 0.1 sobre 3.5 es más que 1 sobre 87" | Es la mejor pregunta posible y hay que celebrarla, no esquivarla. Confirma que tiene razón, y que por eso B rinde 2.49 veces más: es exactamente la razón entre los dos porcentajes. La conclusión de la sesión no cambia, la razón sí. |
| **Se proyecta el Gamma sin corregir** | La diapositiva dice "del mismo tamaño relativo" | Corrígelo en voz alta en el momento. Es peor dejarlo pasar que interrumpir. |
| **Todos eligen "subir el precio"** | Cuatro o cinco tableros seguidos con precio marcado | No lo prohíbas. Pregunta a cada uno cuántos clientes puede perder antes de que deje de convenir. Con eso basta hoy. |
| **Confusión con el signo negativo** | "Entonces estoy perdiendo dinero" | Vuelve a la sección 3.3. La columna de lectura de la hoja lo dice en palabras. |
| **Nadie hizo la ficha de Semana 1** | No tienen precio ni unidades para arrancar | Que usen Café Andante como base y lo declaren. Es mejor un tablero con números prestados que un tablero vacío. |
| **La app no carga** | Pantalla en blanco o pestañas ausentes | La app necesita servidor web, no funciona con doble clic. Usa el enlace publicado. |
| **Se acaba el tiempo** | Vas en el minuto 100 y no has abierto el tablero | Deja el tablero como trabajo de casa completo. La auditoría y la devolución de la hoja ya cumplieron el objetivo de la sesión. |

---

## 11. Después de clase

- [ ] Anotar en la bitácora dónde se fue el tiempo y qué confusión se repitió.
- [ ] Registrar quién eligió "precio" como métrica, para revisar esa justificación con cuidado al calificar.
- [ ] Confirmar que las dos actividades de Brightspace recibieron entregas y que los nombres de archivo salieron bien (`NombreApellido_TableroS02` y `NombreApellido_ReflexionS02`).
- [ ] Si alguien encontró el argumento de los porcentajes en clase, anotarlo: es material para abrir la Semana 3.

---

*Guía del facilitador · Semana 2 de 15. Se actualiza con el delta de lo que ocurra en clase.*
