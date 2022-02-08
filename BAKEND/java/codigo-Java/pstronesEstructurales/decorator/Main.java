public class Mian{
    public static void main(String[] args) {

        Componente componenete = new ComponenteConcreto(1);
        componenete = new DecoradorConcreto(componenete);

        componenete.metodoA();
        componenete.metodoB();
        componenete.metodoC();

    }
}