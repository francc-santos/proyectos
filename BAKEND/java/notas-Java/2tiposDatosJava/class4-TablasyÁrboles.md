# Hashtable. 

Las tablas hash o tablas de dispersion, su objetivo es tener una hash para cada elemento de la tabla y poder identificarlo de una manera rapida. 

```java
    class Item{
        private String name;
        private int value;

        public Item(String name, int value){
            this.name = name;
            this.value = value;
        }

        public String getName(){
            return this.name;
        }

        public void set(String n){
            this.name= n;
        }

        public int getValue(){
            return this.value;
        }

        public setValue(int v){
            this.value=v;
        }

        public String toString(){
            return "name: "+ name +"value:" + value;
        }
    }

    class Main{
        public static void main(String... args){
            Item item1 = new Item("jose",1);
            Item item2 = new Item("lui",2);
            Item item3 = new Item("frn",3);

            Hastable<String,Item> tabla = new Hashtable<String,Item>();

            tabla.put(item1.getName(),item1);
            tabla.put(item2.getName(),item2);
            tabla.put(item3.getName(),item3);

            String temporal;

            Enumeration<String> keys = tabla.keys();
            while(keys.hasMoreElements()){ 
                temporal = keys.nextElement();
                System.out.println(tabla.get(temporal));
            }
        }
    }
```

# Teoría de árboles

Los arboles binarios tienen hijos por la derecha o por la izquierda , solo uno, esto puede o no pasar en todos los nodos.

Se usan mucho para hacer busquedas, podemos usarlo con la serie de fibonaci.

# Práctica de árboles

```java
public class NodoA{
    int valor;
    Nodo nodoI,nodoD;

    public NodoA(int v){
        this.valor = v;
        hijoI = hijoD = null;
    }

public class ArbolBin{
    Nodo root;

    public ArbolBin(){
        root = null;
    }

    public void insert(int v){\
        /* creacion del nodo */
        NodoA nuevo = new NodoA(v);

        if(root=null){
            root = nuevo;
        }else{
            NodoA temporal = root;
            NodoA padre;
            while(true){
                padre = temporal;
                if padre(v<temporal.valor){
                    temporal = temporal.nodoI;
                    if(temporal == null){
                        padre.nodoI=nuevo;
                        return;
                    }
                }else{
                    temporal = temporal.nodoD;
                    if(temporal==null){
                        padre.nodoD=nuevo;
                    }
                }
            }

        }
    }

    public void ver(NodoA nodo){
        if(nodo!=null){
            ver(nodo.nodoI);
            System.out.println(nodo.valor);
            ver(nodo.nodoD);
        }
    }

    public Boolean vacio(){
        return root==null;
    }

public class Main{
    public static void main(String... args){
        ArbolBin.arbol = new ArbolBin();
        arbol.insert(4);
        arbol.insert(2);
        arbol.insert(5);
        arbol.insert(8);
        arbol.insert(10);

        arbol.ver(arbol.root);     
    }
}
}

```