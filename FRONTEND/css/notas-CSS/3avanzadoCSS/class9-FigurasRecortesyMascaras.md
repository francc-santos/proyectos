# Recorte rectangular/interior

*propiedad* rocorte| Descripcion
:---|---:
`clip-path:`| podemos indicar con diferentes funciones como se va a cortar un elmento
`object-fit: cover`| evitar la deformacion de la img
`shape-outside: inset(num...)`| decimos que el box abarca solo lo que se corto 
`shape-margin:`| separacion , solo puede tener un valor

> shape-outside, puede recibir todas la funciones que recibe *clip-path*

# Valores de la propiedad Clip-path

*valores* Rocorte| Descripcion
:---|---:
`inset(num...)`| cantidad de recorte de afuera hacia adentro, podemos pasara mas de un valor 4 de cada esquina creo, `round`
`circle(num at x y)`| Forma de acuerdo al tamañio del radio y desde donde sera el cetro.
`ellipse(rx,ry at x y)`| Indicamos los focos 
`polygon(xy,xy,xy,...)`| por lo menos 3 coordenadas y podemos poderlo en cualquier coordenada


> podemos usar la elipse para hacer una animacion 

> En las animaciones de polygon debemos de tener la misma cantidad de coordenadas de inicio a fin por lo que podemos poner dos en el mismo lugar para pasar de una figura a otra

# Recorte con SVG

Para poder reocrtar con la forma de un svg debe de tener el svg en sus etiquetas de html la `<clippath>`
en css se dede de invocar como

```css
    .element{
        clip-path: url('');
    }
```

Tambien se pude hacer con magenes de trasnparencia

# Máscaras de recortes 

Es una area delimitada donde se va a presentar la imagen.

*propiedad* mascara| Descripcion
:---|---:
`mask-image:`| recibimos la img con transparencia
`mask-repeat:`| poner solo una con *no-repeat*
`mask-position:`| desde donde podemos usarlo
`mask-size`| que tan grande va a ser
`mask-composite`| combinar dos mascaras , con valores como add, intersection.

Es como una ventana para ver , pero hay mas elementos ocultos

# Composición de máscaras 

*valor* Composicion-Mascara| Descripcion
:---|---:
`add`| la mascara uno y dos sean una mism
`subtract`| elimina el espacio de la primer mascara de la segunda
`intersect`|lo de en medio de la combinacion de las mascaras
`exclude`| quita lo de enmedio de las dos mascaras

paralax : que se muevan de diferente forma al hacer scroll