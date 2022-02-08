///MODULO PARA LA RESOLUCION Y ANAISIS DE URL'S
'use strict'
let http = require('http').createServer(pancitoServer),
    path = require('path'),
    urls = [
        {
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>About</h2>'
        },
        {
            route: 'contacto',
            output: '<h2>Contact</h2>'
        }
    ]
   

function pancitoServer(req,res){
    let message = '<h1>Hola nodejs</h1>';
    let pathURL = path.basename(req.url);
    

    console.log(pathURL);

    //posicion 
    urls.forEach(function(pos){

        if(pos.route == pathURL){

            //res.statusCode = 200;
            res.writeHead(200,{'Content-Type':'text/html'})
            ///res.end(message + pos.output);
        }
        if(!res.writableFinished){
            //res.statusCode = 404;
            res.writeHead(404,{'Content-Type':'text/html'});
            //res.end('<h1>Error 404: Not Found</h1>');
        }
    })
}

http
    .listen(3000,()=>{
    console.log(`Servidor corriendo en http://localhost:3000/`);
});