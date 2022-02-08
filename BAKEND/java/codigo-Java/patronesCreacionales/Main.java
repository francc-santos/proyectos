public class Main{
    /* Crear un unico elemento */
    public static void main(String[] args) {
        Miobjet a = new Miobjet("a");
        Miobjet b = new Miobjet("b");

        System.out.println(a.getX());
        System.out.println(b.getX());


        /* Trabajando con singleton */
        MiSingleton a = new getMiSingleotn("a");
        MiSingleton b = new getMiSingleotn("b");

        /* Las dos veces imprime a, asegura que solo usemos un objeto en la jvm java virtual machine. , pude usarse para la conexion a la base de datos, o hacer configuraciones, donde se obtengo el unico resultado.*/
        System.out.println(a.getX());
        System.out.println(b.getX());
        /* EN leer configuraciones y cargar un pull de  conexiones a la base de datos, conectarnos a la vace de datos de manera eficciente.*/

    }
}

