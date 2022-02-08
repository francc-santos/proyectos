/* CSSOM, es el modelos de objetos de CSs, que es parecido DOM que es para HTML */

/**
 * getComputedStyle(element), devuleve un objeto con todas las propiedades CSs despues que el navegador las calculo.
 * 
 * getComputedStyle(elemnt).getPropertyValue('--variable')
 * Para sobreescribir 
 * element.style.setProperty('--variable','new-value')
 */

const rootStyle = getComputedStyle(document.documentElement)

/* Imprime todas las propiedades de :root */
console.log(rootStyle);



/* E5 codigo para la generacion de la barra de progreso */

// identificando el scroll maximo
console.log(document.documentElement.scrollHeight);
const h1=document.documentElement.scrollHeight;

// aLTURA DE LA pantalla
console.log(document.documentElement.clientHeight);
const h2 = document.documentElement.clientHeight;

const scrollunit = (h1-h2)/100

const roostyl  = document.documentElement.style

addEventListener(scroll,()=>{
    roostyl.setProperty('--width',Math.round(scrollY/scrollunit))
    console.log(Math.round(scrollY/scrollunit));
})


/* EJERCICIO de rgb */
const red = document.getElementById('red'),
      green = document.getElementById('green'),
      blue  = document.getElementById('blue'),

      rootStyl = document.documentElement.style
      

/* Añadiendo una funcion de cambio para cada label                                            */
const changeColorRed  = e =>{
    // console.log(e.target.value);
    rootStyl.setProperty('--red',e.target.value)
}
red.addEventListener('change',e  =>{
    changeColorRed(e)
})
red.addEventListener('mousemove',e=>{
    changeColorRed(e)
})

const changeColorgreen  = e =>{
    // console.log(e.target.value);
    rootStyl.setProperty('--green',e.target.value)
}
green.addEventListener('change',e  =>{
    changeColorgreen(e)
})
green.addEventListener('mousemove',e=>{
    changeColorgreen(e)
})

const changeColorblue  = e =>{
    // console.log(e.target.value);
    rootStyl.setProperty('--blue',e.target.value)
}
blue.addEventListener('change',e  =>{
    changeColorblue(e)
})
blue.addEventListener('mousemove',e=>{
    changeColorblue(e)
})