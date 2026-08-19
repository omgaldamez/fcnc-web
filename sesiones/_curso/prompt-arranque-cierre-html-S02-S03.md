**Esta conversación se abre con Opus.** Es sesión de diseño, con varias decisiones entrelazadas y dos documentos que ya se contradicen entre sí en algunos puntos — quiero el análisis más profundo antes de comprometernos a nada.

Vamos a cerrar la parte de S02 que quedó pendiente en HTML y a decidir cómo se liga con S03, del curso Fundamentos Cuantitativos para Negocios Creativos, de CENTRO. Adjunto la bitácora del semestre y el handoff de S02 a S03.

Antes de proponer nada, lee en este orden: `bitacora-fcnc-semestre.md` primero (trae la sección 6 y 7 actualizadas al 19 de agosto), `handoff-S02-a-S03.md` después. La carpeta del proyecto está conectada; el material vive en `sesiones/`.

**Ojo antes de leer el handoff:** las secciones 3 y 6 tienen datos que ya no corresponden al xlsx actual. Ese día se decidieron cosas nuevas que el handoff no vio: la taquería dejó de ser el referente fijo del Panel (ahora es un ejemplo editable en verde, con instrucción de investigar uno real), los cuatro supuestos de `S02-Lab` ahora leen en vivo de `Panel!C8:C11` en vez de traer sus propios números, «la métrica que importa» se resalta en naranja, y la Comprobación quedó en 10 de 10 en vez de 9 de 9. El bloque de la sección 6 que describe el arranque de S03 con «escribir 5 en clientes adicionales» está en el sistema viejo (movimiento diario); el xlsx ahora usa «clientes nuevos esperados al mes». La bitácora sí tiene el detalle correcto — si algo se contradice entre los dos, gana la bitácora.

**Esta sesión es de diseño, no de producción.** Quiero que decidamos qué va a decir el HTML y cómo se liga con S03 antes de que nadie escriba una línea de código. El entregable de esta conversación es un documento de decisiones, no el HTML.

Son cinco cosas:

1. **Resolver la pestaña «Auditoría de un referente» de `semana-02/index.html`.** Sigue con sus deslizadores en 30 días y 0.1, y dice «tacos». El handoff (deuda acumulada, punto 1 de la sección 5) ya proponía tres salidas y ninguna se eligió: alinearla con los números actuales, sacarla del PDF, o dejarla y decirlo en la guía. Elige una y di por qué.
2. **Re-mapear el ejercicio guiado que ya existe, no diseñarlo de cero.** En `semana-02/index.html`, pestaña «Tu tablero de supuestos», tarjeta «Ejercicio guiado: mueve una palanca a la vez», ya hay tres pasos completos con instrucción de celda, campos de captura y una pregunta abierta, conectados al PDF. El problema es que sus celdas (`B15`, `B16`, `B17`) son del xlsx viejo: `B15` decía «clientes adicionales por día» y ahora es «clientes nuevos esperados al mes» (escribir 5 ya no es lo mismo), y `B16` era la segunda celda verde y ahora es una celda **gris, calculada** — el paso 2 le pide al alumno escribir encima de una fórmula. Las celdas correctas hoy son `B15` (mensual), `B17` (unidades) y `B18` (días). Decide los tres pasos nuevos (qué valores, en qué celdas) y qué resultados esperar, validado por segundo método. Esto también resuelve la pregunta abierta del handoff (sección 5, punto 1) de si los pasos nombran la celda tal cual o la describen — mantén lo que ya funciona ahí a menos que haya razón para cambiarlo. La otra pregunta abierta sigue viva: si el PDF lleva los tres escenarios completos además de las tres preguntas de reflexión.
3. **Confirmar que este mismo ejercicio es el arranque de S03.** La sección 6 del handoff ya lo asume («se devuelve el resuelto y lo primero es un ejercicio guiado...») con los valores viejos como referencia de lo que se probó. Una vez resuelto el punto 2, ese hallazgo pedagógico (bajas el Camino B y el que sube es el C, no el A) hay que replicarlo con los valores nuevos — no es un ejercicio aparte.
4. **Cerrar la pregunta del referente propio.** La sección 6 del handoff la deja planteada pero sin criterio de elección: si el alumno elige un referente muy parecido a su negocio, las dos columnas dicen lo mismo y el contraste no aparece. Antes de que esto llegue a S03-Teoría necesita ese criterio.
5. **Llevar «Valor» y «Unidad» al glosario del HTML.** Son dos términos nuevos de la Semana 2 (los nombres de las dos columnas del xlsx: el campo numérico y el campo que describe qué mide ese número), agregados hoy a la pestaña `Vocabulario` del xlsx. Van junto con los otros cinco de S2 que tampoco están en `glosario/index.html` ni en `glosario/terminos.csv` — los siete se agregan juntos, no por separado.

Al final de la sesión quiero un documento (puede ser una nueva versión de `handoff-S02-a-S03.md`, o uno nuevo si prefieres separarlo) con las cinco decisiones ya tomadas y lo bastante preciso como para que otra sesión lo produzca sin tener que volver a decidir nada.

Reglas que no se negocian:

- **El archivo manda sobre el documento.** Antes de dar por buena cualquier afirmación sobre el xlsx o el HTML actual, ábrelo y compruébalo.
- **Nada escrito a mano en la hoja ni en el HTML.** Si un texto menciona un valor que puede cambiar, se arma con fórmula o se lee del dato real.
- **Frontera del temario:** porcentaje hasta S04, potencias S05, variable y ecuaciones S06, despeje S07, funciones y gráficas S08.
- **Se dice unidades, no tacos**, en todo el material nuevo.
- **No produzcas HTML ni código en esta sesión.** Es de diseño; la producción es la siguiente conversación.

Cómo quiero que trabajemos:

- Valida toda la matemática resolviendo por un segundo método antes de mostrármela.
- Pregúntame en prosa cuando haya que decidir algo. No generes el documento final hasta que acordemos las cinco decisiones.
- Si algo obliga a reabrir una decisión ya cerrada del xlsx (no solo del HTML), dímelo y paramos ahí.
