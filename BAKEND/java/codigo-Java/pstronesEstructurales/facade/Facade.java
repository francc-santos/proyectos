public class Facade{

    A a;
    B b;
    C c;

    public Facade(){}

    public void Imprime(){
        a = new A();
        b = new B();
        c = new C();

        a.capturarInfo();
        b.ConocerColor();
        c.CargoLaHoja();
        c.Imprimir();
    }
}