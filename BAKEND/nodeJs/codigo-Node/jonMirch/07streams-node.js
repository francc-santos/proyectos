'use strict'

//3tipos: lectura, escritura, duplex  

let fs = require('fs'),
    readStream = fs.createReadStream('assets/readStream.txt'),
    writeStream = fs.createWriteStream('assets/readStream-copy.txt');

/* 
// 
readStream.pipe(writeStream);
readStream.on('data',(chunk)=>{
    console.log(
        'he leido: ',
        chunk.length + ' caracteres',

    );
});

// Imprime en la consola que termino cando se termino el evento de escribirlos datos de read a write
readStream.on('end',()=>{
    console.log('Termine de leer el archivo');
}); 
*/

// El mismo codigo de manera mas elegante pasando todo los metodo a solo un ojeto con identacion 
// 
readStream.pipe(writeStream);
readStream 
    //event data , mientras haya datos en el archivo se ejecuta
    .on('data',(chunk)=>{
        console.log(
            'he leido: ',
            chunk.length + ' caracteres',

        );
    });
readStream
    .on('end',()=>{
        console.log('Termine de leer el archivo');
    }); 
    // Imprime en la consola que termino cando se termino el evento de escribirlos datos de read a write


// prosses stdin stdout tambien son una forma de stream

