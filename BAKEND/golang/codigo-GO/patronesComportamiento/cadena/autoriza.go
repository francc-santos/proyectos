/* Interface que todos los repsonsables inplementaran para poder asignar la responsabilidad a cada uno de ellos */
package main 

type Autoriza interface {
	Autorizar(n int)
}