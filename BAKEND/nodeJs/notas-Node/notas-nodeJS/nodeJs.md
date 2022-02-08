# NOde en formato bloqueante 
> el codigo de node js se ejecuta en consola con *node NOMBRE DEL ARCHIVO*
```bash
    node nodeBloquente.js
```
## Es el ejemplo de los clientes en un restaurante 

En el ejemplo de node bloqueante (*nodeBloquente.js*) la funcionq que lee el archivo es la funcion que bloque el hilo, entonces se espera hasta tener la solucion para regresar el control y poder ejecutar otra cosa  (*la line que imprime "haciendo otra cosa"*)

# Node no bloquenate

## Los procesos async es como el mesero

En la llamada a la funcion esta no es `sync`, sino que resive un tercer parametro el cuale es una funcion `callback` (que es la llamada de una funcion en otra funcion ), que recibe dos parametros los que son un `err` y un `content`, el err con una respuesta de error , y el content con el contendo del archivo que se quire leer en consola, esto quiere decir que la linea siguiente e va a imprimir de ntes o despues dependiendo cuanto tarde en entregar la solucion la funcion asyncrona.

> ***Callback*** es una pieza de codigo que se ejecuta y se pasa como argumento de otro    
# Node single thread
![imagen del single thread de nodejs][event-loopjs]  
`filesystem`: como en el ejemploanterior se usaron los recursos del siematema para mostrar un texto
`network`: uso de sockets en la parte de redes
- Caracteristicas de node 
    - es concurrente sin paralelismo 
    - es asincrono y no bloqueante 
    - orientado a eventos 
    - single thread basado en callbacks  
- Cosas que se pueden hacer en node
    - aplicaciones cliente servidor 
    - aplicaciones servidor servidor 
    - chats, juegos , clientes de correo, traductores
    - aplicaciones colavorativas y redes sociales 
    - estadisticas y analisticas 
    - aplicaciones de red 
    - sitios web blogs y cms
    - cotroldor hardware nodebots `jony5`  

# IO.js  
Es un fork de node compatiple con npm ,con gobernabilidad abierta con lo cual no afectan los intereses de particulares 

# Nucleo de node 
El nucleo de node practicamente son las librerias  estandar base para que funcione node , formado por las de 35 modulos api docs es la documentacion de node js  
### Buenas practicas  
orden de llmada en el codigo
1. librerias  o modulos 
2. constantes 
3. objetos o variables 
4. funciones
5. eventos 
6. eventos 
7. ejecuciones   

lower camel  case para variables y metodos
- Date()
- EventeEmmiter()  

upper camel case para clase o prototipos 
- getElementById()
- createServer()  

***'use strcit '*** sirve para que evalue que este teniendo la escritura correcta de codigo  
 
# Single Thread  
el `process.pid` nos devuelve el id del proceso que se esta corriendo cada vez que se ejecute el proceso del programa , le va a asignar un id nuevo   
`process.exectPath` devuelve el lugar donde se esta ejecutando node   

# Buffer 
Es una tira de bytes , en el lado del backend es muy comun que ocupemos el sistema operativo en el que se esta corriendo la app,como el transporte de informacion a chorros en formato binario, es similar a un arreglo de numeros enteros.  
dentro de un buffer nosotro podemos manipular objetos , como lo ***socket*** con los cuales podemos tener una comunicacion bidireccional para aplicaciones en realtime  
***streams***, que permiten mandar chorros de informacion , y de esta manera se escribe y lee los archivos del sistema  
> los ***buffer*** son los arreglos del backend 
# Streams
Los streams son un ***chorro*** de informacion que se trasmite en pequeños pedazos ***"Chunks"***,ademas:
- es una instancia de `EventEmitter`
- tiene acceso asincrono 
- para crear una stram , node usa distintos mecanismos como 
    - stdin/stdout
    - requet de `http`, es un chorro de informacion que se manda por el protocolo http, por tal son modificables 
    - `sockets`, un chorro de informacion que se manda de manera bidireccional
    - manipulación de ficheros | imagenes  

