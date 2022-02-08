/*  La idea mas importortnate es que se encapsulan algoritmos */
public abstract class ClaseAbtracta{

    public int getNum(int num){
        this.mostrar()
        int n = this.sumar(num);
        n = this.multiplicar(n);
        return n;
    }

    public void mostrar(){
        Syetem.out.println("inicinado el algoritmo");
    }

    public abstract int sumar();
    public abstract int multiplicar();


}