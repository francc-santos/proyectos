public class Main{
    public static void main(String[] args) {
        CasoConcretoA a = new CasoConcretoA();
        CasoConcretoB b = new CasoConcretoB();

        int n = a.getNum(1);
        int n2 = b.getNum(3);

        Syetem.out.println(n);
        Syetem.out.println(n2);

    }
}