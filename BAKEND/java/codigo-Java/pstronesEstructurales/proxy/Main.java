public class Main{
    public static void main(String[] args) {

        Servidor servidor  = new ProxyServer("misitio.com");
        servidor.descargar("loquesea");

    }
}