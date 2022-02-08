import java.util.ArrayList;

public class Todo implements ItemProject{

    private String name;
    /* Implementacion de una lista de hijos de tipo itemproject pq todos deben de ser del mismo tipo*/
    private String responsable;
    private ArrayList<ItemProject> children;

    public Todo(String n, String r){
        this.name = n
        this.responsable = r
        this.children = new private ArrayList<ItemProject>();
    }

    @Override
    public void AddItemProject(ItemProject ip) {
        children.add(ip);
    }

    @Override
    public void imprimir(){
        System.out.println("ToDo:"+this.name + ",responsable: " + this.responsable)
        for(ItemProject item:children){
            System.out.println("\t\t");
            item.imprimir();
        }
    }

}