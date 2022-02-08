package buuilder

/* DE MANERA ANALOGA LAS ESTRUCTURAS EN GO SON COMO LAS CLASES DE OTROS METODOS */
type WorkFlow struct{
	// tendra la lista de acciones que debe de ejecutar
	Actions []int
}

// (w *WorkFlow) es como se firma el metodo de la estructutra , es decir es indicarle que pertenece a la estructura
func (w *WorkFlow) GetElements() {
	fmt.Println("Estoy obteniendo los elementos necesarios")
}

func (w *WorkFlow) Process() {
	fmt.Println("Estoy procesando todos los elementos enviados")
}

func (w *WorkFlow) End()  {
	fmt.Println("Termino el proceso")
}

func (w *WorkFlow) loadAcctions(actions []int) {
	w.Actions = actions
}

func (w *WorkFlow) Work()  {
	// Lo que se ace en work es que vamos a recorrer la lista de acciones que manda el cliente 
	for _, v := range w.Actions{
		switch v {
		case 1:
			w.GetElements()	
		case 2:
			w.Process()
		case 3:
			w.End()
		default:
			fmt.Println("No conozco esa accion")
		}
	}
}

