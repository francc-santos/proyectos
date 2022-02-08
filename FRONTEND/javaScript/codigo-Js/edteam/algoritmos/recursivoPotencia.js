function recursivoPotencia(a,b) {
    if(b===0){
        return 0
    }
    else if(b===1){
        return a
    }
    else{
        return a*recursivoPotencia(a,b-1)
    }
}

console.log(recursivoPotencia(2,3));
