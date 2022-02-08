let fs = require('fs');
console.log ('Abriendo archivo ...');

let content = fs.readFileSync('archivo.txt','utf-8');
console.log(content);

console.log('\nHaciendo otra cosa\n');
console.log(process.uptime());