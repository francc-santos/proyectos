def countingSort(arreglo):
    b = [0]*(len(arreglo)+1)
    k = max(arreglo)
    c = [0]*(k+1)
    b[0] = float("nan")

    for i in range(0,len(arreglo)):
        c[arreglo[i]] += 1
    for i in range(1,len(c)):
        c[i] += c[i-1]
    for i in range(0,len(arreglo)):
        b[c[arreglo[i]]] = arreglo[i]
        c[arreglo[i]] -=1
    return b

print(countingSort([1,5,2,3,4,8,9,1]))