public class ProxyServer implements Servidor{

    ServidorReal servidorReal;
    private String host;

    public ProxyServer(String host() {
        this.host = host;
        servidorReal = null;
        System.out.println("Inicianod el proxy...");
    }

    @Override
    public void descargar(String url) {
        if(servidorReal == null){
            servidorReal = new ServidorReal(host);
        }
        servidorReal.descargar(url);
    }

}