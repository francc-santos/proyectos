package main

type Gerente struct {}
/* Indicamos que NO tiene un sucesor */
func (g *Gerente) Autorizar(n int) {
	/* Checando si es la resposabilida del gerente */
		fmt.Println("Asesor autoriza porque ya son mas de 10000:", n)
}