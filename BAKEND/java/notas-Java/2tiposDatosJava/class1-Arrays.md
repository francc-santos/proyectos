# Arreglos

Un arreglo como tal no existe como Tipo primitivo en java, que es un conjunto de datos del mismo tipo.

Las direcciones de menoria son contiguas.


```java
    public class Main{
        public static void main(String... args){
            int numeros[] = new int[30];
        }
    }
```

# Arreglos como parámetros

En la funcion main vemos que estamos pasando una arreglo como parametro de una funcion, o en este caso del metodo main de la class principal.

```java
    public class Main{
        public static void main(String... args){

        }
    }
```

> NO es muy buena idea porque genera un buena carga de trabajo, pueden tomar cualquier tipo primitivo de dato.

> Los objetos se trabajan por referencia, loa array son objetos por loque sedeben de pasar por referencia

# Matrices

Podmeos decir que es un array de dos dimensiones 

```java
    class Main{
        public static void main(String... args){
            int numeros [][] = new int [4][4];
            int datos[][] = {
                {1,2,3,4},
                {5,6,7,8},
                {1,2,3,4},
                {5,6,7,8}
            };

            for (int i=0; i<4; i++){
                for(int j=0; j<4; j++){
                    System.out.println(datos[i][j]);
                }
            }
        }
    }
```

# Vectores

Es una matriz cultivable de objetos, que se van acceder de una manera hasta cierto punto parecida a la matriz.

Este pude crecer y reducir segun los elementos que vayamos guardando. De manera incial tiene el tamanio de 10.


```java
    class Main{
        public static void main(String... args){
            Vector vector = new Vector(valorInicial, incremento);
        }
    }
```

**Metodos de los vectores** | Descripcion
:---|---:
`vector.add()`| Insertamos un elemento en la ultima posicion del vector
`vector.insertElementAt("holaMundo",0)`| Insertamos el *holaMundo* en la primer posicion del arreglo
`vector.remove()`| Quitamos el ultimo elemento insertado
`vector.removeAllElements()`| Quitamos todos los elementos del vector
`vector.removeElementAt(i)`| Quitamso el elemento de la posicion i
``|
``|

> La competencia del vector es el array list , este list a diferencia del array incrementa sus posiciones en un 50%