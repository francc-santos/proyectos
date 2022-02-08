# Introducción y creación de paquetes en java

Paquetes:
    Es la forma en que organizamos nuestros codigo, carpetas en las que se va organizando el codigo
    Es una ventaja para tener nuestro codigo organizado , ademas que en proyectos mas grandes podemos tener errores si no lo hacemos asi.

```java
    package dominio.operaciones;

    public class Suma{

    }

    // en otra class que pertenece al mismo paquete
    package dominio.operaciones;
    public class Resta{
        
    }
```

```java
    /* podemos importar todas las clases de un paquete asi */
    import paquete.*;

    /* Podemos importar solo las clase que necesitamso asi desde el paquete indicamos la clase que queramos */
    import paquete.clase;
```

> Estas dos clases pertenecesn al dominio de paquete dominio.operaciones

# Modificadores de acceso en java

Es la forma en que controlamos el acceso a los atributos o a los metodos de una clase.

En java tenemos 4 modificadores:

- public 
    Puede ser accedido desde cualquier lugar 
- private
    restringe el acceso a la propia clase 
- default
    no se coloca el modificador y puede ser accedido desde su class, las clases que estan en el mismo paquete y las clases que heredan desde en el mismo paquete
- protected
    Puede ser accedido desde su clase, las clases que estan en el mismo paquete y las clases que heredan asi esten *en otras* clases

# Modificador public

> Desde cualquier lugar puede ser accedido. En ootros paquetes se debe de importar

# Modificadores default y private

> Private : solo desde la misma clase en el mismo paquete
> _ : clases del mismo paquete y desde una clase que hereda y que esta en le mismo paquete.

# Modificador protected

> protected: desde la misma, el mismo paquete , heredado en el mismo paquete , heredado en otro paquete 

# Métodos estáticos

Haces que los metodos o atributos miembros , se conviertan en atributos  o metodos de clase, es decir, que no se necesita instanciar un objeto para poder acceder a este atributo o metodo

```java
    class App{
        public static void main(){
            int r = Matematicas.sumar(3,3);
            System.out.println(r)
        }
    }

    /* mientrastanto en otra class */
    class Matematicas {
        public static int sumar(a,b){
            return a+b;
        }
    }
```

# Ejemplo con static

> En caso de ser un atributo podemos definir por ejemplo el numero pi

EL metodo main usa static, pq la maquina cuando se ejecuta no pva a instanciar un objeto de la class solo se va a llamar de manera directa de metodo main desde la clase `clase.main()`

# Herencia en java

NO se puede heredar desde varias clases en java solo desde una.

Las interfaces es de cierta forma un sustituto de la multiherencia, tienen atributos que no cambian y soo puden tener una funcion en la version 9 de java.

```java
    public class Profesor extends Persona{
        /* En este punto podemos usar los metodos y atributos de la clase que hereda dependiendo de los modificadores  */

        public void enseniar(){
            System.out.println("ensenio")
        }
    }
```

# Sobrecarga de métodos

Oveloading y overwrite

SObrecarga:
    Crear varios metodos con el mismo nombre siempre y cuando la firma sea diferente.

```java
    public class Profesor extends Persona{
        /* En este punto podemos usar los metodos y atributos de la clase que hereda dependiendo de los modificadores  */

        public void enseniar(){
            System.out.println("ensenio")
        }
        /* sobrecarga */
        public void enseniar(String m){
            System.out.println("ensenio" + m)
        }
    }
```

# Sobreescritura de métodos

Sobreescritura:
    Cambiamos el comportamiento del metodo, se hace sobre la herencia o el polimorfismo

```java
    public class Profesor extends Persona{
        /* En este punto podemos usar los metodos y atributos de la clase que hereda dependiendo de los modificadores  */

        public void enseniar(){
            System.out.println("ensenio")
        }
        /* sobrescritura */
        @Override
        public void comer(){
            System.out.println("como de forma vegetariana")
        }
    }
```

# Palabra reservada super

Super():
    Indicamos que el constructor de la clase que hereda, usara el constructor que heredo de la otra clase y podemos pasarle parametros si es que lo necesita el constructor

```java
    public class Profesor extends Persona{
        /* En este punto podemos usar los metodos y atributos de la clase que hereda dependiendo de los modificadores  */

        public Persona(){
            super();
        }

        public void enseniar(){
            System.out.println("ensenio")
        }
        /* sobrescritura */
        @Override
        public void comer(){
            System.out.println("como de forma vegetariana")
        }
    }
```

# Clases abstractas

En las clases abstractas podemos definir metodos abtaractos que se definiran en las clases donde se heredara sobreescribiendo el metodo abstracto

```java
public abstract class Persona{
    public void correr(){
        ...
    }

    public abstract void reir();       
}

/* En otra da class que hereda */

class Profesor{
    @Override
    public void reir(){
        ....forma de reir
    }
}

```

# Interfaces en java

Poimorfismo:
    varias formas que tiene comportamiento parecido sintacticamente hablando todos los atributos son constantes 

```java

/* Creacion de una interface */

public interface Figura{
    double pi = Math.PI;

    double getArea();
}

/* en otra class que implementa la interface  */
public class Cuadrado implements Figura{
    double base;
    double altura;

    Cuadrado(b,a){
        this.base = b
        this.altura = a
    }
    @Override
    public double getArea(b,a){
        return this.base * this.altura;
    }
}

/* En el main */
main(){
    Figura formas[] = new Figura[3];
    formas[0] = new Rectangulo(20,20)
    formas[1] = new Circulo(20,20)
    formas[2] = new Triangulo(20,20)
}

for (Figura v : formas){
    println("Area" + v.getArea())
}

```

> Podemos llamar a diferentes objetos que son de diferentes clases pero le podemos dar la misma orden sintactica siempre y cuando tengan la misma interface

> de una interface llamada figura de la cual podemos tener un cuadrado un circulo o un triangulo y en la interface hay un metodo llamado medirArea() y esta podemos sacar la area con un mismo nombre de metodo.