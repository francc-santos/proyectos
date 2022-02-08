# Flujo y espacio reservado 

Flujo:  
Es el **orden** en el que se **imprimen** los documentos en la pagina web **respecto** al **html** este no puede cambiarse desde css , talvez desde js se puede , pero este flujo no puede ser modificado desde css
aun tenga las class de flex o grid 

Espacio reservado:  
Es el espacio total que ocupa un elemento en el viewport, depende del tipo de elemento que sea **inline, block, inline-block**, se vea o no se vea en el viewport , en caso de tener display none se pierde el espcio reservado.

# Position

Es la forma de poder ubicar un elemento en cualquier parte del layout 

# Propiedades offset (top, left, right,bottom)

```css
    container{
        position : static | relative | absolute | fixed | sticky
    }
```

*propiedad* **Position**| Descripcion
:--|--:
`static` | NO cambia nada 
`relative` | La referecia de posicion es su colocacion en el html
`absolute` | La referencia de posicion es el ancestro mas cercano posicionado , desde aqui se movera 
`fixed` | Queda fijo en la posicion donde le indiques de la pagina , su referencia es el viewport
`sticky` | 

Con la propiedad offset, se mueve a partir de la referencia o del lugar contrario

*propiedades* **offset**| Descripcion
:--|--:
`top: 1rem` | indicamos que se movera 1rem del *top* 
`left: 1rem` | indicamos que se movera 1rem del *left*
`right: 1rem` | indicamos que se movera 1rem del *right*
`bottom: 1rem` | indicamos que se movera 1rem del *bottom*

> El comportamiento de las proipedades offset dependera del valor dado a la propiedad *position*,  podemos usar valores negativos , porcentajes , rem ,em , etc , simpre que tengan una altura fija o ancho


# Position relative 

- **No perdemos el espacio reservado** del elemento 
- La referencia de es su *posicion inicial* en la web osea desde el *html*

# Position absolute 

- **Pierde su espacio reservado** , es como decirle el contenido que *no tiene donde mostrarse*
- Su *referencia es el contenedor padre* que este posicionado, en caso de que no tenga un ancestro posicionado, el que se toma es el body
- Su tamaño total dependera del contenido que tenga 


# Position fixed

- *Pierde su espacio* reservado
- El elmento queda fijo en el espacio que tenia definido por el html.
- Su *referencia es el viewport* 

> Para tener un elmento fixed que ocupe una parte importante de l a pantalla podemos usar la pseudoclass :target para derle un padding cada vez que se seleccione la seccion como *hack*

# Position sticky

- No pierde su espacio reservado 
- La referencia es el top de la pagina 

> Se usa par sidebards que se queden pegadas

# Stacking context

Es como se colocan los elementos en el eje imaginario *z*, cuando un eemento se pone encima del otro.

## 4 niveles de apilamiento 

1. nivel de apilamiento negativo 
2. Elementos con position static
3. Elementos con nivel 0 o automatico de apilamiento 
4. nivel de apilamiento mayor a 0

> Cuando todos tienen el mismo nivel de apilamiento lo que predomina es el flujo de html, domina el ultimo elmento encontrado 

# Z-index

Esta propiedad nos pertmite cambiar el nivel  de apilamiento.

POdemos usarlo en :
- Elementos con la propiedad de position
- Hijos de flex y grid con z-index distionto a auto
- Con opacity , filtros, mixblendmode, perspective con valor diferente a inicial.

```css
    .element{
        z-index: 10;
    }
```

> Los hijos del definen su nivel de pilamiento de acurdo al padre , si este tiee de 1 no podran tener unno mayor , solo entre hermanos , si se quie se pude omitir el nivel del padre y eso es todo.

> Una buena practica es no poner los niveles de manera corrida pra poder insertar emeentos que eventualmente surgan entre estos 

# Pointer events

Es el problema de tener elmentos apilados, es que el elemento de arriba se queda con los eventos que podemos hacer con el mouse.

Propiedades ****| Descripcion
:---|---:
`pointer-events: none`| Le decimos al elmento que no puede ser seleccionado con el mouse


