# Guía del facilitador · Semana 1 · Laboratorio

**Fundamentos Cuantitativos para Negocios Creativos · CENTRO**
Solo el bloque de laboratorio (teoría y presentaciones ya se dieron en la sesión anterior).
Slot disponible: 2 horas · **Contenido planeado: 105 min** (quedan ~15 min de colchón sin asignar a propósito).
Temas: **Auditoría de un referente** + **Ficha de tu negocio**, ambos construidos también en la hoja de cálculo.

> Diferencia con la guía de la sesión completa (`guia-facilitador-semana-01.md`): aquí la ficha **sí se llena en clase**, en la app y en su copia de Sheets, porque hoy no compite por tiempo con arranque, presentaciones ni teoría. Si prefieres que siga siendo tarea, corta el bloque 5 y libera esos ~36 min para colchón.

---

## 0. Antes de entrar al salón

- [ ] Subir `S01-Lab-clase.xlsx` a Drive y abrirlo con Google Sheets. Tres hojas: **Auditoría taquería**, **Ficha de tu negocio**, **Vocabulario**. Permiso "cualquiera con el enlace puede ver", compartir en modo copia.
- [ ] Abrir la app de Semana 1 en las pestañas **Auditoría** y **Ficha de tu negocio**; mover los dos sliders una vez para confirmar que responden en la máquina del salón.
- [ ] Tener a la mano la tabla de vocabulario de abajo (sección 1) por si hace falta repasar un término.
- [ ] Recordar: el PDF que suben a Brightspace ya trae los dos campos que sirven de base para tu retro (el argumento de la auditoría y "métrica a rastrear y por qué" de la ficha). No hace falta pedir nada extra por escrito hoy.

---

## Minuto a minuto (105 min)

| Min | Bloque | Duración |
|---|---|---|
| 0 a 6 | Apertura: recapitular vocabulario | 6 min |
| 6 a 34 | Auditoría en la app | 28 min |
| 34 a 40 | Pizarrón: operaciones básicas y variable | 6 min |
| 40 a 54 | Construir "Auditoría taquería" en Sheets | 14 min |
| 54 a 90 | Ficha de tu negocio: demo + trabajo real | 36 min |
| 90 a 105 | Retro verbal y cierre | 15 min |

---

## 1. Apertura: recapitular vocabulario (6 min)

No se enseña nada nuevo, se ancla lo que ya vieron en teoría a números concretos de hoy.

| Término | Cómo se dice en clase |
|---|---|
| **Dato** | Lo que se mide. |
| **Métrica** | El dato que de verdad vale la pena seguir. |
| **Supuesto** | Algo que estás dando por cierto sin haberlo confirmado. |
| **Referente** | Un negocio real que te sirve de punto de comparación. |
| **Piso** | El resultado más bajo que es razonable esperar, con el extremo conservador de lo que reportan negocios parecidos. |
| **Techo** | El resultado más alto que es razonable esperar, con el extremo favorable de lo que reportan negocios parecidos. |

Pregunta de arranque: *"la semana pasada vimos estos cinco términos. ¿Alguien recuerda uno y me da un ejemplo de su propia idea de negocio?"* Con dos o tres ejemplos alcanza, no es necesario que hablen los doce.

---

## 2. Auditoría en la app (28 min)

- [ ] **Leer los tres tickets antes de tocar nada.** Piso reportado, tu supuesto, techo reportado. Señala que los tres usan **los mismos dos datos y la misma fórmula**, aplicada tres veces. Eso es un modelo.
- [ ] **Preguntar antes de mover el slider.** "Si subo las ventas del mes, ¿qué le pasa a la ganancia del día?" Predicen, luego mueves.
- [ ] **Correr el contraste de palancas** (abajo). Es el punto más alto de la sesión.
- [ ] **Salirse del rango a propósito.** Baja la ganancia por cada cien mil a cero y deja que vean el aviso naranja y el medidor fuera de escala. Mensaje: la app no te prohíbe nada, te avisa.
- [ ] **Dejar 6 minutos para que escriban la conclusión** en el campo de texto de la auditoría. Ese campo es la base de tu retro sobre esta parte.

