/* Theme uno DOM traversing*/

console.warn('Ejercicio de DOM traversing que esNo se puede acceder a este sitio recorrer el dom a partir de un elmento y de este ir a los hermanos, hijos y padres');
const parent = document.querySelector('.parent')

console.log(parent.children);
console.log(parent.hasChildNodes());

console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.parentNode);
console.log(parent.parentElement);

/* Theme due Insert before() */
console.warn('Ejercios de insert before, no solo apppend child que es al final del documento sino que es antes de un elemento seleccionado ');

/* Recordando como se puede insertar une elemento con appendchild, primero se debe de crear un elemento y despues insertarlo lo que  lo podra en el ultmo elemento del documento  */
const newElement = document.createElement("h2")
newElement.textContent = "SOy un nueveoi elemento insertado con appendchild"
parent.appendChild(newElement)
=
/* Insercion del mismo elemento pero ahora con al funcion de insertbefore() */
console.warn("Insercion de un nuevo elemento desde la funcion de insertbefore(nuevo, elementoSiguiente)");

const childs = Array.from(parent.children),
      childParent  = childs.filter(child => child.children.length>0)[0],
      grandSons  =Array.from(childParent.children),
      grandSon3 = grandSons.filter(child=> child.textContent.trim()==="Nieto 3")[0]

      childParent.insertBefore(newElement,grandSon3)

/* Theme tre Ejercicio de InsertBefore()*/
const post = document.getElementById('post')
const ad  = document.createElement('h2')
    ad.textContent = 'Soy un anucion que se va insertar en la mitad de los parrafos del articulo'
// podemos seleccionar no solo los parrafos sino todos los hijos de del artile.
    //   postParagraphs = post.querySelectorAll('p')

const getMiddleChild = element => {
    const childs = element.children,
        l = childs.length,
        i = Math.floor(l/2)
    return childs[i]
}

const mitadChild = getMiddleChild(post)
console.log(mitadChild);
post.insertBefore(ad,mitadChild)

/* Theme quattro */
const teachers = ['Alexys','Beto','Jon']

const teacherList = document.createElement('ul'),
      teacherListContainer = document.getElementById('lista-fragment'),
      teacherListFragment = document.createDocumentFragment()

      teacherListContainer.appendChild(teacherList)

      teachers.forEach( teacher => {
        const li = document.createElement('li')
        teacherListFragment.appendChild(li)
        li.textContent = teacher
      })

/* Theme cinque */

const template = document.getElementById('plantilla')

const newTemplate = template.content.cloneNode(true)
      newTemplate.querySelector('h2').textContent = 'Un h2 con estructura copia'
      newTemplate.querySelector('p').textContent = 'Un p con estructura copiada'

      document.getElementById('container-template').appendChild(newTemplate)

/* Theme sei */

// 1
const title = document.getElementById('style')

title.style.color = 'red'


const mediumBp = matchMedia('(min-width: 540px) and (orientation: landscape)')

const changeColor = () =>{
    if(mediumBp.matches){
        document.body.style.background  = 'darkmagenta'
    }else{
        document.body.style.background = 'darkorange'
    }
}

// 2
addEventListener('resize',changeColor)
addEventListener('DOMContentLoaded',changeColor)

// 3
console.log(getComputedStyle(title).fontSize);
// position

// 4 
console.log(title.getBoundingClientRect());

