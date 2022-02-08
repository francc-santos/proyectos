# Introducción a los blending modes

Modos de fusion, mezcla de colores de las diferentes capas

*propiedades* **Bending mode**| Descripcion
:---|---:
`mix-blend-mode:`| INteracion entre elementos
`background-blend-mode:`|Interaccion entre los fondos
`isolation:isolate`| lo colocamos desde el elemto que quereos que se use como fondo de combinacion

# valores Blending modes 

*valor* **Bending mode**| Descripcion
:---|---:
`unset`| eimina el modo de fusion actual
`multiply`| es como una transparencia
`screen`| Es como multiply pero mas claro
`overlay`| respeta el brillo de la img
`hard-light`| donde hay tonos oscuros los pone oscuros
`soft-light`| es como overlay sin contraste
`color-dodge`|es como la sobreexposicion
`color-burn`| partes con mayor contraste quedan mas oscuras
`darken`| agarra el color mas oscuro y añade la diferencia a los demas
`lighten`| lo contrario de darken
`difference`|  resta al alor mayor de la mezcla el menor en cada canal y lo usa
`exclusion`| lo mismo de diference pero menos contraste
`hue`| pinta todo lo que no es blanco y negro
`color`| replazamos el tono y la saturacion
`saturation`| mezclamos la saturacion
`luminosity`|mezclamos la luminosidad
``|

