package main

func main() {

	// if de go no es necesario los parectesis
	d := 1
	if d == 1 {
		print("\nd is 1 == ", d)
	} else if d == 2 {
		print("\nd is 2 == ", d)
	} else {
		print("\nd is another value != ", d)
	}

	// if asignacion, condicion{}
	// el scope de la varible solo es valida para el if 
	// osea se pue usar otra variable del mimo nombre en otro scope
	if c := 4; c == 4 {
		print("\nla condizzione es vera e igual a 4 == ", c, "\n")
	} else if c == 5 {
		print("\nla condizzione e vera con el numeri cinque == ", c, "\n")
	} else {
		print("\nla ondizzione no he vera con nessuno de gli valori\n")
	}



}
