/* Ejemplos de la propiedad de Style */
document.body.style.background = 'red'

/* En caso de que se quieran dar mas estilos */
/* 1era Forma adicion de una clase */
document.body.classList.add('red')
/* Ya desde el Css podemos dar las propiedades a la class red, solo es recomendable hacer estilos con js cundo estos sean calculados  */

/* 2da forma Creacion de una objeto que podemos darle los estilos posteriormente */
const styles = `
    background: green;
    color: white;
    margin-top: 4em;
    border-bottom: 5px solid black;
`
/* Sobreescritura estilos inline existentes */
document.getElementById('title').setAttribute('styles',styles)

/* Agregando a los estilos inline existentes  que no es muy recomendada porque entran en coflicto los estilos de css ylos que hemos definido en Js porque los inline son mas especificos que los linkeados en una hoja de estilos */document.getElementById('title').style += `; ${styles}`

/* En caso de que esto se construyera desde un objeto */

let styles = {
    background: 'green',
    color: 'white',
    "margin-top": '4em',
    "border-bottom": '5px solid black'
}

/* Trabajacion de Js con variables de CSs 
lectura y modificacion de las variables Css
*/
console.log(getComputedStyle(document.documentElement
).getPropertyValue('--varible-css'));/* Devuleve las variables que se encuentren en la raiz del documento */

/* Sobreescritura de variables  */

document.documentElement.style.setProperty('--name', 'Beto')




/* Modificacion de las media queries con javaScript */
const mediumBp = matchMedia('(min-width:800px)')

const changeColor = mql =>{
    mql.matches
        ? document.body.style.background = 'red'
        : document.body.style.background = 'yellow'
}
changeColor(mediumBp)
mediumBp.addListener(changeColor)