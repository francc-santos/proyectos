/* console.log(window);
console.log(document);

let texto = "estoy hablando desde el navegador";
const hablar = (texto)=>
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */
// ++++++++++++++++++++++++++TERMINA API DEL DOM+++++++++++++++++

/* console.log("++++++++elementos del dom+++++++");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection);    
}, 3000);
document.write("<h2>saca las panochas perro</h2>")
 */
// +++++++++++++TERMINA LAS PARTES DEL DOM+++++++++++++++

// nodos,elementos y selectores

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.warn("+++++++++++++++++++++++++++++++");
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.error("metodos que comparten con los arreglos");
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((e)=>console.log(e));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card"));
 */
// +++++++++++++++++TERMINAN NODOS ELEMENTOS Y SELECTORES+++++++++++++

// ATRIBUTOS Y DATA ATRIBUTOS, los data atributos son los que permite
// ser creados por mi mismo
/* 
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
 */
// cambiando le atributo a en
/* document.documentElement.lang="en";
console.log(document.documentElement.lang);
 */ //cambiendp el valor del lenguge denew
/* console.error("se divide el cambio del atributo de lang con set y asignacion")
document.documentElement.setAttribute("lang","es");
console.log(document.documentElement.lang);

console.clear(); */

// $, para sabe rque esta variable hce referencia al DOM
/* const $linkDom = document.querySelector(".link-dom");
console.log($linkDom);

$linkDom.setAttribute("target","_blanck"); */
// rel no openner dice que la pagina no esta afiliada
/* console.log($linkDom.hasAttribute("rel"));
$linkDom.setAttribute("rel","noopener");
$linkDom.setAttribute("href","https://www.diariobitcoin.com/criptomonedas/pornhub-anuncia-que-solo-aceptara-criptomonedas-por-concepto-de-su-contenido-premium/");
console.log($linkDom.hasAttribute("rel"));
*/
//DATA-ATRIBUTES
/* 
console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description","modelo de objeyto del documento");
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-description"));
console.log($linkDom.removeAttribute("data-description"));
console.log($linkDom.hasAttribute("data-description")); */
// +++++++TERMINA LA DESCRIPCION DE LOS ATRIBUTOS Y DATA ATRIBUTES+++++++++

// ESTILOS Y VARIABLES CSS,
/* 
const $linkDom = document.querySelector(".link-dom"); */
// notacion del punto
/* console.log($linkDom.style);
 */
// notacion del getattribbute
/* console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
 */
// console.log(window.getComputedStyle($linkDom))
/* console.log(window.getComputedStyle($linkDom).getPropertyValue("color"));

$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
$linkDom.style.width="50%";
$linkDom.style.textAlign="center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight="auto";
$linkDom.style.padding="1rem";
$linkDom.style.borderRadius=".5rem"

console.log($linkDom.getAttribute("style"));
 */
// variables , propiedades configurables de css

/* const $html = document.documentElement,
$body =document.body;

let varDarkColor= getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor= getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
 */ // al mover eta line antes de posar le valor al body se cambiara el color a pink
/* $html.style.setProperty("--dark-color","pink"); */
// +++++++TERMINA ESTILOS Y VARIABLES CSS++++++++++++++++

// CLASES CSS, acceso del nombre , el arreglo de las clases del elemento en cuestion

// const $card = document.querySelector(".card")

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// console.error("añadiendo la clase de rotate a la variable $card")
// $card.classList.add("rotate-45");
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// console.warn("quitando la clase a la variable $card");
// $card.classList.remove("rotate-45")
// console.log($card.className);
// console.log($card.classList);
// console.error("iniciacion del metodo toggle que permite saber si esta en un estado u otro porque lo cambia de estado");
// // toggle permite saber en que estado se enecuentra la clase
// $card.classList.toggle("rotate-135")
// console.log($card.classList.contains("rotate-135"));
// $card.classList.toggle("rotate-135")
// console.log($card.classList.contains("rotate-135"));
// // se remplasa una clase por otra
// console.warn("se remplaza la calse de 45 por la de 135")
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45","rotate-135");
// $card.classList.add("opacity-80","sepia")

// ********TERMINA LOS METODOS PARA MODIFICAR CLASES DE CSS DESDE JS++++++++

// // TEXTO Y HTML

// const $whatsIsDOM= document.getElementById("que-es");

