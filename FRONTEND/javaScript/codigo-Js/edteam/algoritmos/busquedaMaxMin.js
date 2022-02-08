function BusquedaMaxMin(arreglo){
    maximo = arreglo[0]
    minimo = arreglo[0]

    for(i=1;i<arreglo.length;i++){
        if(arreglo[i]>maximo){
            maximo = arreglo[i]
        }
        if(arreglo[i]<minimo){
            minimo = arreglo[i]
        }
    }
    return [maximo,minimo]
}

console.log(BusquedaMaxMin([0,1,3,7,3,9,4,3,6,10]))