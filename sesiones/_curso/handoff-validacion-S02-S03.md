# Handoff FCNC — De diseño a validación y ejecución (S02 y S03)

> **Cómo usar este documento.** Adjuntarlo junto con `sesiones/_curso/bitacora-fcnc-semestre.md` al abrir la conversación de validación. Tiene precedencia sobre la bitácora en cualquier punto donde se contradigan, porque es más reciente.
>
> Fecha de cierre: 19 de agosto de 2026. La conversación que lo generó fue de diseño y arquitectura. **Lo que sigue es ejecución y validación, no rediseño.**

---

## 0. Lo primero que hay que saber

**Nada de lo construido el 19 de agosto ha sido validado por Omar.** Se diseñó, se construyó y se verificó por segundo método del lado del modelo, pero **falta la validación profunda: abrir cada archivo, recorrerlo y correrlo.** Hay cinco cosas por hacer y ninguna es de diseño.

1. **Recorrer y correr `S02-Lab-resuelto.xlsx`** celda por celda.
2. **Correr el ejercicio guiado de la pestaña «Tu tablero de supuestos»** de `semana-02/index.html`, de punta a punta, con el libro abierto al lado.
3. **Pasar `gamma-teoria-semana-03.md` por Gamma**, registrar el PDF y marcar las diferencias contra el `.md`.
4. **Revisar los cambios de `semana-03/index.html`**, que se aplicaron pero nadie ha visto en pantalla.
5. **Regenerar el audio y el video de NotebookLM** de S03, que dicen números viejos.

Ninguna de las cinco reabre una decisión. Si al hacerlas aparece algo que sí la reabre, se documenta y se para; no se rediseña sobre la marcha.

---

## 1. Delta entre lo planeado y lo que realmente pasó

| Elemento | Planeado | Real | Estado |
|---|---|---|---|
| Auditar el resuelto de S02 | revisarlo | el archivo del repo no era el descrito; se regeneró y luego se rediseñó completo | ⚠️ más grande de lo previsto |
| Bloque del empate | corregir el 0.04 | se eliminó el bloque; su cierre pasó al bloque 5 | ⚠️ cambió de forma |
| Panel | revisar que leyera bien | se rehizo como tablero de dos negocios lado a lado, y luego se adelgazó | ⚠️ rediseñado dos veces |
| App de S02 | no estaba en el plan del día | se rediseñó como hoja de trabajo guiada | ✅ nuevo |
| Teoría de S03 | auditar | se auditó y se reescribió el `.md` completo | ⚠️ más grande de lo previsto |
| App de S03 | no estaba en el plan del día | se corrigieron siete problemas | ✅ nuevo |
| Validación de Omar | recorrer el resuelto con él | **no se alcanzó** | ❌ es lo que sigue |

**Lectura del delta.** La sesión empezó como auditoría y terminó como rediseño de cuatro artefactos. Cada cambio salió de una observación concreta de Omar, no de una propuesta del modelo, pero el resultado es que hay mucho construido y nada probado en uso real.

---

## 2. Hallazgos que no estaban planeados

**El archivo del repo no era el que los documentos describían.** El resuelto reestructurado del 18 de agosto nunca llegó al disco: estaba abierto en Excel y las escrituras se rechazaron en silencio. Se detectó abriendo el binario. De ahí salió la regla de que **la referencia es el archivo, no el documento que lo describe**, y la de confirmar cada escritura comparando tamaño y fecha.

**El bloque del empate dejaba fuera al Camino C.** Comparaba A y B en unidades por día, y un día entero no cabe en ese eje. Esa asimetría hacía pensar que las unidades eran la vara de medir. Se eliminó.

**Se encontró la identidad que explica los tres caminos.** Cada camino rinde el ingreso del mes multiplicado por qué tan grande es su movimiento comparado con su propia base. Por eso el Camino C ganaba casi siempre: un día entre 26 es un pedazo grande, y un cliente entre 87 es chico. Quien decide cuál gana es quien elige los tres movimientos, no el modelo.

**La comprobación contra la ficha de S01 era circular.** No existe ninguna celda en el libro que guarde lo que el alumno declaró en la Semana 1: `S01-Lab` es la auditoría del referente, no su ficha. El número contra el que se comparaba estaba inventado y era editable por la misma persona.

**La app de S02 competía con el libro en vez de acompañarlo.** Recalculaba lo mismo con deslizadores propios, y por eso nunca se ocupó en clase. Se rediseñó: **el xlsx calcula, la app registra y produce el PDF.**

**El deck de S03 y el libro no coincidían.** El deck usaba 30 días y decía «tacos»; el libro usa 26 y dice unidades. Y los dos órdenes de la cuenta daban el mismo número redondeado sin que el deck lo explicara.

---

## 3. Estado real al cierre

### El libro de S02

Cuatro pestañas para el alumno: `Panel`, `S01-Lab`, `S02-Lab`, `Vocabulario`. **86 fórmulas.** La versión docente agrega `Comprobación` y llega a **124**, con **9 de 9 verificaciones en orden**.

