/* Theme3 Seleccionar nodos */
const title = document.getElementById('indice')
title.style.color = 'darkblue'


/* const tittlee = document.querySelector('#indice')
title.style.background = 'darkgrenn' */

/**
 * Seleccionando los elementos de la lista con elementos que tienen nodo texto 'ejemplo'
 * 
 */

const listaSelector = document.querySelectorAll('ul li'),
    secondItems = document.querySelectorAll('ul li:nth-child(2)'),
    list = document.getElementById('listaId'),
    classs = document.querySelector('.listaSelector')


console.log(listaSelector);
console.log(listaSelector[0]);
console.log(secondItems);
console.log(list.querySelector('li:last-child'));
console.log(classs);

/* Theme4 Colecciones de nodos */

const items = document.querySelectorAll('li'),
    listt = document.querySelector('ul')

    console.log(items); /* nodeList(#elemnetos)[li,li,...] */
    console.log(listt); /* elementoHtml */

const nodelist = Array.from(document.querySelectorAll(li))

nodelist.map(el=>el.style.background = 'yellow')

/* CON un for of si que se pude recorrer un nodelist de una */
nodelist.map(el=>{
    if(el.textContent.trim().toUpperCase() === 'REMOBIBLE'){
        el.remove()
    }
})


/* Theme5 Atributos */

title = document.getElementById('indice')
console.log(title.getAttribute('id'));
console.log(title.getAttribute('class'));
console.log(title.getAttribute('value'));

// lo mejor es validar si es que existe el elemento sino se romperia todo el codigo solo si no esquivocamos en llamar a un aelemento
/* title = document.getElementById('text') 
    title.style.background = 'yellow' === null.style.background = 'yellow'
esto es null en este caso porque no tengo elementos que tenga el id text, por lo que se dentendria la ejecucion normal del programa  */

const listta = document.querySelector('ul')
listta.setAttribute('id','no-ordenada')

listta.classList.add('lista','lista-noordenada')


/* Theme6 COntenido */
title = document.getElementById('indice')
console.log(title.textContent);
console.log(title.innerHTML);
console.log(title.outerHTML);


/* Theme7 Creacion de elementos en HTML */
const insersion = document.createElement('Es un texto que se va a insertar en el dom')

insersion.textContent('es un texto que quiro insertar  en el DOM')
insersion.classList.add('textou')
insersion.id = 'identificador-texto'
// Hasta aqui sigue en memoria
document.body.appendChild(insersion)
