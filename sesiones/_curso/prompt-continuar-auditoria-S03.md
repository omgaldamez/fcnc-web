Retomamos la auditoría de S02-Lab y S03. Hubo correcciones importantes del lado del repo que tienes que leer antes de opinar sobre nada.

## Lo que pasó y por qué los documentos habían mentido

Entre el 17 y el 18 de agosto se reestructuró `S02-Lab-resuelto.xlsx`, pero **el archivo nunca llegó al disco**: estaba abierto en Excel y las dos escrituras fueron rechazadas. Durante un día lo que estuvo en el repo, y lo que se commiteó, fue la versión anterior. El handoff y la bitácora describían un archivo que no existía. Yo lo detecté auditando y el 19 de agosto se regeneró el binario y se corrigieron los documentos.

**Regla que sale de ahí, y que quiero que apliques:** cuando un documento describa un archivo, la referencia es el archivo. Ábrelo y compruébalo antes de dar por buena cualquier afirmación sobre su contenido.

## Qué leer, en este orden

1. `sesiones/_curso/handoff-S02-a-S03.md` — ya corregido. Su sección 0 es el paso 0 de esta auditoría.
2. `sesiones/_curso/bitacora-fcnc-semestre.md` — sección «3 bis» para lo que pasó en S02-Lab. Si contradice al handoff, gana el handoff.
3. `sesiones/README.md` — cómo está organizado el material de clase.
4. `CLAUDE.md`, sección «Frontera del temario» — la restricción dura sobre qué operaciones puede usar cada semana.

## Estado real de los archivos, al 19 de agosto

| Archivo | Estado |
|---|---|
| `sesiones/S02-Lab/S02-Lab-resuelto.xlsx` | regenerado y verificado, **falta que yo lo recorra** |
| `sesiones/S02-Lab/inventario-formulas-S02-Lab-resuelto.md` | las 118 fórmulas con celda, fórmula y valor, para cotejar contra el binario |
| `sesiones/S02-Lab/gamma-S02-Lab-el-empate.md` | corregido, **falta pasarlo por Gamma** |
| `sesiones/S02-Lab/S02-Lab-en-vivo.xlsx` | registro de la clase, no se toca |
| `sesiones/S02-Lab/S02-Lab-clase.xlsx` | lo que se repartió, anterior a la reestructura. Es histórico |
| `sesiones/S02-Lab/guia-facilitador-S02-Lab.docx` | **desactualizada**, se escribió para el layout viejo de cinco bloques con porcentajes |

El resuelto tiene seis pestañas: `Panel`, `Tu negocio`, `S01-Lab`, `S02-Lab`, `Comprobación`, `Vocabulario`. `S02-Lab` tiene seis bloques, dice «unidades» y no «tacos», usa 26 días abiertos y 0.2 unidades adicionales por cliente, y no contiene ningún porcentaje. `Comprobación` verifica doce resultados recalculándolos por una ruta algebraica distinta, sin valores escritos a mano.

## El paso 0 de esta auditoría

1. **La pestaña «Tu tablero de supuestos» de `semana-02/index.html`.** Es la parte del alumno en la app y quedó desalineada: la hoja ahora dice «unidades», los movimientos son variables, y el argumento de las palancas se reformuló. Hay además campos que pueden quedar más claros. Antes de proponer cambios, lee las observaciones que ya existen en `sesiones/S02-Lab/auditoria-laboratorio-semana-02.md` y en `sesiones/S02-Teoria/auditoria-contenido-semana-02.md`.
2. **Recorrer el resuelto conmigo.** Valida la matemática por segundo método, revisa que el `Panel` lea bien de las demás pestañas, y dime si algún bloque pide un concepto que el temario no ha visto.
3. **El deck del empate**, cuando lo pase por Gamma.

## Deuda que sigue abierta

- La guía del facilitador de S02-Lab se regenera **solo** cuando el resuelto esté aprobado, sobre el layout final, para no rehacerla dos veces.
- `_curso/FCNC-Modelo-de-tu-negocio.xlsx` y su `-RESUELTO` son anteriores a la reestructura. Hay que decidir si el libro vivo se refresca desde el resuelto aprobado o si se elimina y el último `S0X-Lab-resuelto` hace esa función.
- Falta subir la regla «Frontera del temario» a las instrucciones del proyecto. Eso lo hago yo.
- El aviso de fuera de rango en los deslizadores de la app, que S01 tenía y S02 perdió, sigue sin aplicarse.

## Decisiones ya tomadas para S03, no las reabras

- **S03 abre aterrizando el xlsx** (el Panel, lo pendiente de S02, el negocio del alumno) y **después** entra la teoría.
- **Las preguntas guía de los ejercicios de audio y video son sobre el audio y el video.** Nada de pedir que lo apliquen a su negocio en ese bloque.
- **Se dice unidades, no tacos**, en material nuevo. La app y el Gamma de S02 se quedan como se dieron.
- **Frontera del temario:** S03 es jerarquía de operaciones y costos. El porcentaje no entra hasta S04, variable y ecuaciones hasta S06, despeje hasta S07. En caso de duda, se pospone.
- **El laboratorio se construye, no se reparte.** El archivo que se entrega lleva su pestaña vacía.
- **Una presentación se entrega como `.md`** para pegar en Gamma, nunca como HTML ni PPTX.

## Cómo quiero que trabajemos

Mantén la conversación a nivel de juicio y arquitectura. Pregúntame en prosa cuando haya que decidir algo, y no generes archivos hasta que acordemos la estructura. Valida toda la matemática resolviendo por un segundo método antes de mostrármela. Si algo que pido es una corrección puntual a algo que ya existe, aplícalo como delta. Y cuando escribas un archivo a mi disco, confirma que la escritura entró antes de darla por hecha.
