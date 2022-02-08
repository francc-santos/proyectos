package main

import "fmt"

func main() {
	// operadores aritmeticos (),*,+,-,/,%

	/* 	var a = 4 + 2

	   	fmt.Printf("\nvalor: %v\n", a) */

	// operadores de asignacion =,+=,-=,*=,/=.%=

	/*
		var a = 4 + 2
		a += 2

		fmt.Printf("\nvalor: %v\n", a)
	*/

	// incremento ++, --, solo existen
	// las de post.., y es una declaracion

	/*
		a := 4 + 2
		a++

		fmt.Printf("\nvalor: %v\n", a)
	*/

	// operadores de comparacion <,>,==,!=,<=,>=

	/*
		fmt.Print("\n",9<19,"\n")
		fmt.Print("\n",3!=3,"\n")
		fmt.Print("\n",3==3,"\n")
	   	fmt.Print("\n",3<=3,"\n") */

	//operadores logicos &&,||

	/*
		fmt.Print("\n",9<19 && 9>9,"\n")
		fmt.Print("\n",3!=3 && 3==3,"\n")
		fmt.Print("\n",7==3 && 3==4,"\n")
	*/

	// unario!

	fmt.Print("\n", !(9 < 19 && 9 > 9) , "\n")
	fmt.Print("\n", !(3 != 3 && 3 == 3) , "\n")
	fmt.Print("\n", !(7 == 3 && 3 == 4) , "\n")

}
