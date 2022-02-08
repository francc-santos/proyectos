public class ItemC{

    /* Cuando necesitas que un objeto se comporte como todos los demas es donde entra el adapter */
    public ItemC(){
        super();
        System.out.println("ItemC");
    }


    public void check(){
        System.out.println("ItemC Check");
    }

    public void delete(){
        System.out.println("ItemC delete");
    }
}