
function isOrdened(arreglo){
    for(i= 0; i<arreglo.length-1;i++){
        if(arreglo[i] > arreglo[i+1]){
            return false
        }
        return true
    }
}

function ordenar(arreglo){
    while (!isOrdened(arreglo)){
        posA = Math.ceil(Math.random()*(arreglo.length-1))
        posB = Math.floor(Math.random()*(arreglo.length-1))
        
        aux = arreglo[posA]
        arreglo[posA] = arreglo[posB]
        arreglo[posB] = aux
    }
    return arreglo
}

arreglo  = [2,3,5,7,8,-1,-4]

console.log(arreglo)
console.log(ordenar(arreglo))
