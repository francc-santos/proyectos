package main

import "fmt"

func main() {

	// bool, string , numeric
	var a bool = true
	// %letra, son verbos con los que
	// indicas que quieres imprimir
	fmt.Printf("\ntipo: %T, valor: %v\n", a, a)

	b := "cadenaDeTexto"

	fmt.Printf("\ntipo: %T, valor: %v\n", b, b)

	var c uint8 = 30
	var d uint16 = 23000

	// e es una variable que almacena la suma de c y d
	// pero como son de diferentes tipos de datos
	// se tiene que hcer CASTING  de una de las
	// variables para que coicida el tipo de dato

	// e se debe de usar (:=), pq se esta declarando una
	// nueva varible
	e := uint16(c) + (d)
	_ = 124344
	/* e := c+d, es incorrecto pq el tipo de dato no
	coincide */

	fmt.Printf("\ntipo: %T, valor: %v\n", e, e)
	fmt.Printf("\ntipo %T\n", c)

	/* SI SE DECLARA UN VARIBLE PERO NO SE ASIGNA 
	NINGUN VALOR SE ASIGNA UN VALOR VACIO DE 
	ACUERDO AL TIPO DE DATO, P.E. UN STRING VACIO
	ES IGUAL a "" */

}
