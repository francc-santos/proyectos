package lamnetwork

import (
	"fmt"

	"github.com/leosykes117/neuronal_networks/pkg/lam"
	"gonum.org/v1/gonum/mat"
)

func Start() {
	var n1 uint = 3
	var n2 uint = 5
	var m uint = 2
	/* var n1 uint = 4
	var n2 uint = 4
	var m uint = 2 */
	/* var n1 uint = 4
	var n2 uint = 3
	var m uint = 3 */

	x := []*mat.VecDense{
		mat.NewVecDense(int(n1), []float64{0, 1, 0}),
		mat.NewVecDense(int(n1), []float64{1, 0, 1}),
		/* mat.NewVecDense(int(n1), []float64{0, 0, 1, 1}),
		mat.NewVecDense(int(n1), []float64{1, 1, 0, 0}), */
		/* mat.NewVecDense(int(n1), []float64{1, 1, 1, 1}),
		mat.NewVecDense(int(n1), []float64{0, 1, 0, 1}),
		mat.NewVecDense(int(n1), []float64{0, 0, 0, 0}), */
	}

	y := []*mat.VecDense{
		mat.NewVecDense(int(n2), []float64{1, 0, 1, 0, 1}),
		mat.NewVecDense(int(n2), []float64{0, 1, 0, 1, 0}),
		/* mat.NewVecDense(int(n2), []float64{1, 0, 1, 1}),
		mat.NewVecDense(int(n2), []float64{1, 1, 0, 1}), */
		/* mat.NewVecDense(int(n2), []float64{1, 1, 1}),
		mat.NewVecDense(int(n2), []float64{1, 0, 1}),
		mat.NewVecDense(int(n2), []float64{0, 0, 0}), */
	}

	weightM := mat.NewDense(int(n1), int(n2), lam.CalculateWeightMatrix(n1, n2, m, x, y))

	var w mat.Matrix

	if n1 != n2 {
		fmt.Println("")
		w = weightM.T()
		n1, n2 = n2, n1
	} else {
		w = weightM
	}

	for i := 0; i < int(n1); i++ {
		for j := 0; j < int(n2); j++ {
			fmt.Printf(" %3.2f ", w.At(i, j))
		}
		fmt.Println()
	}

	bias := lam.CalcBias(w)
	fmt.Printf("bias: %v\n", bias)
}
