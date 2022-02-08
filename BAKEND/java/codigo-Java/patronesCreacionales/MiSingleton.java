public class MiSingleton{

    String x;
    private static MiSingleton mySingleton;

    private MiSingleton(){
        this.x = x;
    }

    public static MiSingleton getMiSingleotn(String x) {
        if(mySingleton == null){
            mySingleton = new MiSingleton(x);
        }else{
            System.out.println("Ya tenemos uno por loq ue no podemos crear mas");
        }
    }

    public String getMiSingleotn() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }
}