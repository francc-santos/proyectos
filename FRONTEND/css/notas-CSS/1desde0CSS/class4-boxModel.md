# Modelo de caja
Como el navegadro decide de que forma de que tamaño y en que posicion  se va a dibujar un element en pantalla  
El layout model es como se conoce a este conjunto de decisiones  geometria
- box model
- position 
- flexbox 
- grid
Todos los elementos con rectangulos.

## Propiedad BOx-sizing
Es como el navegador calcula el tamaño final de la caja, de manera predeterminado esta e el contentent = contentbox

Es a partir de donde va a calcular el width y el height, para que el navegador respete el ancho y alto que le hemos dado desde width y height debemos de decirle que el tamaño de la caja es borderç, que es el mas externo que podemos ver 

Css *valor* **Box-sizing** | Descripcion
:--|--:
`content` | calcula el tamaño de la caja en el contenido
`border` | calcula el tamaño de la caja en el borde
`padding` |  calcula el tamaño de la caja en el padding

## Propiedad display
Css *valor* de **Display** | Descripcion
:--|--:
`inline` | No puede tener dimensiones 
`block` | Toma todo el espacio horizontal , in importar que no lo ocupe
`inline-block` | Es inline , pero puede tener dimensiones 

> La img son display inline-block por default

> Float permite que los elemento de floque se puedan poner uno al lado de otro

## Margin
*propiedad* **Margin** | Descripcion
:--|--:
`margin: 10px auto` |  Separa de arriba 10 px y centro en en contenedor padre
`margin: 10px` | indicamos a los 4 margenes que tengan 10px
`margin: 20px 30px` | indicamos que los margenes superior e inferior tengan 20 y los de los lados 30
`margin-left` | indicamos un valor al margen izq  
`margin-rigth` | indicamos un valor al margen derecho
`margin-top` | indicamos un valor al margen arriba 
`margin-bottom` | indicamos un valor al margen abajo
`` |  
`` |  

> Si se calcula con porcentaje se toma en cuenta los valores del padre

> Las propiedades que se pueden dividir en propiedades mas especificas inician definindose desde el en sentido de las manecillas del reloj y desde el top hasta el bottom

>> solucionar colapado de margenes verticales, aveces si hay eementos con margenes uno arriba del otro se restan en lugar de sumarse lo mejor es solo usar el margin-bottom 

## Padding

*propiedad* **Padding** | Descripcion
:--|--:
`margin: 10px` | indicamos a los 4 paddings que tengan 10px
`margin: 20px 30px` | indicamos que los paddings superior e inferior tengan 20 y los de los lados 30
`margin-left` | indicamos un valor al padding izq  
`margin-rigth` | indicamos un valor al padding derecho
`margin-top` | indicamos un valor al padding arriba 
`margin-bottom` | indicamos un valor al padding abajo
`` |  

> Si se usan porcentajes los valores que toma en cuenta , son los del mismo elemento

## Bordes 
Css *propiedad* de Border| Descripcion
:--|--:
`border : 1px solid black` | definimos que el borde mide 1px sla linea que forma es continua y ademas de color negro  
`` |  
`` |  



Css *valor* **Border** | Descripcion
:--|--:
`solid` | el borde es continuo
`dashed` | el borde es puntedo
`doted` |  el pborde es punteado mas rodondo
`` |  

