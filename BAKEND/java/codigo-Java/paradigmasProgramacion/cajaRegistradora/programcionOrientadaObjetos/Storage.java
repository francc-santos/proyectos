Class Storage{
    private Product[] products;

    public Storage(){
        products = new Product[3];
        products[0] = new Product("PAPA",0,0);
        products[1] = new Product("ARROZ",0,0);
        products[2] = new Product("CARNE",0,0);
    }

    public void buyProduct(int i, int quantity, float price){
        products[i].addQuantity(quantity);
        products[i].setPrice(price);
    }

    public void saleProduct(int i, int quantity){
        products[i].removeQuantity(quantity);
        System.out.println("Valor vendido:"´+ products[i].getPrice() * q * 1.25);
    }

    public Product[] getProducts() {
        this.products
    }
}