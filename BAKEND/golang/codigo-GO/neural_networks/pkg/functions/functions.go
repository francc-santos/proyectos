package functions

import "gonum.org/v1/gonum/mat"

func sign(data []float64) *mat.VecDense {
	for i := 0; i < len(data); i++ {
		if data[i] < 0.0 {
			data[i] = -1.0
		} else {
			data[i] = 1.0
		}
	}
	return mat.NewVecDense(len(data), data)
}
