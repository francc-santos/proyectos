/**
 * Para la manipulaacion de JS es mejor el uso de Id's
 * En caso de manipular una buna cantidad de elementos es mejor indicar una clase que represente que se va a manipular como ponerJS en esta o algo que indique se va a ser manipulada con JS  */

const showMenu= (toogleId, navId)=>{
    const toogle = document.getElementById(toogleId),
            nav = document.getElementById(navId)
    /* Es mejor verificar que exisntan si no lo mas probable es que se bloquee todo los scripts */
    if(toogle && nav){
        toogle.addEventListener('click', () =>{
            nav.classList.toogle('show')
            /* Lo unico que se hace es aniadirle o quitarle la class y css es el que realizara las acciones  */
        })
    }
}

showMenu('main-menu-toogle__hamburger-js','main-nav-js')