# Alineacion de items Grid

*propiedad* **Grid** | Descripcion
`grid-template: width-row width-row / width-colum width-colum `| shorthand para la creacion de tracks , solo colocamos el ancho, podemos usar repaat() 

## Alineacion de los items en el conatainer

### Alineacion en x e y de los items
*propiedad* **Grid** | Descripcion
`justify-items: `| Alineacion de los items en el eje x
`aling-items`| Alineacion de los items en el eje y

### Alineacion de item en  su track
*propiedad* **Grid** | Descripcion
`justify-self: `| Alineacion de el item en el eje x
`aling-self`| Alineacion de el item en el eje y

*valor* **justify-items | self Container** | Descripcion
`start`| alinea el item al principio del espacio del track
`center`| al centro del track
`end`| a la izquierda del track
``|
``|

> Podemos alinear los items en sus respectivos tracks con la ayuda de margenes , nota mental self solo sirve para un item en especifico.

# Alineacion de tracks 

Podemos hacer que los tracks no llenen todo el container dando un tamanio especifico

*propiedad* **Grid** | Descripcion
`justify-content:`| alineamos los tracks en x
`aling-content:`| alineamos los tracks en y
``|


*valor* **Alineacion tracks** | Descripcion
`start`| pone los tracks al inicio del container 
`end `| pone los tracks al final del container
`space-betwen`| espacio entre ellos llegando al final del container
`space-around`| es como si tuviera un margen en los lados y entre los track tienen el espacio igual
`space-evenly`| mismo espacio entodos los lados del track
`aling-content: start`| al inicio en y pero sin ocupar todo el espacio
`aling-content: end`| al final sin usar todo el espacio
`aling-content: strech`| ocupa todo el espacio
`aling-content: center`| en el centro sin todo el espacio
`aling-content: space-aroud`|si hubiera items verticales pone el mismo espacio entre tarcks y los margenes



# Grid placement
Es el algoritmo de acomodo de los items en caso de que no haya una secuencia definida para todos

*propiedad* **grid palcement**| Descripcion
`grid-auto-flow:`|indica el sentido en que se posicionan los items 
`grid-auto-rows`| indicamos el tamanio de la filas que se crean por grid implicito
`grid-auto-columns`| indicamos el tamanio de la columnas que se crean por grid implicito

*valor* **grid auto-flow**| Descripcion
`row`| los items en fila
`row-reverse`| los items en fila de manera opuesta 
`colums`| sentido de colums de los items 
`row|columns dense`| |Busca espacio hacia el inicio(izq) donde pueda entrar cada item


> Cuando no hay espacio y too se acomoda a lo wey es porque se define el grid explicito 