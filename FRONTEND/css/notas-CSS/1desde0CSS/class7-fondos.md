# Fondos
La propiedad para indicar un fondo es `background:`, pero es un shorhand de mas propiedades 

## background-color

*propiedad* **Fondo**| Descripcion
:--|--:
`background-color` | indicamos un color de fondo
`background-img: url()` | ponemos una imagen de fondo
`background-repeat:` | podemos indicar si se repite o no el fondo

*valor* **Fondo repeat**| Descripcion
:--|--:
`repeat` | repite la img en caso de que no ocupe todo el espacio
`no-repeat` | no se repite  
`repeat-x` | se repite de forma horizontal
`repeat-y` | se repite de manera vertical

## background-size 
    Solo se aplica cuando son img

*propiedad* **Fondo**| Descripcion
:--|--:
`background-size` | cambiamos el tamaño de la img de fondo

*valor* **background-size**| Descripcion
:--|--:
`auto` | toma el tamaño que tiene la img
`npx npx` | indicamos un valor especifico
`contain` | se ajusta al tamaño del contenido
`cover` | espire hasta acompletar todo el elemento
`` | 

## background-position

*propiedad* **Fondo**| Descripcion
:--|--:
`background-position` | cambiamos la posicion de la img
`` | 

*valor* **Position**| Descripcion
:--|--:
`center center` | centra todo respecto al papa
`center` | centra en x
`lef` | izquierda 
`rigth` | derecha
`top` | arriba
`center` | centra en y
`bottom` |abajo 

>podemos agregar medidas desde dond empieza a contar

> de manera predeterminado es 0 0, se calcula desde la esquina superior izquierda.

## background-clip y background-origin
 Indican que area ocupa el fondo y desde donde se empieza a dibujar

*propiedad* **Fondo**| Descripcion
:--|--:
`background-clip` | indica que parte de la caja se va a llenar 
`background-origin` | indica desde donde se empieza a dibujar e contenido

*valor* **background-clip y background-origin**| Descripcion
:--|--:
`border-box` | es lo por defecto cubre toda la caja
`content-box` | cubre solo el contenido
`padding-box` | cubre hate el padding


> Con clip lo que se muestra es como si se hciera un recorte con los bordes de la caja y con origin se redimensiona para que entre toda la img

## background-attachment

*propiedad* **Fondo**| Descripcion
:--|--:
`background-attachment: fixed` | indica que no le hace caso al scroll 
`` | 

## Background multiples
 Podemos poner  mas de un fondo, y usar las mismas propiedades que hemo visto

## Shorthand background

```css
    body{
        background: img position / size repeat attachmet origin clip color ;
    }
```
