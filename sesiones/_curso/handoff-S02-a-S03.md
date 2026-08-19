# Handoff FCNC — S02-Lab: estado real y planificación de S03

> **Cómo usar este documento.** Adjuntarlo junto con `_curso/bitacora-fcnc-semestre.md` al abrir la conversación de S03. Este handoff tiene precedencia sobre el plan original cuando se contradigan.
>
> Fecha de cierre: 18 de agosto de 2026. S02-Lab se impartió el 17 de agosto.

---

## 0. Estado del paso 0, cerrado el 19 de agosto

Los tres puntos del paso 0 quedaron así:

**a) `S02-Lab-resuelto.xlsx` · recorrido y rediseñado.** Se auditó contra el binario, no contra los documentos, y de ahí salió que el archivo reestructurado del 18 de agosto nunca había llegado al disco. Se regeneró y después se rediseñó completo con Omar. Detalle en la sección 3 ter de la bitácora. **Aprobado.**

**b) `gamma-S02-Lab-el-empate.md` · corregido, falta Gamma.** Afirmaba que escribiendo 0.04 los dos caminos daban $2,002.00 exactos; da $1,990.56. El empate exacto es 3.5 ÷ 87 = 0.040229885. Ya dice el número exacto y usa el redondeo como lección. **Falta pasarlo por Gamma.**

**c) La pestaña «Tu tablero de supuestos» de `semana-02/index.html` · sin tocar, con decisión tomada.** Se rediseña como **hoja de trabajo guiada**: el xlsx calcula, la app registra y produce el PDF. Hoy recalcula lo mismo que la hoja con sliders propios, y por eso nunca se ocupó en clase. Es el siguiente entregable.

---

## 0 bis. El archivo manda sobre el documento

Entre el 17 y el 18 de agosto se reestructuró el resuelto, pero **el archivo nunca llegó al disco**: estaba abierto en Excel y las dos escrituras fueron rechazadas en silencio. Durante un día el handoff y la bitácora describieron con detalle un archivo que no existía.

Regla que queda: cuando un documento describa un archivo, **la referencia es el archivo**. Abrirlo y comprobarlo antes de dar por buena cualquier afirmación. Y después de escribir al disco, confirmar que la escritura entró comparando tamaño y fecha.

---

## 1. Delta entre plan y ejecución real

| Elemento | Planeado | Real | Estado |
|---|---|---|---|
| Devolución de S01-Lab | proyectar la hoja en vivo al lado de la corregida | se dio | ✅ |
| Bloque 1 · cadena de "por cada" | 4 datos + 3 fórmulas | se construyó | ✅ |
| Bloque 2 · las tres palancas | 3 fórmulas | se construyó, con confusión fuerte | ⚠️ |
| Bloque 3 · tamaño del empujón | 4 fórmulas, comparación en porcentajes | **no se dio**: demasiado complejo | ❌ |
| Bloque 4 · misma proporción | 1 dato + 3 fórmulas | **no se dio** | ❌ |
| Bloque 5 · tu negocio | 4 conexiones + 6 fórmulas | **no se alcanzó** | ❌ |
| Vocabulario | "tacos" | se cambió a **unidades** en vivo | ⚠️ |
| Días abiertos de la taquería | 30 fijo | **26, y se volvió variable** | ⚠️ |
| Bloque de escenarios completos | no estaba planeado | **lo agregó Omar en clase** | ✅ nuevo |

**Lectura del delta.** La sesión salió más confusa de lo previsto. Se construyeron dos de los cinco bloques planeados, y en su lugar Omar agregó uno propio que resultó mejor que dos de los que se cayeron.

---

## 2. Hallazgos que no estaban planeados

**La pregunta que desarmó el bloque 2.** Los alumnos preguntaron repetidamente por qué el 3.5 no aparecía en la fórmula del Camino B. La respuesta que faltaba, y que ya quedó escrita en el resuelto: **cada fórmula trae todos los números del negocio menos el que está moviendo**, porque a ese lo reemplaza el movimiento. El 3.5 sí está en A y en C; falta solo en B porque B es el que lo mueve.

