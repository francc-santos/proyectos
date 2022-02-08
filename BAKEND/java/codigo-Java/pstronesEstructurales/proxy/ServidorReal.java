public class ServidorReal implements Servidor{

    private String host;

    public ServidorReal(String host){
        this.host = host;
        System.out.println("Iniciando...");
    }
    @Override 
    public void descargar(String url) {
        System.out.println("Descargando..."+host+url);
    }
}