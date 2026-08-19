# Guía de recorrido · `S02-Lab-resuelto.xlsx`

Para Omar. Se lee con el archivo abierto al lado. Toma unos 25 minutos.

El objetivo no es que apruebes el archivo renglón por renglón: es **detectar dónde tropieza la explicación**. Por eso la parte 2 te pide mover celdas y contar en voz alta lo que ves. Donde te trabes al explicarlo, ahí hay un problema de la hoja, no tuyo.

---

## Qué cambió desde la versión que ya conocías

Cuatro cosas, todas aplicadas ya:

1. **El bloque 6 tiene su propia celda verde de ensayo (B51).** Antes la hoja te mandaba a escribir el empate en B16, que es un supuesto que el Panel lee: seguir esa instrucción invertía la conclusión del Panel y dejaba mintiendo cuatro etiquetas. Ahora B16 no se toca y el ensayo vive aparte.
2. **B49 se muestra con seis decimales** (`0.040229885`) en vez de redondeado a `0.04`, y el texto de abajo explica qué pasa si escribes el redondeado.
3. **B48 se muestra como `4.97 veces`** en vez de `5.0 veces`, para que cuadre con el "casi cinco" del texto.
4. **Tres verificaciones de `Comprobación` eran tautológicas** (comparaban una fórmula contra sí misma). Ahora recalculan pasando por pesos, que sí es otra ruta. La pestaña pasó de 12 a 13 verificaciones.

El deck del empate quedó alineado con esto.

---

## Los valores de arranque, para poder regresar

Si mueves algo y quieres volver:

| Pestaña | Celda | Valor original |
|---|---|---|
| S02-Lab | B7 · clientes por día | 87 |
| S02-Lab | B8 · unidades por cliente | 3.5 |
| S02-Lab | B9 · precio | 22 |
| S02-Lab | B10 · días abiertos | 26 |
| S02-Lab | B15 · clientes adicionales | 1 |
| S02-Lab | B16 · unidades adicionales | 0.2 |
| S02-Lab | B17 · días adicionales | 1 |
| S02-Lab | B51 · ensayo | 0.2 |
| Tu negocio | C7 / C8 | 55 / 100 |
| Tu negocio | C13 / C14 / C15 | 18 / 5.6 / 26 |

Más simple todavía: **Ctrl+Z**, o cerrar sin guardar al terminar.

---

# Parte 1 · Recorrido en frío

Cinco paradas. En cada una: qué mirar, qué deberías ver, y la pregunta que te hago.

### Parada 1 · `Panel`, filas 13 a 18

Es lo primero que ve el alumno y lo que abre la sesión de S03.

**Deberías ver** la taquería en $174,174 al mes y el negocio de ejemplo en $144,144. Abajo, la fila 17: la taquería dice *"unidades por cliente"* y el negocio de ejemplo dice *"traer clientes"*. **Dos negocios, dos respuestas distintas.** Ese contraste es la tesis de la semana.

> **P1.** ¿El contraste se entiende leyendo solo esas seis filas, sin ir a las otras pestañas?

### Parada 2 · `Panel`, columna D

La columna "Dónde se vio" manda a la celda exacta de donde sale cada número.

**Deberías ver** referencias como "S02-Lab, bloque 4, fila 29". Verifiqué que las siete apuntan bien.

> **P2.** ¿Le sirve al alumno una referencia así, o preferirías que dijera el nombre del bloque en vez del número de fila?

### Parada 3 · `S02-Lab`, bloques 1 y 2

Los supuestos azules (no se mueven) separados de los movimientos verdes (sí se mueven), en dos bloques distintos.

**Deberías ver** las tres celdas verdes juntas en las filas 15, 16 y 17. Esa separación es lo que Omar armó en vivo el 17 de agosto.

> **P3.** ¿Queda claro por qué el precio es azul y los días adicionales son verdes, cuando los dos son "números que se podrían cambiar"?

### Parada 4 · `S02-Lab`, bloque 4, columna C

La columna **"Qué número NO aparece"**. Es la respuesta a la pregunta que se llevó media sesión el 17 de agosto.

**Deberías ver** que cada camino declara cuál de los cuatro números falta en su fórmula y por qué.

