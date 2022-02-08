package hopfield

import (
	"fmt"

	"gonum.org/v1/gonum/mat"
)

type Network struct {
	n                uint
	m                uint
	weightMatrix     *mat.Dense
	vectors          []*mat.Dense
	transferFunction uint
}

func New(inputs ...*mat.Dense) (*Network, error) {
	var lastVSize int = -1
	fh := 1

	for _, v_input := range inputs {
		vSize := v_input.RowView(0).Len()

		if lastVSize != -1 && lastVSize != vSize {
			return nil, fmt.Errorf("Los vectores de entrada no tienen el mismo número de elementos")
		}
		lastVSize = vSize

		if fh == 1 && contains(v_input.RawMatrix().Data, 0) {
			fh = 0
		}
	}

	n := uint(lastVSize)
	m := uint(len(inputs))

	data := calculateWeightMatrix(n, m, inputs)

	return &Network{
		n:                n,
		m:                m,
		weightMatrix:     mat.NewDense(int(n), int(n), data),
		vectors:          inputs,
		transferFunction: uint(fh),
	}, nil
}

func calculateWeightMatrix(n, m uint, inputs []*mat.Dense) []float64 {
	data := make([]float64, n*n)
	flatIndex := 0

	for i := 0; uint(i) < n; i++ {
		for j := 0; uint(j) < n; j++ {
			sum := 0.0
			fmt.Printf("W(%d, %d)\n", i+1, j+1)
			if i != j {
				for s := 0; uint(s) < m; s++ {
					sum += inputs[s].At(0, i) * inputs[s].At(0, j)
					fmt.Printf(
						"c_s(%d): %v\nc_i(%d): %3.2f\nc_j(%d): %3.2f\nmultiplicacion: %3.2f\nsuma: %3.2f\n",
						s,
						inputs[s].RawMatrix().Data,
						i,
						inputs[s].At(0, i),
						j,
						inputs[s].At(0, i),
						inputs[s].At(0, i)*inputs[s].At(0, j),
						sum,
					)
				}
			}
			fmt.Println("_______________________________")
			data[flatIndex] = (1 / float64(n)) * sum
			flatIndex++
		}
	}

	return data
}

func (n *Network) GetWeightMatrix() *mat.Dense {
	return n.weightMatrix
}

func (n *Network) GetN() uint {
	return n.n
}

func (n *Network) GetM() uint {
	return n.m
}

func (n *Network) GetVectors() []*mat.Dense {
	return n.vectors
}

func (n *Network) Convergence(x *mat.Dense) (int, *mat.Dense, bool) {
	var converge bool
	var associatedVector *mat.Dense
	var outs []*mat.Dense
	lastOut := transform(x, n.transferFunction)
	iterations := 2

	for {
		outs = append(outs, lastOut)
		var currentState mat.Dense
		currentState.Mul(n.weightMatrix, lastOut.T())
		currentOut := transform(&currentState, n.transferFunction)

		outsEqual := compareMatrix(currentOut, lastOut)
		inLoop := findInList(currentOut, outs)

		fmt.Printf("currentState: %v\nlastOut: %v\ncurrentOut: %v\niterations: %d\n",
			currentState,
			lastOut,
			currentOut,
			iterations,
		)

		if outsEqual {
			converge = true
			associatedVector = currentOut
			break
		} else if inLoop {
			converge = false
			break
		} else {
			iterations++
			lastOut = currentOut
		}
	}
	return iterations, associatedVector, converge
}

func findInList(x *mat.Dense, vectors []*mat.Dense) bool {
	for _, v := range vectors {
		if compareMatrix(x, v) {
			return true
		}
	}
	return false
}

func transform(x *mat.Dense, functionType uint) *mat.Dense {
	newVector := []float64{}
	r, c := x.Dims()

	for i := 0; i < r; i++ {
		for j := 0; j < c; j++ {
			if x.At(i, j) >= 0 {
				newVector = append(newVector, 1)
			} else {
				if functionType == 1 {
					newVector = append(newVector, -1)
				} else {
					newVector = append(newVector, 0)
				}
			}
		}
	}

	if r > 1 {
		return mat.NewDense(c, r, newVector)
	}
	return mat.NewDense(r, c, newVector)
}

func compareMatrix(x *mat.Dense, u *mat.Dense) bool {
	r1, c1 := x.Dims()
	r2, c2 := u.Dims()
	if r1 != r2 && c1 != c2 {
		return false
	}
	for i := 0; i < r1; i++ {
		for j := 0; j < c1; j++ {
			if x.At(i, j) != u.At(i, j) {
				return false
			}
		}
	}
	return true
}

func contains(slice []float64, item float64) bool {
	for _, element := range slice {
		if element == item {
			return true
		}
	}
	return false
}
