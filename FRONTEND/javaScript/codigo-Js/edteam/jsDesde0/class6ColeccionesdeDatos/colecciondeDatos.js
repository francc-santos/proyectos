/* Manipulacion de colecciones de datos */

/* Theme1 Metodos de array */
/**
 * Arrays, para hacer uso de los metodos del prototipo amigos tenemos que anteponer un (.)
 * (push) = aniade un valor en la ultima posicion
 * (pop) = quita un valor de la ultima posicion
 * (slice) =no modifica el array y se indica desde donde hasta uno despues de donde se quiere partir el array
 */

console.error("EJERCICIOS DE METODOS DE ARRAY");

let amigos = ["amigo1","amigo2","amigo3","amigo4","amigo5"]

amigos.push("amigo8")
console.log(`Es de la ejecucion de PUSH ${amigos}`);

amigos.pop()
console.log(`Es de la ejecucion de POP ${amigos}`);

let slicee = amigos.slice(0,3)
console.log(`Es de la ejecucion de SLICE ${slicee}`);

/* Theme3 Uso de forEach */
/**
 * (foreach) = para poder recorrer todas las posiciones de una array hay que averiguar si se puede limitar como en ruby, o se puede decir que su finalidad es hacer algo con los elmentos, retorna nodefinido
 * (map) = tiene la misma funcionalidad de foreach, pero tiene la cualidad de devolver un nuevo array nuevo rellenando el array con lo que io retorne en cada ciclo
 * 
 */

let datofe = amigos.forEach(amigo => console.log(`Hola amigo ${amigo}`));
console.log(datofe);

let datomp = amigos.map(amigo => `Hola amigo ${amigo}`);
console.log(datomp);


/* Theme5 Filter */
/**
 * Metodos que ejecutan al igual que map un ciclo pero son usados para diferentes objetivos
 * (filter) = filtrar contenido, solo los que cumplan con la condicion de la funcion anonima
 */

let numeros = [1,24,54,7,8,9,3,2]

numeros.map(num=>{num>20 ? console.log(num):console.log("ete no es mayor a 20");})
console.log(numeros.filter(num => num>20)); 

/* Theme6 Find , Include, Some , Every */
/**
 * (find) = devuelve el primer dato que da verdadero con la condicion
 * (some) = comprobar si al menos algun elemento de mi array cumple con una condicion
 * (every) = verificar que todos los elementos cumlen con una condicion
 * (inlude) = evalua que mi valor sea exactamente igual al que estoy buscando
 */

let datoFind = numeros.find(num=> num%2 === 1)
console.log(datoFind);

let datoInclude = numeros.includes(4)
console.log(datoInclude);

let datoSome = numeros.some(num => num<3)
console.log(datoSome);

let datoEvery = numeros.every(num => num>0)
console.log(datoEvery);

/* Theme7 Manipulacion de Strings */
/**
 * slice = cortar el string desde una posicion inicial a una final = al numero de caracteres apartir de la posicion inicial indicada , si no se indica la final llega al final de todo
 * split = divide el texto, mantener el texto pero dividido a partir de un caracter desde el que se quiera hacer la particion, devuelve un array, el caracter que se elija  es parte de la separacion
 * search = a partir de una expresion regular poder encontrar valores.
 */


let mistring = "string"

mistring.slice(2)
mistring.split("r")
mistring.toLocaleLowerCase

/* Theme8 Valores y atributos de los objetos */
/**
 * 
 */

let alumno = {
    nombre: "Beto",
    edad:21,
    suscriptor: false,
}

console.log(alumno.nombre);
console.log(alumno.edad);
console.log(alumno.suscriptor);

console.log(alumno["nombre"]);
console.log(alumno["edad"]);
console.log(alumno["suscriptor"]);

let valores = Object.values(alumno)
let atributos = Object.keys(alumno)
console.log(atributos);
console.log(valores);


/* Theme9 Math y date */
/**
 * Permiten tener datos de una forma mas facil
 * Math = valores matematicos 
 * Date = valores de fecha
 */

const VALOR = Math.random()*10
console.log(VALOR);

VALOR = Math.sin(.5)
console.log(VALOR);

const DT = new Date()
console.log(DT);
console.log(DT.getDay);

