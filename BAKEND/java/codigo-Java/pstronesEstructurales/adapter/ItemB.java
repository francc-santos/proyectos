public class ItemB extends Item{
    public ItemB(){
        super();
        System.out.println("ItemB");
    }

    @Override
    public void sell() {
        System.out.println("ItemB sell");
    }
    
    @Override
    public void access() {
        System.out.println("ItemB access");
    }
    
    @Override
    public void send() {
        System.out.println("ItemB send");
    }
}