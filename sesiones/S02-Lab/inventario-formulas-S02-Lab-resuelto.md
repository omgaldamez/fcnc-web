# Inventario de fórmulas · S02-Lab-resuelto-docente.xlsx

Generado desde el binario, no desde la memoria de la sesión. El archivo del alumno es el mismo sin `Comprobación`: **86 fórmulas**.

**Total del docente: 124 fórmulas.**

## Panel  ·  31 fórmulas

| Celda | Fórmula | Valor |
|---|---|---|
| `B7` | `=$B$4` | La taquería |
| `F7` | `=$B$4` | La taquería |
| `F8` | `=B8*B9` | 304.5 |
| `G8` | `=C8*C9` | 100.8 |
| `H8` | `="clientes por día ("&B8&" / "&C8&") × unidades por cada cliente ("&B9&" / "&C9&")"` | clientes por día (87 / 18) × unidades por cada cliente (3.5 / 5.6) |
| `F9` | `=F8*B10*B11` | 174174 |
| `G9` | `=G8*C10*C11` | 144144 |
| `H9` | `="unidades por día ("&ROUND(F8,1)&" / "&ROUND(G8,1)&") × "&"precio ("&TEXT(B10,"$#,##0")&" / "&TEXT(C10,"$#,##0")&")"&" × "&"días abiertos ("&B11&" / "&C11&")"` | unidades por día (304.5 / 100.8) × precio ($22 / $55) × días abiertos … |
| `E10` | `="Si traes "&$B$13&IF($B$13=1," cliente"," clientes")&" más al día"` | Si traes 1 cliente más al día |
| `F10` | `=B9*B10*B11*$B$13` | 2002 |
| `G10` | `=C9*C10*C11*$B$13` | 8008 |
| `H10` | `="unidades por cada cliente ("&B9&" / "&C9&") × "&"precio ("&TEXT(B10,"$#,##0")&" / "&TEXT(C10,"$#,##0")&")"&" × "&"días abiertos ("&B11&" / "&C11&")"&" × clientes adicionales ("&$B$13&")"` | unidades por cada cliente (3.5 / 5.6) × precio ($22 / $55) × días abie… |
| `E11` | `="Si cada cliente lleva "&$B$14&" unidades más"` | Si cada cliente lleva 0.2 unidades más |
| `F11` | `=B8*B10*B11*$B$14` | 9952.8 |
| `G11` | `=C8*C10*C11*$B$14` | 5148 |
| `H11` | `="clientes por día ("&B8&" / "&C8&") × "&"precio ("&TEXT(B10,"$#,##0")&" / "&TEXT(C10,"$#,##0")&")"&" × "&"días abiertos ("&B11&" / "&C11&")"&" × unidades adicionales ("&$B$14&")"` | clientes por día (87 / 18) × precio ($22 / $55) × días abiertos (26 / … |
| `E12` | `="Si abres "&$B$15&IF($B$15=1," día"," días")&" más al mes"` | Si abres 1 día más al mes |
| `F12` | `=B8*B9*B10*$B$15` | 6699 |
| `G12` | `=C8*C9*C10*$B$15` | 5544 |
| `H12` | `="clientes por día ("&B8&" / "&C8&") × unidades por cada cliente ("&B9&" / "&C9&") × "&"precio ("&TEXT(B10,"$#,##0")&" / "&TEXT(C10,"$#,##0")&")"&" × días adicionales ("&$B$15&")"` | clientes por día (87 / 18) × unidades por cada cliente (3.5 / 5.6) × p… |
| `F13` | `=IF(F11>F10,"subirle a cada cliente","traer más clientes")` | subirle a cada cliente |
| `G13` | `=IF(G11>G10,"subirle a cada cliente","traer más clientes")` | traer más clientes |
| `F14` | `=ROUNDUP(MAX(F11,F12)/(B9*B10*B11),0)` | 5 |
| `G14` | `=ROUNDUP(MAX(G11,G12)/(C9*C10*C11),0)` | 1 |
| `H14` | `="Cuántos harían falta para que el Camino A pasara al primer lugar, dejando los otros dos movimientos como están ahora ("&$B$14&" y "&$B$15&"). Si mueves cualquiera de esos dos, este número cambia."` | Cuántos harían falta para que el Camino A pasara al primer lugar, deja… |
| `F15` | `=ROUNDUP(MAX(F10,F12)/(B8*B10*B11),2)` | 0.14 |
| `G15` | `=ROUNDUP(MAX(G10,G12)/(C8*C10*C11),2)` | 0.32 |
| `H15` | `="Lo mismo para el Camino B, con los otros dos movimientos en "&$B$13&" y "&$B$15&"."` | Lo mismo para el Camino B, con los otros dos movimientos en 1 y 1. |
| `F16` | `=ROUNDUP(MAX(F10,F11)/(B8*B9*B10),0)` | 2 |
| `G16` | `=ROUNDUP(MAX(G10,G11)/(C8*C9*C10),0)` | 2 |
| `H16` | `="Lo mismo para el Camino C, con los otros dos movimientos en "&$B$13&" y "&$B$14&"."` | Lo mismo para el Camino C, con los otros dos movimientos en 1 y 0.2. |

## S01-Lab  ·  28 fórmulas

| Celda | Fórmula | Valor |
|---|---|---|
| `D12` | `=B12*C12` | 10000 |
| `E12` | `=B12/30` | 3333.333333 |
| `F12` | `=E12*C12` | 333.333333 |
| `G12` | `=F12-$F$13` | -333.333333 |
| `H12` | `=IF(G12<0,"Este escenario deja MENOS al día que tu supuesto. Estar por arriba de él es buena señal.",IF(G12>0,"Este escenario deja MÁS al día que tu supuesto: tu supuesto se queda corto frente a él.","Igual que tu supuesto."))` | Este escenario deja MENOS al día que tu supuesto. Estar por arriba de … |
| `D13` | `=B13*C13` | 20000 |
| `E13` | `=B13/30` | 6666.666667 |
| `F13` | `=E13*C13` | 666.666667 |
| `D14` | `=B14*C14` | 30000 |
| `E14` | `=B14/30` | 10000 |
| `F14` | `=E14*C14` | 1000 |
| `G14` | `=F14-$F$13` | 333.333333 |
| `H14` | `=IF(G14<0,"Este escenario deja MENOS al día que tu supuesto. Estar por arriba de él es buena señal.",IF(G14>0,"Este escenario deja MÁS al día que tu supuesto: tu supuesto se queda corto frente a él.","Igual que tu supuesto."))` | Este escenario deja MÁS al día que tu supuesto: tu supuesto se queda c… |
| `B21` | `=B13` | 200000 |
| `C21` | `=C13` | 0.1 |
| `D21` | `=B21*C21` | 20000 |
| `E21` | `=B21/30` | 6666.666667 |
| `F21` | `=E21*C21` | 666.666667 |
| `C22` | `=C13` | 0.1 |
| `D22` | `=B22*C22` | 25000 |
| `E22` | `=B22/30` | 8333.333333 |
| `F22` | `=E22*C22` | 833.333333 |
| `G22` | `=F22-$F$21` | 166.666667 |
| `B23` | `=B13` | 200000 |
| `D23` | `=B23*C23` | 30000 |
| `E23` | `=B23/30` | 6666.666667 |
| `F23` | `=E23*C23` | 1000 |
| `G23` | `=F23-$F$21` | 333.333333 |

## S02-Lab  ·  27 fórmulas

| Celda | Fórmula | Valor |
|---|---|---|
| `A11` | `="Estado de los cuatro supuestos: "&IF(AND(B7=87,B8=3.5,B9=22,B10=26),"estás en los números reportados por las fuentes.","estás explorando. Los reportados son 87 clientes por día, 3.5 unidades por cliente, $22 la unidad y 26 días abiertos.")` | Estado de los cuatro supuestos: estás en los números reportados por la… |
| `D15` | `="Es el movimiento más chico que puede dar esta palanca: no hay medio cliente, así que va en enteros y el mínimo es 1. Ahora está en "&B15&"."` | Es el movimiento más chico que puede dar esta palanca: no hay medio cl… |
| `D16` | `="Nadie pide "&B16&" unidades. Es un promedio: es como si "&ROUND(B16*10,1)&" de cada 10 clientes se llevaran una unidad más. Puede llevar decimales."` | Nadie pide 0.2 unidades. Es un promedio: es como si 2 de cada 10 clien… |
| `D17` | `="Abrir "&B17&IF(B17=1," día que antes se cerraba"," días que antes se cerraban")&", por ejemplo un domingo. Va en enteros y el mes se acaba: no puede pasar de 31 menos los que ya abres."` | Abrir 1 día que antes se cerraba, por ejemplo un domingo. Va en entero… |
| `B22` | `=B7*B8` | 304.5 |
| `D22` | `="clientes por día ("&B7&") × unidades por cada cliente ("&B8&")"` | clientes por día (87) × unidades por cada cliente (3.5) |
| `B23` | `=B22*B9` | 6699 |
| `D23` | `="unidades por día ("&ROUND(B22,1)&") × precio de la unidad ("&TEXT(B9,"$#,##0")&")"` | unidades por día (304.5) × precio de la unidad ($22) |
| `B24` | `=B23*B10` | 174174 |
| `D24` | `="ingreso por día ("&TEXT(B23,"$#,##0")&") × días abiertos al mes ("&B10&")"` | ingreso por día ($6,699) × días abiertos al mes (26) |
| `B29` | `=B8*B9*B10*B15` | 2002 |
| `C29` | `="unidades por cliente ("&B8&") × precio ("&TEXT(B9,"$#,##0")&") × días abiertos ("&B10&") × clientes adicionales ("&B15&")"` | unidades por cliente (3.5) × precio ($22) × días abiertos (26) × clien… |
| `B30` | `=B7*B9*B10*B16` | 9952.8 |
| `C30` | `="clientes por día ("&B7&") × precio ("&TEXT(B9,"$#,##0")&") × días abiertos ("&B10&") × unidades adicionales ("&B16&")"` | clientes por día (87) × precio ($22) × días abiertos (26) × unidades a… |
| `B31` | `=B7*B8*B9*B17` | 6699 |
| `C31` | `="clientes por día ("&B7&") × unidades por cliente ("&B8&") × precio ("&TEXT(B9,"$#,##0")&") × días adicionales ("&B17&")"` | clientes por día (87) × unidades por cliente (3.5) × precio ($22) × dí… |
| `B37` | `=B24` | 174174 |
| `B38` | `=B24+B29` | 176176 |
| `C38` | `=B38-B24` | 2002 |
| `D38` | `="clientes por día: "&B7&" + "&B15&" = "&B7+B15` | clientes por día: 87 + 1 = 88 |
| `B39` | `=B24+B30` | 184126.8 |
| `C39` | `=B39-B24` | 9952.8 |
| `D39` | `="unidades por cada cliente: "&B8&" + "&B16&" = "&ROUND(B8+B16,2)` | unidades por cada cliente: 3.5 + 0.2 = 3.7 |
| `B40` | `=B24+B31` | 180873 |
| `C40` | `=B40-B24` | 6699 |
| `D40` | `="días abiertos al mes: "&B10&" + "&B17&" = "&B10+B17` | días abiertos al mes: 26 + 1 = 27 |
| `A41` | `="El que más suma es el Camino "&IF(AND(B29>=B30,B29>=B31),"A",IF(B30>=B31,"B","C"))&". No es que esa palanca sea mejor que las otras: es que el movimiento que le pusimos es el más grande de los tres comparado con la base sobre la que cae. Cada camino tiene su punto de quiebre, y aquí están: el Camino A ganaría con "&ROUNDUP(MAX(B30,B31)/(B8*B9*B10),0)&" clientes adicionales al día en vez de "&B15&"; al Camino B le bastarían "&ROUNDUP(MAX(B29,B31)/(B7*B9*B10),2)&" unidades por cliente; y el Camino C ganaría con "&ROUNDUP(MAX(B29,B30)/(B7*B8*B9),0)&" días. Cámbialos en el bloque 2 y vuelve a mirar aquí: el que gana cambia. Fíjate en cuál de esos tres movimientos está más a tu alcance en la vida real, porque eso no lo contesta la hoja. Y el Camino C no compite del todo: el mes tiene entre 28 y 31 días y ahí se acaba."` | El que más suma es el Camino B. No es que esa palanca sea mejor que la… |

## Comprobación  ·  38 fórmulas

| Celda | Fórmula | Valor |
|---|---|---|
| `B5` | `='S02-Lab'!B24` | 174174 |
| `C5` | `='S02-Lab'!B7*'S02-Lab'!B8*'S02-Lab'!B9*'S02-Lab'!B10` | 174174 |
| `D5` | `=B5-C5` | 0 |
| `E5` | `=IF(ABS(D5)<0.01,"OK","revisar")` | OK |
| `B6` | `='S02-Lab'!B29` | 2002 |
| `C6` | `=('S02-Lab'!B7+'S02-Lab'!B15)*'S02-Lab'!B8*'S02-Lab'!B9*'S02-Lab'!B10-'S02-Lab'!B24` | 2002 |
| `D6` | `=B6-C6` | 0 |
| `E6` | `=IF(ABS(D6)<0.01,"OK","revisar")` | OK |
| `B7` | `='S02-Lab'!B30` | 9952.8 |
| `C7` | `='S02-Lab'!B7*('S02-Lab'!B8+'S02-Lab'!B16)*'S02-Lab'!B9*'S02-Lab'!B10-'S02-Lab'!B24` | 9952.8 |
| `D7` | `=B7-C7` | 0 |
| `E7` | `=IF(ABS(D7)<0.01,"OK","revisar")` | OK |
| `B8` | `='S02-Lab'!B31` | 6699 |
| `C8` | `='S02-Lab'!B7*'S02-Lab'!B8*'S02-Lab'!B9*('S02-Lab'!B10+'S02-Lab'!B17)-'S02-Lab'!B24` | 6699 |
| `D8` | `=B8-C8` | 0 |
| `E8` | `=IF(ABS(D8)<0.01,"OK","revisar")` | OK |
| `B9` | `='S02-Lab'!B40` | 180873 |
| `C9` | `='S02-Lab'!B7*'S02-Lab'!B8*'S02-Lab'!B9*('S02-Lab'!B10+'S02-Lab'!B17)` | 180873 |
| `D9` | `=B9-C9` | 0 |
| `E9` | `=IF(ABS(D9)<0.0001,"OK","revisar")` | OK |
| `B10` | `=Panel!G9` | 144144 |
| `C10` | `=Panel!C8*Panel!C9*Panel!C10*Panel!C11` | 144144 |
| `D10` | `=B10-C10` | 0 |
| `E10` | `=IF(ABS(D10)<0.01,"OK","revisar")` | OK |
| `B11` | `=Panel!G10` | 8008 |
| `C11` | `=(Panel!C8+Panel!B13)*Panel!C9*Panel!C10*Panel!C11-Panel!G9` | 8008 |
| `D11` | `=B11-C11` | 0 |
| `E11` | `=IF(ABS(D11)<0.01,"OK","revisar")` | OK |
| `B12` | `=Panel!G11` | 5148 |
| `C12` | `=Panel!C8*(Panel!C9+Panel!B14)*Panel!C10*Panel!C11-Panel!G9` | 5148 |
| `D12` | `=B12-C12` | 0 |
| `E12` | `=IF(ABS(D12)<0.01,"OK","revisar")` | OK |
| `B13` | `=Panel!F9` | 174174 |
| `C13` | `='S02-Lab'!B24` | 174174 |
| `D13` | `=B13-C13` | 0 |
| `E13` | `=IF(ABS(D13)<0.01,"OK","revisar")` | OK |
| `B15` | `=COUNTIF(E5:E13,"OK")&" de "&COUNTA(E5:E13)&" en orden"` | 9 de 9 en orden |
| `D15` | `=IF(COUNTIF(E5:E13,"revisar")>0,"Hay algo que revisar.","Ninguna diferencia.")` | Ninguna diferencia. |
