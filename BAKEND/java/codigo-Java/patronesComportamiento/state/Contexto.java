public class Contexto{

    private Estado estado;

    /* En esta ocacion el estado concreo esta sobre a */
    public Contexto(){
        this.estado = new EstadoConcretobb();
    }

    public void setEstado( Estado estado){
        this.estado = estado;
    }

    public void getEstado( Estado estado){
        return estado;
    }

    public void mostrar(){
        estado.mostar();
    }

}