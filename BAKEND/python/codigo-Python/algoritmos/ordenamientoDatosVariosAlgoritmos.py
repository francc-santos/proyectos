import pandas as pd 
import insertionSort, selectionSort, mergeSort, quickSort 

# El archivo train.csv es un archivo que contiene informacion sobre casas de un nuevo mercado en australia, tenemos que tenerlo en la ruta del proyecto para poder usarla 
data = pd.read_csv("train.csv")
print(data.head())

precio = data["SalePrice"].dropna().values.tolist()
lot = data["LotFrontage"].dropna().values.tolist()
lotArea = data["LotArea"].dropna().values .tolist()

insertionSort.insertionSort(precio)
# Vivienda mas barata 
print(precio[-1])
# Vivienda mas cara 
print(precio[0])

selectionSort.selectionSort(lot)
print(lot[-1])
print(lot[0])

mergeSort.mergeSort(lotArea)
print(lotArea[-1])
print(lotArea[0])

quickSort.quickSort(precio)
print(precio[-1])
print(precio[0])

# print(precio)
# print(lot)
# print(lotArea)

""" 
APROVECHANDO QUE LOS DATOS ESTAN ORDENADOS PODRIAMOS APLICAR LA BUSQUEDA BINARIA PARA ENCONTRAR MAS RAPIDO UN DATO
"""