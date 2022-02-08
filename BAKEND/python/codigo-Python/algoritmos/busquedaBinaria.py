def busquedaBinaria(arreglo,x):
    start = 0;
    end = len(arreglo)-1
    middle = (start+end)//2

    while start <= end:
        if middle == x:
            return True
        elif x < arreglo[middle]:
            end = middle-1
        else:
            start = middle+1
        middle = (start+end)//2
    return False

print(busquedaBinaria([1,2,3,4,6,7,8,9],4))