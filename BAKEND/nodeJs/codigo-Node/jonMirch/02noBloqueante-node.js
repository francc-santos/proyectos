/* let  fs = require('fs');
console.log('\nAbriendo el archivo...');

let  content = fs.readFile('archivo.txt', 'utf8', function(error,content){
    console.log(content);
});

console.log('\nHaciendo otra cosa\n');
console.log(process.uptime());
 */
// evitando el callbackhell

let  fs = require('fs');
console.log('\nAbriendo archivo');

function imprimir (error, content){
    console.log(content);
}

let  content = fs.readFile('archivo.txt','utf8',imprimir);

console.log('\nHaciendo otra cosa\n');
console.log(process.uptime());