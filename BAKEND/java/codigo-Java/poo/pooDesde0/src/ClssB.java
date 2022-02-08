public class ClaseB extends ClassB implements Miinterface{
    /* En esta clss ya no podemos heredar de otra clss y podemos impementar las interfaces que queramos. */

    /* Es la fomrma de traer nuevos metodos de inetrfaces y siempre se sobreescribe porque los metodos en las interfaces siempre son abtractos */
    @Override
    public int metodo() {
        System.out.println("aqui la sobre scritura del metodo de Miinterface")
    }

}