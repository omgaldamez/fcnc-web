# Registro de clase · S01-Lab

**Fundamentos Cuantitativos para Negocios Creativos · CENTRO**
Qué pasó realmente en el laboratorio de la Semana 1, reconstruido celda por celda desde el archivo que se armó en vivo.

Archivo de referencia: `S01-Lab-en-vivo.xlsx` (una hoja, 14 filas). Es el original tal como quedó al terminar la sesión, sin formatos ni correcciones.
Archivo final que se entrega en S02-Lab: `S01-Lab-resuelto.xlsx`.

---

## 1. Lo que se construyó en vivo

Encabezados: Ventas mensuales · Ganancia por cada $100k · Ingreso diario · Ganancia diaria · Diferencia vs tu supuesto.

| Celda | Fórmula que se escribió | Intención declarada en clase |
|---|---|---|
| `C4` `C5` `C6` | `=B/10` | dejar fija la ganancia en 10 centavos por cada peso vendido |
| `D4` `D5` `D6` | `=B/30` | repartir el mes entre 30 días |
| `E4` `E5` `E6` | `=D*(C/100000)` | aplicar la proporción al ingreso diario |
| `F4` `F6` | `=E-E5` | comparar cada escenario contra el supuesto |

En el bloque de palancas, `C12` quedó como `=C5` (Camino A hereda la ganancia del supuesto) y `C13` se escribió a mano con `15000`. Omar dejó la nota en `B14`: *"En Camino B es el valor del supuesto"*.

---

## 2. Los números que salieron en pantalla

Verificados recalculando el archivo, no tomados de memoria.

| Escenario | Ventas | `C` (=B/10) | Ingreso diario | **Ganancia diaria** | Diferencia vs supuesto |
|---|---|---|---|---|---|
| Piso | $100,000 | $10,000 | $3,333.33 | **$333.33** | −$1,000.00 |
| Tu supuesto | $200,000 | $20,000 | $6,666.67 | **$1,333.33** | |
| Techo | $300,000 | $30,000 | $10,000.00 | **$3,000.00** | +$1,666.67 |

| Palanca | Ventas | `C` | Ganancia diaria | Diferencia |
|---|---|---|---|---|
| Camino A · vender más | $250,000 | $20,000 (heredado) | $1,666.67 | **+$333.33** |
| Camino B · ganar mejor | $200,000 | $15,000 (a mano) | $1,000.00 | **−$333.33** |

---

## 3. Los dos síntomas del error, en orden de visibilidad

**El que sí está documentado:** el techo dio $3,000.00 al día en vez de $1,000.00. La fórmula `=B/10` no fija la ganancia, la vuelve dependiente de las ventas, así que la ganancia diaria crecía al cuadrado. El piso coincidió por casualidad, y por eso pasó la primera revisión.

**El que no estaba documentado y es el más visible desde la banca:** **el Camino B salió negativo.** El camino que la sesión presenta como "ganar mejor" apareció restando $333.33. La razón es que `C5` quedó inflado a $20,000 por la fórmula, y el $15,000 escrito a mano en el Camino B es *menor* que ese valor inflado. Así que "mejorar la ganancia" se leyó en pantalla como empeorarla.

Esto importa para el bloque de devolución de S02-Lab: la tabla de la guía (sección 3.1) solo compara piso, supuesto y techo. Un alumno que recuerde la clase probablemente recuerde el número en rojo del Camino B, no el techo. Conviene nombrarlo.

**Además, en vivo el Camino A ganó y el Camino B perdió.** En la hoja corregida pasa lo contrario: A rinde +$166.67 y B rinde +$333.33. La conclusión de la sesión se invierte entre las dos versiones, y eso hay que decirlo, no dejarlo que lo descubran.

---

## 4. La pregunta que salió en clase

*"¿Por qué $15,000?"* Buena pregunta, y es la que originó el rediseño. La respuesta que se eligió fue sacar ese número de la discusión: la ganancia deja de moverse entre escenarios y queda fija en 10% en las tres filas, para que las filas se diferencien solo por las ventas.

---

## 5. Qué corrigió la plantilla final y qué sigue arrastrando

**Corrigió bien:** la ganancia queda fija (columna C al 10% en las tres filas), la ganancia diaria pasa a `=E*C` y ya es lineal, y se agregó una columna que traduce el signo de la diferencia a palabras.

**Sigue arrastrando, y conviene resolverlo antes de proyectarla:**

1. **La columna D reproduce el error.** `D = B*C` bajo el encabezado "Ganancia por cada $100k" da $10,000 / $20,000 / $30,000. Son exactamente los mismos tres números que produjo `=B/10` en vivo, bajo exactamente la misma etiqueta equivocada. Al 10% fijo, la ganancia por cada $100,000 vale $10,000 en las tres filas. La columna además no alimenta ningún cálculo: la ganancia diaria usa `C`, no `D`. Es una columna muerta que muestra el error que la sesión va a llamar error.
2. **Las referencias a "columna F" quedaron desfasadas.** En la plantilla final, F es la ganancia diaria y G es la diferencia. La nota `A16` de la propia hoja y la sección 3.3 de la guía siguen diciendo F.
3. **No hay nota que explique por qué la hoja y la app de S1 no coinciden.** La app da $333.33 / $1,000.00 / $2,000.00 porque mueve la ganancia entre escenarios; la hoja da $333.33 / $666.67 / $1,000.00 porque la deja fija. Coinciden solo en el piso. Los dos modelos están bien, pero un alumno que abra los dos no tiene cómo saberlo.
4. **Se perdió el bloque de empujones proporcionales**, que existía en una versión intermedia y es el puente directo al tema de S02. La guía de S2 lo cita como "bloque 3 de la hoja corregida" y ahí no está.
5. **Se perdieron las pestañas "Ficha de tu negocio" y "Vocabulario"** que traía `S01-Lab-clase.xlsx`. La plantilla final quedó con una sola hoja, la de la taquería, así que el negocio propio del alumno se quedó sin lugar en el archivo.

---

## 6. Convención de nombres, a partir de aquí

Cada semana tiene dos sesiones y se nombran **`S0X-Teoria`** y **`S0X-Lab`**, con el número de sesión a dos dígitos. La numeración es de semana del temario, no de fecha en el calendario: el laboratorio de la Semana 2 es `S02-Lab` aunque caiga en la cuarta sesión del semestre.

Aplica a nombres de archivo, guías de facilitador, registros de clase y cualquier identificador nuevo. Los identificadores de Brightspace que ya están publicados (`S01 · Reflexión audio y video`, `S02 · Tablero de supuestos v1`) se quedan como están para no romper entregas en curso.

---

*Registro de clase · S01-Lab. Fuente: `S01-Lab-en-vivo.xlsx`, recalculado por segundo método el 17 de agosto de 2026.*
