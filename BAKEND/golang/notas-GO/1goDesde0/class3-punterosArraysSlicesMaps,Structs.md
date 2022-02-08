# 3.1 - Punteros

Variables que almacenan la direcion en memoria de un valor.

*codigo* | **Descripcion**
:---|---:
`&fruit`| vemos el valor de la direccion de memoria
`var p *string`| declaramos un puntero  
`%v,&fruit`| vemos el valor de la direcion  de memoria 
`*p`| vemos el valor de la referencia , desreferenciamos , desde aui podemos reasignar
``|

# 3.2 - Arrays

*codigo* | **Descripcion**
:---|---:
`var food [3]string`| declaracion array estatico de tres posiciones
`food:= [3]string{"","",""}`| declaracino literal de un array estatico


# 3.3 - Slices. (Parte 1)

Apuntadores a arrays, que pueden crecer de manera dinamica, en java el array-list cada vez que se llena cree el doble del tamaño actual.

*codigo* | **Descripcion**
:---|---:
`animals:= setAnimals[0:5]`| declaracion de un slice que toma los valores de un array static setAnimals desde la posicion 0 to 4
`len()`| vemos el tmaño del slice
`cap()`| cuantos elementos puede obtener el slice
`append(slice, "")`| agrega el elemnto en la ultima posicion , dependiendo desde donde se appendea. puede remplazar , cunado la capacidad es mayor go referencia a un nuevp array donde inluye el anterior.
`food := []string`| declaramos un slice de string 
`food := []string{"","",""...}`| asignamos valores de una al slice , este crea un array y depues lo va dublicvando su tamaño de acuerdo como va creciendo
`food := make([],len,cap)`| creamos un slice vacio con un tamaño y una capacidad definida, que puede ir cambiando.

- Cuando se incida un solo valor se toma desde el :final, yu desde el final tambien inicio:
- Como es una spuntador si se modifica se modificara en todo el array contenido
- Tienen tamaño y capacidad
- Cunado insertamos elementos a un slice podemos que esta ligado a uno statico lo que hace go es remplazar los valores, mientras que si se excede la capacida de este go crea un nuevo slice de el doble de capacidad y pone el contenido del original mas el nuevo insertado
- El valor 0 de los slice es nil, que es cunado no esta asignado solo declarado


# 3.5 - Maps

Estructuras de clave valor 

*codigo* | **Descripcion**
:---|---:
`food := make(map[tipoKey]tipoValor)`| creamos una map donde podemos indicar el tipo de la llave y el tipo del valor, NO confundir con un JSON
`food[key]=""`| asignamos un vlor a la llave indicada
`food := map[tipoKey]tipoValor{key=valor,...}`| mapa literal donde podemos definir y asignar de una las llaves y valores
`delete(mapName, key)`| elemimar un elemento del mapa
`food[key]`| podemos acceder el valor de una llave
`food[KeyInexistente]`| En caso de pedir una llave que no existe este retorna dos valores , el valor encontrado que en este vçaso el el 0 y un bool 

# 3.6 - Estructuras

Podemos almacener una coleccion de campos, similar a las class en otros lenguajes de programascion.  

Definicion de una estructura
```go
    type course struct{
        name string
        contry string
        age uint8
    }
```

Asignacion de la estrutura
```go
    db := course{
        name: "",
        contry: "",
        age: 2,
    }

    git := course{"","",5}
```

Accesidendo a los valores de la estructura 
```go
    fmt.Println("%+v\n", db.age)
```

Creacion de una puntero a una estrutura
```go
    p := &db
    (*p).age = 5 /* reasignacion de la variable */
    fmt.Println("%+v\n", p)
```



*codigo* | **Descripcion**
:---|---:
``|
``|
``|
``|
``|
