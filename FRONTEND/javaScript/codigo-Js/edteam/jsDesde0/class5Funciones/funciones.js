/* Theme1 Sintaxis basica de una funcion */
/**
 * Una funcion que se utiliza para poder saludar
 */

console.error("EJERCIOCIO DE SINTAXIS");

function saludar() {
    console.log("Hola mi niño como has estado");
}

saludar()


/* Theme2 Parametros */
/**
 * Redefiniendo la funcion saludar que ahora tendra la un parametro nombre el cual indicara a quien estamos saludando
 */

console.error("EJERCIOCIO DE PARAMETROS");

function saludar(nombre){
    // Gracias a typecoercion en caso de que se pasara como entrada un number este se comportaria como un string para regresar una respuesta logica
    console.log(`Hola como estas ${nombre}`);
}
saludar("io")

/* Theme3 Valores de retorno */
/**
 * Las funciones en js por default devulven un valor undefine
 */

console.error("EJERCIOCIO DE RETORNO");

function saludar(nombre) {
    return `Eres el mejor ${nombre}`
}

console.log(saludar("yis"));


/* Theme4 Funciones de primera class */
/**
 * Funcion que demuestra que una funcion pude convertirse en un ciudadano de primer clase al asignar su ejecucion a una variable
 * Ademas un ejemlo donde podemos ver que tambien podemos asignar la definicion de la funcion a un variable y usar esta variable que ya se comporta como funcion y pasar parametros que necesite esta funcion 
 */

console.error("EJERCIOCIO DE FUNCIONES DE PRIMERA CLASS");

function obtenerNombreCompleto(nombre, apellidos) {
    return `${nombre} ${apellidos}`
}

let nombreCompleto = obtenerNombreCompleto("yis", "santos")
let nonbreCompleto = obtenerNombreCompleto

console.log(nombreCompleto);
console.warn(typeof nombreCompleto); /* string = ciudadano de primera class */

console.log(nonbreCompleto("io","santos"));
console.warn(typeof nonbreCompleto); /* function */

/* Theme5 Funciones anonimas */
/**
 * Podemos asignar la delcaracion de una funcion a una variable , y es por esto que las funciones permanecen anonimas porque pueden ser llamadas por cualquier variable.
 */

console.error("EJERCIOCIO DE FUNCIONES ANONIMAS");

let sumar = function(a,b,c){
    return `suma de ${a}, ${b}, ${c}, = ${a+b+c}`
}

console.warn(typeof sumar);
console.log(sumar(1,2,1));

/* Anonimas autoejecutables */

(function(a,b) {
    console.log(`Resultado autoejecutado ${a+b}`); 
}(2,4))


/* Theme6 Scope */
/**
 * La forma en que podermo saber en que momento puede ser modificada una variable en js, es mejor el uso de constantes para declara variables locales.
 */

console.error("EJERCIOCIO DE SCOPE");

const NOMBRE = "nombre-global"

const io = function(){
    const NOMBRE = "nombre-local"
    console.log(`height ${NOMBRE}`);
}

io()
console.log(NOMBRE);


/* Theme7 Funciones de flecha */
/**
 * Funciones de flecha =>
 */

console.error("EJERCIOCIO DE FUNCION DE FLECHA");

const SUM = (a,c) => console.log(`Es el resultado de la funcion SUM: ${a+c}`); 


SUM(2,4)