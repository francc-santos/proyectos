'use strict'

let clock = (function(){

    let EventEmitter = require('events').EventEmitter,
    //inherit es un funcion que le permite a un objeto heredar sus propiedades
    inherits =  require('util').inherits
    
    //contructor de la clase
    let clock = function (){
    
        let self = this;
    
        setInterval(() => {
            //console.log('jola');
            self.emit('tictac')
        }, 1000);
    }
    
    inherits(clock, EventEmitter)
    
    //extendiendo el prototipo
    clock.prototype.theTime = function (){
        let date = new Date(),
        hrsAMPM = date.getHours() > 12 ? ( date.getHours()-12 ) : date.getHours(),
        hrs = addZero( hrsAMPM ),
        min = addZero( date.getMinutes() ),
        sec = addZero( date.getSeconds() ),
        ampm = ( date.getHours() <12 ) ? ' am' : ' pm',
        msg = hrs +':'+ min+':'+sec+ampm

        function addZero(num){
            return (num<10) ? ('0' + num): num
        }

        console.log(msg);
    }
    return clock
})();

module.exports = clock;

