public class Principal{
    // Siempre que queramos ejecutar codigo ne java necesitamos este metodo. Public static void main, las class no se puden ejecutar por si solas
    public static void main(String[] ...args) {
        System.out.println("Hola mundo");
    
        // CREAR UN OBJETO ES USAR LA CLASE.
        Usuario pepito = new Usuario(); // o pepito = new Usuario();
        System.out.println(pepito.password);

        /* Minetras no se sobreescriba el metodo del saludar en la clase hijo la accion de saludar es directamente la del padre,
        para ello nos tenemos que colocar en la clss hijo y escribir @Override */
        Hijo hijo =  new Hijo();
        hijo.saludar();

        /* definiendo un objeto = io necesito un objto pepito */
        Hijo pepito;
        /* creando un objeto, aqui ya esta inicializado */
        Hijo pepito = new Hijo();



        /* EJEMPLO DE COMPARACION DE INTERFACE Y CLASS  */
        ClaseA objt = new ClaseA();
        objt.sumar();




        /* EJEMPLO DEL POLIMORSISMO , es como una sobrecarga de metodos heredados de diferentes class, tiene varias caras dependiendo de quien lo llame */
        // Se dice que la clase a se comporte como clase b , esto se le conoce como casting 
        ClaseB objeto = (ClaseB()) new ClaseA();
        objeto.metodo();



        /* No se pude definir un objeto de class abtracta NO oude ser INSTANCIADA*/
        ClssAbtracta = new ClssAbtracta();
    }
}
