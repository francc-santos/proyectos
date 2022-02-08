/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.
 */
!function(){
    function numeroCarateres(cadena){
        if(typeof cadena === 'string'){
            numeroLetras = cadena.length;
            return numeroLetras;
        }else{
            return 'ah perro no eres una cadena'
        }
    }

    let _cadena = numeroCarateres('hola mundo');
    console.log(`El numero de caracteres en la cadena es ${_cadena}`);

/*     setTimeout(() => {
        console.clear();
     }, 3000); */
}();

!function(){
    const contarCaracteres = (cadena = '')=> 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena") 
        : console.info(`La cadena "${cadena} tiene ${cadena.length} caracteres`)

    /* el manejo del operador ternerio es mas valioso en al render condicionial de react u algo parecido */
    contarCaracteres('cadena');
}();


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
!function(){
    function recortado(cadena,numero){
        if (typeof cadena === 'string'){
/*             console.log(cadena.length);
 */            let cadenaRecortada = '';
            for (i=0; i<=numero ; i++){
                cadenaRecortada = cadenaRecortada + cadena[i];
            }
            return cadenaRecortada;
        }else{
            return 'no es una cadena'
        }
    }

    console.log(recortado('hola mundo',2));
}();

!function(){
    function recortado(cadena,numero){
        if (typeof cadena === 'string'){
            cadenaRecortada = cadena.substring(0,numero)
            return cadenaRecortada;
        }else{
            return 'no es una cadena'
        }
    }

    console.log(recortado('hola',3));
}();

!function(){
    const recortado=(cadena = '', numero = undefined)=>
    (!cadena)
        ? console.warn("no mandaste ninguna cadena de testo")
        /* es un if anidado con operadores ternarios se ve chulo este jale  */
        : (numero===undefined)
            ? console.warn("no mandaste el numero de caracteres que querias cortar")
            : console.info(cadena.slice(0,numero))

    recortado('saca',)
}();

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
!function(){
    function separacion(cadena, separador){
        if (typeof cadena == 'string'){
            cadenaSeparada = cadena.split(separador);
            return cadenaSeparada;
        }else{
            return 'no es una cadena'
        }
    }
    console.log(separacion('hola mundo',' '));
}();

!function(){
    /* arrow function con return implicito , que es en una sola linea ,  si fuera en mas lineas pue tendria que poner el return */
    const separacion = (cadena='', separador=undefined)=>
    (!cadena)
        ? console.warn("no mandaste ninguna cadena de testo")
        : (separador===undefined)
            ? console.warn("no mandaste el numero de caracteres que querias cortar")
            : console.info(cadena.split(separador))
    separacion('saca las panochas',' ')
    
}();


/* 4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

!function(){
    function repeticion(cadena,multiplo){
        if (typeof cadena == 'string'){
            let multiplicacionCadena;
            multiplicacionCadena = cadena.repeat(multiplo);
            return multiplicacionCadena; 
        }else{
            return 'no es una cadena';
        }
    }

    console.log(repeticion('hola',3));
}();


!function(){
    const repeticion= (cadena='', multiplo=undefined)=>
    (!cadena)
        ? console.warn("no mandaste ninguna cadena")
        : (multiplo === undefined)
            ? console.warn("no mandaste el numero de veces que quieres que se repita")
            : console.info(cadena.repeat(multiplo))
    
    repeticion('holasss',2)
}();

!function(){
    const repeticion = (cadena='',multiplo=undefined)=>{
    /* una genial idea validar de una los errores que podrian pasar para no ejecutar toda la funcioni y de una retacharlo al flujo anterior */
        if(!cadena) return console.warn("la cadena esta vacia");
        if(multiplo===undefined) return("no ingresaste el numero de veces que qurias repetir el testo");
        if(Math.sign(multiplo)===-1) return console.error("El numero de veces no puede ser negativo");
        for (let i=1 ; i<=multiplo; i++) console.info(`${cadena},${i}`);
    }
    repeticion('hola',12)
}();














/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */



/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */



/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */



/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */


