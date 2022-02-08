# 3.1 - ¿Por qué no hay herencia en Go?

Los niveles de herencia pueden llegar a ser demasido amplios por lo que se vulve algo insostenible la sobreescritura de los metodos , por esto go desidio no tener la herencia como se conoce de los demas lenguajes de programacion.

La **composicion** es una forma de implementar de manera acercada este concepto
- La herencia tiene la relacion *es un* o relaciones de 1 a 1 , mientras que la **composicion** tiene relaciones 1 a muchos que es lo mejor para orquestar muchas funciones relacionadas, hace referencia a *esto tiene o usa*.
- En la herencia debemos de sostener una *jerarquia de niveles*, mientras que con la **composicion** tenemos solo relaciones, donde podemos aplicar el *principio de responsabilidad unica* 
- Podemos usar la injeccion de dependencias en el constructor de cada elemento
- Polimorfismo por interfaces, donde se definira en cada elemento como se debe re realizar el metodo 
- Podemos hacer un test unitario con las interfases de manera sencilla
- Podemos tener interfaces implicitas 
- Metodos de cuaquier tipo
- Incrustacion de campos , integracion de tipos en tipos como subclases

> La composicion consiste en encontrar relaciones entre las estructuras,*Esta esctrutura tiene | usa*  para usar mas esstructuras que pueden ser relaciones de 1 a 1 o de 1 a muchas

Evitando realizar un sobrediseño temprano de la aplicacion. Con sobreescritura de metodos muy extensa.

Composicion = Objetos relacionados 

INterfaceses implicitas , que no se necesita indicar que la estructura diga que implementa la interfase

# 3.2 - Composición de estructuras

Ejemplo de coimposicion, de una factura que tiene ligado un consumidor y tiene ligado los items que se definin por campos en su estructura 

Definicion de la estructura de cliente 
```go
    package customer 
    
    type Customer struct{
        Name string
        Id string
    }
    /* inicializando sin el nombre del campo porque esta en orden */
    func New(name, id) Customer{
        return Customer{name, id}
    }
```

Definicion de la estructura de item 
```go
package invoiceitem
type Item struct{
    id uint
    product string
    value float64
}
func New(id uint, product string, value float64) Item{
    return Item{id, product, value}
}

func (i Item) Value() float64{
    return i.value
}
```

Definicion de la estructura del packete factura 
```go
    package invoice

    type Invoice struct{
        country string
        city string
        total float64
        /* Relacion de 1 a 1 con la srcutura del cliente, una estructura es un tipo de dato */
        client customer.Customer
        /* Composicion de 1 a muchos, invoiceitem es la manera en que usamos el modulo */
        items []invoiceitem.Item
    }

    func New(country, city string, client customer.Customer, items []invoiveitem.Item){
        return Invoice{
            country : country,
            city: city,
            client: client,
            items: items.
        }
    }

    func (i Invoice) SetTotal(){
        for _, item := range i.items{
            i.total += item.Value()
        }
    }
```

Creacion de una factura desde main
```go
    i := invoice.New(
        "Colombia", 
        "Bogota", 
        customer.New("Fran", "121345"),
        []invoiceitem.Item{
            invoiceitem.New(1,"Chetoss",9.50),
            invoiceitem.New(2,"Chetoss",9.50),
            invoiceitem.New(3,"Chetoss",9.50),
            invoiceitem.New(4,"Chetoss",9.50),
        },
    )
    i.SetTotal()

    fmt.Println("i: %v" ,i)
```
> Recordar que las estructuras tambien son tipos de datos

# 3.3 - Tipos. (Parte 1)

- Permite crear software bastante flexibles
- Existen tipos declarados como byte uint , string, etc.
- Tipos compuestos como arrays, estructuras , slices maps, punteros, etc.
- **!Important**, existen tipos declarados donde podemos crear nuevos tipos basados en tipos existentes, con la condicion  de que deben ser specificaso en el paquete creado

Existen de dos formas declarciones de alias y definiciones de tipo.

```go
package main

type course struct{
    name string
}

func (c course) Print(){
    fmt.Printf("%+v\n",c)
}

func main(){
    c := course{name:"Go"}
    c.Print()
    fmt.Printf("El tipo es: %T\n",c)
}
```
Declaraciones de alias, permiten crear un identificador que sera un alias y hara referencia a un tipo existente

