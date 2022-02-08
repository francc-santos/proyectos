import math
def bucketSort(arreglo):
    n = len(arreglo)
    b = [] #Es el bucket que se van a crear
    res = []
    for i in range(0,n+1):
        b.append([])
    for elem in arreglo:
        pos = math.ceil(n*elem)
        b[pos].append(elem)
    for lst in b:
        lst.sort()#insertion sort
        res+=lst
    return res

ordenado = bucketSort([0.1,0.3,0.4,0.23,0.39,0.28,0.75,0.92,0.89])
print(ordenado)