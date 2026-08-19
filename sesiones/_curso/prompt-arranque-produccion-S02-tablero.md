**Esta conversación se abre con Sonnet.** Es sesión de **producción**, no de diseño. Todas las decisiones ya están tomadas y están escritas aquí. No hay nada que elegir.

Curso *Fundamentos Cuantitativos para Negocios Creativos*, de CENTRO. La carpeta `fcnc-web/` está conectada. Lee `CLAUDE.md` de la raíz para las convenciones del repo y no necesitas leer nada más: todo el contexto de la tarea está en este documento.

**Si un archivo contradice lo que dice aquí, no lo resuelvas por tu cuenta: detente y repórtalo.** Este documento se escribió después de auditar los binarios, pero si algo cambió desde entonces, gana el archivo y la decisión es de Omar, no tuya.

Son cuatro trabajos. Los tres primeros son captura de datos y toman minutos. El cuarto es edición de HTML y es el grueso.

---

## 1 · `enlaces.csv`, fila de la sesión 3

Cambiar `gamma_url` a `https://gamma.app/docs/ogt3xmop7h4c0k5`.

Las demás columnas de esa fila no cambian: `presentacion_url`, `video_url` y `audio_url` se quedan como están.

---

## 2 · `glosario/fuentes.csv`, fila `3,deck`

Cambiar la URL a `https://gamma.app/embed/ogt3xmop7h4c0k5`.

Ojo con la diferencia: `enlaces.csv` usa `/docs/` y `fuentes.csv` usa `/embed/`. No las unifiques, cada archivo consume la suya.

---

## 3 · `sesiones.csv`, fila 3

Dejarla así:

| columna | valor |
|---|---|
| `estado` | `disponible` |
| `teoria` | `1` |
| `auditoria` | `0` |
| `ficha` | `0` |
| `recursos` | `0` |
| `glosario` | `1` |

**`recursos` está en `0` a propósito y es temporal.** El audio y el video de la Semana 3 que hay publicados hoy fueron generados con una versión anterior del deck y dicen cifras que ya no coinciden con lo que se proyecta en clase. Se prenden en cuanto se suban los nuevos, y en esa misma pasada habrá que actualizar cuatro URL: `video_url` y `audio_url` en `enlaces.csv` fila 3, y las filas `3,video` y `3,audio` de `glosario/fuentes.csv`. **Eso no es parte de esta tarea**, pero queda anotado para que no se pierda.

Las pestañas de auditoría y ficha en `0` están así a propósito: se van a rediseñar y hasta entonces no se muestran. **No borres su HTML.** `assets/sesiones.js` es el controlador de visibilidad y `semana-03/index.html` ya lo carga, así que apagarlas desde el CSV es suficiente y es reversible.

`glosario` en `1` abre los cinco términos de la Semana 3 que ya están escritos en `glosario/terminos.csv`. Solo aparecen si `estado` es `disponible` y `glosario` es `1`, las dos cosas a la vez.

---

## 4 · `semana-02/index.html`, pestaña «Tu tablero de supuestos»

**Solo se toca esa pestaña (`panelFicha`) y la función `generarPDF()`. Las pestañas «Auditoría de un referente» y «Recursos» no se tocan ni una línea:** esas clases ya se dieron y se quedan como se dieron.

### 4a · Los tres pasos del ejercicio guiado

La tarjeta «Ejercicio guiado: mueve una palanca a la vez» ya existe y funciona. Lo que está mal son las celdas y los valores, que son de una versión anterior del libro de cálculo. **No la rediseñes, remápeala.**

Las celdas correctas hoy, en la pestaña `S02-Lab` de `S02-Lab-resuelto.xlsx`, son:

- `B15` verde, «Clientes nuevos esperados al mes», arranca en **26**
- `B16` **gris y calculada** (`=B15/B10`), **no se escribe encima**
- `B17` verde, «Unidades adicionales por cliente», arranca en **0.2**
- `B18` verde, «Días adicionales al mes», arranca en **1**

Los tres pasos quedan así:

| Paso | Encabezado | Descripción |
|---|---|---|
| 1 | Escribe `B17` = **0.4** | Es la celda verde «Unidades adicionales por cliente». Duplicaste el movimiento del Camino B: de 2 de cada 10 clientes que se llevan una unidad extra, a 4 de cada 10. |
| 2 | Regresa `B17` = **0.2** y escribe `B15` = **5** | Es la celda verde «Clientes nuevos esperados al mes». En vez de esperar 26 clientes nuevos en el mes, ahora esperas 5. |
| 3 | Regresa `B15` = **26** y escribe `B18` = **2** | Es la celda verde «Días adicionales al mes». Abrir dos días que antes se cerraban, en vez de uno. |

