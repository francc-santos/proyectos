'use strict'

//Cuando montemos una aplicacion en produccion de node, tendremosque dejar activo el proceso, hay que saber el id para manipular el proceso
function singlethread(){
    process.argv[2] = 'estamos aprendiendo nodejs'
    process.argv[3] = 919
    process.argv[4] = ''
    process.argv[5] = true
    console.log('------------------------------');
    console.log('       EL PROCESO DE NODE     ');
    console.log('Id del proceso...........'+ process.pid);
    console.log('Titulo...................'+process.title);
    console.log('Directorio de node.......'+process.execPath);
    console.log('Version de node..........'+process.version);
    console.log('Versiones de dependecias.'+process.versions);
    console.log('Plataforma (SO)..........'+process.platform);
    console.log('Arquitectura de (SO9.....'+process.arch);
    console.log('Tiempo activo de node....'+process.uptime());
    //
    console.log('Argumentos del proceso...'+process.argv);
    console.log('-------------------------');
    /* console.log(
        process.argv[0],
        process.argv[1]    
    );   */
    for (const key in process.argv) {
        console.log(process.argv[key]);
    }
}
singlethread();