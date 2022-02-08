public class CasoConcretoB extends ClaseAbtracta{

    public CasoConcretoB(){
        System.out.println("COnstructor B")
    }

    @Overrride
    public int sumar(int n) {
        return n+2;
    }

    @Overrride
    public int multiplicar(int n) {
        return n*1000;
    }


}