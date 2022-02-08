import insertionSort, selectionSort, mergeSort, quickSort
import time 
import numpy as np
import matplotlib.pyplot as plt


selection = []
insertion = []
mergesor = []
quicksor = []
tamanios = [10,100,500,100,2000,5000,10000]

for i in tamanios:
    print(f"Arrelgo de tamaño: {i}")
    arregloA = np.random.randint(0,10*i,i)
    arregloB = np.random.randint(0,10*i,i)
    arregloC = np.random.randint(0,10*i,i)
    arregloD = np.random.randint(0,10*i,i)
    # podemos variara el tamaño del arreglo, modificando el ultimo valor

    inicio = time.time()
    insertionSort.insertionSort(arregloA)
    final = time.time()
    insertion.append(final-inicio)

    inicio = time.time()
    selectionSort.selectionSort(arregloB)
    final = time.time()
    selection.append(final-inicio)

    inicio = time.time()
    mergeSort.mergeSort(arregloC,0,len(arregloC-1))
    final = time.time()
    mergesor.append(final-inicio)

    inicio = time.time()
    quickSort.quickSort(arregloD,0,len(arregloD-1))
    final = time.time()
    quicksor.append(final-inicio)


plt.figure(dpi=300)
plt.plot(tamanios,insertion,label="Insertion Sort")
plt.plot(tamanios,selection,label="Selection Sort")
plt.plot(tamanios,mergesor,label="Merge Sort")
plt.plot(tamanios,quicksor,label="Quick Sort")
plt.grid()
plt.legend()
plt.xlabel("Tamaño")
plt.ylabel("Complejidad (s)")
plt.show()
plt.savefig("DatosComparacionOrdenamiento.png")

