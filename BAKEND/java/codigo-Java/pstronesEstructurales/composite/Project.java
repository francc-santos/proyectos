import java.util.ArrayList;

public class Project implements {

    private String name;
    /* Implementacion de una lista de hijos de tipo itemproject pq todos deben de ser del mismo tipo*/
    private ArrayList<ItemProject> children;


    /* Construcytor para asignar el nombre del objt */
    public Project(String n){
        this.name = n;
        /* Se intancia un hijo con la misma caracteristica del padre en el contructor */
        this. children = new ArrayList<ItemProject>();
    }

    @Override
    public void AddItemProject(ItemProject ip) {
        children.Add(ip);
    }

    @Override 
    public void imprimir() {
        System.out.println("Proyecto :"+this.name);
        for(ItemProject item:children){
            System.out.println("\t")
            item.imprimir();
        }   
    }

}