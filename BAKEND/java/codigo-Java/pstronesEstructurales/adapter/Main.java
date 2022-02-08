public class Main{
    private static Item item;

    public static void main(String[] args) {

        ItemA itemA = new ItemA();
        ItemB itemB = new ItemB();
        item = new ItemCAdapter();

        /* ES posible gracias a la definicion y que todos usa a item como plantilla */
        // item = new ItemCAdapter();
        // item = new ItemB();
        // item = new ItemC();

        /* Vemos quue se pudeen comportr diferente con el mismo metodo */
        itemA.access();
        itemB.access();
        item.access();

    }
}