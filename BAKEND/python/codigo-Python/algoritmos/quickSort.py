
def partition(arreglo,p,r):
    x = arreglo[p]
    i = p
    j = r

    while i<j:
        if arreglo[i]>=x:
            arreglo[i],arreglo[j] = arreglo[j],arreglo[i]
        while i<=r and arreglo[i] < x:
            # Busca uno que sea mayor o igual que x
            i+=1 
        while j>=p and arreglo[j]>=x:
            # Busca uno que sea menor que x
            j-=1
    return j

def quickSort(arreglo,p,r):
    if p<r:
        q = partition(arreglo,p,r)
        quickSort(arreglo,p,q)
        quickSort(arreglo,q+1,r)

arreglo = [1,5,2,4,19,9,22,15,18]
# quickSort(arreglo,0,len(arreglo)-1)
# print(arreglo)