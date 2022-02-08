/* Theme 1 Objeto window */

console.log("algo");
window.console.log("algo")


/* Theme 2  */
// Usando los metodos del objeto window, osea usando el navegador

const form = document.getElementById('tester-form')

if(form){
    form.addEventListener('submit',()=>{
        let width = form.querySelector('#width')
        let height = form.querySelector('#height')
        let url = form.querySelector('#url')
        if(width&&height&&url){
            width = width.value
            height = height.value
            url  = url.value
        }

        window.open(url,url,`innerWidth=${width},innerHeight=${height}`)
    })
}


/* Set time out e interval  */

setTimeout(()=>{
    console.log("holsa");
},2000)

let contador = 0
const saludarMuchasVeces = setInterval(() => {
    contador++
    if(contador>1){
        console.log(`hola ${conatador} veces`);
    }else{
        console.log(`hola ${conatador} veces`);
    }

    if(contador === 20){
        clearInterval(saludarMuchasVeces)
    }
}, 1000);


