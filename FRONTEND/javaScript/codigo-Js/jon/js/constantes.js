    export const PI = Math.PI;

    export let usuario = "io";
    export let word = "qwerty";
    // pa que no haiga error de sintaxis
    export default word;

    // UNA FUNCION DEFAULT NO PUEDE PERTENECER A UNA FUNCION 
    // EXPRESADA
    // export default se refiere a que 
    // la funcion saludar se exporta automaticamente
    export function saludar (){
        console.log("hola modulos es6")
    }