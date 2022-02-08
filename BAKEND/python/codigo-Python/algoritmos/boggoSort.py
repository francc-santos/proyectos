import random as rnd
from typing import OrderedDict

def isOrdened(arreglo):
    for i in range(0,len(arreglo)-1):
        if arreglo[i]>=arreglo[i+1]:
            return False
    return True

# La funcion ordenar(), lo que hace es que mientras el arreglo no este ordenado de mayor a menor , entonces de toma un valor de una posicion aleatoria dentro del tamaño del arreglo y se gurda en una variable auxiliar , es como intercambiar dos posiciones  en un arreglo hasta que este este en orden , por esos se tarda ya que puede que los valores aleatorios muevan mas de una ves los mismos valores en el arreglo.
def oredenar(arreglo):
    while not((isOrdened(arreglo))):
        posA = rnd.randint(0,len(arreglo)-1)
        posB = rnd.randint(0,len(arreglo)-1)
        aux = arreglo[posA]
        arreglo[posA] = arreglo[posB]
        arreglo[posB] = aux
    return arreglo 


arreglo = [3,5,2,8,9,-2,-6,10,11,19]

print(oredenar(arreglo))