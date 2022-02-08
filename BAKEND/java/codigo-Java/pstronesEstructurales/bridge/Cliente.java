public class Cliente{
    public static void main(String ...args){
        Comportamiento comportamiento = new Repetida();

        comportamiento.addItem("Jose");
        comportamiento.addItem("Jhon");
        comportamiento.addItem("Beto");
        comportamiento.addItem("Alvaro");
        comportamiento.addItem("Alexis");
        comportamiento.addItem("Alexis");

        Lista base = new ListaBase();
        Lista enumerada = new ListaEnumerada();
        Lista vinietas = new ListaVinieta();

        base.setComportamiento(comportamiento);
        enumerada.setComportamiento(comportamiento);
        vinietas.setComportamiento(comportamiento);


        System.out.println("Base");
        for(int i=0; i<comportamiento.getSize(); i++){
            System.out.println(base.getItem(i));
        }

        System.out.println("Enumerada");
        for(int i=0; i<comportamiento.getSize(); i++){
            System.out.println(enumerada.getItem(i));
        }

        System.out.println("Vinñetas");
        for(int i=0; i<comportamiento.getSize(); i++){
            System.out.println(vinietas.getItem(i));
        }


/*         Comportamiento comportamiento = new Unica();

        comportamiento.addItem("Jose");
        comportamiento.addItem("Jhon");
        comportamiento.addItem("Beto");
        comportamiento.addItem("Alvaro");
        comportamiento.addItem("Alexis");
        comportamiento.addItem("Alexis");

        Lista base = new ListaBase();
        Lista enumerada = new ListaEnumerada();
        Lista vinietas = new ListaVinieta();

        base.setComportamiento(comportamiento);
        enumerada.setComportamiento(comportamiento);
        vinietas.setComportamiento(comportamiento);


        System.out.println("Base");
        for(int i=0; i<comportamiento.getSize(); i++){
            System.out.println(base.getItem(i));
        }

        System.out.println("Enumerada");
        for(int i=0; i<comportamiento.getSize(); i++){
            System.out.println(enumerada.getItem(i));
        }

        System.out.println("Vinñetas");
        for(int i=0; i<comportamiento.getSize(); i++){
            System.out.println(vinietas.getItem(i));
        } */

    }
}