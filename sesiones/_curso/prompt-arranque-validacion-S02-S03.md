Vamos a validar y cerrar lo que quedó construido de las Semanas 2 y 3 del curso Fundamentos Cuantitativos para Negocios Creativos, de CENTRO. Adjunto el handoff de la sesión de diseño y la bitácora del semestre.

Antes de proponer nada, lee en este orden: `handoff-validacion-S02-S03.md` primero, `bitacora-fcnc-semestre.md` después. Si algo se contradice entre los dos, gana el handoff. La carpeta del proyecto está conectada; el material de clase vive en `sesiones/`, organizado en `_curso/`, `S0X-Teoria/` y `S0X-Lab/`, y `sesiones/README.md` explica la convención.

**Lo que quiero de esta sesión es validación y ejecución, no rediseño.** Las decisiones de arquitectura ya están cerradas y están escritas en el handoff. Si al validar aparece algo que sí obliga a reabrir una decisión, dímelo y páramos ahí en vez de rediseñar sobre la marcha.

**Falta la validación profunda de todo lo que se construyó el 19 de agosto.** Se diseñó, se construyó y se verificó por segundo método, pero nadie lo ha abierto ni corrido en uso real. Son cinco cosas y las voy a hacer yo, una por una, contigo al lado:

1. **Recorrer `sesiones/S02-Lab/S02-Lab-resuelto.xlsx`** celda por celda. Quiero validar la matemática por segundo método, que el `Panel` lea bien de las demás pestañas, y que ningún bloque pida un concepto que el temario todavía no ha visto. La sección 3 del handoff trae todos los números de referencia para cotejar.
2. **Correr el ejercicio guiado de la pestaña «Tu tablero de supuestos»** de `semana-02/index.html`, de punta a punta y con el libro abierto al lado, hasta generar el PDF. Los tres pasos y sus resultados esperados están en el handoff.
3. **Pasar `sesiones/S03-Teoria/gamma-teoria-semana-03.md` por Gamma.** Te comparto el resultado para que lo registres como `gamma-S03-Teoria.pdf` y marques las diferencias contra el `.md`, igual que se hizo con los anteriores. Ojo: el PDF que hoy está en la carpeta corresponde a `gamma-teoria-semana-03-v1.md`, no a la versión nueva.
4. **Revisar los cambios de `semana-03/index.html`.** Se aplicaron siete correcciones y se probaron en navegador, pero no las he visto en pantalla.
5. **Regenerar el audio y el video de NotebookLM de S03.** Las grabaciones actuales dicen los números de 30 días y ya no corresponden a nada.

Ten en cuenta estas reglas, que no se negocian:

- **El archivo manda sobre el documento.** Antes de dar por buena cualquier afirmación sobre un `.xlsx` o un `.html`, ábrelo y compruébalo. Y después de escribir a mi disco, **confirma que la escritura entró** comparando tamaño y fecha: si el archivo está abierto en Excel, la escritura falla en silencio y ya nos pasó una vez.
- **Los documentos que describen fórmulas se regeneran desde el binario**, nunca a mano.
- **Nada escrito a mano en la hoja.** Si un texto menciona un valor que puede cambiar, se arma con fórmula.
- **Frontera del temario:** porcentaje hasta S04, potencias S05, variable y ecuaciones S06, despeje S07, funciones y gráficas S08. El porcentaje como etiqueta de un dato fijo pasa; convertir una razón a porcentaje para compararla, no.
- **Se dice unidades, no tacos**, en material nuevo.
- **Las preguntas guía de audio y video son sobre el audio y el video**, no sobre el negocio del alumno.
- **El `.md` de Gamma es la fuente.** Se corrige ahí y se regenera el deck, nunca al revés. Y su formato no se cambia, porque es lo que Gamma resume bien.
- **Una presentación se entrega como `.md`** para pegar en Gamma, nunca como HTML ni PPTX.

Cómo quiero que trabajemos:

- Valida toda la matemática resolviendo por un segundo método antes de mostrármela.
- Si algo que pido es una corrección puntual a algo que ya existe, aplícalo como delta, no regeneres el documento entero.
- Pregúntame en prosa cuando haya que decidir algo. No me generes archivos hasta que acordemos qué cambia.
- Cuando me des opciones de formato y yo elija una, quédate en esa lista.
