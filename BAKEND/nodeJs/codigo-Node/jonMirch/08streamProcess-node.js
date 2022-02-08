let stdin = process.stdin,
    stdout = process.stdout,
    person = {
        name : null,
        age: 0
    }

function saveAge(age) {

    person.age = age
    if (person.age >= 18){
        stdout.write(person.name + ' es mayor de edad, tiene '+ person.age + ' años\n')
    }else{
        stdout.write(person.name + ' es menor de edad, tiene '+person.age+' años\n')
    }
    process.exit()
}

function saveName(name) {
    person.name = name 
    // otra pregunta concatenado lo datos ya obtenidos 
    let question = 'hola '+person.name+ ' Cuantos años tienes ?: '
    quiz(question, saveAge)
}

function quiz(question, callback) {
    //resume(); permite leer lo de la consola
    stdin.resume();
    stdout.write(question + ':');
    
    //once(); solo una ves mientra haya datos
    stdin.once('data', (res)=>{
        //callback, es saveName(), .trim()quita comillas a ala cadenas de texto 
        callback(res.toString().trim())
    });    
}

//todo lo que entre por la consola en este caso todo lo que el ususario escriba estara en formato utf8
stdin.setEncoding('utf8')
quiz('Como te llamas', saveName)
