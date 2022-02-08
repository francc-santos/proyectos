# Estructura de tablas

propiedades **Tabla**| Descripcion
:---|---:
`display: table`| Permite coportamiento principalmente de divs como tabla, debe de ser e conteiner para las demas propiedades de abajo
`:table-header-group`| simula el comportamiento de la cabecera
`:table-row`|el comportaiento de una fila
`:table-cell`| de comportameinto de una celda
`:table-caption`| a descripcion de la tabla


# Bordes en tablas 

*propiedades* **Bordes tabla**| Descripcion
:---|---:
`border-collapse:`| para modificar el espacio entre los items de la tabla
`border-spacing`| podemos deinir el espacio entre los bordes, podemos poner hasta dos valores

*valor* **Bordes tabla**| Descripcion
:---|---:
`collaps`| Quita la separacion de los bordes entre los items de las tablas
`separate`| pone el espacio entre los items de las tablas 

# caption-side y empty-cell

*propiedades* **Caption tabla**| Descripcion
:---|---:
`caption-side`| podemos poner el caption arriba o abajo de la tabla
`emty-cell`| quitamos las celdas que esten en blanco sin afectar al acomodo  con `hide`

# table-layout 

*propiedades* **Caption tabla**| Descripcion
:---|---:
`table-layout`| Definimos el tamaño de las celdas
``|

*valor* **Caption tabla**| Descripcion
:---|---:
`fixed`| distribuye el espacio de la celda de una manera equitativa.

# Apariencia de inputs 

Solo esta con prefijos los valores. Asi es como se llama en mozilla

*propiedades* **appearance**| Descripcion
:---|---:
`-moz-apperance`| podemos decir a los valores de los formularios se comporten como otro

*valores* **appearance**| Descripcion
:---|---:
`none`| no pone estilos pero deja el coportameinto haciendo posible manejarlo con **pseudoelementos*
`checkbox`| que un elemento de forulario se vea como checkbox

> Los valores que pude tomar son practicamente todos los posibles elmentos dentro de un formulario

# Resize  

Solo funciona en textarea

*propiedad* **rezise**| Descripcion
:---|---:
`rezise`| indicamos el coportamiento de la redimension

*valores* **appearance**| Descripcion
:---|---:
`vertical`| solo se puede odificar en vertical
`none`| le decimos que no se modifique la redimension

> Podemos indicar la propiedad de resize a cualquier elemento.y junto con el atributo de html *contenteditable* podemos hacerlo pasar por un textfild 

# Focus 

*propiedad* **formulario**| Descripcion
:---|---:
`.el:focus`| pseudoclass para  hacer algo cuando un elemento este seleccionado
`.el:focus-within`| si se toma todo el fomulario estos estilos se aplican solo al  hijo en foco

> Focus-within, actua como si pudiieramos desde una hijo seleccionar al padre o un tio.

# Placeholder shown 

*pseudoclass* **formulario**| Descripcion
:---|---:
`.el:placeholder-show`| podemos detectar si un elemento tiene contenido y hacer con ellos estilos
`:required`| seleccoinmos los elementos que sean requeridos
`optional`| seleccionamos los que tiene el atributo optional
`:read-only`| seleccionamos los que tengan este atributo
`:read-write`| de lectura y escritura
`:disable`| desactivo desde el atributo
`:enable`| activo desde el atributo
`:valid`| seleccionamos si lo escrito es valido, y hacemos algo con estilos

> Para tener mejores validaciones en os formularios podemos usar expresiones regulares en el atributo *pattern*

# Estructura y layout de formularios 

*pseudoelement* **formulario**| Descripcion
:---|---:
`::placeholder`| podmeos seleccionar el placeholder y darle estilo.
