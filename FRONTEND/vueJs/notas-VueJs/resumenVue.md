# Que es vue ?
Es un framework progresivo para construir interfazes de usuario, esta hecho para se para ser adaptado incrementalmente.  
***Framework***, Conjunto de estandares, coceptos, practicas, puntos de vista , que se unen para enfrentar y resolver nuevos problemas o desafios.  

# Iniciación de CDN  
solo se debe de ir a vue.com y usarla en el codigo html en la etiquet script , para ejecutar un server, se usa `npx serve`.
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
```

# Instalacion de CLI
Es una linea de comandos que ayuda a crear un proyecto rubusto usando tecnologias , es una forma de trabajar mas robusta
`npm install -g @vue/cli`, solo sirve para un proyecto, luego `vue create clase_1`, 
```bash
npm install -g @vue/cli
## Creando el la carpeta donde se van a descargar las dependencias 
vue create clase_1
```

## Herramientas del cli
`vue ui `, porque podemos guiarnos de una informacion que nos da , con esta linea de comando nos levantara el proyecto , y de ahi podemos buscar mas dependencias que se usen en nuestro proyecto, podemos instalarlo como de desarollo o de project,   
inspect, nos dice cuanta memoria se esta 

## Two way data binding 
Es una forma de comunicacion que busca relacionar con un estado que cambie algun elemnto de html, va a impactar directamente , para enlazarlo de manera directa se usa en la etiqueta de html `v-model "***message***"`, comunicacion en doble sentido.

# Instancia de vue 
La instancia de vue es el punto principal donde va a crearse todo el objeto que va a relazionar las propiedades de vue , ya que vue se basa en el objeto de javascript para poder relazionar diferentes niveles , el estado, funciones , vue crea el objeto y relacionar esa informacioin con los elementos que esten en el punto de montaje , sin este punto de montaje no se puede inyectar le informacion.
Los puntos de montajes ***no se pueden comunicar entre si***  
```html
<div id="app"> 
<!-- Aqui van todos los elementos que se van a injectar mediante vueJs -->
</div>
```   

# Directivas de vue 
 Son atributos que podemos asignar a un elemento del DOM para que Vue pueda interactuar de manera dinamica con el , las directicas siempre empiezan con ***`v-`**.

directivas| descripcion
|---|---:|
`v-for`|sirve para interar dentro de un conjunto de datos, en el ejemplo un array, es como un for in = "(index, valor) in ***variable***"
`v-on o @`|permite enlazar cualquier evento propio del elemto con la instancia de vue 
`v-bind: o :`|pasar el contenido de una variable al dom
`v-if`| permite no renderizar algun elmento dependiedo de la condicion , esto al inyectar los elemetos directamente en le DOM , podria causar problemas de rendimiento
`v-show`| esta directiva permite ocultar pero los elementos ya estan cargados de una al DOM,le agrega a la etiqueta el estilo display none
```html
<ul>
    <li v-for = '(mensage, index) in messages'>
        <!-- Los dos => {{}}, simbolizan un momento en java script -->
        {{index}} - {{mensage}}
    </li>
</ul>
```
 
# Metodos 
Son funciones que se pueden declarar dentro del instancia y solo van a ser usadas cuando las invoquemos, tambien pueden ser invcados dentro de otras funciones.
```html
<button @click="turnON">Encender/Apagar, tambien muestra el icant</button>

<!-- ESTO VA EN LA ETIQUETA JS
methods:{
    turnON(){
        this.linterna = !this.linterna
    },
},
-->
```

# Computed propertis  
Son funciones que se invocan solas , que siempre retornan un valor, y estan al pendiente que las propiedades que estan enlazadas a esta funcion , comabian se van a volver a invocar.
```javascript
/* 
ASI SE LLAMA EN EL HTML
    siempre se ejeccuta y cuando una propiedad que se encuentra en el apartado de computed se va a ver el cambio
*/
computed:{
    isLinternaOn(){
        return  this.linterna ? 'la linterna esta encendidatl' : 'la lnterna esta apagadatl'
    },
},
```

# Watchers
Funciones que se enlazan a una propiedad, se van a ejecutar cuando una propiedad cambia , las funciones de wacher resiven dos valores el `newvalue` y `oldvalue`
```javascript
/* 
ASI SE LLAMA EN EL HTML
    solo cuanod se escuche el cambio de alguna propieda que se en cuentre en la etuiqueta se ejecutara
*/
watch:{
    linterna(value, oldvalue){
        console.log({value,oldvalue})
    },
},
```

# Styles dinamics
Mediante la directiva v-bind podemos controlar el mode light o el modo darck.
```html
<h2 :class="{active: showName}" >hols djfd nnnjefnoiroe</h2>    
```

# Componentes  
Los componentes son una caracritica en particular que se adopto en forma de poder reutilizar codigo.
> Es como encapsular en un componente la logica de programación  

la trasabilidad con la que se va entrando en vue, los componentes tienen una etructura bien definida, no se mezclan de una manera extraña. cada componente tinen un ciclo de vida que se va ejecutando  en la vida del programa

## Estructura de un componente 
```html
<!-- LLAMACION DE LOS COMPONENTES EN VUE -->
<div id="app">
    <primer-component></primer-component>
    <segundo-component></segundo-component>
</div>
<!-- DECLARACION DE LOS COMPONENTES EN VUE --> 
<script>
    /* Vue.component('nombre del componente',{objeto del componente con una template}) */
        Vue.component('primer-component',{
            template:'<h1>Hola salut ciao</h1>',
        })
        /* DECLARACION DE COMPONENTES DE MANERA GLOBAL */
        Vue.component('segundo-component',{
            template: '<h2>Segundo componente</h2>',
        })
        new Vue({
            el:'#app',
            component:{
                /* DECLARACION DE COMPONENTES DE  MANERA LOCAL */
                segundoComponent: 'segundo-component',
            },
        })
</script>

```