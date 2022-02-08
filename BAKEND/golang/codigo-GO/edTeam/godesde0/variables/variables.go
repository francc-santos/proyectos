package main

import "fmt"

func main()  {
	// DECLARACION Y ASIGNACION EN VARIAS LINEAS

	/* 	var dog string
	dog = "perro"
	fmt.Printf("%v",dog) */

	// DECLARACION DE VARIABLES EN UNA SOLA LINEA 

	/* 	var dog string = "dog"
	fmt.Println("El valor es:",dog) */

	// DECLARACION DE EN UNA LINEA DE MAS DE UNA VARIABLE 

	/* 	var dog, cat = "dog","cat"
	fmt.Println(dog, cat) */

	// DECLARACION CHULA (:=) como el de base de datos
	
	dog, cat := "dog", "cat"
	
	/* cuando se usa la manera corta de declaracion de variables se 
	"dice que se esta declarando una varible , pero como ya estaba declarada 
	en este caso ps la manda a la shit" */
	
	/* cat = 1 no se puede reasignar con otro tipo de valor
	porque es de tipo estatico 
	al menos que se pase un puntero con el & */

	/* cat ="dogo", esto es valido porque es del mismo tipo */
	
	/* cat , eagle := "dogo", "aguila", va a cambiar el valor de cat d dogo
	porque si se esta asignado una nueva variable eagle*/
	
	fmt.Println("\n",dog, cat)
	
}