public class ComponenteConcreto implements Componente{

    private int valor = 10;

    public ComponenteConcreto(int valor){
        this.valor = valor;
    }

    @Override
    public void metodoA() {
        System.out.prinln("Metodo A componenete concreto")
    }

    @Override
    public void metodoB() {
        System.out.prinln("Metodo B componenete concreto")
    }

    @Override
    public void metodoC() {
        System.out.prinln("Metodo C componenete concreto")
    }

    @Override
    public int getValor() {
        return this.valor;
    }

    @Override

}