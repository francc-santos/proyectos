package main

func main()  {
	a:= &Asesor{}
	c:= &Coordinador{}
	g:= &Gerente{}

	a.SetSucesor(c)
	c.SetSucesor(g)

	d := 0
	fmt.Print("Digite la cantidad ")
	fmt.Scan(&d)

	a.Autorizar(d)

}