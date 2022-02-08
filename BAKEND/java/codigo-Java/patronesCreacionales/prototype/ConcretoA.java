public class ConcretoA extends Prototipo{

    // un consrtuctor 
    public ConcretoA(String x, String y, String z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    @Override
    public Prototipo clone(){
        return new ItenA(this.x, this.y this.z);
    }

}