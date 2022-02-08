package main

type Asesor struct {
	Sucesor Autoriza
}

func (a *Asesor) SetSucesor(s Autoriza){
	a.Sucesor = s
}

func (a *Acesor) Autorizar(n int) {
	/* Checando si es la resposabilida del asesor */
	if n <= 200{
		// logica para revisar si si o no 
		fmt.Println("Asesor autoriza:", n)
		return 
	}else{
		a.Sucesor.Autorizar(n)
	}
}

