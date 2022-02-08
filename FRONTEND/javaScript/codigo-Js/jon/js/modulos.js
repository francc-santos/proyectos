// +++++++++++TERMINA LAS FUNCIONES ANONIMAS AUTOEJECUTABLES++++++++++

        // MODULOS import y export
        // puedes llamar los archivos js ,desde un mismo archivo js
    import {PI, usuario, word} from "./constantes.js";
    import{aritmetica as cal} from "./aritmetica.js";

        console.log("Archivo modulos");
        console.warn(PI);
        console.error(usuario);
        // console.error(word);
        // como la importacioin de este modulo
        // se hizo como objeto se debe llamar sus atributos con (. dot)
        console.log(cal.sumar(5,5));
        // no se puede tener mas de una exportacion default
        // saludar()