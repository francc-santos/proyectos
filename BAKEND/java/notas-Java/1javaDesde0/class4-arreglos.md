# Que son los arreglos ?

Grupo de elementos que tiene dos caracteristaicas en java 

- Tienen tamanio fijo 
- Solo puede contener elementos de un **mismo tipo**
- Pude almacener tipos de datos primitivos o *referencias* a objetos  

> En el caso de los objetos si tenemos un arreglo de *personas* solo podemos almacenar *personas* , si es de *perros* **solo** *perros*

# Conceptos base de arreglos

Para poder llegar al grupo de elementos necesitamos conocer su *posicion* | *indice*  

Los indices en los arreglos comiemzan con 0 

# Declaracion de arreglos

```java
    // tipo_de_dato nombre[2];
    
    int numeros[];
    numeros = new int[5];

    o

    int numeros[] = new int[5];

    o

    int numeros[] = {1,2,3,4,5}
```

# Asignacion de valores a elementos de una arreglo

Usando la sintaxis de los corchetes podemos asignar una valor a cada posicion del arreglo 

```java
    int numeros[] = new int[5];

    numeros[0] = 34;
```

> Una **excepcion** es algo que **no** debio haber ocurrido dentro de la logica del codigo, en java exesten varias precontruidas como el indice fuera del arreglo donde se entrega el valor 

# Excepción de índice fuera de un arreglo

```java
    class App{
        public static void main(String ...args){
            int a[]= new int[5];

            a[0] = 432;
            a[1] = 434;
            a[2] = 435;
            a[3] = 436;
            a[4] = 438;

            for(int v : a){
                System.out.println(v);
            }
            System.out.println(a[5]);
        }
    }
```

> La ultima linea de codigo genera una excepcion de los limites del arreglo, `.arrayIndexOutBoundsException`

**Funciones chilas array** | Descripcion
:---|---:
`array.length`| devuelve el tamanio del arreglo y es un metodo de la class arreglo

> Los vaores que se tinen en un arreglo , si es que no esta poblado toma los valores por defecto , en caso de ser uno de numeros tendra en 0s, en caso de ser boolean seran false, en caso de ser de strings seran de valor '', etc... solo para los valores primitivos 

# Ordenamiento de elementos mediante método burbuja (teoría)

1. Recorer el arreglo tantas veces como elementos contenga menos 1
2. En cada recorrido comparo el elemento actual con el siguiente para ver si estan ordenamos 

# Ordenamiento de elementos mediante método burbuja (práctica)

```java
    for(int recorrido = 0; recorrido < a.length-1; recorrido++){
        for (int elemento =0; elemento<a.length-1;elemento++){
            if(a[elemento]>a[elemento+1]){
                int t = a[elemento];
                a[elemento] = a[elemento+1];
                a[elemento+1] = t;
            }
        }
    }
```

# Ordenamiento de elementos mediante método de busqueda lineal

Busca elementos en el arreglo sin que este este ordenado.

```java
    int x = 50;

    for( int i=0; i<a.length; i++){
        if(a[i]==x){
            System.out.println("El numero buscado esta en "+i);
            break;
        }
    }
```