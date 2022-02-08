package main 

type Word struct {
	Word1 string 
	Word2 string 
	Word3 string 
	Word4 string 
}



func (w *Word) Set(i int, n string) {
	// logica para poblar la estructura
	switch i {
	case 1:
		w.Word1 = n
	case 2:
		w.Word2 = n
	case 3:
		w.Word3 = n
	case 4:
		w.Word4 = n
	}
}


func (w *Word) GetIterator() *WordIterator{
	return &WordIterator{TheWord: w}
}