El cierre de la tarjeta dice hoy «regresa `B17` a 1». Debe decir **`B18` a 1**.

La línea de ayuda de arriba dice hoy que las tres celdas «arrancan en 1, 0.2 y 1». Debe decir que **arrancan en 26, 0.2 y 1**, y agregar la advertencia: entre ellas hay una celda gris, `B16`, que se calcula sola y no se escribe.

**Los montos esperados no se imprimen en la app.** La app pregunta qué vio el alumno; los resultados van en la guía del facilitador. Para tu verificación, con el archivo tal como se entrega: la base da Camino A $8,008, B $5,148, C $5,544 y gana el A; el paso 1 da B $10,296 y gana el B; el paso 2 da A $1,540 y gana el C con $5,544; el paso 3 da C $11,088 y gana el C.

### 4b · El texto del paso 2

Es el que enseña, y la lección se invirtió respecto a la versión anterior.

**Dice:** «Bajaste el Camino B, pero el que subió al primer lugar no fue el A. ¿Por qué?»

**Debe decir:** «Bajaste el Camino A, que era el que iba ganando, y el que pasó al primer lugar no fue el B. ¿Por qué?»

Y en `generarPDF()`, el título de ese párrafo dice «Por qué al bajar el Camino B subió el C y no el A:». Debe decir **«Por qué al bajar el Camino A quedó primero el C y no el B:»**.

El texto de ayuda debajo de la pregunta se queda igual.

### 4c · El bloque de auditoría sale del PDF

En `generarPDF()`, quitar completa la sección `AUDITORÍA DEL REFERENTE`: el `seccion(...)`, la lectura de los tres deslizadores (`audClientesSlider`, `audTacosSlider`, `audDiasSlider`), los tres cálculos `audGanA` / `audGanB` / `audGanC`, y el párrafo de la conclusión. El bloque de **Fuentes** que viene después se queda.

Motivo: el reporte se genera al arrancar la Semana 3, semanas después de que esa pestaña se trabajó en clase. La app no guarda nada entre sesiones, así que ese bloque se imprimiría con los deslizadores en su estado por default y la conclusión vacía. Sería relleno.

En `actualizarProgreso()`, quitar `v('conclusionAuditoria')` del arreglo `camposClave`. El contador pasa de **11 a 10** campos. **El textarea se queda en la pestaña de Auditoría**, no lo borres: solo deja de contar para el progreso y de imprimirse.

`PRECIO_TACO` sigue usándose en `recalcularAuditoria()`, así que no la elimines.

### 4d · La tarjeta del referente

Es la tarjeta con encabezado «La taquería», dentro del `grid-two` de esa pestaña. Hoy tiene tres problemas: nombra al referente en el encabezado, afirma cifras que dejaron de ser fijas, y usa el marco diario que el libro ya no usa.

Reescríbela así:

- **Encabezado:** «El referente del Panel».
- **Primer párrafo:** es la columna de la izquierda del Panel del libro, con los mismos cuatro supuestos que tú vas a escribir, en un negocio que ya existe. El libro arranca con una taquería como ejemplo y tu tarea es sustituirla por un referente real de tu propio rubro, con su nombre y con la fuente de dónde sacaste sus números.
- **En lugar del ticket con las cifras**, una lista de dónde mirar en el Panel: la celda del nombre del referente y la de su fuente, arriba; sus cuatro supuestos en las celdas verdes de su columna; y su ingreso del mes en el bloque de resultados, a la derecha.
- **En lugar del párrafo que afirma «+$9,952.80 contra +$2,002» y «5 clientes más al día»:** en el Panel vas a ver la métrica que importa del referente y también la tuya, y no tienen por qué coincidir. Ahí está el punto de la semana: lo que decide es la proporción entre cuánta gente entra y cuánto se lleva cada quien.
- **Se queda igual** el párrafo que dice que tu negocio casi seguro está parado en otra proporción, y la línea de fuente de INEGI y DENUE.

**Ninguna cifra del Panel se escribe a mano en el HTML.** Si un número puede cambiar cuando alguien mueve una celda, la app manda a leerlo, no lo repite.

### 4e · El vocabulario mensual

La tarjeta «Lo mismo, con tus números» y su bloque equivalente en el PDF usan todavía el marco diario. Los montos ya son correctos, lo que hay que cambiar es cómo se nombran.

