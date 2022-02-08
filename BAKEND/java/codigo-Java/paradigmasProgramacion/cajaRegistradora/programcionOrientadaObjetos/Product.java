class Product{
    private String name;
    private int quantity;
    private float price;
    private String marca;

    public Product(String name, int quantity, float price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public void setName(String name){
        this.name = name;
    }
    public void setQuantity(int quantity){
        if(q >= 0){
            this.quantity = quantity;
        }
    }
    public void setPrice(float price){
        this.price = price;
    }
    public void setMarca(String marca){
        this.marca = marca;
    }
    public String getName(){
        return this.name;
    }
    public int getQuatity(){
        return this.quantity;
    }
    public float getPrice(){
        return this.price
    }
    public String getMarca(){
        return this.marca
    }

    /* METODOS  DE LA FUNCIONALIDAD DE STORAGE  */
    public void addQuantity(int quantity) {
        this.quantity += quantity 
    }

    public void removeQuantity(int quantity) {
        this.quantity -= quantity
    }

}