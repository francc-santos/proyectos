package main

import "fmt"

func main()  {

	// Sin el patron de diseño tendiramos que estar llamando todas las funcinoes 
	Iniciar()
	Preparar()
	Concinar()
	Finalizar()

	/* Supangamos que conseguimos un cliente que necesita concinarlo dos veces y prepararlo de nuevo, lo que se tendria que hacer es crear un nuevo archivo que lo hace dos veces cada metodo , esto seria peor si tuvieramos que hacerlo para mas de dos clientes */
}

func Iniciar()  {
	fmt.Println("Iniciando el proceso")
}

func Preparar()  {
	fmt.Println("Preparando los ingredientes")
}

func Cocinar()  {
	fmt.Println("cocinando todos los ingredientes")
}

func Finalizar()  {
	fmt.Println("Entregando el plato al cliente")
}

