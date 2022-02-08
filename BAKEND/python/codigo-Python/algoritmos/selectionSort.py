
def selectionSort(arreglo):
    arreglo_ord = arreglo.copy()
    # Iteracion sobre el arreglo para poder toma la posicion que va a tener el dato minimo segun se vaya encontrando 
    for i in range(0,len(arreglo_ord)-1):
        # Guardamos la posicion de i que simpre seria la posicion minima 
        pos_minino = i
        # Guardamos el numero que se encuentre en la iteracion de la posicion minima actual 
        minimo = arreglo_ord[i]
        # Iteracdor para poder buscar cual es el valor minimo en lo que resta del arreglo
        for j in range(pos_minino,len(arreglo_ord)):
            # Sentencia para encontar el dato que es menor a la posicon que estamos comparando que seria la minima
            if arreglo_ord[j]<minimo:
                # si es menor al que se encuentra en la posiicion de minimo se actualiza la posicion de minimo y el valor de mininmo
                minimo = arreglo_ord[j]
                pos_minino = j
        # si es que la poscision de minimo cambio, intercambiamos los datos de posicion 
        if pos_minino != i:
            # 
            arreglo_ord[i],arreglo_ord[pos_minino] = arreglo_ord[pos_minino],arreglo_ord[i]
    return arreglo_ord


# print(selectionSort([10,2,5,78,3,7,27,89,6]))

""" 
EL trabajo del algoritmo es el next 
    10,2,5,78,3,7,27,89,6
en la primera iteracion guarda la posicion de 0 , la ultima la ignora porque ps el ultimo ya quedaria por default cuando se recorre todo 
y tambien gurda el dato de esta posicion 
    10 y 0 
el dato y la posicion que en este momento gurarda el dato mas pequeño 
itera desde la posicion que es hasta el momento la que debe de tener el dato mas pequeño hasta el final de arreglo
si la posicion en j es menor a minimo cambia a la posicion deonde estaria el dato menor 
    2<10 si
        minimo = 2
        pos_minimo  = 1
si no es menor sigue iterando hasta que encuentre un valor menor  hasta que en cuentre uno y pude cambiar el valor de la posicion con el numeor mas pequeño , para que si el valor de posicion de la posicion minimo es diferente a la iteracion de i entonces se intercambien los valores 
    1 !=  0 si 
        arrreglo[0] = arreglo[pos_minimo] osea 2 
        arreglo[posminomo] osea 1 = arreglo[i] osea 10 
y despues de este cambio se itera sobre i y  ya actualizada la posicion minima y el valor minimo 
se itera sobre j para ewncontar el valor siguiente minimo 

EN CONCLUSION CREO QUE 
Se guarda un lugar se busca el valor que sea menor a los demas , depues de inetrecambien los valores de posicion , despues se toma la siguiente posicion para poner el segund valor menor en el arreglo que se haya encontrado y asi hasta llegar a la penultima porque el valor ultimo se obtiene automagicamente cuando se obtien todos los anteriores
"""