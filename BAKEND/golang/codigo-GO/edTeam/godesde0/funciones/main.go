package main

import (
	"errors"
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {

	/* FUNCION  */

	// hello() es una funcion vacia que imprime "hellow uorld"
	hello()

	/* FUCCION QUE RECIBE VALORES , POR VALOR , GENERA COPIA */

	//hola() es una funcion que recibe parametros por valor
	hola("lis", "santos")

	/* FUNCCION PASO POR REFERENCIA */

	// ciao() es una que cambia el nombre de la persona
	// para saludarla con paso por referencia
	nombre := "lis santos"
	ciao(&nombre)

	/* FUNCION PASO POR VALOR */

	// hallo es una funcion que retorna un valor
	total := hallo("lis", "santos")
	fmt.Println("\nHallo wieghts, la suma de tu nombre es: ", total)

	/* RETORNO DE MULTIPLES VALORES */

	//  salut() es una funcion que retona multiples valores
	nomMin, nomMay := salut("lis santos")
	fmt.Println("\nSalut commet ca va, tu nombre en mayusculas y minisculas", nomMin, nomMay)
	// funcion que evalua que no haya un error
	fmt.Println()
	// ioutil() lee el archivo que se genero hello.txt

	/* MANEJO DE ERRRORES */

	content, err := ioutil.ReadFile("./hello.txt")
	if err != nil {
		fmt.Printf("Ocurrio un error: %v", err)
		return
	}
	// string(content),pasa a texto entendible
	// los bytes del contenido
	fmt.Println(string(content))

	fmt.Println()
	// division () es una funcion que retorna un error si la division se hace sobre 0
	resultado, err := division(8, 1)
	if err != nil {
		fmt.Printf("Ocurrio un error: %v", err)
		return
	}
	// string(content),pasa a texto entendible
	// los bytes del contenido
	fmt.Println(resultado)
	fmt.Println()

	/* FUNCIONES QUE RECIBEN Y RETORNAN FUNCIONES */
	nums := []int{1, 2, 3, 4, 3456, 5, 6, 77, 8, 80, 76}
	result := filter(nums, func(num int) bool {
		if num >= 10 {
			return true
		}
		return false
	})
	fmt.Println(result)
	fmt.Println()
	// FUNCION QUE RETORNA UNA FUNCION
	// con los segundos parentesis se ejecutan los segundos ()
	/* 	x := helloo("lis")
	   	fmt.Println(x())  */
	/* o */
	// en caso de que se quiera que la segunda funcion resiva vaores , es igual
	x := helloo("lis")()
	fmt.Println(x)
	fmt.Println()

	/* FUNCIONES VARIATICAS */
	fmt.Println(sum(1, 2, 7, 8))
	fmt.Println()
	/* FUNCIONES ANONIMAS */
	// funciones sin nombre , se puede asignar  a una variable
	/* 	r := func() {
	   		fmt.Println("Hola edeteam")
	   	}

	   	r() */
	/* o, como funcion anonima autoejecutable */
	// pueden resiveri argumentos
	func(txt string) {
		fmt.Println("hola edeteam " + txt)
	}("gofers")
}

/* clase 5.8 funciones anonimas */

/* clase 5.7 funciones variatricas  */
func sum(nums ...int) int {
	total := 0
	for _, v := range nums {
		total += v
	}
	return total
}

/* clase 5.6 funcion que retorna una funcion */
func helloo(name string) func() string {
	return func() string {
		return "hello " + name
	}
}

/* clase 5.6 */
func filter(nums []int, callback func(int) bool) []int {
	result := []int{}
	for _, v := range nums {
		if callback(v) {
			result = append(result, v)
		}
	}
	return result
}

/* clase 5.5 control de err*/
func division(dividento, divisor int) (int, error) {
	if divisor == 0 {
		return 0, errors.New("ete es un error matematico de division sobre 0")
	}
	return dividento / divisor, nil

}

/* Clase 5.4 * retorno de multiples valores*/
func salut(text string) (string, string) {
	min := strings.ToLower(text)
	may := strings.ToUpper(text)
	return min, may
}

/* clase 5.3 , retorno de valores */
func hallo(name string, nachname string) int {
	_name := len(name)
	_nachname := len(nachname)

	suma := _name + _nachname
	return suma
}

/* es de la clase 5.2  fucnion por paso de referencia "punteros y desreferenciacion"*/
// funcion con paso por referencia
func ciao(valore *string) {
	*valore = "perro"
	fmt.Println("\nHola", *valore)
}

/* es de la clase 5.2 funcion por paso de valor , solo se generan copias de los valores , asi que no se puede cambiar su valor*/
// en este se pasa una copia de los valores,
func hola(nombre string, apellido string) {
	fmt.Println("\nHolau", nombre, apellido)
}

// esta funcion es de la clase 5.1
func hello() {
	fmt.Println("\nHellow uorld")
}