**El contraste de palancas (verificado numéricamente, dos veces):**

Punto de partida: ventas de $200,000 al mes y ganancia de $15,000 por cada $100,000 vendidos. Da **$1,000 de ganancia al día**.

| Camino | Qué cambias | Ganancia al día | Cuánto ganaste |
|---|---|---|---|
| Punto de partida | $200,000 y $15,000 | $1,000.00 | |
| **A: vender más** | ventas suben a $250,000 | $1,250.00 | **+$250 al día** |
| **B: ganar mejor** | ganancia sube a $20,000 por cada $100,000 | $1,333.33 | **+$333 al día** |

Pregunta al grupo: *"¿cuál de los dos caminos es más fácil de conseguir en una taquería real?"* No hay respuesta correcta.

**Detalle opcional (si sobra tiempo):** los valores de arranque, $200,000 y $15,000, están exactamente a la mitad de los dos rangos reportados, y aun así la ganancia diaria resultante queda al **40% del camino** entre piso y techo, no a la mitad. No hace falta explicarlo a fondo: basta con nombrarlo y decir "a esto volvemos en la Semana 9".

---

## 3. Pizarrón: operaciones básicas y variable (6 min) · antes de abrir Sheets

- Escribe en el pizarrón las cuatro operaciones básicas: `+`, `−`, `×`, `÷`. Pregunta: *"¿cuál de estas cuatro usamos hace un momento en la auditoría, sin llamarla por su nombre?"* Repartieron el mes entre 30 días (÷) y aplicaron una proporción al ingreso diario (×).
- Introduce **variable**: una caja con nombre que puede cambiar de valor. Dibuja dos cajas, "Ventas del mes" y "Ganancia por cada $100,000", con los números de tu supuesto ($200,000 y $15,000). Dilo explícito: *"estas dos cajas son las variables del modelo. Todo lo demás se calcula a partir de ellas."*

---

## 4. Construir "Auditoría taquería" en Sheets (14 min) · proyector

Abre la hoja `Auditoría taquería`, con las columnas D y E (fórmulas) cubiertas al inicio, para que el grupo las vea aparecer.

1. **Ubicar los datos.** Señala `B7` y `C7` (fila "Piso"): ventas mensuales y ganancia por cada $100,000, en azul porque son las celdas editables. Son los mismos dos números del ticket de la app.
2. **Ingreso diario, en palabras primero.** Pregunta: *"si el mes completo vendió $100,000, y quiero saber cuánto entró en un solo día, ¿qué opero?"* Cuando alguien diga "lo divido entre 30", escribe en `D7`: `=B7/30`. Léela en voz alta: "be siete entre 30".
3. **Ganancia diaria, en palabras primero.** Pregunta: *"si por cada $100,000 vendidos quedan $10,000 de ganancia, ¿qué parte de mi ingreso diario es eso?"* Guía a que $10,000 de cada $100,000 es una décima parte. Escribe en `E7`: `=D7*(C7/100000)`. Señala el paréntesis: *"lo de adentro se resuelve primero, y ese resultado multiplica al ingreso diario."* No hace falta nombrar "jerarquía de operaciones" (eso es Semana 3); basta con que vean que el paréntesis ordena la cuenta.
4. **Copiar hacia abajo.** Selecciona `D7:E7` y arrastra hasta la fila 9 (Techo). Antes de soltar, pregunta: *"¿qué esperan que salga en la fila del techo, comparado con la del piso?"*
5. **Verificar contra la app.** Los tres resultados deben salir exactos: **$333.33** (piso, fila 7), **$1,000.00** (tu supuesto, fila 8), **$2,000.00** (techo, fila 9). Si no coinciden, alguna fórmula copiada apunta a la fila equivocada.
6. **Si sobra tiempo:** baja a "Comparación de palancas" (filas 14 a 16) y arma la columna F (diferencia): `=E15-E8` para el Camino A, `=E16-E8` para el Camino B. Resultado esperado: **+$250** vendiendo más, **+$333.33** ganando mejor por unidad.

**No enseñar hoy:** SUMA, formato de moneda, gráficas, referencias absolutas. Vieron un paréntesis dentro de una fórmula (paso 3); eso ya es un adelanto y no necesita más explicación hoy.

