/* Interface sujeto, que va a permitir registrar observadores, todas las clss que implementen la interface sujeto  permiten agregar observadores y notificalros*/

package main

type Subject interface{
	AddObserver(o Observer)
	// DelObserver(o Observer)
	NotifyObservers()
}