**La segunda duda, del mismo origen.** "¿Por qué unos caminos son por mes y el Camino C es por día?" Los tres son por mes. El Camino C coincide con el ingreso diario porque agregar un día al mes le suma justo lo que vende un día, no porque cambie de unidad. Escribirlo como `=B16` escondía el patrón; escrito completo (`clientes × unidades por cliente × precio × días adicionales`) se ve.

**El bloque 3 violaba una regla que no estaba escrita.** Comparaba 1/87 contra 0.1/3.5 **como porcentajes**, y el porcentaje es Semana 4. La regla existía pero vivía solo en la bitácora y con alcance de app. Ya se subió a `CLAUDE.md` como **«Frontera del temario»** y se guardó en memoria de proyecto. Falta que Omar la suba también a las instrucciones del proyecto.

**Omar generalizó el modelo en vivo.** Agregó celdas para días adicionales y para la relación de unidad extra, volviendo variables los movimientos que estaban fijos. Fue una mejora: es lo que permitió reescribir los tres caminos con la misma forma.

**El hallazgo más útil, y salió después de clase.** Con los números de la taquería gana el Camino B (subirle a cada cliente), y con el negocio de ejemplo del alumno gana el Camino A (traer clientes), porque tiene pocos clientes y consumo alto. Esa contradicción aparente demuestra en una pantalla que la métrica que importa depende de la proporción de cada negocio y no de una regla fija. Está en el Panel.

Los cuatro números del negocio de ejemplo que producen ese resultado, ya escritos en `Tu negocio`: precio $55, **18 clientes por día**, **5.6 unidades por cada cliente**, 26 días abiertos. Dan Camino A $8,008 contra Camino B $5,148. **La condición depende del movimiento, no es fija:** con «unidades adicionales por cliente» en 0.2, el Camino A gana cuando los clientes son menos de **5 ×** las unidades por cliente. La regla de «10 ×» que circuló antes valía cuando ese movimiento era 0.1 fijo; ya no aplica.

---

## 3. Estado real al cierre

**El libro quedó en cuatro pestañas para el alumno:** `Panel`, `S01-Lab`, `S02-Lab`, `Vocabulario`. El archivo del docente agrega `Comprobación`.

**`S02-Lab` es el registro de la clase** y no se toca: los cuatro supuestos, los tres movimientos en verde, la cadena, los tres caminos con su columna «Cómo se calcula» y el bloque de escenarios completos, con un cierre que nombra al ganador y los tres puntos de quiebre en vivo. Cinco bloques; el sexto, el del empate, se retiró.

**El `Panel` es el tablero**, no un registro: los dos negocios lado a lado en las mismas filas, con los mismos tres movimientos para que se comparen parejo, y los tres puntos de quiebre de cada uno. El referente se nombra en su propia celda y arranca en la taquería.

**Números verificados por segundo método**, con 26 días y 0.2 unidades adicionales: mes $174,174 · Camino A $2,002 · Camino B $9,952.80 · Camino C $6,699 · escenarios $176,176 / $184,126.80 / $180,873. Puntos de quiebre de la taquería: 5 clientes, 0.14 unidades, 2 días. Del negocio de ejemplo: 1 cliente, 0.32 unidades, 2 días. Ochenta y seis fórmulas en el archivo del alumno, ciento veinticuatro en el del docente, cero errores de cálculo y 9 de 9 verificaciones en orden.

**Lo que se quitó y por qué está en la sección 3 ter de la bitácora**, incluida la comprobación contra la ficha de S01: se retiró porque no existe ninguna celda en el libro que guarde lo que el alumno declaró en la Semana 1, así que el chequeo era circular.

---

## 4. Entregables generados