Declaracion de un alias 
```go
    type myAlias = course

    func main(){
        c:=myAlias{name: "GO"}
        c.Print()
        fmt.Printf("El tipo es: %T\n",c)
        
    }
```

Definiciones de tipo, definimos un nuevo tipo basado en uno existente, obtenemos el conjunto de campos del tipo base, pero no s heredan los metodos del mismo

```go
    type newCourse course

    c:=myAlias{name: "GO"}
    fmt.Printf("El tipo es: %T\n",c)
```

El tipo es la nueva definicion, que es diferente a cualquier otro tipo incluido el tipo base del que fue creado.

# 3.4 - Tipos. (Parte 2)

Creacino de nuevas definiciones de tipo con base a tipos predeclarados 

```go
    type newBool bool
    func (b newBool) String() string {
        if b {
            return "verdadero"
        }
        return "false"
    }

    var b newBool = true
    fmt.Println(b.String())
```

# 3.5 - Tipos. (Parte 3)

Enfoque de tipos en las facturas

Definicion de la estructura de cliente 
```go
    package customer 
    
    type Customer struct{
        Name string
        Id string
    }
    /* inicializando sin el nombre del campo porque esta en orden */
    func New(name, id) Customer{
        return Customer{name, id}
    }
```

Definicion de la estructura de item 
```go
package invoiceitem
type Item struct{
    id uint
    product string
    value float64
}
func New(id uint, product string, value float64) Item{
    return Item{id, product, value}
}

/* Creacion de un tipo para el calculo del total */
type Items []Item

func NewItems(items ...Item) Items{
    var is Items 
    for _, item := range items{
        is = append(is, item)
    }
    return is
}
/* Dejando el calculo del total a este tipo */
    func (is Items) SetTotal() float64{
        var total float64
        for _, item := range is{
            total += item.value
        }
        return total
    }
```

Definicion de la estructura del packete factura 
```go
    package invoice

    type Invoice struct{
        country string
        city string
        total float64
        /* Relacion de 1 a 1 con la srcutura del cliente, una estructura es un tipo de dato */
        client customer.Customer
        /* Composicion de 1 a muchos, invoiceitem es la manera en que usamos el modulo */
        items invoiceitem.Items
    }

    func New(country, city string, client customer.Customer, items invoiveitem.Items){
        return Invoice{
            country : country,
            city: city,
            client: client,
            items: items,
        }
    }

    func (i *Invoice) SetTotal(){
        i.total = i.items.Total()
    }
    }

```

Creacion de una factura desde main
```go
    i := invoice.New(
        "Colombia", 
        "Bogota", 
        customer.New("Fran", "121345"),
        invoiceitem.NewItems(
            invoiceitem.New(1,"Chetoss",9.50),
            invoiceitem.New(2,"Chetoss",9.50),
            invoiceitem.New(3,"Chetoss",9.50),
            invoiceitem.New(4,"Chetoss",9.50),
        ),
    )

    fmt.Println("i: %v" ,i)
```

> Dejamos la logica de los items en la el paquete de item con la creacion de un tipo items que se define a partir de Item

# 3.6 - Cómo embeber tipos en estructuras y 3.7 - Sobre escritura de métodos

Es analogo a las subclases,que es como la herencia de los atributos y metodos que pueden pueden a su ves implementar nuevos metodos

Se pueden presentar problemas de ambiguedad si embebemos mas de un estrutura y que converjan en  un tipo de capo o metodo , la forma de solucionar la llmada de este campo es indicando desde que estrutura queremos el tipo de campo.

Embebencia de estructuras 
```go

    type Human struct{
        edad uint
    }
    func NewHuman(edad uint)
Human{
    return Human{edad}
}
    type Person struct{
        nombre string
        edad uint
    }

    func NewPerson(nombre string edad uint){
        Person{nombre, edad}
    }

    type Empleado struct{
        Persona
        Humano
        salary float64
    }
    func NewEmpleado(name string, age uint, salary float64 ){
        return Empleado{NewPersona(nombre, edad), NewHuman(edad), salary}
    }

```

```go
    func main(){
        e := NewEmpleado("io",22,100000)
        /* marca error */
        fmt.Println(e.Nombre, e.Edad)
        /* edad desde persona */
        fmt.Println(e.Nombre, e.Person.Edad)
        /* edad desde humano */
        fmt.Println(e.Nombre, e.Human.Edad)
    }
```

> La sobreescritura de los metodos , solo es como un ocultameinto del metodo embebido si es que existe uno en la structura exterior
