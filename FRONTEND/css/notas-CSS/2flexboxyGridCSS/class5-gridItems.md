# Grid Items 

## Grid areas
Cualquier espacio rectangular dividido por 4 lineas de grid 

*propiedad* **grid** | Descripcion
`grid-template-areas: ''`| NOs permite definir las *filas* y columnas nombrando un area , y las columnas con espacios en los *('')*
`grid-area: nombre-area`| definimos en el item el area que va a ocupar este 
`grid-template-area: 'header header'`| Ejemplo, hemos definido un dos columnas dentro de una fila con el nombre de *header*, podemos definir mas filas y mas columnas como queramos.
``|
``|

> podemos definir mas de una fila y se coloca fuera dentro de otros comillas, para asignar esta area debemos de usar `grid-area: nombre-area` en el item , solo que para lso tamanios debemos de usar gid template-rows o colums segun sea el caso.