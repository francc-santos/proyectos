function countiongSort(arreglo) {
    // creamos una array de tamaño arreglo y se llena de ceros 
    b = new Array(arreglo.length+1).fill(0)
    k = Math.max(...arreglo)
    c = new Array(k+1).fill(0)

    for(i=0;i<arreglo.length;i++){
        c[arreglo[i]] +=1
    }
    for(i=1;i<c.length;i++){
        c[i]+=c[i-1]
    }
    for(i=0;i<arreglo.length;i++){
        b[c[arreglo[i]]] = arreglo[i]
        c[arreglo[i]]-=1
    }
    return b
}

console.log(countiongSort([1,5,2,3,4,8,9,1]))