# Que es grid ?
    Una herramienta mas de layout que ayuda a que el navegar calcule para saber donde coloar cada elemnto y que tanto 

    A diferencia de flexbox permite el acomodo en dos coordenadas , en filas(inline) y columnas(block)

    NO dependemos del acomodo del html y tambien necesitamos de padres e hijos 

## Terminologia y elementos de Css grid 

### grid-container
*propiedad* **grid** | Descripcion
`display:grid`| dar la propieda de grid 
`display:inline-grid`| a un lado de otro coupando el espacio del contenido

### grid-items
- Se aplica a hijos directos
- pseudoclases
- texto


## Elementos que no existen en el dom
grid-tracks
: Son las *filas* y *columnas*

grid-lines
: Son las divisiones entre los tracks

grid-cells
: Es la interseccion entre un fila y una columna

grid-areas
: Es un espacio rectuangular delimitada por 4 grid lines 

> practicamente definimos las areas y en esta podemos poner cualquier contenido

## Definicion de tracks filas y columnas 

*propiedad* **grid** | Descripcion
`grid-template-columns: ancho`| definimos las columnas con un ancho , y la cantidad de estas , cuantas anchos se escriban sera el numero de columnas
`grid-template-rows: ancho`|definimos las filas igual que las columnas

## Propiedad grid-gap y unidad fr

*propiedad* **grid** | Descripcion
`grid-gap-column:`| separacion entre las tracks columnas
`grid-gap-row:`|separacion entre trakcs filas 
`gap:`| la sepaaracion se aplica en filas y columnas 
``|

> fr= seleccion todo el espacio disponible del viewport entre las fraciones dadas

## Posicionamiento de grid-item
Los hijos se ponene automaticamente en el orden del html podemos posicionarlo en diferentes lugares independiente del flujo de html

*propiedad* **grid** | Descripcion
`grid-colum-start`| indicamos por numeros en que columna estara el inicio 
`grid-colum-end`|indicamos por numeros en que columna estara el final
`grid-rows-start`| indicamos por numeros en que fila estara el inicio 
`grid-rows-end`| indicamos por numeros en que fila estara el final
`grid-row: p/f`| indicamos el principio y final de la fila del elemento  
`grid-colum: p/f`| indicamos el principio y final de la columna del elemento 


> Lo indicamos en cada en cada item , podemos indicar con `span` cuantas filas o columnas ocupara el elemento 

## Funcion repeat()

Indicamos cuantas columnas o filas se crearan y con que ancho
*propiedad* **grid** | Descripcion
`grid-template-colums:repeat(10,1fr)`| Dibuja 10 columnas y     ue sean iguales en todo el esacio disponible.

> Si no movemos el inicio del elemento en las columnas , con no indicarlo y dar el span con eso ya quedo 

## Tracks felxibles con fr 
Los track  se se les la la unidad de 1fr on iguales hasta que el espacio no es suficiente asiq eu busaca ajustarse al contenido y el espacio sobrante lo diveide entre los elementos que ocuan menos espacio.

## Tracks flexibles con min-content, max-content

*propiedad* **grid** | Descripcion
`min-content`| se ajusta lo mas que pueda del contenido 
`max-content`| se ajusta al elemento con mas contenido, genera scroll
`fit-content()`|indicamos que como minimo ocupe el contenido minimo posible y a parte le damos un maximo del que puede crecer.

## Tracks flexibles con min-max(), auto-fil y auto-fit

*propiedad* **grid** | Descripcion
`min-max()`| pasamos el minim y maximo valor 
`auto-fit`|indicamos que cree tantas columnas como creas de un tamanio dado, no crea tracks nuevos si ya no exste contenido
`auto-fill`| es practicamentelo mismo que fit pero, aunque ya no exista conenido crea el track sin mostrarla.
