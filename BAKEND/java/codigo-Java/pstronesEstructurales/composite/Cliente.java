public main Client {

	public static void main(String[] ...args){
		new Client();
	}

	public Client(){
		public create();
	}

	public void create(){
	
		Project mercado = new Project("Compra de mercado");
		Project plaza = new Project("Plaza de mercado");
		Project supermercado = new Project("Supermecado");
		Project carniceria = new Project("carniceria");

		addPlaza(plaza);
		//Se agrega plaza a elemento padre
		mercado.addItemProject(plaza);

		// addSuper(supermercado);
        // mercado.addItemProject(supermercado);
		// addCarniceria(carniceria );
        // mercado.addItemProject(carniceria);

		//Se imprime
		meracdo.imprimir();
	}

	public void addPlaza(){

		//Se crea tareas
		Todo papa = new Todo("papa", "Pedro");
		Todo cebolla = new Todo("cebolla", "Juan");
		Todo tomate = new Todo("tomate", "Pedro");
        Todo salrefinada = new Todo("Sal refinada", "Juan");

		//Se agregan las tareas a la instancia creada de plaza
		plaza.addItemProject(papa);
		plaza.addItemProject(cebolla);
		plaza.addItemProject(tomate);

	}

}