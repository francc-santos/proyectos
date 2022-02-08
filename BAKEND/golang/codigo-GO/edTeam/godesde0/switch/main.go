package main

import "fmt"

func main() {

	d := 0
	switch d {
	case 10:
		fmt.Print("\nle valor et equal 10 == ", d, "\n")
	case 1:
		fmt.Print("\nle valor et equal 1 == ", d, "\n")
	default:
		fmt.Print("\nno coincide con ningun valor\n")
	}

// en go se pueden agrupar casos

	emoji := "banana"
	switch emoji{
	case "banana","apple":
		fmt.Print("\nes una fruta\n")
	case "cat", "dog":
		fmt.Print("\nes un animal\n")
	}

// usando operadores logicos en los casos de comparacion
// no se debe de colocar la expresion despues del 
// la palabra "switch"

	saca := "la papa"
	switch{
	case saca == "las panochas" || saca == "las caguamas":
		fmt.Print("\nva a sacar las panochas o las caguamas\n")
	case saca == "la comida" || saca == "la papa":
		fmt.Print("\nva a sacar las comida, tambien llamada papa\n")
	}

}
