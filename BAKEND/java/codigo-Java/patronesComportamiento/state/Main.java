public class Main{
    public static void main(String[] args) {

        Contexto contexto = new Contexto();
        contexto.mostrar();
        contexto.setEstado(new EstadoConcretoB());
        contexto.mostrar();

    }
} 