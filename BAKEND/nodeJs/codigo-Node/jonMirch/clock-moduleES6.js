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

///UNA CLASE ES LA DEFINICIOIN DE LAS INTANCIAS DE UN OBJETO
    module.exports = Clock