- La fila del Camino A dice «A · traer 1 cliente más al día». Debe decir **«A · tantos clientes nuevos al mes como días abres»**. El cálculo `precio * unidadesCliente * dias` no se toca: es aritméticamente lo mismo.
- El párrafo de arriba dice que los movimientos son «1 cliente, 0.2 unidades y 1 día». Debe decir **«tantos clientes nuevos al mes como días abres, 0.2 unidades por cliente y 1 día más»**.
- El punto de quiebre del Camino A se expresa hoy en clientes por día, y la celda donde el alumno escribiría es mensual. Cambiar el cálculo a `Math.ceil(Math.max(caminoB, caminoC) / (precio * unidadesCliente))` y la etiqueta a **«clientes al mes»**. Con los cuatro supuestos del negocio de ejemplo (18 · 5.6 · $55 · 26) eso da **18 clientes al mes**, que es el mismo número que muestra el Panel del libro. Úsalo para verificar.
- En el veredicto de abajo, donde dice «tendrías que traer N clientes más al día», debe decir **«al mes»**.
- Los mismos tres cambios aplican al bloque `TUS TRES CAMINOS Y SUS PUNTOS DE QUIEBRE` del PDF.

### 4f · Tres textos sueltos

- **La nota de entrega**, al inicio de la pestaña, dice «mueves las palancas del referente en la pestaña S02-Lab». Esa pestaña del libro corre sobre los supuestos de **tu negocio**, no del referente. Quitar «del referente».
- **La reflexión 1** dice «De los tres movimientos que probaste, ¿cuál le pedirías al referente y por qué?», y su texto de ayuda menciona «traer 5 clientes más al día» y «2 de cada 10». Reemplazar por: «En el Panel, tu negocio y el referente no tienen por qué dar la misma respuesta. Si te dieron distinta, ¿por qué crees que fue? Y si te dieron la misma, ¿qué tendría que cambiar para que se separaran?», con ayuda que diga que no hay respuesta correcta y que lo que se califica es el argumento.
- **Al cerrar el ejercicio guiado**, agregar una línea: en el tablero hay un cuarto número que nunca movimos, el precio, y se quedó quieto a propósito para poder ver el efecto de la proporción sin que otra cosa lo tapara. Regresa la semana que entra.

---

## Reglas que no se negocian

- **El archivo manda sobre el documento.** Antes de dar por buena cualquier afirmación sobre el HTML actual, ábrelo y compruébalo. Y después de escribir, confirma que la escritura entró comparando tamaño y fecha.
- **Nada escrito a mano.** Si un texto menciona un valor que puede cambiar, se manda a leerlo del libro, no se repite en el HTML.
- **Frontera del temario:** el operador de porcentaje entra hasta S04, potencias S05, variable y ecuaciones S06, despeje S07, funciones y gráficas S08. Nada de lo que escribas puede usar una herramienta que el temario todavía no vio.
- **Se dice unidades, no tacos**, en todo el texto nuevo.
- **No se toca el xlsx.** El libro está cerrado y aprobado.
- **No se tocan las pestañas de Auditoría ni de Recursos**, ni en `semana-02` ni en `semana-03`.
- **Prosa sobre viñetas** en lo que lee el alumno, y prohibidas las palabras que invalidan: «obviamente», «simplemente», «es fácil», «es intuitivo», «como ya saben».

## Cómo verificar antes de entregar

1. Abre la página en el navegador y confirma que el contador dice **10 campos clave**, no 11.
2. Llena los cuatro supuestos con 18, 5.6, 55 y 26 y confirma que el punto de quiebre del Camino A dice **18 clientes al mes**.
3. Genera el PDF y confirma que **no** trae la sección de auditoría, que los tres pasos dicen `B17`, `B15` y `B18` con 0.4, 5 y 2, y que el título del párrafo del paso 2 es el nuevo.
4. Revisa la consola en busca de errores de JavaScript, sobre todo después de quitar el bloque del PDF.
5. Confirma que las pestañas de Auditoría y Recursos siguen funcionando exactamente igual que antes.

## Qué entregar

Los cuatro archivos modificados, escritos en la carpeta conectada, y un resumen de una pantalla con qué cambió en cada uno. Si algo del punto 4 no se pudo hacer como está descrito, dilo explícitamente en vez de improvisar una alternativa.

Cuando esto quede aprobado, el siguiente paso es el handoff de despliegue hacia Claude Code para el commit y el push. Ese es otro documento y no lo generes tú.
