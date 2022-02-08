/* COmo si fuera el punto de partida */

public class Originador{

    private String state;

    public void setState(String state){
        this.state  = state;
    }

    public Memento save(){
        return new Memento(state);
    }

    public void restoree(Memento memento ){
        state = memento.getState();
    }



}