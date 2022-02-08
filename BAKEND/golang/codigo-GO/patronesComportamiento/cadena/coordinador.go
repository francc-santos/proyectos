package main

type Coordinador struct {
	Sucesor Autoriza
}
/* Indicamos que tiene un sucesor */
func (c *Coordinador) SetSucesor(s Autoriza){
	c.Sucesor = s
}

func (c *Coordinador) Autorizar(n int) {
	/* Checando si es la resposabilida del asesor */
	if n <= 10000{
		// logica para revisar si si o no 
		fmt.Println("Asesor autoriza:", n)
		return 
	}else{
		c.Sucesor.Autorizar(n)
	}
}