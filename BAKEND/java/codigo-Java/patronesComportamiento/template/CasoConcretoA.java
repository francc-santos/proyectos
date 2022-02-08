public class CasoConcretoA extends ClaseAbtracta{

    public CasoConcretoA(){
        System.out.println("COnstructor")
    }

    @Overrride
    public int sumar(int n) {
        return n+1;
    }

    @Overrride
    public int multiplicar(int n) {
        return n*0;
    }


}