| Entregable | Archivo | Estado |
|---|---|---|
| Libro del alumno, rediseñado | `sesiones/S02-Lab/S02-Lab-resuelto.xlsx` | ✅ **aprobado 19 ago** |
| Libro del docente, con `Comprobación` | `sesiones/S02-Lab/S02-Lab-resuelto-docente.xlsx` | ✅ **aprobado 19 ago** |
| Inventario de fórmulas, desde el binario | `sesiones/S02-Lab/inventario-formulas-S02-Lab-resuelto.md` | ✅ |
| Mini deck del empate, para Gamma | `sesiones/S02-Lab/gamma-S02-Lab-el-empate.md` | ⚠️ **falta pasarlo por Gamma** |
| Registro de la hoja armada en clase | `sesiones/S02-Lab/S02-Lab-en-vivo.xlsx` | ✅ no se toca |
| Archivo con el que se entró a clase | `sesiones/S02-Lab/S02-Lab-clase.xlsx` | ✅ histórico |
| Guía de recorrido del resuelto | `sesiones/S02-Lab/guia-recorrido-S02-Lab-resuelto.md` | ❌ **desfasada:** describe el Panel anterior |
| Guía del facilitador | `sesiones/S02-Lab/guia-facilitador-S02-Lab.docx` | ❌ **desactualizada** |
| Guía de leyendas de la app | `sesiones/S02-Lab/guia-leyendas-auditoria-S02-Lab.md` | ✅ |
| Auditoría previa al laboratorio | `sesiones/S02-Lab/auditoria-laboratorio-semana-02.md` | ✅ |
| Regla nueva en el repo | `CLAUDE.md`, sección «Frontera del temario» | ✅ |

---

## 5. Deuda acumulada

1. **Rediseñar `semana-02/index.html`** como hoja de trabajo guiada. Es el siguiente entregable y hay dos cosas por acordar: si los pasos nombran la celda tal cual (`B13`) o la describen, y si el PDF lleva los tres escenarios además de las tres preguntas. **Aclaración del 19 de agosto: el ejercicio guiado no se construye desde cero, ya existe.** Vive en la pestaña «Tu tablero de supuestos» (`panelFicha`), tarjeta «Ejercicio guiado: mueve una palanca a la vez», y ya tiene los tres pasos completos: instrucción de celda (`B15`, luego `B16`, luego `B17`), campos de captura (camino que ganó, cuánto sumó, una pregunta abierta en el paso 2), una tabla «Lo mismo, con tus números» que jala de los cuatro supuestos del alumno, y tres preguntas de reflexión — todo ya conectado al generador de PDF (función `seccion('EJERCICIO GUIADO · pestaña S02-Lab del libro')` en el script). **El problema es que sus tres celdas ya no aplican al xlsx que se cerró hoy:** `B15` significaba «clientes adicionales por día» y ahora es «clientes nuevos esperados al mes» — escribir 5 ahí ya no es «5 más al día», es «5 en total en el mes», un orden de magnitud distinto. Y `B16` era la segunda celda verde («unidades adicionales por cliente») y ahora es una celda **gris, calculada** (`=B15/B10`); el paso 2 le pide al alumno escribir 0.1 encima, lo que rompe la fórmula. La celda que hoy corresponde a «unidades adicionales por cliente» es `B17`, y «días adicionales al mes» es `B18`. No es un rediseño de cero: es una tarea de re-mapeo de celdas y de valores de ejemplo sobre una estructura que ya funciona bien.
2. **Pasar `gamma-S02-Lab-el-empate.md` por Gamma.**
3. **`guia-recorrido-S02-Lab-resuelto.md` quedó desfasada.** Sus paradas 1 y 2 describen el Panel anterior. Rehacerla cuando el HTML esté listo, para no escribirla dos veces.
4. **`guia-facilitador-S02-Lab.docx` sigue desactualizada.** Se escribió para el layout de cinco bloques con porcentajes. Ahora sí hay layout final sobre el cual regenerarla.
5. **El alumno no tiene su ficha de S01 en el libro.** Por eso se quitó la comprobación contra la Semana 1: no había contra qué comparar. Si se quiere validar el modelo contra lo declarado al inicio, hay que traer esa ficha al archivo.
6. **El libro vivo de `_curso/` quedó atrasado.** `FCNC-Modelo-de-tu-negocio.xlsx` y su `-RESUELTO` son anteriores a todo esto. Decidir si se refresca desde el resuelto aprobado o si el último `S0X-Lab-resuelto` hace esa función.
7. **La regla «Frontera del temario» falta en las instrucciones del proyecto.** Ya está en `CLAUDE.md` y en memoria; las edita Omar.
8. **El aviso de fuera de rango en los deslizadores de la app**, que S01 tenía y S02 perdió, sigue sin aplicarse.
9. **`_to_delete/`** espera que Omar la vacíe.

