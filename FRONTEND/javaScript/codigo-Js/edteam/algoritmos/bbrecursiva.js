function bbrecursiva(arrelgo,inicio,fin,x) {
    mitad = Math.floor((inicio+fin)/2)
    if (inicio<=fin){
        if(x===arrelgo[mitad]){
            return true
        }
        else if(x>arrelgo[mitad]){
            return bbrecursiva(arrelgo,mitad+1,fin,x)
        }
        return bbrecursiva(arrelgo,inicio,mitad-1,x)
    }
    return false
}

arrelgo= [1,2,3,4,5,6,7,8,9]
inicio = 0
fin = arrelgo.length-1
console.log(bbrecursiva(arrelgo,inicio,fin,3));
console.log(bbrecursiva(arrelgo,inicio,fin,0));