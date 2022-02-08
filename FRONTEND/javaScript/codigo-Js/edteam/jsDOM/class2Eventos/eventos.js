/* Theme eins Eventos */

function holamundo(){
    console.log('hola mundo');
}

/** Escuchador de evento en el h1 que dispara una alerta cuando se ejecuta un click sobre el 
 */

const title = document.getElementById('indice'),
    alertMundo = () => console.log('hola mundo que se ejecuto desde el click del h1')

title.addEventListener('click',alertMundo)

/* Theme zweit Eventos del mouse */

title.addEventListener('dblclick',alertMundo)

/**
 * Creacion de nuestro propio menu contextual 
 */

const createMenu = e =>{
    const menu = document.createElement('div'),
    prevMenu =document.getElementById('context-menu')

    menu.id = 'context-menu'
    menu.textContent = 'Soy un menu contextual'

    if(prevMenu) document.body.removeChild(prevMenu)
    document.body.appendChild(menu)

    menu.style.pading = '1rem'
    menu.style.background = '#eee'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageY}px`
}

document.addEventListener('contextmenu', e=>{
    createMenu(e)
    e.preventDefault()
})

/* Theme drei Eventos de formulario */
// Espera a que cargue todo el dom y despues haces lo que se encuentra dentro de la funcion, es cuando llamamos a los elementos antes de que existan.
window.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('form'),
    remembrePassword = document.getElementById('remember-password')

    form.addEventListener('submit',()=>{
        console.log('Ha enviado el formulario');
    })

    remembrePassword.addEventListener('change', e=>{
        if(e.target.checked){
            console.log('El campo ha sido marcado');
        }else{
            console.log('El usuario NO quiere recordar su contrasenia');
        }
    })
})


/* Theme vier Propagacion de eventos */
// podemos seleccionar cada elmento div con un id especifico como en las siguietes linaeas 
/* const div1 = document.getElementById('div-1'),
    div2 = document.getElementById('div-2'),
    div3 = document.getElementById('div-3')

    div1.addEventListener('click', e =>{
        console.log( );
    })
 */

// o podemos seleccionar todos los divs de 

document.querySelectorAll('div').forEach(el =>{
    el.addEventListener('click',e=>{
        console.log(`HIsiste click en el elemento ${e.target.id}`);
        e.stopPropagation() 
    })
})