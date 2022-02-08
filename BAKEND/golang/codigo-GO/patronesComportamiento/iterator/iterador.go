package main

/* Interface iterador donde recaén los metodos que obligatoriamente tienen que cumplir las class que implementen estas */
type MyIterator interface{
	/*  Metodo first, llega al primer eleento del conjunto, cada una sabe como hacerlo */
	First()
	/* Tiene que devolver algo que cumpla con interface , en go puede ser culauiqr tipo de dato, donde no se sabe que devuleva cualquier tipo de dato */
	Next() interface{}
	HasMore() bool
	
}