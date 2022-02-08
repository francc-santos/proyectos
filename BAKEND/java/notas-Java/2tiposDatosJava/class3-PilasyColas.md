# Teoría de pilas y colas

La principal caracteristica de una pila es que el ultimo que entro es el primero que sale.

NO tenemos que indicar cual es el elemento que va a salir.

# Creación de pilas

```java
    class Pila{

        private ArrayList<Object> pila = new Arraylist();

        private void apilar(Object elemento){
            pila.add(elemento)
        }

        private Object desapilar(){
            if(!pila.isEmpty()){
                Object t = pila.get(pila.size()-1);
                pila.remove(pila.size()-1);
                return t;
            }
            return null;
        }

        private Object peek(){
            if(!pila.isEmpty()){
                return pila.get(pila.size()-1);
            }
            return null
        }

        private Boolean empty(){
            return pila.isEmpty();
        }

        public static void main(String... args){
            
        }
    }
```

# Creación de colas

```java
    public NodoCola{    
        int valor;
        NodoCola siguiente;

        NodoCola(int v){
            this.valor = v;
            siguiente = null;
        }
    }

    public class Cola{
        NodoCola primero, ultimo;
        int tamanio;

        public Cola(){
            primero = ultimo = null;
            tamanio = 0;
        }

        public void insert(int valor){
            NodoCola nuevo = new NodoCola(valor);
            siguiente = null;
            if(empty()){
                primero = nuevo;
            }else{
                ultimo.siguiente = nuevo;
            }
            ultimo = nuevo;
            tamanio++;
        }

        public int delete(){
            int t = primero.valor;
            primero = primero.siguiente;
            tamanio--;
            return t;
        }

        public void size(){
            return tamanio
        }

        public Boolean empty(){
            return primero == null;
        }

        public static void main(String... args){
            Cola colo = new Cola()
            cola.insert(1);
            cola.insert(1);
            cola.insert(1);
            cola.insert(1);

            cola.delete();
        }
    }
```

**** | Descripcion
:---|---:
``|
``|
``|
``|
``|