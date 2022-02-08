public class ItemCAdapter extends Item{

    private ItemC itemC;

    public ItemCAdapter(){
        super();
        System.out.println("ItemCAdapter");
        this.itemC = new ItemC();
    }

    @Override
    public void sell() {
        System.out.println("ItemCAdapter adaptado");
        this.itemC.check();
    }

    @Override
    public void access() {
        this.itemC.delete();
    }

    @Override
    public void send() {
        System.out.println("ItemCAdapter adaptadao");
        this.itemC.delete();
        this.itemC.check();
    }

}