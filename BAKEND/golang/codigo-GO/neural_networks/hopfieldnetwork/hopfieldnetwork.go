package hopfieldnetwork

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/leosykes117/neuronal_networks/pkg/hopfield"
	"gonum.org/v1/gonum/mat"
)

// InitNetwork es la función que inicia un red neuronal de Hopfield
// solicitando los vectores para contruir la red
func InitNetwork() {

	var neurons uint
	fmt.Printf("Ingresa el número de neuronas que tendrá la red: ")
	_, err := fmt.Scanln(&neurons)
	for err != nil {
		panic("Debe introducir un número entero y positivo")
	}

	var inputs []*mat.Dense
	for {
		var vectorStr, op string
		var data []float64
		fmt.Printf("Ingresa los elementos del vector separándolos por comas (Ej. 1,-1,-1,-1,1): ")
		_, err := fmt.Scanln(&vectorStr)
		if err != nil {
			panic("La entrada del vector no es valida")
		}
		elements := strings.Split(vectorStr, ",")
		if len(elements) != int(neurons) {
			panic("El número de elementos del vector no es igual al número de neuronas")
		}
		for i, chr := range elements {
			if n, err := strconv.ParseFloat(chr, 64); err == nil {
				data = append(data, n)
			} else {
				msg := fmt.Sprintf("Error en la posicion %d del vector. El elemento no es valido", i)
				panic(msg)
			}
		}
		fmt.Printf("¿Desea ingresar otro vector [Y/n]?: ")
		_, err = fmt.Scanln(&op)
		if err != nil {
			panic("Entrada invalida")
		}

		inputs = append(inputs, mat.NewDense(1, int(neurons), data))

		if strings.ToUpper(strings.TrimSpace(op)) != "Y" {
			break
		}
	}

	fmt.Println("Calculando la matriz de pesos...")
	net, err := hopfield.New(inputs...)
	if err != nil {
		fmt.Println(err)
	}

	for {
		if !menu(net, neurons) {
			break
		}
	}
}

func FmtMatrix(m *mat.Dense) string {
	var draw string
	r, c := m.Dims()
	for i := 0; i < r; i++ {
		for j := 0; j < c; j++ {
			draw += fmt.Sprintf(" %4v ", fmt.Sprintf("%3.2f", m.At(i, j)))
		}
		draw += "\n"
	}
	return draw
}

func menu(net *hopfield.Network, neurons uint) bool {
	var op uint
	var cnt string
	var v *mat.Dense
	//fmt.Println("\033[H\033[2J")
	fmt.Printf("Matriz de pesos:\n%s", FmtMatrix(net.GetWeightMatrix()))
	fmt.Println("1.- Convergencia con vectores de la red.\n2.- Convergencia con vectores de prueba.\n3.- Salir")
	fmt.Printf("Ingresa el numero de la opción: ")
	_, err := fmt.Scanln(&op)
	if err != nil {
		panic("Debe digitar un método valido")
	}

	if op > 3 {
		panic("El metodo no es valido")
	}
	fmt.Println("\033[H\033[2J")
	
	switch op {
	case 1:
		var num uint
		for i, v := range net.GetVectors() {
			fmt.Printf("%d.- %v\n", i+1, v.RawMatrix().Data)
		}
		fmt.Printf("Elige el número del vector: ")
		fmt.Scanln(&num)
		v = net.GetVectors()[num-1]
	case 2:
		var vectorStr string
		var data []float64
		fmt.Printf("Ingresa los elementos del vector separándolos por comas (Ej. 1,-1,-1,-1,1): ")
		_, err := fmt.Scanln(&vectorStr)
		if err != nil {
			panic("La entrada del vector no es valida")
		}
		elements := strings.Split(vectorStr, ",")
		if len(elements) != int(neurons) {
			panic("El número de elementos del vector no es igual al número de neuronas")
		}
		for i, chr := range elements {
			if n, err := strconv.ParseFloat(chr, 64); err == nil {
				data = append(data, n)
			} else {
				msg := fmt.Sprintf("Error en la posicion %d del vector. El elemento no es valido", i)
				panic(msg)
			}
		}
		v = mat.NewDense(1, int(neurons), data)
	case 3:
		return false
	}

	it, associatesWith, converge := net.Convergence(v)

	if converge {
		fmt.Printf("El vector %v converge y asocia con el vector %+v\n", v.RawMatrix().Data, associatesWith.RawMatrix().Data)
	} else if associatesWith == nil {
		fmt.Printf("La red no converge %v y se queda en un bucle porque el vector asocia con él mismo\n", v.RawMatrix().Data)
	} else {
		fmt.Println("La red no converge y el vector no asocia")
	}
	fmt.Printf("Número de iteraciones: %d\n", it)

	fmt.Println("Presiona un tecla para continuar...")
	fmt.Scanln()
	fmt.Printf("¿Deseas regresar al menu de la red?[Y/n]: ")
	_, err = fmt.Scanln(&cnt)
	if err != nil {
		panic("Entrada invalida")
	}

	return strings.ToUpper(strings.TrimSpace(cnt)) == "Y"
}
