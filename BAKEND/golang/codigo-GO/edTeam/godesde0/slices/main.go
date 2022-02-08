package main

import "fmt"

func main() {

	// los slices son apuntadores a arrays porloque no guardan valores
	/*
		set := [7]string{
			"0-lion",
			"1-horse",
			"2-cow",
			"3-butterfly",
			"4-bird",
			"5-plane",
			"6-airplane",
		} */

	// el ultimo elemento es excluyente
	/*
		animals := set[0:5]
		fly := set[3:7]
	*/
	// el primero al 3
	/*
		_fto3 := set[:4]
	*/
	// del 3 al ultimo
	/*
		_3tol := set[3:]
	*/
	// al reasignar el valor se modifica el valor de
	// set y animals porque he referencia en memoria
	/*
		fly[0] = "3-eagle" */

	/*
		fmt.Printf("\nTipo: %T, Valor: %v\n", set, set)
		fmt.Printf("\nTipo: %T, Valor: %v\n", animals, animals)
		fmt.Printf("\nTipo: %T, Valor: %v\n", fly, fly)
		fmt.Printf("\nTipo: %T, Valor: %v\n", _fto3, _fto3)
		fmt.Printf("\nTipo: %T, Valor: %v\n", _3tol, _3tol)
		fmt.Printf("\nTipo: %T, Valor: %v\n", set[:], set[:])
	*/

	food := [5]string{"1", "2", "3", "4", "5"}
	fruits := food[1:3]
	// agrega el elemento en la ultima posicion
	// por eso se modifica el food
	fruits = append(fruits, "piña")
	fruits = append(fruits, "manzana")
	fruits = append(fruits, "saca")
	// cuando sobrepasa la capacidad , lo aumenta al
	// final
	// duplica la capacidad

	fmt.Println("\ncibo: ", food)
	fmt.Println("\nfrutta: ", fruits)
	fmt.Println("\ntamaño cibo: ", len(food))
	fmt.Println("\ncapacidad cibo: ", cap(food))
	fmt.Println("\ntamaño frutte: ", len(fruits))
	fmt.Println("\ncapacidad frutte: ", cap(fruits))

	var las []int
	numeros := []int{1, 2, 3, 4, 5, 6, 7, 8}

	fmt.Printf("\nTipo: %T, Valor: %v, Tamaño: %v, Capacidad: %v\n", numeros, numeros, len(numeros), cap(numeros))

	// make (tipo, tamaño, capacidad)
	saca := make([]string, 0, 3)

	saca = append(saca, "1", "2", "3", "4")

	fmt.Printf("\nTipo: %T, Valor: %v, Tamaño: %v, Capacidad: %v\n", saca, saca, len(saca), cap(saca))
	fmt.Printf("\nTipo: %T, Valor: %v, Tamaño: %v, Capacidad: %v\n", las, las, len(las), cap(las))
	fmt.Print(las == nil)

}
