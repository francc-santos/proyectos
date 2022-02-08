/* 1.- crear una inteface que nos permita crear diferentes flujos de trabajo */
package buuilder 

type Executer interface{
	// Obtiene todas las acciones que debe eecutar nuestro flujo de trabajo e implementa un metodo que ejecutar nuestro flujo
	loadAcctions(actions []int)
	Work()
}