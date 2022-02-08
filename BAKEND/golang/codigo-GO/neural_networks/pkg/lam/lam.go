package lam

import (
	"fmt"

	"gonum.org/v1/gonum/mat"
)

func CalculateWeightMatrix(n1, n2, m uint, a []*mat.VecDense, b []*mat.VecDense) []float64 {
	data := make([]float64, n1*n2)
	flatIndex := 0

	for i := 0; uint(i) < n1; i++ {
		for j := 0; uint(j) < n2; j++ {
			var sum float64 = 0
			for s := 0; uint(s) < m; s++ {
				a_i := a[s].AtVec(i)
				b_i := b[s].AtVec(j)
				first := 2*a_i - 1
				second := 2*b_i - 1
				sum += first * second
				fmt.Printf("W(%d, %d)\n", i+1, j+1)
				fmt.Printf(
					"a_s: %v\nb_s: %v\na_i: %3.2f\nb_i: %3.2f\n(2*%3.2f - 1): %3.2f\n(2*%3.2f - 1): %3.2f\nmultipliacion: %3.2f\nsum: %3.2f\n",
					a[s].RawVector().Data,
					b[s].RawVector().Data,
					a_i,
					b_i,
					a_i,
					first,
					b_i,
					second,
					first*second,
					sum,
				)
			}
			fmt.Println("_______________________________")
			data[flatIndex] = sum
			flatIndex++
		}
	}

	return data
}

func CalcBias(w mat.Matrix) []float64 {
	r, c := w.Dims()
	data := make([]float64, r)
	flatIndex := 0
	for i := 0; i < r; i++ {
		sum := 0.0
		for j := 0; j < c; j++ {
			sum += w.At(i, j)
			fmt.Printf(
				"w(%d, %d): %3.2f\nsum: %3.2f\n",
				i,
				j,
				w.At(i, j),
				sum,
			)
		}
		fmt.Printf("-sum / 2: %3.2f\n", -sum/2)
		data[flatIndex] = -sum / 2
		flatIndex++
		fmt.Println("______________")
	}
	return data
}
