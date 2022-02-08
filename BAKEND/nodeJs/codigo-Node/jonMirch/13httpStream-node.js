/// SERVIDOR WEB CON LA LECTURA DE UN ARCHIVO ESTATICO

'use strict'
//pasando la funcion de createServer al http con el event
const http = require('http').createServer(serverPanchito),
      fs = require('fs'),
      index = fs.createReadStream('assets/index.html')

const hostname = 'localhost';
const port = 3000;

function serverPanchito(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    //QUE MANDE LA RESPUESTA CON EL METODO PIPE
    index.pipe(res)
}
 
http
    .listen(port,()=>{
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});