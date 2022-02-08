'use strict'

//Son una tira de bytes,es como un arreglo de tamanño fijo  
//Manipula datos directamete como sockets, streams, implementar protocolos complejos , manipulacion de ficheros/imagenes , criptografia   

let buf = new Buffer.alloc(100),
    buf2 = new Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be';

buf.fill('abcd',0,4,'ascii');

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str,'utf8') + ' bytes'
);

for (let i=0 ; i<buf2.length;i++) {
    buf2[i] = i + 97
}
console.log(buf2.toString('ascii'));

