# Auditoría de contenido · S03-Teoría «Operar con intención»

> **Nota de versiones.** `gamma-S03-Teoria.pdf` es el deck generado a partir de `gamma-teoria-semana-03-v1.md`, que queda archivado con ese nombre. El `.md` sin sufijo es la versión reescrita el 19 de agosto: 26 días, unidades en vez de tacos, joyería en vez de Café Andante, y tres secciones nuevas. Cuando se exporte el Gamma nuevo, reemplaza al PDF actual.

*19 de agosto de 2026. Se audita `gamma-teoria-semana-03.md` (la fuente) contra `gamma-S03-Teoria.pdf` (lo que Gamma produjo, 19 diapositivas), y los dos contra lo que quedó construido en S02 después del rediseño del libro.*

**Toda la matemática del deck está correcta.** Verifiqué las trece cuentas por segundo método y ninguna tiene error aritmético. Los problemas son de otro tipo: números que ya no corresponden al libro, vocabulario que rompe una regla, y una coincidencia numérica que va a confundir al grupo.

---

## 1. Lo que hay que decidir antes de proyectar

### 1.1 El deck usa 30 días y el libro usa 26

`gamma-teoria-semana-03.md`, sección «La misma cuenta, dos órdenes distintos», calcula **9,135 tacos al mes** como 87 × 3.5 × **30**. Todo S02-Lab y el `Panel` del libro trabajan con **26 días abiertos**, y ese cambio no fue cosmético: fue Omar quien lo hizo en vivo el 17 de agosto, y de ahí salió la convención de que los días abiertos dejan de ser 30 por inercia.

Si el deck se proyecta como está, el alumno abre el libro, ve 26, y la pantalla dice 9,135.

**Los números completos con 26 días, ya verificados:**

| Concepto | Con 30 días (deck actual) | Con 26 días (el libro) |
|---|---|---|
| Unidades al mes | 9,135 | **7,917** |
| Costo fijo repartido por unidad | $6.57 | **$7.58** |
| Costo unitario | $14.07 | **$15.08** |
| Ganancia por unidad ($22 de precio) | $7.93 | **$6.92** |
| Orden ingenuo | $6.57 | **$7.58** |
| Cuántas veces sobreestima el error común | 1.83 | **2.09** |

Con 26 días la frase «sobreestima la ganancia real en casi el doble» pasa a ser **«en más del doble»**, que además es más contundente.

El cambio vive en el `.md`, así que corregirlo implica regenerar el Gamma. Es la única razón por la que tocaría el `.md`, y es de fondo, no de forma.

### 1.2 El deck dice «tacos» de principio a fin

La convención dice **unidades, no tacos**, en todo material nuevo. S03 es material nuevo. La palabra aparece en el problema de negocio, en las dos diapositivas de los órdenes, en la de jerarquía, en la de costo unitario, en la gráfica y en la tabla.

La excepción acordada era la app y el Gamma **de S02**, que ya se habían dado. S03 no está cubierto por esa excepción.

### 1.3 Los dos órdenes dan el mismo número redondeado, y eso no está dicho

Este es el hallazgo con más consecuencia para el aula.

- Orden correcto, paso intermedio: 60,000 ÷ 9,135 = **$6.57**
- Orden ingenuo, resultado final: 60,007.50 ÷ 9,135 = **$6.57**

Son el mismo número en pantalla. Un alumno atento va a decir que el orden ingenuo «sí llegó al número bueno», y tiene razón en lo que ve. La diapositiva dice que el resultado «no corresponde a nada», pero es idéntico al reparto del costo fijo que la propia diapositiva anterior acaba de llamar correcto.

**La razón real es el mejor material del deck y no está escrita:** sumar $7.50 a $60,000 antes de dividir hace que esos $7.50 se repartan entre 9,135 unidades, o sea **0.08 centavos por unidad**. El orden ingenuo no suma el costo directo: lo desaparece. Por eso su resultado es, con precisión de centavos, el costo fijo solo.

Con 26 días pasa lo mismo: 0.095 centavos, y los dos números redondean a $7.58.

Decirlo convierte una coincidencia sospechosa en la explicación más clara de por qué el orden importa. Es un párrafo en el `.md`, en la sección «El orden ingenuo · y por qué importa».

### 1.4 Café Andante vuelve justo cuando lo sacamos de todas partes

El deck le dedica una diapositiva completa. En el rediseño del 19 de agosto, Café Andante salió de `semana-02/index.html` y del libro, sustituido por el par **referente / tu negocio**, precisamente para no tener dos vocabularios de ejemplo.

El contenido de esa diapositiva es bueno y hace un trabajo que nada más hace: mostrar el mismo cálculo en un negocio de volumen bajo, donde el costo fijo aplasta la ganancia. Las tres salidas son sustituirlo por «tu negocio» en abstracto, dejarlo y restituir Café Andante en la app, o renombrarlo como «un segundo negocio» sin nombre propio. Lo que no conviene es dejarlo sin decidir.

---

## 2. Diferencias entre el `.md` y lo que Gamma produjo

*Se registran, no se corrigen: el método de redactar el `.md` no se toca.*

**Gamma inventó una diapositiva entera.** «Cómo se ven estos dos costos, uno junto al otro», la número 8, con una gráfica de líneas y una tabla de cuatro renglones (0, 3,000, 6,000 y 9,135 tacos). **No existe en el `.md`.** Los números que puso son correctos, los verifiqué: 3,000 × 7.50 = $22,500, 6,000 × 7.50 = $45,000, 9,135 × 7.50 = $68,512.50. Es la primera vez que Gamma agrega contenido cuantitativo propio en vez de reordenar el existente, y conviene saberlo: si esa diapositiva se queda, sus números también dependen del cambio de 30 a 26 días.

