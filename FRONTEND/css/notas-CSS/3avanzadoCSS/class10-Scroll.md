# Desbordamiento de contenido

*propiedad* **Overflow**|Descripcion
:---|---:
`overflow`| poder controlar el desbordamiento 
`overflow-y`|
`overflow-x`|
``|
``|

> cuando solo lijes un lugar de desbordamiento por defecto el otro toma el valor de auto

*valores* **Overflow**|Descripcion
:---|---:
`visble`| no hace nada cuando se desborda
`hidden`| se oculta
`auto`| pone las barras del lado donde se desborda 
`scroll`| pone las barras aun no se desborde

# Smooth scroll con CSS 

El el uso de scroll en seciones de la pagina.

*propiedad* **Overflow**|Descripcion
:---|---:
`scroll-behavior:`| poder hacer un scroll en la pagina  de manera fluioda
`scroll-padding-top`| dar una padding por si no se visualizan los elemtnos por posicionamiento absoluto de los elementos, al conenedor pade que tiene el scroll
`scroll-margin-top`| se aplica principalmente a los hijos del scroll

*valores* **scroll-behavior**|Descripcion
:---|---:
`smooth`| desplazamiento suabe en secciones de la pagina. no se puede hacer directamente al body, por loq ue se puede aplicar a html.
``|
``|

# Desplazamiento dentro de contenedores 

*propiedad* **Overflow**|Descripcion
:---|---:
`scroll-snap-type: eje type`| movemos a traves de contenedores
`scroll-snap-align:`| en los hijos decimos en que parte se pondra ubicara cuando estemos en su espacio, *center, start, end*
``|
``|

*valores* **scroll-snap-type**|Descripcion
:---|---:
`mandatory`| manda automaticamente cunado e mueva poco
`proximity`| termina de hacer el scroll cuando te acercas al elemento 

# Personalización del scroll 

Solo en webkit.

*pseudoelements* **Scroll**|Descripcion
:---|---:
`::scrollbar`|Es la barra completa
`::scrollbar-track`| Lo que se pude mover
`::..bar-trackpice`| la diferencia de movimiento
`::...bar-thumb`| la barra que se mueve
`::...bar-button`| la parte de las flechas
`::...bar-corner`| el vertice donde se encuentran los tracks, debemos pones display:block
``|
``|

*pseudoelements* **Scroll**|Descripcion
:---|---
`:vertical :horizontal`| dentro de los pseudoelementos modificamos de acurdo como estan ubicados
`:start :end`| podemos modificar el boton de incio y el del final
`:incremwnt`| seleccionamos los botones o trackpice deepndiendo hacia donde nos movemos
``|

> podemos pasar img como background

> se debe de usar el prefijo -webkit-scrollbar