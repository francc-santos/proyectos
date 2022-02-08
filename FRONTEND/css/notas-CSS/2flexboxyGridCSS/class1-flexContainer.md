# 
Layout indica en que lugar se pone cada elmento en pantalla 

## Flex container

Es un sistema de layout que permite alinear los elemntos en dos posiciones vertical y horizontal que permite tener elmentos que se contraigan y expandan 

## Main axis y cross axis 

**Necesitamos siempre de la relacion de padre a hijo**

Main axis
: Eje pricipal que de manera predeterminada va de iz a derecha y los items va de izq a derecha.

## Flujo de flexbox

*propiedad* **flex Container**| Descripcion
:--|--:
`display: flex`| indicamos al contenedor padre que sus items son flex
`flex-direction:`| determina la direccion del main-axis
`flex-wrap:`|indica si los hijos saltan 
`flex-flow:`| juta a direction y wrap en este orden 

*valor* **Display**| Descripcion
:--|--:
`flex`| indicamos que el container es flex
`inline-flex`| solo reserva el espacio que ocupan los flex items

*valor* **flex-direction**| Descripcion
:--|--:
`row`| indicamos que le main-axis es horizontal de izq a derecha
`row-reverse`| indicamos que le main-axis es horizontal de  derecha a izq
`colum`| indicamos que el main-axis es vertical de arriba a abajo
`colum-reverse`| indicamos que el main-axis es vertical de abajo a arriba

*valor* **flex-wrap**| Descripcion
:--|--:
`wrap`| indicamos que los items saltan en caso de que no haya espacio para su medidas dadas
`wrapreverse`| indicamos que los items saltan en caso de que no haya espacio para su medidas dadas de manera inversa
`nowrap`| indicamos que no salten y puede deformar lo items o generar scroll


## Alineacion de Flexbox

*propiedad* **Flex Container**| Descripcion
:--|--:
`justify-content:`| Alinea todos los *items* desde el container en el **main-axis**
`aling-items:`| Alinea todos los *items* en el **cross-axis**

*valor* **justify-content**| Descripcion
:--|--:
`flex-start`| Lo pone al inicio del main axis
`flex-end`| Lo pone al final del main axis
`center`| En el centro de main
`space-between`| enter los items habra un espacio
`space-around`| al rededor genera un espacio 

*valor* **aling-items**| Descripcion
:--|--:
`flex-start`| al principio del cross-axis
`flex-end`| al final del cross-axis
`baseline`| todos los items respecto a la parte inferior del contenido
`strech`| ocupa todo el espacio de cross-axis


*propiedad* **Flex Lineas**| Descripcion
:--|--:
`aling-content`| movemos todas las lineas , como un bloque respecto al container 
``|

*valor* **Flex Lineas**| Descripcion
:--|--:
`flex-start`| Lo pone al inicio del container
`flex-end`| Lo pone al final del conatiner
`center`| En el centro de container
`space-between`| enter los lineas habra un espacio
`space-around`| al rededor genera un espacio entre las lineas

