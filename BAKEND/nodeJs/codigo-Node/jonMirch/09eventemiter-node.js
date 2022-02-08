/// Casi todos los modulos son una instancia de event-emiter 
//Un emisor de eventos usa el patron observador (dos objetos el que publica y el que escucha)


'use strict'
// la llamada en de "EventEmitter", es la llamada de una clase de este modulo de js
let EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()
//pub publica el evento 

//ON, mientaras el evento ocurra se ejecutara 
pub.on('myevent',(message)=>{
    console.log(message);
});
    //pub.once();
    // la primera vez que se ejecute mi evento se va a ejectuar una funcion que ejecute le mensaje 
    //para a siguiente solo se ejecutara el mensaje de once y el mensaje de de on 
pub.once('myevent',(message)=>{
    console.log('Se emite la primera vez: '+message);
});

pub.emit('myevent','soy un emior de eventos');
pub.emit('myevent','volviendo a emitir un mensaje en consola');
pub.removeAllListeners('myevent');
pub.emit('myevent','volviendo a emitir un mensaje en consola');
