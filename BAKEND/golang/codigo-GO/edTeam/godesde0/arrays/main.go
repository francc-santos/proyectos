package main

import "fmt"

func main() {
	// los arrays son de un rango fijo, se usa mejor slides
	var food [3]string
	food[0] = "caca"
	food[1] = "pizza"
	food[2] = "hotdog"

	fmt.Printf("\nTipo: %T, Valor: %v\n", food, food)

	comida := [3]string{
		"caca",
		"pizzas",
		"hochos",
	}

	fmt.Printf("\nTipo: %T, Valor: %v\n", comida, comida)

}
