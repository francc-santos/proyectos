import java.util.Scanner;

class Caja{
    Scanner teclado;
    Storage storage;
    Message message;

    public Caja(){
        init();
        showApp();
    }

    public void init(){
        teclado = new Scanner(System.in);
        storage = new Storage();
        message = new Message();
    }

    public void showApp(){
        int opcion = 0 
        while(opcion < 1 || opcion > 4){
            message.showMainmenu();
            opcion = teclado.nextInt();
            int opcionDetalle = -1;
            int q = 0;
            float p = 0;
            switch(opcion){
                case 1:
                    message.showProducts(storage);
                    opcionDetalle = teclado.nextInt();
                    if(opcionDetalle < 0 || opcionDetalle >storage.getProducts().length-1){
                        System.out.println("La opcion no es valida ");
                        break;
                    }
                    System.out.print("Cantidad: ");
                    q = teclado.nextInt();
                    System.out.print("Precio: ");
                    p = teclado.nextFloat();
                    storage.getbuyProduct(opcionDetalle,q,p);
                    break;
                case 2: 
                    message.showProducts(storage);
                    opcionDetalle = teclado.nextInt();
                    if (opcionDetalle<0 || opcionDetalle >storage.getProducts().length-1){
                        System.out.println("la opcion no es valida");
                        break;
                    }
                    System.out.print("Cantidad: ");
                    q = teclado.nextInt();
                    storage.saleProduct(opcionDetalle,q)
                    break;
                case 3:
                    message.showReport();
                    System.out.print("Presione 0 para continuar..");
                    q = teclado.nextInt();
                    break;
                case 4:
                    System.exit(1);
                    break;
                default:
                    System.out.println("La opcion digitada no es valida!");
            }
            opcion = 0;
        }
    }
}   