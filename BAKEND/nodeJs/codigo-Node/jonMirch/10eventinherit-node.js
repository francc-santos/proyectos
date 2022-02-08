'use strict'
let EventEmitter = require('events').EventEmitter,
//inherit es un funcion que le permite a un objeto heredar sus propiedades
inherits =  require('util').inherits

let clock = function (){

    //let self = this;

    setInterval(() => {
        //console.log('jola');
        this.emit('tictac')
    }, 1000);
}

//HEREDANDO las caracteristicas de emisor de eventos a clock
inherits(clock, EventEmitter)

//extendiendo el prototipo de la clase date al objeto clock 
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