// let text = `
// <p>
// el modelo de objetos deldocumento (<b><i>DOM-document object model<i></b>)es una API para documentos html y xml
// </p>
// <p>
// este provee una representacino estructural del documento, permitiendo modificar
// su contenido y presentacion visual mediante codigo js.
// </p>
// <p>
// <mark> El dom no es parte de la especificacion de js es una api para los navegadores</mark>
// </p>
// `;

// setTimeout(() => {
//     $whatsIsDOM.innerText = text;
// }, 0);

// setTimeout(() => {
//     // pa sacar solo el txte
//     $whatsIsDOM.textContent = text;
// }, 3000);

// setTimeout(() => {
// // para sacar solo el html
//     $whatsIsDOM.innerHTML = text;
// }, 6000);

// setTimeout(() => {
//     // corrige lo de los tres parrafos en los elementos del html
//     $whatsIsDOM.outerHTML = text;
// }, 8000);

//+++++++++++TERMINA LA SALIDA DE TEXTO JS EN HTML++++++++

// RECORRIDO DEL DOM, un nodo son los elementos , que son etiquetas de html
// eto es mediante el recorrido de elementos

// const $cards = document.querySelector(".cards");

// console.log($cards); 
// console.log($cards.children[3]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// // ansestro mas cercano
// console.log($cards.closest("body"));
// // tomando la etiqueta hijo 3 cual es la section mas cercana
// console.log($cards.children[3].closest("section"));

// ++++++++TERMINA EL RECORRIDO DEL DOM+++++++++++++++++++++++++++++

// CREAR ELEMENTOS Y FRAGMENTOS DINAMICAMENTE CON JS

// const $figure = document.createElement("figure"),
// $img = document.createElement("img"),
// $figcaption = document.createElement("figcaption"),
// $figcaptionText = document.createTextNode("Animals"),
// $cards = document.querySelector(".cards"),
// $figure2 = document.createElement("figure");

// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","Animals");
// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `
// <img src= "https://placeimg.com/200/200/tech" alt= "Tech">
// <figcaption>Tech</figcaption>
// `;
// $figure2.classList.add("card");
// // agregando al nodo tarjetas la figura2 
// $cards.appendChild($figure2);

// // agregar muchos contenidos a la ves
// // si genera un nodo
// const estaciones = ["primavera","Verano","Otoño","Invierno"],
//     $ul =document.createElement("ul");
//     document.write("<h3>Estaciones del año</h3>");
//     document.body.appendChild($ul);
//     estaciones.forEach(el =>{
//         const $li= document.createElement("li");
//         $li.textContent = el;
//         $ul.appendChild($li);
//     });

// const continentes = ["africa","america","asi","europa"],
// $ul2 = document.createElement("ul");

// // no se crea un nodo html
// document.write("<h3>Continentes del mundo</h3>")
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// // += para ir agregando de uno en uno
// continentes.forEach(el=>$ul2.innerHTML +=`<li>${el}</li>`)

// // con la tecnica del fragmento se guarda el espacio de una para todos los
// // elementos del dom
// const meses = ["enero","febrero","marzo","abril","mayo","junio","juil",
// "agosto","septiembre","octubre","noviembre","diciembre"],
// $ul3 = document.createElement("ul"),
// // variable del dom que se genera dinamicamente
// $fragment = document.createDocumentFragment();
// meses.forEach(el=>{
//     const $li =document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });

// document.write("<h3>Meses del añio</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);
// +++++++++TERMINA LA INSERCION DE ELEMENTOS Y FRAGMENTOS EN EL DOM++++++++++
// +++++++++++FIGESE EN LOS FRAGMENTOS+++++++++++++++++++++++ 

// // TEMPLATES HTML, etiqueta que sirve para estructurar el contenido html , que se convierta en dinamico

// // se genero una etiqueta template en el html
// // no se renderiza en el dom , porque las etiquetas no se renderizan en el dom
// // es como un modelo para generar etiquetas
// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//     {
//         title:"Tecnologia",
//         img:"https://placeimg.com/200/200/tech",
//     },
//     {
//         title:"Animales",
//         img:"https://placeimg.com/200/200/animals",
//     },
//     {
//         title:"Personas",
//         img:"https://placeimg.com/200/200/people",
//     },
//     {
//         title:"Naturaleza",
//         img:"https://placeimg.com/200/200/nature",
//     },
//     {
//         title:"Arquitectura",
//         img:"https://placeimg.com/200/200/arch",
//     },
//     ];