**Se perdió el motivo de la lectura de apertura.** El `.md` explica que la regla se formalizó *«cuando creció la industria del libro de texto y hacía falta que millones de estudiantes leyeran una expresión matemática exactamente de la misma manera»*. Gamma lo dejó en *«cuando creció la industria del libro de texto, que esa costumbre se formalizó»*. Se fue el porqué, que era lo interesante.

**Se perdió el puente con la Semana 2 en Café Andante.** El `.md` cierra esa sección con: *«El mismo negocio que en la Semana 2 identificó su volumen como la palanca más sensible de su ingreso, aquí se ve por qué ese volumen también es crítico del lado del costo: vender poco encarece cada unidad que se vende.»* Gamma la cortó. Era la única frase que amarraba costo con palanca.

**Se perdió la continuidad del modelo.** En «Conexión con el laboratorio», el `.md` tiene un segundo párrafo que Gamma eliminó completo: *«Tu modelo no reinicia esta semana: crece sobre el mismo tablero, y le agrega el lado del costo que la Semana 2 todavía no tocaba.»* En su lugar puso «La gráfica en vivo». Es justo la idea que sostiene el libro acumulativo.

**Gamma calculó un número propio en «La cuenta detrás del pedido»:** los $70 de diferencia máxima, que son 200 − 130. No está en el `.md`, es correcto, y lo etiquetó bien como «máxima», porque el `.md` dice «entre $130 y $142».

**Se recortaron fuentes.** De las cinco de la lectura de apertura quedaron dos (Cajori y The Math Doctors). Se fueron Utah State, Wikipedia y la UGTO, más el enlace de Google Books. Para proyectar está bien; el `.md` conserva las cinco, que es lo que importa para NotebookLM.

**Cambios menores fieles:** «Pregunta de asombro» se retituló «¿Dónde está el error?»; el problema de negocio ganó un recuadro de advertencia; los dos órdenes quedaron en diapositivas separadas, como ya venían en el `.md`; objetivos, rúbrica y glosario están completos y literales.

---

## 3. Conexiones que faltan con lo que ya construimos

**El puente ya está escrito en el libro y el deck no lo recoge.** El cierre del bloque 5 de `S02-Lab` termina diciendo que ninguno de los tres caminos preguntó cuánto cuesta conseguirlo. Ese es exactamente el arranque de S03, y el deck abre por otro lado. Una línea en «El problema de negocio» lo amarraría: traer clientes cuesta publicidad, abrir un día cuesta sueldos y renta.

**El ejemplo de jerarquía que ya tenemos verificado no aparece.** Las 3.5 unidades repartidas entre 87 clientes son 3.5 ÷ 87. Escrito `3.5 ÷ 87 × 22` da 0.885; escrito `3.5 ÷ (87 × 22)` da 0.0018. Misma frase en español, números distintos, y sale de un cálculo que el grupo ya hizo. Es más cercano que el ejemplo de los costos porque ya lo vivieron.

**«Conexión con el laboratorio de hoy» describe una sesión que no es esa.** `S03-Teoria` y `S03-Lab` son dos sesiones distintas, como en las semanas 1 y 2. La diapositiva dice «hoy» y describe la app de la auditoría.

**El orden acordado para S03 no está reflejado.** La sesión abre **aterrizando el xlsx**: se devuelve el resuelto y se corre el ejercicio guiado de las tres palancas, y solo después entra la teoría. El deck asume el orden habitual.

---

## 4. Frontera del temario

**Sin porcentaje.** Revisé las 19 diapositivas y el `.md`: no hay operador ni formato de porcentaje. Cumple.

**Sin variable ni despeje.** Cumple.

**Una duda que conviene resolver a propósito: la gráfica de la diapositiva 8.** Funciones lineales y gráficas es **Semana 8**. La diapositiva muestra dos líneas con ejes, escala y pendiente. Si se usa como imagen («esta es plana, esta sube»), es defendible. Si se le pide al alumno leer un valor sobre el eje, se está formalizando cuatro semanas antes. La regla dice que en caso de duda se pospone; aquí la duda es legítima y la decisión debería ser consciente, no heredada de que Gamma la generó.

**Nota menor sobre el caso real:** la convención pide preferentemente un rubro distinto al del ejemplo fijo de la semana. Las plataformas de entrega son del mismo rubro que la taquería. El caso es bueno y actual, así que probablemente se queda, pero queda anotado.

---

## 5. Pendientes que esta auditoría agrega

1. Los **cinco términos nuevos** (costo directo/variable por unidad, costo fijo mensual, costo unitario, jerarquía de operaciones, ganancia por unidad) no están en `glosario/index.html` ni en `glosario/terminos.csv`. Se suman a los cinco de la Semana 2, que siguen pendientes.
2. `formulario-revision-semana-03.md` sigue esperando que el área académica lo llene.
3. El **audio y video de NotebookLM** de esta semana, con el patrón de siempre. Las fuentes del `.md` ya están listas para subir.
4. La app `semana-03/index.html` está construida desde antes del rediseño de S02: hay que revisarla contra lo que quedó, sobre todo si dice «tacos» y si usa 30 días.
