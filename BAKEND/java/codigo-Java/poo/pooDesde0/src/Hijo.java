public class Hijo extends Padre{

    /* Son las cuatro posibilidades de visibilidad */
    public int x;
    private int y;
    protected int a;
    int b;
    /* TABLA DE VERDA PARA SABAER DESDE QUE LUGAR PUDE SER ACCEDIDO O VISTO , se coloca la letra segun desde  donde pude ser vista */
    /* La misma clase       x   a   b   y
        EL mismo paquete    x   a   b   0
        Subclase clase      x   a   0   0
        Clase otropaquete   x   0   0   0 */
    /* El orden es que la el dado public puede ser vista desde cualquier parte, despues sigue protected , depues el dafault sin nada escrito y por ultimo private */

    @Override
    public void saludar() {
        System.out.println("Io sono el ragatzzo da puta")
    }
}