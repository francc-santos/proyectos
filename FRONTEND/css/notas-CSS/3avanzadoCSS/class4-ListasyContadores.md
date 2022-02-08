# Pseudoelementos en listas

La propiedad que hace que se comporte un elemento como un de lista es `display: list-item;`

#  list-style-type

*propiedad* **listas** | Descripcion
:---|---:
`list-style-type`| podemos mostrar diferentes viñetas 
`List style image `| usar una imagen como viñeta , pero no se puede redimensionar 
``|
``|

*valores* **listas** | Descripcion
:---|---:
`demcimal`| viñetas en decimal
`none`| sin viñetas
`decimal-leading-zero`| decimal empezando en 0
`lower-roman`| viñetas romanas
`upper-roman`| romanas en mayusculas 
`symbols(order, '')`| cambiamos los symbolos y tipos de orden podeos usar emojis , ciclic

#  List style position 

Es como le indicamo que la viñeta fome parte o no del box `list-style-position:`

Puede tomar los valores de 

*valores* **lista-Position** | Descripcion
:---|---:
`inside`| no es parte del mismo elemento
`outset`| es parte del elemento 

#  Marker 

Podemmos cambiar el contenido de las viñetas

```css
    li::market{
        content: 'emoji';
        color: red;
    }
```

#  Contadores 

Cambiamos la forma en que se cuentan las viñetas.

*propiedad* **List** | Descripcion
:---|---:
`counter-reset: nombre`| podemos poner cualquier valor como nombre , sera accesible desde todos los elementos hijo.
`counter-increment: nombre`| decimo cuando incrementara 
``|


#  Contadores anidados 

cuando es mas de un nive de la lista debemos usar la funcion counters(list-conuter, 'separador')

```css
    ol{
        list-style:none;
        counter-reset: list-conuter;
    }
    li{
        counter-increment: list-counter;
    }

    li::before{
        content: counters(list-counter, '.') ' ';
    }
```
