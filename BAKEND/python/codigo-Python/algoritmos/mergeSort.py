
def merge(arreglo,inicio,q,final):
    izq = arreglo[inicio:q+1]
    der = arreglo[q+1:final+1]
    izq.append(float("inf"))
    der.append(float("inf"))
    i=0
    j=0
    for k in range(inicio,final+1):
        if izq[i]<der[j]:
            arreglo[k] = izq[i]
            i+=1
        else:
            arreglo[k] = der[j]
            j+=1
    # print(izq,der,arreglo[inicio:final+1])

# funcion que divide de izq a der los indices del arreglo hata llegar a todas la posiciones del arreglo.
def mergeSort(arreglo,inicio,final):
    # print(f"Mergesort({inicio},{final})")
    if inicio<final:
        q = (inicio+final)//2
        mergeSort(arreglo,inicio,q)
        mergeSort(arreglo,q+1,final)
        merge(arreglo,inicio,q,final)


arreglo = [1,5,2,4,19,9,22,15,18]
# mergeSort(arreglo,0,len(arreglo)-1)
# se imprime ordenado por el paso por referencia 
# print(arreglo)