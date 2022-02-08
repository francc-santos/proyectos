public class Usuario{
    // porque hay mas operaciones que se puden hacer sobre un string.
    String id;
    String nombre;
    /* EN ESTE CASO EL CONTEXTO DE CORREO ES Usuario  */
    String correo;
    String password;

    // se gurda la url que esta en una direccion del servidor.
    String foto;


    /* CONTRUCTOR */
    // Todas las clases en java derivan de objeto y en caso de que no hay contructor definido se usa el de la clase objet
    // Metodo para incicializar los objeto de la clase 
    public Usuario(){
        id = "10939383nada";
    }

    // Modificacion de los atributos generales de la clss
    public void setId(String id ) {
        // osea el dis que llega al metodo es con el se va a setar el atributo id del objeto en cuention.
        this.id = id 
    }


    /* Sobregarca de metodos solo que los dos metodos  se llaman igual y no puden tener el mismo tipo de dato como parametro.*/
    public boolean pagar(String id, int pago ) {
        return true;
    }
    
    public boolean pagar(){
        
    }

    public boolean cambiarContrasenia(String nueva, String vieja) {
        if(this.password.equals(vieja))// Podemos quitar las llaves en caso de que solo sea una if 
            this.password = nueva;
        return true;
    }

    /* En ocaciones podemos omit sierto atributos de la clase para la creacion de una objeto , otros no cuando no se puden omitir 
    podemos usar el constructor para pedir de una estos datos que son necesarios  */
    public Usuario(String id, String nombre, String correo) {
        // no pude crear un usuario si no mete por lo menos los parametros del objeto.
    }


}