package main
/* ETE ES UN OBSERVADOR  */
type Correo struct{

	func (e *Correo) Notify(m string){
		fmt.Println("Estoy enviando correo con la data:", m)
	}
}