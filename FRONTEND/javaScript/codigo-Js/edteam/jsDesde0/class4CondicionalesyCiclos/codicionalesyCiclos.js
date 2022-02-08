/* Theme1 Los codicionales  */

/**
 * Ejercicio de condiciones para poder entrar a una fiesta, es si es mayor de edad y ademas menor de 65 puede llegar a la fiesta
 */

let persona = "Juan Alexis"
let edad = 25

if(edad >=18 && edad<=65){
    console.log(`${persona} puedes venir a la fiesta`);
}


/* Theme2 El if-else */

/**
 * Con el mismo ejemplo daremos una respuesta en caso de que el usuario no cumpla con la condicion.
 */

persona = "io"
edad = 28

if(edad >=18 && edad<=65){
    console.log(`${persona} puedes venir a la fiesta`);
}else{
    console.log(`${persona} no puede venir a la fiesta`);
}

/* Theme3 If Else if */
/**
 * En caso de que tangas permiso de tus padres puedes entra, es como decir no cumpliste PERO si entonces tambien puedes entrar
 */

let permiso = false
persona = "franccc"
edad = 13

if(edad >=18 && edad<=65){
    console.log(`${persona} puedes venir a la fiesta`);
}else if(permiso && edad<18){
    console.log(`${persona} puedes pasar con el permiso de tus padres`);
}else if(edad>65){
    console.log(`${persona},no ps no se pudo joven`);
}else{
    console.log(`No cumple con la edad y no tienes permiso`);
}

/* Theme4 Switch */
/**
 * Que personaje de dragonball z eres
 * Si eres fuerte y comelon eres goku
 * Si eres veloz y egoista eres vegeta
 * Si eres pequeño y debil eres Krilin
 * Si no eres ninguno, eres una sabandija
 */

let personalidad = "Pequeño y debil"

switch(personalidad){
    case "Fuerte y comelon":
        console.log("Eres goku");
        break
    case "Veloz y egoista":
        console.log("Eres veggeta");
        break
    case "Pequeño y debil":
        console.log("Eres krilin");
        break
    default:
        console.log("Eres una sabandija");
}


/* Theme5 Ciclos for */
for(i=0;i<=10;i++) {
    console.log(`La iteracion que lleva ${i}, el doble de  la iteracion  ${2*i} aqui esto no es reasigancion solo es una operacion`);
}


/* Theme6 while */

let j=0
while(j<=10){
    console.log(`Como no, la tabla del 8 en ${j} x 8 = ${j*8}`);
    j++
}