> **P4.** Esa columna, ¿resuelve la duda del 3.5, o hay que decirla en voz alta de todos modos?

### Parada 5 · `Comprobación`

**Deberías ver** "13 de 13 verificaciones en orden" abajo, y la columna G explicando por qué ruta se verificó cada una.

> **P5.** ¿Esta pestaña la ve el alumno, o es solo tuya? Cambia cómo hay que escribirla.

---

# Parte 2 · Cuatro escenarios

Aquí está lo que te pedí: mueve **una sola celda**, mira qué se movió, y **cuéntalo en voz alta como se lo contarías al grupo**. Te doy los números que deberían salir para que detectes cualquier desajuste, y abajo la explicación que la hoja debería dejarte dar. Si no te sale, eso es el hallazgo.

---

### Escenario A · `S02-Lab` B10: cambia 26 días por **24**

**Deberían salir estos números:**

| Celda | Antes | Después |
|---|---|---|
| B24 · ingreso del mes | $174,174 | **$160,776** |
| B29 · Camino A | $2,002 | **$1,848** |
| B30 · Camino B | $9,952.80 | **$9,187.20** |
| B48 · cuántas veces | 4.97 veces | **4.97 veces** |
| B49 · el empate | 0.040230 | **0.040230** |

**Lo que deberías poder decir en voz alta:** *"Todo el dinero bajó, pero el empate no se movió ni un decimal. Cerrar dos días le pega a los dos caminos exactamente igual, así que no cambia cuál conviene, solo cuánto rinde."*

Es la prueba en vivo de la frase del deck: el precio y los días se cancelan en la comparación.

> **PA.** ¿Se sostiene el argumento cuando lo dices tú, o hace falta que la hoja lo diga en algún lado?

---

### Escenario B · `S02-Lab` B9: cambia $22 por **$30**

| Celda | Después |
|---|---|
| B24 | **$237,510** |
| B29 · Camino A | **$2,730** |
| B30 · Camino B | **$13,572** |
| B48 | **4.97 veces** |
| B49 | **0.040230** |

**Lo que deberías poder decir:** lo mismo del escenario A por el otro lado. Subir el precio 36% sube todo, y el empate sigue clavado. Ya son dos supuestos distintos que no mueven la decisión: empieza a verse que **lo único que la mueve es la proporción entre gente y consumo**.

> **PB.** ¿Vale la pena correr los dos escenarios en clase, o con uno alcanza y el otro cansa?

---

### Escenario C · `S02-Lab` B7: cambia 87 clientes por **15**

Este es el importante. Estás convirtiendo la taquería en un negocio de pocos clientes.

| Celda | Antes | Después |
|---|---|---|
| B24 | $174,174 | **$30,030** |
| B29 · Camino A | $2,002 | **$2,002** (no se mueve) |
| B30 · Camino B | $9,952.80 | **$1,716** |
| B47 · unidades del B | 17.4 | **3.0** |
| B48 | 4.97 veces | **0.86 veces** |
| B49 · el empate | 0.040230 | **0.233333** |
| Panel fila 17, taquería | unidades por cliente | **traer clientes** |

**Lo que deberías poder decir:** *"Con 15 clientes, la misma taquería cambia de respuesta. El Camino A ni se enteró, porque el cliente nuevo se lleva sus 3.5 unidades sin importar cuántos haya. El que se desplomó fue el B, porque esas dos décimas ahora caen sobre 15 personas y no sobre 87."*

**Lo que yo ya vi y quiero que confirmes:** cuando la fila 17 del `Panel` cambia a "traer clientes", el párrafo de abajo (fila 18) sigue diciendo que *"la taquería tiene mucha gente y poco consumo, así que le rinde más subirle a cada quien"*. Ese párrafo está escrito a mano y no se entera. Los supuestos de la taquería son azules, o sea que el alumno no debería moverlos, pero tú sí los vas a mover en el proyector, que es justo lo que acabas de hacer.

> **PC.** ¿Cómo lo resolvemos? Opciones abajo, en el cuestionario.

---

### Escenario D · `Tu negocio` C13: cambia 18 clientes por **40**

Ahora mueves el negocio del alumno, no el referente.