---

## 5. Ficha de tu negocio: demo + trabajo real (36 min)

### 5.1 Demo breve (5 min)

- Cambia a la hoja "Ficha de tu negocio". Señala que es el mismo patrón que acaban de construir: precio por unidad × unidades vendidas al día = ingreso por día (`=B7*B8` en la columna de ejemplo), y ese ingreso por día × días del mes = ingreso por mes (`=B9*B10`).
- La columna "Ejemplo · Café Andante" ya está resuelta: $40 de precio, 30 unidades al día, **$1,200 de ingreso diario**, **$36,000 de ingreso mensual**. Dilo en voz alta.
- Señala la columna "Tu negocio" (celdas en amarillo): ahí escriben.

### 5.2 Trabajo real (31 min) · cada quien en su lugar, tú circulas

- Cada alumno llena, en paralelo, **la pestaña Ficha de la app** (nombre tentativo, problema que resuelve, cliente, qué vende, primera intuición numérica, métrica a rastrear) **y** las celdas amarillas de su copia de Sheets (precio por unidad, unidades vendidas por día).
- La app es la que genera el PDF que se sube a Brightspace: ese es el entregable oficial. La copia de Sheets es su espacio de práctica con fórmulas, no se sube por separado hoy.
- Circula y prioriza a quien no tenga idea de negocio (usa la lista que armaste en la ronda de presentaciones, si la hiciste en la sesión anterior). El ejemplo de Café Andante está ahí para que nadie empiece en blanco.
- Aviso a mitad del bloque (minuto ~70): *"si un cliente compra varias unidades en una sola visita, cuenten unidades vendidas, no clientes."* Ya está como hint en la app, pero conviene decirlo en voz alta una vez.

---

## 6. Retro verbal y cierre (15 min)

**No hay calificación en este bloque.** Es una retro breve, hablada, más la confirmación de qué se sube y para cuándo.

**Ronda verbal (8 min), dos o tres preguntas, no las cuatro:**

1. "¿Qué número de tu ficha te sorprendió más al calcularlo?"
2. "¿Tu supuesto de hoy se parece más al piso o al techo de la taquería, y por qué?"
3. "Después de ver la ficha de un compañero, ¿qué le preguntarías?"
4. "¿Qué fórmula de las que escribimos hoy sentiste que sí entendiste, y cuál todavía no?"

**Qué se sube y dónde (7 min):**

1. Descargar los dos PDF (Ficha + Auditoría, y Reflexión audio/video si no lo habían subido) y subirlos a Brightspace, actividad **S01 · Reflexión audio y video**.
2. Guardar su copia de Sheets en su Drive; no se sube hoy, pero la van a seguir usando.
3. Recordarles que la métrica y el negocio de hoy los acompañan las quince semanas: se vale cambiar de negocio hasta la Semana 2, no después.

**Tu retro (fuera de clase):** al revisar cada PDF en Brightspace, ya tienes el argumento de la auditoría y "métrica a rastrear y por qué" de la ficha como base. No hace falta pedir nada adicional por escrito.

---

## 7. Riesgos de este bloque

| Riesgo | Señal | Qué hacer |
|---|---|---|
| El bloque 5 se alarga | Vas en el minuto 85 y la mitad no ha llenado su ficha | Deja que terminen en casa; lo que importa hoy es que hayan empezado con acompañamiento, no que todos terminen en el salón. |
| Nadie tiene idea de negocio | Silencio al circular en el bloque 5 | El ejemplo Café Andante está resuelto en la app; recuerda que se vale cambiar de negocio hasta la Semana 2. |
| La fórmula de Sheets da error | `#DIV/0!` o `#VALUE!` en D o E | Casi siempre es una celda vacía o con texto en vez de número en B o C de esa fila. |
| Alguien pregunta por el porcentaje | "¿Eso no es un 15%?" | Confirma que sí, y que en la Semana 4 se ve formalmente. Hoy se trabaja en pesos por cada cien mil. |

---

*Guía del facilitador · Semana 1 · solo laboratorio. Complementa a `guia-facilitador-semana-01.md` (sesión completa, ya impartida).*
