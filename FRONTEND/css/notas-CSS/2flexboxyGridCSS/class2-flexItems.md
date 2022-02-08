# Flex items
Son los hijos directos del flexcontainer, pueden ser pseudoelementos o content

Los hijos son las cajas flexibles que pueden crecr y redicirce a voluntad

> Cuando pones un elemento en position absolut y fixed pierden su posicion en el flujo y quedan donde le hayamos indicado


## Propiedad flex-grow

Es el factor de crecimento , el navegador divide el espacio disponible entre la cantidad de total de factores de crecimento y se los asigna a los items

Saca el factor de crecimiento como una porcion del espacio disponible y despues de esto lo multiplica el factor de crecimiento por la porcion y esto lo suma al valor que ya tenia el item , ojo solo a los que tengan indicado que van a crecer.

*propiedad* **flex**| Descripcion
:--|--:
`flex-grow:`| indicamos que los items crescan 

>respetando los margenes y paddings, inicialmente ocupan lo del contenido

*valor* **flex-grow**| Descripcion
:--|--:
`1fr`|
``|


## Propiedad flex-shrink
*propiedad* **flex**| Descripcion
:--|--:
`flex-shrink:`|Indicamos que se redusca los items, se dvivide el espacio sobrante entre todos los elemntos 

## Propiedad flex-basis

*propiedad* **flex**| Descripcion
:--|--:
`flex-basis`| Define el tamanio inicial en el eje principal, para todos los items 

> flex-basis:0 da el mismo width a todos los elementos , y aniadiendo grow en 1 podemos dar el mismo width a todos los elemtos en una linea 

## Propiedad flex
Propieda que agrupa a flex grow, shrink, basis.

```css
 flex: grow shrink basis;
```

*valores* **flex**| Descripcion
:--|--:
`initial`| es no hace nada
`auto`| crecen y se reducen segun su contenido
`none`|nada 
`n`|grow en n y se divide igual todo

## Propiedad aling-self

*propiedad* **aling-self**| Descripcion
:--|--:
`aling-self:`| alinea un solo elemnto 

*valor* **aling-self**| Descripcion
:--|--:
`flex-start`| pone el elemento en al inicio de self 
`flex-end`| pone un elemento al final de self

## Propiedad order 

*propiedad* **flex**| Descripcion
:--|--:
`order: 1`| ponemos un item una posicion a la derecha 
`order: -1`| ponemos un item una posicion a la izquierda

> todos los elementos tienen como valor inicial 0 , para moverlo usamos -1 -2 1 2 para pasarlo de posicion hacia el elemento siguiente o anteriros