| Celda | Antes | Después |
|---|---|---|
| Tu negocio C20 · unidades por día | 100.8 | **224** |
| Tu negocio D22 · el veredicto | "Se parecen" | **"No se parecen"** |
| Panel C13 · ingreso del mes | $144,144 | **$320,320** |
| Panel C14 · traer 1 cliente | $8,008 | **$8,008** (no se mueve) |
| Panel C15 · +0.2 por cliente | $5,148 | **$11,440** |
| Panel fila 17, tu negocio | traer clientes | **unidades por cliente** |

**Lo que deberías poder decir:** *"Le puse más del doble de clientes al mismo negocio y su métrica se volteó. Pasó del lado del cruce donde conviene traer gente al lado donde conviene subirle a cada quien. Y de paso saltó la alerta de que ya no cuadra con lo que había declarado en la Semana 1."*

Dos mecanismos disparándose a la vez con una sola celda. Es el escenario más completo de los cuatro y el que yo abriría la sesión de S03.

> **PD.** ¿La alerta de "No se parecen" ayuda o distrae en ese momento?

---

# Parte 3 · Cuestionario

Respóndeme en el chat con el código y, si quieres, una línea libre. Ejemplo: `P1: b — se entiende pero el renglón 13 estorba`. Lo que no contestes lo doy por "está bien así".

### Sobre el recorrido en frío

**P1 · El contraste del Panel**
`a` Se entiende solo · `b` Se entiende pero le falta una línea de remate · `c` No se entiende sin ir a S02-Lab · `d` Otra cosa

**P2 · Las referencias "bloque 4, fila 29"**
`a` Así está bien · `b` Mejor el nombre del bloque sin el número de fila · `c` Mejor solo el nombre de la pestaña · `d` Sobran

**P3 · Azul contra verde**
`a` Queda claro · `b` Hace falta una línea que lo diga · `c` La distinción no convence, hay que repensarla

**P4 · La columna "Qué número NO aparece"**
`a` Resuelve la duda del 3.5 · `b` Ayuda pero igual hay que decirlo en voz alta · `c` Es demasiado texto para leerlo en clase

**P5 · La pestaña `Comprobación`**
`a` La ve el alumno, déjala como está · `b` La ve el alumno, pero hay que escribirla más simple · `c` Es solo mía, ocúltala del archivo del alumno

### Sobre los escenarios

**PA · El argumento de "el empate no se mueve"**
`a` Se sostiene diciéndolo yo · `b` La hoja debería tener un renglón que lo diga · `c` Es muy sutil para esta semana, lo dejo para después

**PB · Correr A y B en clase**
`a` Los dos · `b` Solo uno, el de los días · `c` Solo uno, el del precio · `d` Ninguno, con contarlo basta

**PC · El párrafo del Panel que se queda atrás** *(la más importante)*
`a` Volverlo dinámico: que el párrafo se arme con fórmula y diga siempre lo que corresponde
`b` Reescribirlo para que no afirme un resultado, sino que explique la regla del cruce sin nombrar quién gana
`c` Dejarlo fijo: los supuestos azules no se mueven en clase y no vale la pena la complejidad
`d` Que el escenario C sea justo el momento de decir "fíjense que la hoja se quedó atrás", y usarlo a favor

**PD · La alerta de "No se parecen"**
`a` Ayuda, déjala · `b` Ayuda pero el texto es muy largo · `c` Distrae en ese momento

### Abiertas

**P6.** ¿Qué te faltó poder explicar? Cualquier momento en que dijiste "esto no sé cómo contarlo".

**P7.** ¿Algún bloque que sientas que pide algo que el temario todavía no vio? Ya revisé formatos y textos y no hay porcentaje en ninguna pestaña de S02, pero tú conoces al grupo.

**P8.** ¿Qué le sobra al archivo? Es más fácil que se caiga por largo que por incompleto.

---

## Lo que queda pendiente y no depende de este recorrido

- La pestaña `S01-Lab` conserva el 10% y el 15% como porcentajes literales. Con tu criterio de que un 10% dicho así está bien y lo que no entra son las relaciones expresadas en porcentaje, **se queda como está**. Lo anoto como decisión tomada.
- La guía del facilitador se regenera cuando apruebes este layout, no antes.
- El libro vivo de `_curso/` sigue atrasado; se decide después del paso 0.
