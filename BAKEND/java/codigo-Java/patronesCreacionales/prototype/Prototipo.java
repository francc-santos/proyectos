abstract class Prototipo{

    String x;
    String y;
    String z;

    public String getX(){
        return x;
    }

    public String getY(){
        return y;
    }

    public String getZ(){
        return z;
    }

    public void setX(String x){
        this.x = x
    }

    public void setY(String y){
        this.y = y
    }

    public void setZ(String z){
        this.z = z
    }

    // Devuelve un objeto del tipo Prototipo
    public abstract Prototipo clone();

}