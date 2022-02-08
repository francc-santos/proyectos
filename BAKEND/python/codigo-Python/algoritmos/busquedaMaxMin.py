def busquedaMaxMin(arreglo):
    maximo = arreglo[0]
    minimo = arreglo[0]
    for i in range(1,len(arreglo)):
        if arreglo[i]>maximo:
            maximo = arreglo[i]
        if arreglo[i]<minimo:
            minimo = arreglo[i]
    return maximo,minimo

print(busquedaMaxMin([5,3,5,4,1,4,0,9]))