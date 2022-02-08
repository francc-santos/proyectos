# Estructura de una excepción

Las excepciones nos sirven para controlar errores poco frecunetes, controandolos


```java
    try{
        /* codigo que puede tener errores en tiempo de ejecucion */
    } catch (excetion e){
        /* Es donde se maneja la execepcion */
    } finally{
        /* colocamos lo que se quiera que se ejecute pase o no pase una exception */
        /* Cerramos recursos que se usaran o no  */
    }
```

```java
    import java.util.Scanner;

    public class ExcepcionDivisionPorCero{
        public static void main(String ...args){
            Scanner sc = new Scanner(System.in);

            System.out.println("Programa para dividir")

            int numerador, denominador, resultado;

            System.out.print("Digite el numerador: ");
            numerador = sc.nextInt();
            System.out.print("Digite el denominador: ");
            denominador = sc.nexInt();

            try{
                resultado = numerador / denominador;
                System.out.println("Resultado: " + resultado);
            }catch(ArithmeticException ae){
                System.out.println("NO se puede efectur una division entre 0");
            } finally{
                System.out.println("Programa terminado");
            }
        }
    }
```

> Lo que sucede dentro del bloque try catch es que , en el try intenta ejecutar las lineas y al tener inconvenientes en la lineas *detiene* el proceso del bloque try y pasa el error al catch.

# Elevar excepciones

Enacadenamiento de excepciones, lanzamiento de excepciones a metodos superiores 

```java
class EncadenarExcepciones{
    public static void main(String ...args){
        int a=6;
        int b=0;
        try{
            int c= dividir(a,b);
        }catch(AritmeticException ae){
            System.out.println("NO se puede dividir por cero");
        }
        System.out.println("Resultado" + c);
    }
    public static int dividir(int a, int b) throws ArithmetichException{
        return a/b;
    }
}
```

> throws para poder dejar el manejo de la excepcion al metodo que usa este 


```java
    class EncadenarExcepciones{
    public static void main(String ...args){
        int a=6;
        int b=0;
        try{
            int c= dividir(a,b);
            System.out.println("Resultado" + c);
        }catch(AritmeticException ae){
            System.out.println("NO se puede dividir por cero");
        }

        try{
            superior();
        }catch (Exception e){
            System.out.println(e.printStackTrace())
        }
    }

    public static int dividir(int a, int b) throws ArithmetichException{
        return a/b;
    }

    public static void superior() throws Exception{
        try{
            intermedio();
        }catch(Exception e){
            throw new Exception("Metodo Superior", e);
        }
    }

    public static void intermedio() throws Exception{
        try{
            inferior()
        }catch(Exception e){
            throw new Exception("Metodo intermedio", e);
        }
    }
    public static void inferior() throws Exception{
        throw new Exception("Metodo inferior");
    }
}
```

**Reservadas de try-catch** | Descripcion
:---|---:
`throws`| permite elevar una excepcion a un metodo superior 
`throw`| lanza la excepcion 

> Es como podemos detectar desde donde fue que se genero el error

# Excepciones verificadas y no verificadas

Las verificadas:
    Permiten controlar e uso de try catch en tiempo de compilacion.
    Es obligatorio el uso de try-catch para poder compilar 
    Heredan de Exception

NO verificadas:
    NO obligan el uso de try catch en tiempo de compilacion 
    Heredan de RuntimeException 

```java
    public class ExcepcionLeerArchivo{
        public static void main(String... args){
            try{
                FileReader file = new FileReader("C:\\test\\a.txt");
                BufferedReader fileinput = new BuferredReader(file);

                for(int counter =0 ; counter<3; counter++){
                    System.out.println(fileInput.readLine());
                    fileInput.close();
                }catch(FileNotFoundException fnfe){
                    System.out.println("Archivo no encontrado"); 
                }catch(IOException ioe){
                     System.out.println("No pudo leer el archivo");
                }
            }
        }
    }
```

# Crear tus propias excepciones

```java

    public class EntradaDiscoteca{
        public static void main(String...args){
            int edad = 21;
            try{
                validar(edad);
            }catch(ExceptionMayorDeEdad eme){
                System.out.printl(eme.getMessage());
            }
            System.out.printl("Proceso terminado");
        }
        public static void validar(int edad) throws ExceptionMayorDeEdad{
            if (edad < 18){
                throw new ExceptionMayorDeEdad();
            }else{
                System.out.println
                ("Bienvenido a la discoteca");
            }
        }
    }


    public class ExcepcionMayorDeEdad extends RuntimeException{
        public ExceptionMayorDeEdad(String str){
            super(str + "no eres mayor de edad");
        }

        public ExcepcionMayorDeEdad(){
            this("lo lamento, no puedes entrar porque ")
        }
    }
```

> Puede ser o no usada 
