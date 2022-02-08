// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una funcion que reciba el parametro con el que vamos a jugar, y me regrese si gane o perdí. 

/*  

Variables piedra, papel y tiejeras 
una funcion que utilice cindicionales para validar si el parametro que le estoy pasando gana o pierde. 

y que la funcion al final me regrese el resultado de si gané, o  perdí. 

*/ 





<script>
        var user; //Variable del usuario aun no especificada
        var pc = Math.floor(Math.random()* (3 + 1 - 1) + 1);//La función Math.floor asigna un número aleatorio entre 1 y 3 a la var pc
        var rock = 1;
        var paper =2;
        var scissors = 3;

        var rockButton = document.getElementById("rock"); //Todas estas variables toman la información de los botones del HTML
        var paperButton = document.getElementById("paper");
        var scissorsButton = document.getElementById("scissors");
        var playButton = document.getElementById("run");
        var resetButton = document.getElementById("reset");
        var finalWinner = document.getElementById("winner");

        rockButton.addEventListener("click", optionRock);// Los listeners de eventos disparan las funciones al hacer click sobre los bonotes
        paperButton.addEventListener("click", optionPaper); // El objetivo de esas funciones es asignarun valor al usuario
        scissorsButton.addEventListener("click", optionScissors);
        playButton.addEventListener("click", play);// la función play() dispara acciona todo el algoritmo
        resetButton.addEventListener("click", resetGame);//la  función resetGame() le da otro valor a la var pc para repetir el juego

        function optionRock() { //funciones para signar el valor al usuario anteriormente mencionadas
            user = rock;
        }
        function optionPaper() {
            user = paper;
        }
        function optionScissors() {
            user = scissors;
        }

        function resetGame () {
            pc = Math.floor(Math.random()* (3 + 1 - 1) + 1); //función para darle repetir el juego asignando otro valor aleatorio a pc
            finalWinner.innerHTML= "";
        }

        function play() { //Mi función principal, primero establecemos que si user y pc tienen el mismo valor, será un empate.
            if (user == pc) {
                finalWinner.innerHTML= "TIE";
                 } else if (user == rock && pc == scissors || user == paper && pc == rock || user == scissors && pc == paper) {
                    finalWinner.innerHTML= "You win!"// si son diferentes, el aloritmo pasa a revisar si se cumple alguna de las condiciones de arriba
                } else {                             // ya que usamos el or (||) si hay al menos una falsa, no se cumplirá y pasará al siguiente condicinal
                finalWinner.innerHTML= "PC wins :("; // resaltar que las condiciones del else if son las 3 posibilidad en que el usuario puede ganar.
                }
        }
    </script>```