**`S02-Lab`** es el registro de la clase y no se toca en su estructura: cuatro supuestos azules, tres movimientos verdes en `B15`, `B16` y `B17` (1, 0.2 y 1), la cadena, los tres caminos con su columna «Cómo se calcula» dinámica, los escenarios completos, y un cierre que nombra al ganador y los tres puntos de quiebre en vivo. El sexto bloque, el del empate, se retiró.

**`Panel`** es el tablero: los dos negocios lado a lado en las mismas filas, con los mismos tres movimientos, más los tres puntos de quiebre de cada uno. El referente se nombra en su propia celda con su fuente al lado, y arranca en la taquería.

### Números de referencia, todos verificados por segundo método

| | El referente | El negocio de ejemplo |
|---|---|---|
| Supuestos | 87 · 3.5 · $22 · 26 | 18 · 5.6 · $55 · 26 |
| Unidades por día | 304.5 | 100.8 |
| Ingreso del mes | $174,174 | $144,144 |
| Camino A (+1 cliente) | $2,002 | $8,008 |
| Camino B (+0.2 unidades) | $9,952.80 | $5,148 |
| Camino C (+1 día) | $6,699 | $5,544 |
| La métrica que importa | subirle a cada cliente | traer más clientes |
| Quiebre A / B / C | 5 · 0.14 · 2 | 1 · 0.32 · 2 |

Escenarios completos del referente: **$176,176 · $184,126.80 · $180,873**.

### La app de S02

`semana-02/index.html`, 74 KB. La pestaña «Tu tablero de supuestos» quedó como hoja de trabajo guiada: cuatro supuestos, el referente en espejo (la taquería, con sus números y su punto de quiebre), el ejercicio guiado de tres pasos con las celdas nombradas, la tabla de los tres caminos y quiebres del alumno, y tres preguntas de reflexión. **11 campos clave**, PDF de dos páginas con salto automático.

**Los tres pasos del ejercicio, verificados:**

| Paso | Qué se escribe en `S02-Lab` | Quién gana |
|---|---|---|
| 1 | `B15` = 5 | A, $10,010 contra $9,952.80 |
| 2 | `B15` = 1 y `B16` = 0.1 | C, $6,699 |
| 3 | `B16` = 0.2 y `B17` = 2 | C, $13,398 |

### La teoría de S03

`gamma-teoria-semana-03.md` reescrito: **34 diapositivas**, 26 días, unidades en vez de tacos, joyería en vez de Café Andante. La versión anterior quedó como `gamma-teoria-semana-03-v1.md`, porque es la que generó el PDF archivado.

**Números del referente con 26 días:** 7,917 unidades al mes; costo fijo repartido **$7.58**; costo unitario **$15.08**; ganancia por unidad **$6.92**; orden ingenuo **$7.58**. Las dos líneas de costo se cruzarían en **8,000 unidades** y el referente vende 7,917.

**La joyería:** $1,800 la pieza, $620 de directo, $42,000 de fijos, 40 piezas. Costo fijo por pieza **$1,050**, costo unitario **$1,670**, ganancia **$130**, contra los $1,180 que parecería sin repartir.

**Tres secciones que no existían:** «Fíjate en algo», que explica por qué los dos órdenes muestran $7.58 (los $7.50 repartidos entre 7,917 unidades son nueve centésimas de un centavo, así que el orden ingenuo no los suma, los desaparece); «Lo que quedó pendiente de la semana pasada», que amarra con el cierre del bloque 5 del libro; y «Ya lo viviste la semana pasada», con 3.5 ÷ 87 × 22 = $0.885 contra 3.5 ÷ (87 × 22) = $0.0018.

### La app de S03

`semana-03/index.html`, siete correcciones aplicadas y probadas en navegador: la constante de días a 26, todos los valores mostrados recalculados, «tacos» fuera del texto visible, Café Andante sustituido por la joyería, las seis preguntas de reflexión reescritas para que sean **sobre el audio y el video** y no sobre el negocio del alumno, los resúmenes actualizados, y la pista que colgaba de las fichas anteriores.

---

## 4. Entregables generados el 19 de agosto

