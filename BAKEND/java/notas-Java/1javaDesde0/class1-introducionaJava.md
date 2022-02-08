# Que es java?
Lenguaje de programacion multiproposito
juegos, programas de escritorio con ventanas nativas, de servidor , microcontroladores, etc.

Las versiones mas usadas de java son:
- java se (Standart edition):
    aplicaciones de escritorio y servidor que no requieran de componentes empresariales 
- java me (microedition) :
    Poder programar microcontroladores
- java ee (enterprice edition) : 
    Podemos realizar procesos mas empresariales con conexiones a redes o web y procesoa empresariales porderosos
- java embeded : 
    microcontroladores que tienen una version de java que solo se debe de programar como si fuera standard pero cuidando mas la memoria disponible 

# Open Jdk
Las ediciones de java tienen un cumulo de librerias propietarias con lo que se le pueden dar las licencias.

OpenJDk no contiene estas librerias propietarias y podemos usar para cualquier desarrollo sin la preocupacion de alguna demanda.

# Funcionamiento de Java 

1. Pasa por un procedimiento de compilacion: revisa que el codigo este escrito correctamente , errores de typeof o syntaxis, generando otro codigo que se va a ejecutar o interpretar en una maquina.
2. Neceitamos de una maquina virtual , que podemos intalar en los diferentes sistemas operativos y con etso puede servir para windows, mac, android. Esto no es comopletamente compilado. LA maquina virtual Java Runtime Enviroment
3. Los arcivos que salen del compilador extosamente tienen la extension `.class`


# Instalacion de open JDK windows

[Pasos de instalacion de Open jdk windows](https://ed.team/blog/instalar-openjdk-en-windows)

# Instalacion de open JDK linux 

1. Descargar el binario `tar.gz`
2. Crear un carpeta en `/opt/java`
3. Descomprimir el binario `/opt/java`
```shell
    sudo tar xvf openjdk-11.. -C /opt/java
```
4. Creamos las variables de entorno JAVA_HOME
```shell
    export JAVA_HOME=/ruta/destino/versionjava
    
    export JAVA_HOME=/opt/java/jdk-11...
```
5. Confimamos la creacion de la variable de entorno con
```shell
    echo $JAVA_HOME 
    // la salida debe de se lo que escribimos arriba 
```
6. Agregamos la ruta de los binarios 
```shell
    export PATH=$PATH:$JAVA_HOME/bin\
```
7. Ya actualizadas las dos veriables de entorno podemos hacer 
```shell
    java --version
```

[Instalacion de Open jdk linux](https://ed.team/comunidad/instalacion-jdk-en-linux-ubuntu-18-04-3-lts)

> Falta ver que compo persistir las variables de entorno de java 

# Estructura de los archivos Java
Los archvos deben de comenzar con mayuscula y deben de tener el mismo nombre de la clase que esta escrito en el para que la compilacion vaya de putamadre 

Entonce lo minimo que debe de tener un archivo Java para poder compilar es 
```java
    class Nombre{
    }
```
## Compilacion de una archivo java 

```shell
    javac NombreDelArchivo.java 

    // Compilacion de todos los archivos java 

    javac *.java
```

# Tipos de datos primitivos

**Datos primitivos** | Descripcion
:---|---:
`byte`| 8 bits con signo -128 to 127
`short`| -32,768 to 32,767
`int`|
`long`|
`float`|
`double`|
`char`|
`boolean`|


> JAva es estaicamente tipado, quiere decir que en una variable de tipo entero es un entero desde que nace hasta que muere no puede cambiar de tipo de dato 

Son llmados datos primitivos porque no sson de tipo objeto

# Suma de dos valores
> Para poder ejecutar algo en Java necesitamos del metodo main 

```java
    class Suma{
        public static void main(String ...args){
            int numero1;
            int numero2;
            int resultado;

            numero1 = 4;
            numero2 = 2;

            resultado = numero1 + numero2;

            System.out.println(resultado);
        }
    }
```

Para la ejecucion de un archivo java es 

```shell
    java NombreArchivo
```

# Variables y constantes 
** ** | Descripcion
:---|---:
`int variable`| Declaracion de una variable de valores enteros  
`final int constante`| declaracion de una constante de valores enteros