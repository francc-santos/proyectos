package main
func main()  {
	ln := &Number{}
	lw := &word{}

	ln.Add(3)
	ln.Add(6)
	ln.Add(8)
	ln.Add(9)
	ln.Add(3)
	ln.Add(83)
	ln.Add(34)
	ln.Add(4)
	ln.Add(33)
	ln.Add(3)

	lw.Set(1, "Hola1")
	lw.Set(2, "Hola2")
	lw.Set(3, "Hola3")
	lw.Set(4, "Hola4")


	var iterador MyIterator

	iterador = ln.GetIterator()
	iterador.First()
	for iterador.HasMore(){
		fmt.Println(iterador.Next())
	}

	iterador1 = lw.GetIterator()
	iterador1.First()
	for iterador1.HasMore(){
		fmt.Println(iterador1.Next())
	}

}