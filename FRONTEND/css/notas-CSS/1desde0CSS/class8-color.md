# Color
Frente y fondo es un concepto de disiplinas visuales. color es el valor de frente  

> La propiedad colo hereda su valor a borde y shadow

## Currentcolor

*valor* **color**| Descripcion
:--|--:
`currentColor` | es una variable que gurda el valor del color del padre
`` | 

## Color keywords
Llamando los colores por so nombre, `transparent ` es un key word que no tiene color

## Modo RGB

Aditivo
: va añadiendo luz que es con r g b

Sustractiva
: va qiutando luz y es lo que pasa con las pinturas c m y k

`r = 256 = 2⁸` = posibilidades de color en cada color

> Cuando todos lo canales son iguales es un gris , podemos añadir transparencia con `rgba()`

## Notación Hexadecimal

Dos valores de 16 valores posibles que la multiplicar dan todos los valores posibles en el canal

> Si los dos valores son iguales podemos omitir un valor. y podemos poner un par mas que indica la transparencia

## Modo HSL

Definciion del color como en el circulo cromatico para hue=tono , saturation = intensidad del color y l la luz

> l en 0 y 100 son la luz apagada= negro y la luz prendia al maximo =blanco
> s = dar los grises, la saturacion de color de na playera se pierde cundo es mas vieja

*propiedad* **color**| Descripcion
:--|--:
`0 y 360` | red
`120` | verde
`240` | azul
`60` | amarillo
`180` | cyan
`300` | magenta 

> si añadimo una a podemos cambiar la transparencia 

## Degradados lineales 
Valor de los fondos con el que podemos combinar 2 o mas colores.

```css
    background-image: linear-gradient(angule color1 stop, color2 stop);
```


*valor* **background-img**| Descripcion
:--|--:
`linear-gradient()` | degradado en forma de linea 

*valor* **linear-gradient y radial gradient**| Descripcion
:--|--:
`n stop` | el estop no va pero este valor indica donde empieza a degradar 
`n angule` | indica el angulo de incioio del degradado
`to rigth|left|bottom|top` | indicamo hacia donde queremos que valla el degradado
`` | 


## Degradados radiales 
Valor de los fondos con el que podemos combinar 2 o mas colores.

```css
    background-image: radial-gradient(size shape at centro xy color1 stop , color2 stop);
```
*valor* **background-img**| Descripcion
:--|--:
`radial-gradient()` | degradado radial

*valor* **linear-gradient y radial gradient**| Descripcion
:--|--:
`n stop` | el estop no va pero este valor indica donde empieza a degradar 
`at x,y` | tercer posicion podemos indicar un centro con coordenadas 
`size ` | tamaño al inicio = fasther-corner|side closetsorner|side indicamos posiciones se calcula desde el padre estos valores
`shape` | segunda forma = circule | elipse
`` |
`` |


> En caso de que no se le de la forma, se calcula pq si son igules las dos medias es obvio que es un circulo

## Degradados repetidos

Poder repetir los degradados, declaramos los colores que se va a usar y cada cuanto se va a repetir.

```css
    bacground-image: repeating-radial-gradient(color posicion);
```

## Ejercicio Ying-Yang

> Tomar en cuenta que podemos tener mas de un degrdado encima de otro y que este encima denota que es el que se ve por encima de los demas.