En el ejemplo `codigo/jonmirch/streamnode.js` se usa el metodo `readStream.pipe(writeStream)` lara generar una tuveria donde va a pasar el stream a traves de los programas   

# Emisores de eventos
Son objetos que emiten eventos.  
La manera en que trabaja es a traves de un patron de diseño de software que se llama el patron observador, basicamente se tienen dos objetos el que ***emite*** y el que ***escucha*** 
```javascript
'use strict'

let EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()

pub.on('myevent',(message)=>{
    console.log(message);
});
pub.once('myevent',(message)=>{
    console.log('Se emite la primera vez: '+message);
});

pub.emit('myevent','soy un emior de eventos');
pub.emit('myevent','volviendo a emitir un mensaje en consola');

pub.removeAllListeners('myevent');
pub.emit('myevent','volviendo a emitir un mensaje en consola');
```  
> en el codigo anterior pub es donde se construye el evento y emit lo emitimos a la consola

### event inherit
no permite heredar la caracteriticas de un objeto 
```javascript
'use strict'
let EventEmitter = require('events').EventEmitter,
//inherit es un funcion que le permite a un objeto heredar sus propiedades
inherits =  require('util').inherits

let clock = function (){

    let self = this;

    setInterval(() => {
        //console.log('jola');
        self.emit('tictac ')
    }, 1000);
}

inherits(clock, EventEmitter)

//extendiendo el prototipo
clock.prototype.theTime = function (){
    let date = new Date(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = hrs +':'+ min+':'+sec
    console.log(msg);
}

let cucu = new clock()

cucu.on('tictac',function (){
    cucu.theTime();
})
```  
# Require y export 
es la foma en que se exporta y se importa los modulos en node , en este caso mydata contiene inf. que se usara n e module-node.js
```javascript
//esportando de mydata.js
' use strict '

let name = 'lis',
    email = 'lis@gmail.com'
    //con buenas practicas el _indica que es un dato privado
    _phone = 3456745678
//con el nombre exportado es como se va a ussar en el  importado
module.exports.name = name
module.exports.email = email
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//require o importando de mydata
'use strict'

let mydata = require('./mydata.js')

console.log(
    mydata.name,
    mydata.email,
    mydata.phone
);
```

# Exportacion y require de clases  

Exportacion  
```javascript
'use strict'

class Clock{

    constructor(){

        setInterval(() => {
            //console.log('jola');
            this.theTime()
        }, 1000);
        
    }
    
    
    //extendiendo el prototipo
    theTime = function (){
        let date = new Date(),
        hrsAMPM = date.getHours() > 12 ? ( date.getHours()-12 ) : date.getHours(),
        hrs = addZero( hrsAMPM ),
        min = addZero( date.getMinutes() ),
        sec = addZero( date.getSeconds() ),
        ampm = ( date.getHours() <12 ) ? ' am' : ' pm',
        msg = `${hrs}:${min}:${sec}${ampm}`

        function addZero(num){
            return (num<10) ? ('0' + num): num
        }

        console.log(msg);
    }
    
}
//1.0 esta siendo exportado como un contructor de la clase clock
    //module.exports = new Clock();
//2.0 esta siendo exportado momo clase
    module.exports = Clock
```  
importacion 

```javascript
'use strict'

let mydata = require('./mydata.js'),
    Clock = require('./clock-moduleES6'),
    cucu = new Clock()

console.log(
    mydata.name,
    mydata.email,
    mydata.phone
);


/* cucu.on('tictac',function (){
    cucu.theTime();
})
 */

//1.0 como se esta imporatndo un constructor de la clase clock se puede ejectar de una su metodo theTime()
    //Clock.theTime()
//2.0 como se esta importando como una clase se debe de inicializar un contructor en la importacion este caso cucu y ya con este se accede a su funcion theTime()
cucu.theTime()
```  

















































[event-loopjs]:data:image/png;base64,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