| Entregable | Archivo | Estado |
|---|---|---|
| Libro del alumno | `sesiones/S02-Lab/S02-Lab-resuelto.xlsx` | 🔜 **falta que Omar lo recorra** |
| Libro del docente | `sesiones/S02-Lab/S02-Lab-resuelto-docente.xlsx` | 🔜 falta recorrerlo |
| Inventario de fórmulas | `sesiones/S02-Lab/inventario-formulas-S02-Lab-resuelto.md` | ✅ generado desde el binario |
| App de S02 | `semana-02/index.html` | 🔜 **falta correr el ejercicio** |
| Deck del empate | `sesiones/S02-Lab/gamma-S02-Lab-el-empate.md` | 🔜 falta pasarlo por Gamma |
| Teoría de S03, reescrita | `sesiones/S03-Teoria/gamma-teoria-semana-03.md` | 🔜 **falta pasarlo por Gamma** |
| Teoría de S03, versión anterior | `sesiones/S03-Teoria/gamma-teoria-semana-03-v1.md` | ✅ archivada |
| Deck de S03 exportado | `sesiones/S03-Teoria/gamma-S03-Teoria.pdf` | ⚠️ corresponde a la v1 |
| Auditoría de S03 | `sesiones/S03-Teoria/auditoria-contenido-semana-03.md` | ✅ |
| App de S03 | `semana-03/index.html` | 🔜 **falta revisarla en pantalla** |
| Guía de recorrido | `sesiones/S02-Lab/guia-recorrido-S02-Lab-resuelto.md` | ❌ **desfasada:** describe un Panel que ya no existe |
| Respaldos | `sesiones/S02-Lab/respaldos/` y `sesiones/S03-Teoria/respaldos/` | ✅ |

---

## 5. Deuda acumulada

1. **Regenerar el audio y el video de NotebookLM de S03.** Las grabaciones actuales dicen $6.57 y $14.07 y «casi al doble», que son los números de 30 días. Los resúmenes de la app ya están corregidos, así que hoy la voz y la pantalla se contradicen. Se regeneran desde `gamma-teoria-semana-03.md` con el patrón de siempre.
2. **Los audios y videos de S02** siguen pendientes desde antes.
3. **`guia-recorrido-S02-Lab-resuelto.md` hay que rehacerla** sobre el layout final, o borrarla. Hoy engaña.
4. **`guia-facilitador-S02-Lab.docx` sigue desactualizada.** Ahora sí existe layout final sobre el cual regenerarla.
5. **La pestaña «Auditoría de un referente» de `semana-02/index.html` no se tocó.** Sus deslizadores están en 30 días y 0.1, y dice «tacos», así que el mismo PDF trae dos versiones del referente con números distintos. Hay tres salidas propuestas y ninguna elegida: alinearla, sacarla del PDF, o dejarla y decirlo.
6. **El alumno no tiene su ficha de S01 en el libro.** Por eso se quitó la comprobación contra la Semana 1.
7. **El libro vivo de `_curso/`** sigue atrasado. Decidir si se refresca desde el resuelto aprobado o si el último `S0X-Lab-resuelto` hace esa función.
8. **Los diez términos de glosario** de S02 y S03 no están en `glosario/index.html` ni en `glosario/terminos.csv`.
9. **Subir «Frontera del temario» a las instrucciones del proyecto.** Lo hace Omar.
10. **`formulario-revision-semana-03.md`** espera al área académica.
11. **El aviso de fuera de rango en los deslizadores**, que S01 tenía y S02 perdió.
12. **La gráfica con ejes y pendiente** de la teoría de S03 y de las dos apps, cuando funciones y gráficas es Semana 8. Defendible como imagen, no si se pide leer valores sobre el eje. Decisión consciente pendiente.

---

## 6. Reglas que aplican al validar y ejecutar

- **El archivo manda sobre el documento.** Antes de dar por buena cualquier afirmación sobre un `.xlsx` o un `.html`, abrirlo y comprobarlo. Después de escribir al disco, confirmar que la escritura entró comparando tamaño y fecha: si el archivo está abierto en Excel, la escritura falla en silencio.
- **Los documentos que describen fórmulas se regeneran desde el binario**, nunca a mano.
- **Nada escrito a mano en la hoja.** Si un texto menciona un valor que puede cambiar, se arma con fórmula.
- **Frontera del temario.** Porcentaje hasta S04, potencias S05, variable y ecuaciones S06, despeje S07, funciones y gráficas S08. Matiz: el porcentaje como etiqueta de un dato fijo pasa; convertir una razón a porcentaje para compararla, no.
- **Unidades, no tacos**, en material nuevo. La excepción cubría la app y el Gamma de S02 tal como se dieron, no lo nuevo.
- **Las preguntas de audio y video son sobre el audio y el video.**
- **Corrección en delta**, no regeneración completa, salvo que se pida.
- **El `.md` de Gamma es la fuente.** Se corrige ahí y se regenera el deck; nunca al revés.
- **Una presentación se entrega como `.md`** para pegar en Gamma, nunca como HTML ni PPTX.

---

## 7. Lo que sigue después de la validación

Cerrado el paso de validación, lo que queda abierto de S03 es el **laboratorio**: `S03-Lab-clase.xlsx` con su pestaña vacía, que se arma en vivo desde el proyector, y la pestaña `S03-Lab` del libro acumulativo con su sección en el Panel. El tema es el costo unitario sobre el mismo tablero.

Y queda planteada, sin construir, la **tarea del referente propio**: cada alumno investiga un referente real de su producto y sustituye nombre y números en el Panel. Las celdas ya lo soportan. Falta darles criterio de elección, porque si eligen uno muy parecido a su negocio las dos columnas dicen lo mismo y el contraste no aparece.
