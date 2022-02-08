/* -----------USO DE LA SINTAXIS DE JAVASCRIPT--------------- */

/* -->Theme1 USO DE LOS COMENTARIOS */

// Ete es un comentario de una linea 

/*  
Ete es un comentario de bloque
Ete es un comentario de bloque
Ete es un comentario de bloque
Ete es un comentario de bloque
*/

/**
 * es una nueva liena de comentario
 * es otra linea de comentario
 * una linea mas de comentario
 */


/* -->Theme2  Tipos de datos */

/**
 * Typeof nos ayuda a saber de que tipo de dato es un valor en especifico.
 */

console.log(typeof 50);/* number */
console.log(typeof 50.6);/* number */

console.log(typeof "Cadena de texto");/* string */
console.log(typeof 'Cadena de texto');/* string */
console.log(typeof `Cadena de texto`);/* string */

console.log(typeof false);/* bool */
console.log(typeof true);/* bool */

console.log(typeof ["lis","francisco","io"]);/* object */
console.log(typeof {
    nombre : "lis",
    apellido: "santos"
});/* object */
console.log(typeof null);

console.log(typeof undefined);


/* Theme3 Declaracion y asignacion de variables */

/**
 * Hasta ECMA 5 las varaibles se declaraban con la palabra reservada VAR daba muchos conflictos pq se tenia que usar tanto para constantes como para variables solo eran de un tipo.
 * Una DECALRACION es solomente indicar al programa que quieres reservar memoria para una variable.
 * Una ASIGNACION es cuando ya se le da el valor en concreto al espacio de memoria ya reservado.
 */

// En este caso es el tipo de ERROR undefined porque alumno no se sabe que es , si es una funcion, una variable, una constante etc.
// alumno2

// Aqui el valor es de tipo undefine
let alumno
console.log(alumno);
// Aqui el tipo es string por eso se dice que es de tipado dinamico
alumno = "iofdsfs"
console.log(alumno);

/* Theme4 Asignacion por referencia */

/** Esto es asignar una variable con otra variable, es como decirle copiale el valor a esta varaiable solo en este momento.
 * ABRIA QUE PROBAR CON PUNTEROS O ALGO ASI 
 */

let profesorr = "lis"
let alumnoo = profesorr
profesorr = "io"

console.log(profesorr);
console.log(alumnoo);


/* Theme5 Constantes */

const NOMBRE_EMPRESA = "miempresa"