---

## 6. Decisiones de diseño para S03

**El orden de la sesión.** S03 abre **aterrizando lo del xlsx** (el Panel, lo que quedó de S02 y el negocio del alumno) y solo después entra la teoría. Es lo contrario del orden habitual, y es deliberado: S02-Lab quedó abierto.

**Las preguntas de reflexión cambian de criterio.** Las guías de las preguntas de audio y de video tienen que ser **sobre el audio y el video**, no sobre el negocio del alumno. Nada de "aplica esto a tu negocio" en ese bloque. Esto corrige lo que la auditoría de S02 había recomendado, que sí metía el negocio propio en una de las preguntas de video.

**Vocabulario.** Se dice **unidades**, no tacos, en todo el material nuevo. La app de S02 y el Gamma de S02 se quedan como están: ya se dieron.

**Frontera del temario para S03.** El tema es jerarquía de operaciones y costos. El porcentaje sigue prohibido hasta S04; variable y ecuaciones hasta S06; despeje hasta S07. Revisar cada bloque contra ese calendario antes de entregarlo.

**Nombres.** `S03-Teoria` y `S03-Lab`, numerados por semana del temario y no por orden en el calendario.

**El laboratorio se construye, no se reparte.** `S03-Lab-clase.xlsx` lleva su pestaña vacía y se arma en vivo desde el proyector; la versión limpia llega la clase siguiente. El libro acumulativo gana una pestaña `S03-Lab` y el Panel gana una sección.

**Lo que ya funcionó y conviene repetir.** La columna «Qué número NO aparece» del bloque de palancas resolvió una duda que se había llevado media sesión. El patrón general: cuando una fórmula omite algo a propósito, decirlo en la hoja en vez de esperar la pregunta.

**El arranque concreto de S03, ya diseñado — y ya construido en HTML, ver sección 5 punto 1.** Se devuelve el resuelto y lo primero es el ejercicio guiado que ya vive en `semana-02/index.html`, tres movimientos en la pestaña `S02-Lab`, uno por camino, donde cada uno cambia el ganador. **Los pasos y valores de abajo están en el sistema viejo (movimiento diario, celdas `B15`/`B16`/`B17`) y hay que recalcularlos para el campo mensual (`B15` mensual, `B17`, `B18`) antes de reusarlos — no sirven tal cual.** Como referencia de lo que se probó entonces: paso 1 escribir 5 en clientes adicionales, gana A con $10,010 contra $9,952.80; paso 2 regresar a 1 y escribir 0.1 en unidades adicionales, gana C con $6,699; paso 3 regresar a 0.2 y escribir 2 en días adicionales, gana C con $13,398. El paso 2 es el que enseña, porque bajaste el Camino B y el que subió fue C y no A: A nunca se movió — ese hallazgo pedagógico sigue siendo válido, solo hay que encontrar los valores nuevos que lo repliquen. Después, tres preguntas de reflexión que se evalúan por el argumento y no por el número; esas sí siguen sirviendo tal cual, no dependen de la estructura de celdas.

**El puente a costos sale del propio ejercicio.** Ninguno de los tres caminos preguntó cuánto cuesta conseguirlo. Traer clientes cuesta publicidad y tiempo; abrir un día cuesta sueldos y renta. La hoja dice cuánto entra y calla sobre cuánto sale.

**Ejemplo de jerarquía de operaciones, verificado y listo.** Las 3.5 unidades repartidas entre 87 clientes son 3.5 ÷ 87. Escrito `3.5 ÷ 87 × 22` da 0.885; escrito `3.5 ÷ (87 × 22)` da 0.0018. Misma frase en español, números distintos.

**El referente propio, como tarea.** Se plantea en S03-Teoría para que llegue armada al siguiente laboratorio: cada quien investiga un referente real de su producto y sustituye nombre y números en el Panel. Las celdas ya están listas. Falta darles criterio de elección, porque si eligen un referente muy parecido a su negocio las dos columnas dicen lo mismo y el contraste no aparece.
