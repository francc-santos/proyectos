package main

import "fmt"

func main() {

	animals := make(map[string]string)
	// asignaciion de llave valor en el mapa
	animals["cat"] = "cat"
	animals["dogo"] = "dogo"

	fmt.Println("\n", animals)
	//map[tipo:llave]tipo:dato
	fruits := map[string]string{
		"apple":  "apple",
		"banana": "banana",
	}
	// si se intenta consultar una llave que no existe
	// en el mapa el go retorna un vacio

	fmt.Println("\n", fruits)

	// eliminando banana
	delete(fruits, "banana")

	fmt.Println("\n", fruits)

	fmt.Println("\n", len(animals))

	fmt.Println("\n", (animals["gorilla"]) == "")

	// go puede returnar varios valores por eso

	// contenido y boolean si existe o no
	if _, ok := animals["gorilla"]; !ok{
		animals["gorilla"]  = "elorangutan"
	}
	fmt.Print("\n")
	fmt.Println(animals)

}
