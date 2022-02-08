# Ciclo do while 

Permite ejecutar una pedazo de codigo haste la la condicion deje de ser verdadera. 

Pero siempre se ejecuta una vez por lo menos la porcion de codigo

```java
    class App{
        public static void main (String ...args){
            int i=0;
            do{
                System.out.println(i);
                i++;
            }while(i<10);

            do{
                System.out.println(i);
                i++;
                if (i==7){
                    break;
                }
            }while(i<10);

            do{
                System.out.println(i);
                i++;
                if (i==7){
                    continue;
                }
                System.out.println("Estoy despues del continue: " +i);
            }while(i<10);
        }
    }
```
**Palabras reservadas utiles en ciclos** | Descripcion
:---|---:
`break`| Termina la ejecucion del ciclo cuando se lee, puede estar dentro de una condicion para detener el ciclo
`continue`| **Evitamos** el procesamiento de algunos elementos , en este caso dentro de un ciclo

# Ciclo while 

Mientras la ejecucion la condicion del ciclo sea veradera se ejecutara 

```java 
class App{
    public static void main (String ...args){
        int i = 0;
        while (i<10){
            System.out.println(i);
            i++;
        }
    }
}
```

# Ciclo for 

El otro bucle donde todo lo que se maneja es propio de su contexto.

```java
    // for(inicializacion; expresion boolean; incremento){ sentencia}
class App{
    public static void main(String ...args){
        for(i=0;i<10;i++){
            System.out.println(i);
        }
    }
}

```

> El incremento de for se realiza cuando termina la ejecucion de la vuelta del for 

> En do while , while y for podemos usar continue y break.

# Ciclo for each 

```java
    class App
        public static void main (String ...args){
            int []a = new int[]{1,2,3,4,5,6,7,8,9,10}

            for(**int** v : a){
                System.out.println(v);
            }
        }
    }
```

# For each en mapas 

```java
    class App {
        public static void main(String ...args){
            Map <Integer, String> nombres = new Hashmap<>();

            nombres.put(1,"Alvaro");
            nombres.put(2,"lvaro");
            nombres.put(3,"Alvro");
            nombres.put(4,"Avaro");
            nombres.put(5,"Aro");
            nombres.put(6,"Alvaro");
            nombres.put(7,"Arpo");
            nombres.put(8,"Aaro");

            nombre.forEach((id,name)->{
                System.out.println("ID: "+ id + "Nombre: "+ name);
            })
        }
    }
```
> EL uso de la funcion labmda que es como una arrow function de js se usa asi en java

**** | Descripcion
:---|---:
`Map <Integer, String> `| Definimos que nuestro mapa tiene clave entera y valores string
`nombres = new Hashmap<>()`| Creamos una varibale de map hash , es decir que no se puede repetir el id
