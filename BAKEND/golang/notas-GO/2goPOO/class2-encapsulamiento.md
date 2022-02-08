# 2.1 - Nombres de campos y métodos exportados o no exportados en lugar de modificadores de acceso

Los metodos exportados y no exportados son el simil de los modificadores de acceso de otros lenguajes de progra como java.

- En los paquetes que vamos a importar tenemos que escribirlos al principio con mayusculas si queremos que sean exportados 

```go
    package course

    type Couser struct{
        Name string
        Price float64
        IsFree bool
        UserIDs []uint
        Classes map[uint] string
    }
```
> En el package couerse seria como una class de java donde solo se define course y la forma de indicar que esta estructura puede ser accedicda desde cualquier archivo del mismo paquete es escribiendo el nombre de la misma en mayusculas , asi como sus campos.

# 2.2 - Función New() en lugar de método constructor

No existen los constructores ya que para definir la estructura la 

Creacion del constructur de la class
```go
        package course

    type couser struct{
        Name string
        Price float64
        IsFree bool
        UserIDs []uint
        Classes map[uint] string
    }

    func New(name string, price float64, isFree bool) *course{
        if price == 0{
            price = 30
        }
        return &course{
            Name: name,
            Price: price,
            IsFree: isFree,
        }
    }
```

Uso del contructor desde la funcion main
```go
    Go := course.New("Go desde 0", 0, false )
    Go.UserIDs: []uint{12,65,89},
    Go.Classes: map[uint]string{
            1: "introduccion",
            2: "estructuras",
            3: "maps",
        }
```

# 2.3 - Implementación de métodos setters y getters

NO son necesarios pq se son exportados podemos modificarlos desde otro archivo


Definicion del metodo *Set* para clases
```go
    package course

    type couser struct{
        Name string
        Price float64
        IsFree bool
        UserIDs []uint
        classes map[uint] string
    }

    func New(name string, price float64, isFree bool) *course{
        if price == 0{
            price = 30
        }
        return &course{
            Name: name,
            Price: price,
            IsFree: isFree,
        }
    }

    func (c *course) SetClasses(classes map[uint]string){
        c.classes = classes
    }

    func (c *course) Classes() map[uint]string {
        return c.classes
    }
```

Ejecucion del metodo setclases
```go
    Go := course.New("Go desde 0", 0, false )
    Go.UserIDs: []uint{12,65,89},
    Go.SetClasses: (map[uint]string{
            1: "introduccion",
            2: "estructuras",
            3: "maps",
        })

    Go.Classes()
```