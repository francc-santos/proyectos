# Implementacion y uso de casting 

El **casting** es la forma en que indicamos a la maquina virtual de java que cambie el tipo de dato a otro tipo de dato siempre y cuando los limites se lo permitan y tambien el tipo de dato.

```java
    byte resultado = (byte) (a+b);
    System.out.println(resultado);
```

Desde la declaracion podemos darle el casting ejemplo, para java los la escritura de los flotantes es un double y de una podemos decirle que es un flotante con una f al finl de la declaracion :

```java
    float a = 10.6f; 
    float b = 10.3 **f**;
```

# Operadores de post incremento, pre incremento y de asignacion
**Operadores post y pre** | Descripcion
:---|---:
`++i`| Se *aumenta* y asigna en 1 el valor de la variable **i**, antes de hacer cualquier cosa incrementa
`--i`|Se *decrementa* y asigna en 1 el valor de la variable **i**, antes de hacer cualquier cosa decrementa
`i++`| Depues de hacer cualquier cosa *incrementa* el valor de i en 1
`i--`| Imprero opera con el valor actual y depsue *decremntate* en 1 y reasignate
`=`| Operador de asignacion de los valores de una variable
``|

> En el postincremento podemos denotar decir que hace la operacione asignadas con el valor anterior y despues se inremneta en 1 

> Podemos declarar primero las variables y despueas asignarlas con `=`

# Operadores aritmeticos 
**OP Aritemeticos** | Descripcion
:---|---:
`()`|
`**`| potencia *primero de izquierda a derecha*
`*`| multiplicando *primero de izquierda a derecha*
`/`| dividiendo *primero de izquierda a derecha*
`%`| modulo
`+`| suma 
`-`| resta
``|

> En la jerarquia de primero multiplicacion y division segun cual este a la izquierda y asi mismo con la suama y la resta 

# Operadores logicos

**OP Logicos** | Descripcion
:---|---:
`&&`| Si las todas son verdaderas = *verdadero*
`||`| si alguna es verdadera = *verdadero*

# Condicionales 

**Condicionales** | Descripcion
:---|---:
`if(condition)`| Cuando la condicion es verdadera se ejecuta el codigo que esta dentro de esta condicion
`else if(condition)`| en caso de que no s cumpla la primer condicion pero esta si se ejecuta esta poscoin de codigo
`else`| es el coso por defecto donde ninguna condicion fue cumplida.f

> Cuando un dato es asinado en ocaciones  dependiendo del tio de dato el compilador pude indicar si es verdadero o no

# Implementacion de operadores logicos en condicionales 


Una forma en que podemos dar mas poder a las condicionales.

```java
    class App{
        public static void main(String ...args){
            int edad = 17;

            if (edad >= 0 && edad < 18){
                System.out.println("Estas en la niniez");
            }else if (edad >= 18 && edad < 65){
                System.out.println("Estas en la adultez");
            }else{
                System.out.println("Edad errada");
            }
            System.out.println("Proceso terminado!");
        }
    }
```

# Switch

**Reservadas del switch** | Descripcion
:---|---:
`switch(valor)`| Donde se pasa la opcion que de evaluara
`case valor:`| elvalor que pude ser, y el codigo que se ejecutara en calo de ser el valor elegido  
`break;`| terminamos el uso del caso 
`default:`| Todos los casos donde no se hay evaluado se entregara esta porcion de codigo