package main

import "fmt"

func main() {

	// punteros : variables que almacenan la direccion en
	// memoria de un valor

	fruit := 4
	// creando un puntero
	var p *int
	p = &fruit

	*p = 6

	d := &fruit 

	// *P modifica el valor de la variable p con desreferineciacion


	// fmt.Printf("\nTipo: %T, Valor: %v\n", fruit, fruit)

	// direccion en memoria de apple con el (&)
	fmt.Printf("\nTipo: %T, Valor: %v, Direccion: %v\n", fruit, fruit, &fruit)
	fmt.Printf("\nTipo: %T, Valor: %v\n", p,*p)
	fmt.Printf("\nTipo: %T, Valor: %v\n", p,p)
	fmt.Printf("\nTipo: %T, Valor: %v\n", d,d)

}
