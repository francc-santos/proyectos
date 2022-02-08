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