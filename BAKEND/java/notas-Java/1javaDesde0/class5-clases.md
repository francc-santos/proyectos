# Introducción a la programación orientada a objetos

Paradigma, que es un modelo de algo, la creaciond e java fue pensado con el paradigma.

# Pilares de la programación orientada a objetos

Abstracion:
    Es un proceso mental con el que podemos aislar un elemento de la realidad. 
    Pensamos las pricipales caracteristicas y comportamientos de un elemeto

Encapsulamiento:
    Protegemos las caracteristicas de un objeto contra modificaciones intencionales o NO intencionales.
    Aislamos la complejidad del proceso y la presona que se comunicara con el objeto no deba de entender todo lo que tiene que hacer 

> Ejemplo: cuando nosotros aceleramos un carro no sabemos todos los proceso por los que tinen que pasar para al final movernos 

Herencia:
    Que las clases relacionadas mentengan caracteristicas que comparten con sus ancestros 
    Lo importante de esto es la reutilizacion del codigo.

Polimorfismo:
    Creacion de diferentes formas de una base.
    Podemos comunicarnos con los objetos usando la misma sintaxis para enviarle mensajes al objeto  

>Ejemplo: podemos definir deferentes fomas del metodo comer y cuando se diga que todos coman los diferentes obejetos lo realizaran de diferente manera

# Conceptos base de la programación orientada a objeto

Clase:
    En java todos los archivos son una clase, pero una class es una abreviacion de clasification, es la agrupacion de objetos con las mismas caracteristicas 

> Ejemplo: Las clases son los planos de los objetos, cuando se contruye cada una de las casa estas casas son objetos de ese plano

Atributos:
    Propiedades que distinguen a la class

Metodos:
    Son los comportamientos que puede tener los objetos. verbos acciones

Objeto:
    Es la instancia de una clase, elemento creado con `new` se intancia en java 

Gettters y Setters:
    Encapsulamiento , son los metodos clasicos para poder obtener y modficar los atributos del objeto 

# Creando clases en java

```java
    class Persona{
        String nombre;
        int edad;
        float peso;
        float estatura;
    }

    class Principal(){
        public static void main(String ...args){
            Persona personaa = new Persona();

            personaa.nombre = "jauncho";
        }
    }
```

# Implementación de métodos set y get

```java
    class Persona{
        private String nombre;
        private int edad;
        private float peso;
        private float estatura;

        void setNombre(String n){
            // Podemos y debemos validar que sea un nombre valido 
            this.nombre = n;
        }

        String getNombre(){
            return this.nombre
        }
    }

    class Principal(){
        public static void main(String ...args){
            Persona personaa = new Persona();

            personaa.setNombre("jauncho");
        }
    }
```
> La primer linea de definicion de un metodo se llama firma , de devuelve 

> Cuando los atributos son privados NO pueden ser visibles desde otra clase, o mejor solo es visible desde la misma clase 

> this se refiere a la clase y al objeto con el que estamos trabajando 

# Validación de atributos

```java
    class Persona{
        private String nombre;
        private int edad;
        private float peso;
        private float estatura;

        void setEdad(int e){
            if (e < 0 || e> 150){
                System.out.println("La edad no es valido")
            }else{
                this.edad = e
            }
        }

        String getEdad(){
            return this.edad
        }
    }

    class Principal(){
        public static void main(String ...args){
            Persona personaa = new Persona();

            personaa.setEdad(-4);
            personaa.setEdad(4.0);
            personaa.setEdad(4);
        }
    }
```

# Método constructor y sobre carga de métodos

Es como construimos un objeto, en java hay un constructor, reservando en memoria todos los atributos que necesita el objeto.

```java
    class Persona{
        private String nombre;
        private int edad;
        private float peso;
        private float estatura;

        public Persona(){
            this.nombre = "";
            this.edad = 0;
            this.peso = 0f;
            this.estatura = 0f;
        }

        public Persona(String n){
            this.nombre = n;
        }

        void setEdad(int e){
            if (e < 0 || e> 150){
                System.out.println("La edad no es valido")
            }else{
                this.edad = e
            }
        }

        String getEdad(){
            return this.edad
        }
    }

    class Principal(){
        public static void main(String ...args){
            Persona personaa = new Persona();

            personaa.setEdad(-4);
            personaa.setEdad(4.0);
            personaa.setEdad(4);
        }
    }
```
Sobrecarga:
    La sobrecarga es escribir un metodo cone el mismo nombre pero diferente firma

Constructor:
    Sirve para inicializar los valores por defecto de un objeto instanciado

# Creando método de comportamiento

```java
        class Persona{
        private String nombre;
        private int edad;
        private float peso;
        private float estatura;

        public Persona(){
            this.nombre = "";
            this.edad = 0;
            this.peso = 0f;
            this.estatura = 0f;
        }

        public Persona(String n){
            this.nombre = n;
            this.saludar();
        }

        void setEdad(int e){
            if (e < 0 || e> 150){
                System.out.println("La edad no es valido")
            }else{
                this.edad = e
            }
        }

        String getEdad(){
            return this.edad
        }

        void saludar(){
            System.out.println("Hola mi nombre es "+ this.nombre);
        }
    }

    class Principal(){
        public static void main(String ...args){
            Persona personaa = new Persona("Fran Santos");
        }
    }
```

> Podemos ejecutar metodos desde el mimos contructor y hacer que lo ejecute cada que se construya un nuevo objeto.