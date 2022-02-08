# 2.1 - Variables

```go
    _a := 2 /* decllaracion de una variable que no usarremos de una  */
    fmt.Println("Tipo; %T, Valor: %v", a,a)
```

*codigo* | **Descripcion**
:---|---:
`var dog string`| delaracion de la variable
`dog = 'dog'`| asignacion de una variable
`var dog string = 'dog'`| declaracion y asignacion en una sola linea
`var dog := 'dog'`| podemos dejar que el compilador infiera el tipo de dato que es con *:*
`var dog, cat := 'dog',3`| aasignacion de dos variables y se pueden mas de una 
`dog, cat := 'dog',2`| declaracion y asignacion de dos variables, se puede omiteir *var*
``|
``|

> Importante siempre que se declare una variabele en go se debe de usar aun que sea imprimirla en consola

# 2.2 - Constantes

*codigo* | **Descripcion**
:---|---:
`const pi = 4`| declaracion y asignacion de contantes 

> NO podemos usar *:* porque esto indica una variable.

# 2.3 - Comentarios
Son importantes para la documentacion de go usar los comentarios de una linea .

*codigo* | **Descripcion**
:---|---:
`//`| una linea
`/**/`| multilinea

> // *function nombre , sirve ...*, asi es como podemos indicar la documentacion , `go doc --all` creamos toda la documentacion a partir de los comentarios.
> Podemos ver la doc desde una repo e github en godoc./direc-repo

# 2.4 - Tipos de datos

Cuando se declara una variable y o se asigna un valor go le da un valor 0 de acuerdo al tipo de dato , en *string* es un **texto vacio**, en *nuemros* un **0**, y para los *bool* **false** 

*codigo* | **Descripcion**
:---|---:
`bool %T`| true o false
`string %T`| 'caracteres'
`uint 8 %T`| numeros de 0 TO 255, 
`uint 16 %T`| numeros de 0 TO 65535 
`uint 32 %T`| numeros de 0 TO 4294967295
`uint 64 %T`| numeros de 0 TO 18446744073709551615
`int 8 `| de -128 TO 127
`int 16 `| de -32768 TO 32767
`int 32 `| de -128 TO 2147483647
`int 64 `| de -128 TO 922337236854775807
`byte`| alias para unint8
`rune`| alias int32 , y unicode 'a' con el valor de a
`float`| con todas las variantes de los numeros 


> %T es como podemos ver el tipo de dato en consola , %v el valor del dato
> Los valores de string deben de se declarados solo entre *""*
> NO podemos hacer operaciones con diferentes tipos de datos pra eso necesitamos el CAST que se hace como en java unint16(2), no modifica el tipo de dato de la variable

# 2.5 - Operadores 

*Operadores* **Aritmeticos** | **Descripcion**
:---|---:
`()`| agrupacion
`*`| multiplicacion
`/`| division
`%`| modulo
`**`| potencia
`+`| suma
`-`| resta

> Una expresion Es la definicion de la aaccion a ejecutar en la declarcion o uso de esta

*Operadores* **Asignacion** | **Descripcion**
:---|---:
`=`| Asignacion de una variable 
`+=`| suma el valor de la derecha al que tiene la variable actual
`-=`| resta el valor de la derecha al que tiene la variable actual
`*=`| multiplica el valor de la derecha al que tiene la variable actual
`/=`| divide el valor de la derecha al que tiene la variable actual
`%=`| modula el valor de la derecha al que tiene la variable actual
`**=`| potencia el valor de la derecha al que tiene la variable actual
`++`|
`--`|

> los operadores de post-incremento y post-decremento (++,--) son una declaracion del lenguaje, es decir , indica al lenguaje que realice una accion.

*Operadores* **Comparacion** | **Descripcion**
:---|---:
`==`| es igual
`!=`| es diferente
`>`| es mayor
`<`| es menor
`>=`| es mayor o igual
`<=`| es menor o igual


*Operadores* **Logicos** | **Descripcion**
:---|---:
`&&`| y true cuando los *dos* true
`||`| o true cuando *uno* true
`!`|  neagacion true cuando false 
