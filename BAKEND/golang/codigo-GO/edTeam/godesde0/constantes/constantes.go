package main

import "fmt"

	/* para ver la documentacioin en terminal es  go doc --all*/

	// Pi es una variable que guarca una
	// constante de valor 3.1416
	const Pi = 3.1416

	// Test es una variable de prueba
	var Test = 123

func main() {

	/*de forma obvia no se pude usar (:=),
	pq sino asignaria una varible que se puede cambiar*/

	fmt.Print("\n", Pi, "\n")
}
