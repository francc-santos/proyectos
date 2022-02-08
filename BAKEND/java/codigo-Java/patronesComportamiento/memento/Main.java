public class Mian{
    public static void main(String[] args) {
        Caretaker caretaker = new Caretaker();
        Originador originator = new Originador();

        originator.setState("A");
        originator.setState("B");
        originator.setState("C");

        caretaker,addMemento(originator.save());
        Memento memento = caretaker.getMemento(); 
        System.out.println(memento.getState(0));

        originator.setState("D");
        originator.setState("E");
        caretaker.addMemento(originator.save());

        Memento memento2 = caretaker.getMemento(1);
        System.out.println(memento2.getState());
    }
}