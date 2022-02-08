def bbRecursiva(arreglo,inicio,fin,x):
    mitad = (inicio+fin)//2
    if inicio<=fin:
        if x == arreglo[mitad]:
            return True
        elif x>arreglo[mitad]:
            return bbRecursiva(arreglo,mitad+1,fin,x)
        return bbRecursiva(arreglo,inicio,mitad-1,x)
    return False

arreglo = [1,2,3,4,5,6,7,8,9]
inicio = 0
fin = len(arreglo)
print(bbRecursiva(arreglo,inicio,fin,3))
print(bbRecursiva(arreglo,inicio,fin,0))
