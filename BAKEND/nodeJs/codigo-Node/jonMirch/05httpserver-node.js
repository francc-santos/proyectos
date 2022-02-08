
/* el levantamiento de un servidor con el ejemplo de node */
/* 
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

'use strict'

const http = require('http');

const hostname = 'localhost';
const port = 3000;

function serverPanchito(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>hellow world desde pancito serve</h1>');                      
}
 
http
    .createServer(serverPanchito)
    .listen(port,hostname,()=>{
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});