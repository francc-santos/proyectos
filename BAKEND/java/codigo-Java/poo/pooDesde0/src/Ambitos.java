/* La clase es de ambito global, en este caso x es disponible para todo el mundo. */
public class Ambitos{
    int x;

    public void metodo() {
        /* Este metodo puede usar la variable x porque x es de ambito global */
        x=10;
        /* Mientras que la variable y es de ambito local y su ambito es el metodo, es exclusiva del metodo */
        int y = 0;
    }

    

}