//     cardContent.forEach(el=>{
//         $template.querySelector("img").setAttribute("src",el.img);
//         $template.querySelector("img").setAttribute("alt",el.title);
//         $template.querySelector("figcaption").textContent = el.title;
//         // al poner el tru esta copiando toda la estructura
//         let $clone = document.importNode($template,true);
//         $fragment.appendChild($clone);
//     });
//         $cards.appendChild($fragment);
// // TERMINA LAS TEMPLATES HTML 
    
// MODIFICACION DE ELEMENTOS 

    // const $cards = document.querySelector(".cards"),
    //     $newCard = document.createElement("figure"),
    //     $cloneCards = $cards.cloneNode(true);

    //     $newCard.innerHTML=`
    //     <img src="https://placeimg.com/200/200/any" alt="Any">
    //     <figcaption>Any</figcaption>
    //     `;
    //     $newCard.classList.add("card");

    //     // $cards.replaceChild($newCard,$cards.children[2]);
    //     // insertarlo sin remplazar , solo despalzando
    //     // $cards.insertBefore($newCard,$cards.firstElementChild);
    //     // eliminando los elementos del dom
    //     // $cards.removeChild($cards.lastElementChild);
    //     document.body.appendChild($cloneCards)

// +++++++++TERMINO CLONADO DE ELMENTOS COMO JQWERY++++++++++++

// // MODIFICANDO ELEMENTOS DE LA MANERA CHILA,

//     // .insertAdjacent...
//     //     .insertAdjacentElement(position,el)
//     //     .insertAdjacentHTML(position,html)
//     //     .insertAdjacentText(position,text)
    
//     // Posiciones:
//     //     beforebegin(hermanoAnterior)
//     //     afterbegin(primerHijo)
//     //     beforeend(ultimoHijo)
//     //     afterend(hermanoSiguiente)

//         const $cards = document.querySelector(".cards"),
//         $newCard = document.createElement("figure");
//         $newCard1 = document.createElement("figure");
//         $newCard2 = document.createElement("figure");
//         $newCard3 = document.createElement("figure");
//         $newCard4 = document.createElement("figure");

//         $newCard.innerHTML=`
//         <img src="https://placeimg.com/200/200/any" alt="Any">
//         <figcaption>Any</figcaption>
//         `;
//         $newCard.classList.add("card");

//         $newCard1.innerHTML=`
//         <img src="https://placeimg.com/200/200/any" alt="Any">
//         <figcaption>Any1</figcaption>
//         `;
//         $newCard1.classList.add("card");

//         $newCard2.innerHTML=`
//         <img src="https://placeimg.com/200/200/any" alt="Any">
//         <figcaption>Any2</figcaption>
//         `;
//         $newCard2.classList.add("card");

//         $newCard3.innerHTML=`
//         <img src="https://placeimg.com/200/200/any" alt="Any">
//         <figcaption>Any3</figcaption>
//         `;
//         $newCard3.classList.add("card");

//         $cards.insertAdjacentElement("beforebegin",$newCard);
//         $cards.insertAdjacentElement("afterbegin",$newCard1);
//         // con las end se agregan como hERMANO de la clase
//         $cards.insertAdjacentElement("afterend",$newCard2);
//         $cards.insertAdjacentElement("beforeend",$newCard3);

//         let contentCard=`
//         <img src="https://placeimg.com/200/200/any" alt="Any">
//         <figcaption></figcaption>
//         `;
//         $newCard4.classList.add("card");

//         $newCard4.insertAdjacentHTML("beforeend",contentCard);
//         $newCard4.querySelector("figcaption").insertAdjacentText("afterbegin","any4")
//         // $cards.insertAdjacentElement("afterbegin",$newCard4)
//         // otra forma de hacer esta insercion ta
//         $cards.prepend($newCard4);
//         // $cards.append($newCard4);
//         // $cards.before($newCard4);
//         // $cards.after($newCard4);
// ++++++++++++++++++++TERMINA LA INSERCION CHULA DE ELEMENTOS++++++

// MANEJADORES DE EVENTOS, tres maneras de definir los eventos en js
// 
//     // cuando una funcion se convierte en un manejador de envento
//     // se puede acceder a un objeto (es el evento con : event)
//     function holaMundo(){
//         alert("hola mundo");
//         console.log(event);
//     }

//     const $eventoSemantico = document.getElementById("evento-semantico");
//     const $eventoMultiple = document.getElementById("evento-manejador-multiple");
// // sin los parentesis porque se ejecuto asi nomas
//     $eventoSemantico.onclick = holaMundo
//     // las funciones anonimas que se ejecutan asi no puden tener parametros 
//     // 
//     $eventoSemantico.onclick = function (e){
//         alert("hola mundo manejador de eventos semanticos");
//         console.log(e);
//         console.clear();
//     };

