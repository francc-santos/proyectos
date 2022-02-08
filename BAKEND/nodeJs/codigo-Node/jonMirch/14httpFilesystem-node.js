'use strict'

const { fileURLToPath } = require('url');

//pasando la funcion de createServer al http con el event
const http = require('http').createServer(serverPanchito),
      fs = require('fs')


const hostname = 'localhost';
const port = 3000;

function serverPanchito(req, res){
    function readdFile(err,data){
        if(err) throw err
        res.end(data)
    }
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    fs.readFile('assets/index.html',readdFile)
    
}
 
http
    .listen(port,()=>{
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});