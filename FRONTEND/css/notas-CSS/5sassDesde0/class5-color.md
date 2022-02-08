# Color
## Modos de color cmyk y rgb 

- Sustractrivo : quitamos la luz (cmyk)
- Aditivo : sumamos la luz (rgb)

2^8 2^8 2^8 = 16M de colores posibles , profundidad de lor de 24bits 

## Color hsl

hue
: Es el tono de color 0 a 360 grados 

saturation
: es la contidad de color que se tiene, desde el gris hasta el color puro

ligness
: la cantidad de luz que recibe, 0 es negro 100 es blanco, en 50 esta el color puro 


valores de **hue**| descripcin
`0 y 360`|rojo
`60`| amarillo 
`120`| verde
`180`| cyan 
`240`| blue 
`300`| magenta

## Notacion hexadecimal y circulo cromatico

Sigue siendo lo mismo que rgb solo que los 256 valores posibles se usan con la compinacion de dos valores del 0-9 y a-f, los dos primeros son para rojo , el siguiente green y el cuarto blue

## Funciones de color sass


Funciones **manipalacion** **color** | descripcion
`red($color)`| sacamos la cantidad de rojo de un color dado
`green($color)`|sacamos la cantidad de verde ...
`blue($color)`|sacamos la cantidad de azul ...
`hue($color)`|sacamos la cantidad de color ...
`saturation($color)`|sacamos la cantidad de saturacion ...
`ligthnes($color)`|sacamos la cantidad de luz de un coor dado
`ligthen($color, $cantidad)`| lucificamos el color en una cantidad
`saturate($color, $cantidad)`| saturamos el color en una cantidad
`desaturate($color, $cantidad)`| desaturamos el color en una cantidad
`adjust-hue($color, $cantidad)`| cambiamos el hue en una cantidad 
``| 