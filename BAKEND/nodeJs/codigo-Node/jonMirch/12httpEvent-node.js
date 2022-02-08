///coNVIRTIENDO EN UN EMISOR DE EVENTOS 

'use strict'
//pasando la funcion de createServer al http
const http = require('http').createServer()

const hostname = 'localhost';
const port = 3000;

function serverPanchito(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>hellow world modulo de http como un emisor de eventos </h1>');
}
 
http
    //DESENCADENANDO EL EVENTO 
    .on('request',serverPanchito)
    .listen(port,hostname,()=>{
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});