/* -------------USO DE LOS OPERADORES EN JS-------------- */

/**Operadores aritmeticos
 * suma (+)
 * resta (-)
 * multiplicacion (*)
 * division (/)
 * modulo (%)
 */

console.log("OPERADORES ARITMETICOS");

let valor1 = 5
let valor2 = 5
let suma = valor1+valor2
let resta = valor1-valor2
let multiplicacion = valor1*valor2
let division = valor1/valor2
let modulo = valor1%valor2

console.log(`El resulatado de sumar ${valor1} + ${valor2} es ${suma}`);
console.log(`El resulatado de restar ${valor1} - ${valor2} es ${resta}`);
console.log(`El resulatado de multiplicar ${valor1} * ${valor2} es ${multiplicacion}`);
console.log(`El resulatado de dividir ${valor1} / ${valor2} es ${division}`);
console.log(`El residuo de dividir ${valor1} % ${valor2} es ${modulo}`);

/**Operadores de asignacion
 * Uso del operador de asignacion de variables (=)
 * (+=) guarda la suma de un valor con el actual en la variable actual 
 * (-=) guarda la resta de un valor con el actual en la variable actual
 * (*=)
 * (/=)
 * (%=)
 * (**=)
 * Es como decirle gurda en esta variable el valor que tiene mas la operacion con otro valor y esto cubre una reasignacion.
 */

console.log("OPERADORES DE ASIGNACION");
valor2 %= valor1
console.log(`Este valor se calculo y asigno en la misma linea y en la misma variable ${valor2}`);
console.log(valor1);



/**Operadores de concatenacion
 * (+) En esecencia el operador de suma es usado tambien para las operaciones con cadenas de texto 
 */
console.log("OPERADORES DE CONCATENACION");
let nombre = "francisco"
let apellido = "Santos"
// Recordando que es una expresion culquier operacion guardada en una variable  
let fullName = nombre + ' ' + apellido
console.log(`La concatenacion fue guardada en una variable y asi es como queda ${fullName}`);

/**Operadores de comparacion
 * 
 */

console.log("OPERADORES DE COMPARACION");
console.log(`En este punto del programa el valor de valor1 es: ${valor1} y el valor de valor2 es: ${valor2}`);
console.log(`El resultado de comparar ${valor1} > ${valor2} es: ${valor1>valor2} `);
console.log(`El resultado de comparar ${valor1} < ${valor2} es: ${valor1<valor2} `);
console.log(`El resultado de comparar ${valor1} >= ${valor2} es: ${valor1>=valor2} `);
console.log(`El resultado de comparar ${valor1} <= ${valor2} es: ${valor1<=valor2} `);
console.log(`El resultado de comparar ${valor1} == ${valor2} es: ${valor1==valor2} `);
console.log(`El resultado de comparar ${valor1} != ${valor2} es: ${valor1!=valor2} `);
console.log(`El resultado de comparar ${valor1} === ${valor2} es: ${valor1===valor2} `);
console.log(`El resultado de comparar ${valor1} !== ${valor2} es: ${valor1!==valor2} `);

/**Operadores logicos
 * Los peradore logicos sirve para evaluar dos sentencias de una 
 */

console.log("OPERADORES LOGICOS");
console.log(`Resultado de valor1 = valor2 y valor2 = valor1 ${valor1===valor2 && valor2===valor1}`);
console.log(`Resultado de valor1 > valor2 o valor2 > valor1 es: ${valor1 > valor2 || valor2 > valor1}`);

/**Operadores unarios y ternarios
 * Para funcionar solo necesitan a si mismos esto en el caso de los operadores unarios, en el caso de los operadores ternerios son mas bien como una simplificacion de un if en una sola linea de codigo mas bien un if else
 * unarios : ++ -- 
 * ternarios : esto se es vercada? => algo, sino: algo mas
 */

console.log("OPERADORES UNARIOS Y TERNARIOS");
console.log(`Incrementando en 1 ${valor1} es : ${valor1++}`);
console.log(`Decrementando en 1 ${valor2} es : ${valor2--}`);

// Operador ternario 
console.log(`Es verdad que ${valor1} > ${valor2} = ${valor1>valor2} ? "Eso es verdad" : "No es verdad"`);

/**Type coercion
 * La capacidad que tiene cualquier lenguje de programacion de converti cualquier dato en otro tipo de dato.
 */

console.log("TYPE COERCION impreso por mi");

let a = 521
let b = "422"
let respuesta = a+b

console.log(`Es ejemplo de typecoercion ${respuesta}`);
console.log(`Es ejemplo de typecoercion ${typeof respuesta}`);/* string */

let c = 521
let d = "perro"
let respuestaa = c-d

console.log(`Es ejemplo de typecoercion ${respuestaa}`);
console.log(`Es ejemplo de typecoercion ${typeof respuestaa}`);/* NaN */

let e = true
let f = true
let respuestaaa = e+f

console.log(`Es ejemplo de typecoercion ${respuestaaa}`);
console.log(`Es ejemplo de typecoercion ${typeof respuestaaa}`);/* number */