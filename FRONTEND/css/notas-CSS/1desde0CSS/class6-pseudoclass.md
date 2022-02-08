# Pseudoclases
## ¿Qué son las pseudoclases?
Son selectores de estado, sea que se aplican en ciertas circunstancias 
> Tenemos que tener en cuneta que esto no lleva espacio, la elmento mas grande y con especificida es :root que es el html como pseudoclase

## :hover :active :visited :not() :empty :target

*selector* **Pseudoclases**| Descripcion
:--|--:
`:visited` | aplica para enlaces visitados un estilo diferente
`:hover` | aplica los cuando se pone el mause por encima 
`:active` | aplica los estilos cundo se hace click sobre el elemento
`:target` | seleccionar un elemento destino de un enlace y aplicar un estilo diferente 
`:not(elmento)` | negamos estilos a un elemwnto seleccionado 
`:empty` | estilos a un elemento que no tine contenido
`:` | 
`` | 

## :first-child :last-child :first-of-type :last-of-type

*selector* **Pseudoclases**| Descripcion
:--|--:
`:first-child` | selecciona el primer hijo 
`:last-child` | selecciona el ultimo hijo
`h2:last-child` | seleccionamos un h2 que sea primer hijo
`div :lastchild` | seleccionamos el ultimo hijo del div 
`:first-of-type` | selecciona el primer hijo de un tipo   
`:last-of-type` | slecciona el ultimo hijo de un tipo 
`div a:last-of-type` | selecciona el ultimo hijo a de un div
`` | 

Los que no tiene type, 
-funcionan con class, 
-si se busca desde el papa necesita espacio para indicar descendencia
-si se busca desde el hijo no necesita espacio

Los de type ,funcionan para elementos
-si se busca desde el papa necesita espacio para indicar descendencia
-si se busca desde el hijo no necesita espacio
-no funcionan con class

> Considerar las caracteristicas qeue se muestran en las listas 

## :nth-child() :nth-of-type()
Seleccionamos hasta el ultimo hijo que cumpla con las caracteristicas, sea par , impar , este en la primer posicion , en la cuarta , etc

*selector* **Pseudoclases**| Descripcion
:--|--:
`:nth-child(even)` | seleccionamos los pares
`:nth-child(odd)` | seleccionamos los impares
`:nth-child(x)` | seleccionamos el ultimo hijo en la posicion x
`:nth-last-child(x)` | seleccionamos el ultimo hijo en la posicion x, empezando desde el final 
`:nth-last-child(-n+5)` | seleccionamos los ultimos 5 hijos
`:nth-last-child(-n+5):nth-child(even)` | seleccionamos los pares de los ultimos 5 hijos
`element:nth-of-type()` | funciona igual pero a partir de un elemento dado
`` | 
