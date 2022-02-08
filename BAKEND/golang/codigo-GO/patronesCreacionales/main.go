package main

import(
	"fmt"
	".conn"
)

func main()  {
	// creamos una unica intancia y se meuestra su contenido 
	instance := conn.GetIntance()
	fmt.Println(instance)

	instance.Increment()
	fmt.Println("instance :", instance)

	// obtener la connect 
	other := conn.GetIntance()
	fmt.Println("other",other)
	

	// tanto en intance como en other tinene la misma info porque son el mismo objeto 
	other.Increment()
	other.SetName("nuevo nombre")
	fmt.Println("instance:",instance, instance.GetName())
	fmt.Println("other:" other, other.GetName())

	// /* Por ejemplo en un juego, donde varios jugadores tienen vidas, podemos tener un singleton que nos permita almacernar todas las vidas y saber quien tien vidas quien pude jufgar y quien ya no  */
}