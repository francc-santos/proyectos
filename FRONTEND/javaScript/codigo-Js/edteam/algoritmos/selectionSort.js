function selectionSort(arreglo){
    arreglo_ord = arreglo.slice()
    for(i=0;i<arreglo_ord.length-1;i++){
        // se va a modificar cuando se encuentre un nuevo minimo en el ciclo de j pero cuando se salgasa y se vuelva a iterar en ciclo de i se va a setear con el siguiente valor de i que es la siguiente posicion de donde se coloco el valor minimo encontrado
        pos_delminimoActual = i
        valor_minimo = arreglo_ord[i]
        for(j=pos_delminimoActual;j<arreglo_ord.length;j++){
            if (arreglo_ord[j]<valor_minimo){
                valor_minimo = arreglo_ord[j]
                pos_delminimoActual = j
            }
        }
        if(pos_delminimoActual != i){
            aux = arreglo_ord[i]
            arreglo_ord[i] = arreglo_ord[pos_delminimoActual]
            arreglo_ord[pos_delminimoActual] = aux
        }
    }
    return arreglo_ord
}

console.log(selectionSort([2,4,67,6,5,7,1]))

/* 
Denuevo
La iteracion de i recorre la posicion donde se deve de guragar el nuevo valor minimo encintrado en todo el arreglo,desde la posicion que tenga el valor minimo hasta el final.

La iteracion en j es para poder encontrar el nuevo valorminimo y su posicion de este, despues si es que se encontro un valor que es menor al de la ultimo minimo se debe intercambir, 

Guardando el valor del arrglo en la posion de i en un auxiliaar para despues pasar el valor de este a la posicion donde se encontraba el nuevo minimo 
*/