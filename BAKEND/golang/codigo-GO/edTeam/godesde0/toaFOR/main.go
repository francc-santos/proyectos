package main

import "fmt"

func main() {

	// en go solo existe el bucle for
	fmt.Print("\n")
	caracter := "123456789"
	for i := 0; i <= len(caracter); i++ {
		fmt.Print(i)
	}
	fmt.Print("\n")
	// ciclo while
	fmt.Print("\n")
	i := 0
	for i <= len(caracter) {
		fmt.Print(i)
		i++
	}
	fmt.Print("\n")
	// for que serviria para sockets
	// e:= 1
	// for{
	// 	fmt.Println(e)
	// 	e++
	// }

	// for range sirve pora recorrer slices mapas y strings
	nums := []uint8{2, 4, 6, 8}
	sport := map[string]string{"basketball": "basquetbol", "soccer": "füssball"}
	hello := "hello"

	fmt.Print("\n")
	for range nums {
		fmt.Print("ed team \n")
	}
	fmt.Print("\n")

	fmt.Print("\n")
	for i, v := range nums {
		fmt.Print("Indice: ", i, " Valor: ", v, "\n")
	}
	fmt.Print("\n")

	// la varible v solo se guarda una copia de nums
	for _, v := range nums {
		v *= 2
	}
	fmt.Println(nums)

	fmt.Print("\n")
	// aqui si se puede operar con los numeros del
	// nums pq se esta accediendo a su posicion del
	// arreglo
	for i := range nums {
		nums[i] *= 2
	}
	fmt.Println(nums)
	fmt.Println()
	for k, v := range sport {
		fmt.Println("Llave: ", k, " Valor:", v)
	}
	fmt.Println()
	// imorime losbits de cada letra
	for _,v := range hello{
		fmt.Println(v)
	}
	fmt.Println()
	fmt.Println()
	// imorime las letras qde acuerdo a los indices 
	for _,v := range hello{
		fmt.Println(string(v))
	}
	fmt.Println()
}
