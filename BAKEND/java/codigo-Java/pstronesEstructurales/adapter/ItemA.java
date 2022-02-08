public class ItemA extends Item{
    public ItemA(){
        super();
        System.out.println("ItemA");
    }

    @Override
    public void sell() {
        System.out.println("ItemA sell");
    }
    
    @Override
    public void access() {
        System.out.println("ItemA access");
    }
    
    @Override
    public void send() {
        System.out.println("ItemA send");
    }
}