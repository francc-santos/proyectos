public abstract class Decorador implements Componente{

    /* dEBE IMPLEMENTAR EL COMPONENETE */
    /* EL decorador no agreaga los comportamientos */

    /* Simpre necesitamos la referencia al componente , definir un componenete */
    private Componente componenete;

    public Decorador(Componente componenete){
        this.componenete = componenete;
    }

    public Componente getComponente(){
        return componenete;
    }

    

}