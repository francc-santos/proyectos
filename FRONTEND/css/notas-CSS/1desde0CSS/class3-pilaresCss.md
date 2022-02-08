# Pilares de Css
Es lo que definen el comportamiento de css, mediante la cascada , la especificidad y la herencia  
Como resulve los conflictos y como se definen las arquitecturas Css
- SMACSS
- OOCSS
- ITCSS

## La espeficificidad
- etiquetas y pseudoelementos = 1
- clases, atributos y pseudoclases = 10
- id = 100
- estilos en linea 1000
- como valor !important es el mas especifico 

> Asi que los estilos de linea son mas especificos, recomendable usar solo clases para masntener la esecificidad lo mas plana posible 
> pseudoelementos= elmentos de html que los creamos desde css

## cascada 
es sobreescritura , pero puede romperse por las especificidad, 
> Podemos sobrepasar este peoblema colocando `!important`

## Herencia
Capacidad que tinen los elementos de html pasar los estilos a sus hijos

- `inherit` | hace que herede desde el papa
- `initial` | que no herede las carateristicas en comun del papa

> no todos los estilos se heredan , los estilos se hereda los relativos a la caja nou.