//     $eventoMultiple.addEventListener("click",holaMundo);
//     $eventoMultiple.addEventListener("click",(e)=>{
//         alert("hola mundo manejador de evento multiple");
//         console.log(e);
//         console.log(e.type);
//         console.log(e.target);
//         console.log(event);
//     });

// ++++++++++++++TERMINA MANEJADORES DE EVENTOS +++++++++++++++

//     // eventos con parametros y remover eventos
//     const $eventoMultiple = document.getElementById("evento-manejador-multiple");

//     function holaMundo(){
//         alert("hola mundo");
//         console.log(event);
//     }

//     function saludar(nombre="desconocido"){
//         alert(`hola como ta ${nombre}`)
//     }
// // para pasar parametros, dejarle el manejador a una arrow function
//     $eventoMultiple.addEventListener("click",()=>{
//         saludar();
//         saludar("saca las panochas perro");
//     });
//     $eventoMultiple.addEventListener("click",holaMundo);
//     $eventoMultiple.addEventListener("click",(e)=>{
//         alert("hola mundo manejador de evento multiple");
//         console.log(e);
//         console.log(e.type);
//         console.log(e.target);
//         console.log(event);
//     });

//     const $eventoRemovedor = document.getElementById("evento-remover");

//     const removerDobleClick = (e)=>{
//         alert(`removiendo el tipo de evento ${e.type}`);
//         console.log(e);
//         $eventoRemovedor.removeEventListener("dblclick",removerDobleClick);
//         // disable te atenua el color del boton
//         $eventoRemovedor.disabled = true;
//     }

//     $eventoRemovedor.addEventListener("dblclick",removerDobleClick);

// +++++++++++TERMINA LOS PARAMETRSO EN FUNCIONES Y REMOVER ELEMENTOS+++++++

// FLUJOS DE EVENTOS, como se desencadenan los enventos
// generalmente son desde el centro ajuera

    // const $divsEventos = document.querySelectorAll(".eventos-flujo div");

    // function flujoEventos(e){
    //     console.log(`hola ${this.className}, el click lo arigino ${e.target.className}`)
    // }
    // console.log($divsEventos);

    // $divsEventos.forEach(div=>{
    //     // fase de bubuja
    //     // div.addEventListener("click",flujoEventos,false);
    //     // fase de captura
    //     // div.addEventListener("click",flujoEventos,true);
    //     div.addEventListener("click",flujoEventos,{
    //         // solo pertite que se ejecute una vez
    //         once: true,
    //     });
    // });
// ++++++++++++++TERMINA EL FLUJO DE EVENTOS DE ELEMENTOS HTML+++++++

    // // STOPPROPAGATION & PREVENTDEFAULT 
    // // para darle tiempo a los procesos se ejecuten
    // const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    // $linkEventos = document.querySelector(".eventos-flujo a");

    // function flujoEventos(e){
    //     console.log(`hola ${this.className}, el click lo arigino ${e.target.className}`)
    //     e.stopPropagation();
    // }
    // console.log($divsEventos);

    // $divsEventos.forEach(div=>{
    //     // fase de bubuja
    //     div.addEventListener("click",flujoEventos);
    //     // fase de captura
    //     // div.addEventListener("click",flujoEventos,true);
    // });

    // $linkEventos.addEventListener("click",()=>{
    //     alert("hola saca las panochas perro");
    //     // prevenir las acciones por defecto
    //     e.preventDefault();
    //     e.stopPropagation();
    // })
// ++++++++++TERMINA DETENER LA PROPAGACION DE LOS EVENTOS ++++++++++++

// DELEGACION DE LOS EVENTOS, no es optimo asignar un listener por cada elemento
// se asigna a un padre

    // function flujoEventos(e){
    //     console.log(`hola ${this.className}, el click lo arigino ${e.target.className}`)
    // }

    // document.addEventListener("click",(e)=>{
    //     console.log("click en",e.target);
        
    //     if(e.target.matches(".eventos-flujo div")){
    //         flujoEventos(e);
    //     } 

    //     if(e.target.matches(".eventos-flujo a")){
    //         alert("hola saca las panochas perro");
    //         e.preventDefault();
    //     }
        
    //     if(e.target.matches(".clear")){
    //         console.clear();
    //     }
    // });
// +++++++++TERINA LA FORMA CHULA PARA ASIGNAR EVENTOS ´+++++++++++++++++
