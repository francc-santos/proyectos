package main

type Numero struct{
	Numbers []int //array dinamico de numeros
}

func (n *Numero) Add(i int) {
	n.Numbers = append(n.Numbers, i) 
}

func (m *Numero) GetIterator() *NumberIterator {
	/* le enviamos a thenumber este numero para poder recorrerlo */
	return &NumberIterator{TheNumber: n}
}