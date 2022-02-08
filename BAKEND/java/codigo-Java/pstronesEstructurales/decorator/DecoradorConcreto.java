public class DecoradorConcreto extends Decorador{

    public DecoradorConcreto(Componente componenete){
        /* super = usamos el del padre = decorator */
        super(componenete);

    }

    @Override
    public void metodoA(){
        System.out.prinln("Metodo A decorador concreto");
        getComponente().metodoA();
    }

    @Override
    public void metodoB(){
        System.out.prinln("Metodo B decorador concreto");
        getComponente().metodoB();
    }

    @Override
    public void metodoC(){
        System.out.prinln("Metodo C decorador concreto");
        getComponente().metodoC();
    }

    @Override
    public int getValor(){
        System.out.prinln("Metodo getvalor decorador concreto");
        return this.getValor();
    }

}