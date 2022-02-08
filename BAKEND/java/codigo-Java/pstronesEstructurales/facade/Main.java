public class Main{
    public static void main(String[] args) {
        new Client();
    }
    public Client(){
        Facade f = new Facade();
        f.Imprime();
    }
}