public class ListaEnumerada extends Lista{
    
    @Override
    public String getItem(int i){
        if(i<super.getSize()){
            return (i+1) + super.getItem(i);
        }
        return "";
    }

}