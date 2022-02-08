# Definiendo lista simple

Tecnicamente estamos hablando de listas, pero al final hablamos de nodos.  
Las listas a difeencia de los arrays son mas flexbles en cuanto a las operaciones   
Existen varios tipos y debendiendo de la sitacion se implementara una u otra solucion.

Siempre tenemos que tener una referencia al siguiente elemento 

En el primerinstante de la lista el primer nodo debe de apuntar asi mismo , cuando se cree otro elemento debe de apuntar a este otro.

El nodo es la base y la lista es el conjunto de los nodos.

```java
    class Main{
        public static void main(String... args){
            List<Integer> lista = new ArrayList<String>();  

            lista.add("huevo");
        }
    }
```

> La definicion de una lista ya viene definida como una clase en java con `List`

**Metodos de la clss List** | Descripcion
:---|---:
`lista.add(v)`| aniadimos un valor en la lista
`lista.size()`| obtenemos el tamanio de la lista
`lista.get(p)`| podemos obtener un valor por la posicion del elemento 
`lista.remove(v)`| Podemos eliminar el valor de una lista 

# Estructura de una lista enlazada



```java
    class Main{
        public static void main(String... args){
            
        }
    }

    public class Nodo{
        int dato;
        Nodo ref;

        public Nodo(int d){
            this.dato = d;
            this.ref = null;
        }

        public int getDato(){
            return this.dato;
        }

        public Nodo getRef(){
            return this.ref;
        }

        public void setRef(Nodo r){
            this.ref = r;
        }
    }


    import java.util.List;
    public class ListaEnlazada{
        protected Nodo primero;

        public ListaEnlazada(){
            primero = null;
        }

        public ListaEnlazada agregarInicio(int dato){
            Nodo nuevo;
            nuevo = new Nodo(dato);
            nuevo.ref = primero;
            pimero = nuevo;
            return this;
        }

        public void agregar(int d){
            Nodo ultimoNodo = new Nodo(d);
            
            ultimoNodo.ref = null;
            if(primero==null){
                primero = ultimoNodo;
                return;
            }
            Nodo temporal;
            for(temporal = primero; temporal.getRef()!=null; temporal=temporal.getRef()){
                temporal.setRef(ultimoNodo);
            }
        }

        public void eliminar(int v){
            boolean encontrado = false;
            Nodo actual,anterior;

            actual = primero;
            anterior = null;

            while (actual !=null&&!encontrado){
                encontrado = (actual.dato()== v);
                if(!encontrado){
                    anterior = actual;
                    actual = actual.getRef();
                }
            }

            if(actual!= null){
                if(actual==primero){
                    primero = actual.ref;
                }else{
                    anterior.setRef(actual.ref)
                }
            }
        }

        public Nodo buscar(int d){
            Nodo nodoBusqueda;
            for(nodoBusqueda = primero; nodoBusqueda!=null; nodoBusqueda = nodoBusqueda.getRef()){
                if (d== nodoBusqueda.dato){
                    return nodoBusqueda;
                }
                return null;
            }
        }

        public void verLista(){
            Nodo vernodo;
            vernodo = primero;
            while(nodo!=null){
                System.out.println(nodo.dato);
                vernodo = vernodo.ref;
            }
        }

    }
```

> Podemos general clases de listas enlazadas doblemente y tambien circulares.