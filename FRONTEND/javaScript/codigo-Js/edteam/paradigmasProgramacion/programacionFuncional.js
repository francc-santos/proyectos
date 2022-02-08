const sumar = a =>{
    return b => {
        return a+b 
    }
}
const sumar = a => b => a+b 

/* f(x) = x+g(x) */
const sumaAlSeis = sumar(6)
console.log(sumaAlSeis(4))
console.log(sumaAlSeis(3))

const factorial = n =>{
    if(n===1 || n==0){
        return 1
    } 
    return factorial(n-1) * n 
}


const factorial2 = n => (n===1 || n==0) ? 1 : factorial(n-1) * n 


console.log(factorial(5));
console.log(factorial2(5));



const procesar = n =>{
    const x = factorial(n)
    return b =>{
        return x*b
    }
}

// en este caso el factorial de 5 ya se encuentra procesado.
const factorialCinco = procesar(5)
console.log(factorialCinco(2));
console.log(factorialCinco(4));

// Podria curdarse directemnte el resultado en una variable , pero en este caso se podria incurrir en un problema de logica. y con lo funcional no abra problema de logica porque ya esta abstraido en la funcion.
