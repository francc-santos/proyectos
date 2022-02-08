# 1.1 - ¿Es Go un lenguaje de programación orientado a objetos?

En GO np se tiene class sino estructuras, que los atributos se pueden ver reflejados en los compos de una estructura y los metodos en las funciones 
- Los metodos no son exclusivos de las estructuras , se pueden implementar metodos a cualquier tipo dedinido de lenguaje , mapas , funciones slices. etc.
- La *proteccion* de los metodos , tenemos solo los identificadores exportados y no exportados, que a nivel de paquete podemos decir que podemos exportar o no.
- La *herencia* no se tiene, pero tiene una jerarquia de tipos donde podemos hacer tipos con tipos , o interfaces 
- El polimorfismo , objetos de diferenes tipo ejecuten un metodo

# 1.2 - Abstracción a través de estructuras

Las estructuras son colecciones de campos, caracteristicas que queramos abstraer


Definicion de una estructura
```go
    type Couser struct{
        Name string
        Price float64
        IsFree bool
        UserIDs []uint
        Classes map[uint] string
    }
```

Uso de una estructura
```go
    Go:= Course{
        Name: "GO desde 0",
        Price: 1,
        IsFree: false,
        UserIDs: []uint{12,65,89},
        Classes: map[uint]string{
            1: "introduccion",
            2: "estructuras",
            3: "maps",
        },
    }

    Go.Name
```
> Podemos omitir el nombre del campo , si y solo si le poenen en orden todos los campos

# 1.3 - Métodos. (Parte 1)

Definicion de una estructura metodo
```go
    type Couser struct{
        Name string
        Price float64
        IsFree bool
        UserIDs []uint
        Classes map[uint] string
    }

    /* Definiendo la funcion , ver como se firma que recibimos una structura y podemos darle un alias */
    func (c Course) PrintClasses(){
        text := l"Las clases son: "
        for -,class := range c.Classes{
            text += class + ", "
        }
    }
```

Llamado del metodo
```go
    Go.PrintClasses()
```

> Permite incluso que podamos declarar los metodos desde archivos del mismo paquete, pero lo mejor es separarlo por estructura en archivos diferentes.

# 1.5 - Métodos con receptores de puntero

Para poder modificar los valores de la estructura desde los meodos , que es como hacer setters y getters debemos de usar punteros , pq lo que recibimos en el metodo es una copia de la intancias de la estructura.

Definicion de una estructura metodo
```go
    type Couser struct{
        Name string
        Price float64
        IsFree bool
        UserIDs []uint
        Classes map[uint] string
    }

    /* Definiendo la funcion , ver como se firma que recibimos una structura y podemos darle un alias */
    func (c *Course) PrintClasses(){
        text := l"Las clases son: "
        for -,class := range c.Classes{
            text += class + ", "
        }
        fmt.Println(text[:len(text)-2])
    }

    func (c Course) ChangePrice(price float64){
        c.Price = price
    }
```

Llamado del metodo
```go   
    Go:= &Course{
        Name: "GO desde 0",
        Price: 1,
        IsFree: false,
        UserIDs: []uint{12,65,89},
        Classes: map[uint]string{
            1: "introduccion",
            2: "estructuras",
            3: "maps",
        },
    }

    /* Desde la ejecucion podemos referenciarlo o no , pq de acuerdo a la fimra go lo hace automaticamente */
    (*Go).PrintClases()
    (&Go).PrintClasses(85.5)
```

> Para actualizar valores si o si en la firma como puntero , esto despues ns servira en las interfases se trabaje e mejor forma.