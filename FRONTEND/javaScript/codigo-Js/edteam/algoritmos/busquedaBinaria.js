function busquedaBinaria(arreglo,x){
    start = 0
    end = arreglo.length-1
    middle = Math.floor((start+end)/2)

    while (start<=end) {
        if(arreglo[middle] === x){
            return true
        }
        else if(x < arreglo[middle]){
            end = middle-1
        }
        else{
            start = middle+1
        }
        middle = Math.floor((start+end)/2)
    }
    return false
}

console.log(busquedaBinaria([1,3,5,6,7,8,9,11],8))