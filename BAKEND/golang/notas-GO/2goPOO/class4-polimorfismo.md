# 4.1 - Interfaces. (Parte 1)

Es un conjunto de firmas de metodos, en go se fomenta el uso de interfases simples a menudo de un solo metodo que sirve como limite comprensible entre los componentes.

- Si es un interfase de un solo metodo se recomienda que su nombre sea el del metodo con el sufijo *er -> read -> reader*

Declaracion de una interfase
```go
    type Greeter interface{
        Greet()
    }

    type People struct{
        Name string
    }

    func (p People) Greet(){
        fmt.Printf("HOla soy %s", p.Name)
    }

    type Text string

    func (t Text) Greet(){
        fmt.Printf("HOla soy %s", t)
    }

    func main(){
        var d Greeter = Text("io")
        var g Greeter = Persona{"io"}
        g.Greet()
        d.Greet()
    }
```

> Como los metodos aplican a cuialquier tipo valido del lenguaje, por esto si el tipo implementa greet en este caso estara satisfaciendo al interafase greeter, no tenemos que decir directamente que se implemente como en java *implement interface*

# 4.2 - Interfaces. (Parte 2)

Los valores de las interfaces se pueden considerar como una tupla de un valor y un tipo concreto

```go
    func GreetAll(gs ...Greeter){
        for -,g := range gs{
            g.Greet()
            fmt.Printf("\t valor: %v, tipo: %T\n", g,g)
        }
    }

    func main(){
        p := Person{"io"}
        var t Text = "oi"
        GreetAll(p,t)
    }
```

# 4.3 - Interfaces. (Parte 3)

Un tipo puede satisfacer multiples interfaces, podemos embeber y realizar composicoin de interfaces

```go
    type Greeter interface{
        Greet()
    }
    type Byer interface{
        Bye()
    }

    // Composicion de interfaces
    type GreeterByer interface{
        Byeer
        Greeter
    }

    type People struct{
        Name string
    }

    func (p People) Greet(){
        fmt.Printf("HOla soy %s", p.Name)
    }

    type Text string

    func (t Text) Greet(){
        fmt.Printf("HOla soy %s", t)
    }

    func GreetByerAll(gbs ...GreeterByer){
        for -,gb := range gbs{
            gb.Greet()
            gb.Bye()
            // fmt.Printf("\t valor: %v, tipo: %T\n", g,g)
        }
    }

    func main(){
        var d Greeter = Text("io")
        var g Greeter = Persona{"io"}
        /* Implementamos la interfaces de greeder y byer de una para los dos */
        g.GreetByerAll(d,g)
    }
```

# 4.4 - Interfaces. (Parte 4)

Tambien podemos implementar interfaces de los paquetes que establcio go

[Paquetes de golang donde podemos encontar interfaces](https://golang.org/pkg)

```go
    func (p Persona) String() string{
        return "Hola desde la interface de fmt" + p.Name
    }

    func main(){
        p:= Person{"Alejandro"}
        fmt.Prinln(p)
    }
```

# 4.5 - Implementar interfaces usando receptores de puntero vs receptores de valor

Existe una gran diferencia entre el conjunto de metodos de un receptor normal yel de uno puntero

```go
    type Storege interface{
        Get() string
        Set(string)
    }

    type Persona struct{
        Name string
    }

    func NewPersona(name string) *Persona{
        return &Person{name}
    }

    func (p *Persona) Get() string{
        return p.name
    }

    func (p *Persona) Set(name string){
        p.Name = name
        return "Fue establecido el nuevo nombre"
    }

    func Exec(s Storage, name string){
        s.Set(name)
        fmt.Println(s.Get())
    }
```
Ejecucion en la funcion main
```go
    func main(){
        p:= NewPerson("Alejandro")
        Exec(p, "Alvaro")
    }
```

> Los de tipo puntero son las generales y envuelven a los que no, por sto es mejor manejar todos como punteros

> Aseguramos que trabaje con interfaces, cuando estas sean declaradas

# 4.6 - Polimorfismo a través de Interfaces

Manandar un mensaje sintaticamente igual y que todos lo implementen de su propia forma.

```go
    type PayMethod interface{
        Pay()
    }

    type Paypal struct{}
    func (p Paypal) Pay() {
        fmt.Println("Pagado con paypal")
    }

    type Banco struct{}
    func (b Banco) Pay() {
        fmt.Println("Pagado con credito")
    }

    type Efectivo struct{}
    func (e Efectivol) Pay() {
        fmt.Println("Pagado con efectivo")
    }

```

Creacion de la fabrica que implementara los metodos de pago
```go
   func Factory(method uint) PayMethod{
       switch(method){
           case 1:
                return Paypal{}
            case 2:
                return Banco{}
            case 3: 
                return Efectivo
            default: 
            return nil
       }
   }

   func main(){
       paymethod := Factory(2)
       paymethod.Pay()
   }
```

# 4.7 - Empty interface

NO tiene un valor ni un tipo concreto 

Definicion de una interface nula
```go
    type exampler interface{
        x()
    }

    func main(){
        var e exampler
        fmt.Printf("valor: %v, tipo: %t", e,e)
        e.x()
    }
```

Una interface vacia es una que implementa 0 metodos , sirve para manejar valores de tipos desconocidos, es decir cuando on sabemos que tipo de vamos a ricibir en un metodo

Definicion de una interface vacia
```go
fmt.Printf() /* este es el caso puede recibir lo que sea */

func wrapper(i interface{}){
    fmt.Printf("valor: %v, tipo: %t", i,i)
}

func main(){
    wrapper(12)
    wrapper(12.456)
    wrapper(false)
    wrapper("io")
}

```

# 4.8 - Type assertions

Identificamos el tipo de dato concreto que recibimos

```go
    func wrapper(i interface{}){
        fmt.Printf("valor: %v, tipo: %t", i,i)
        
        /* type assertion */
        v, ok := i.(string)
        if(ok){
            print (strings.ToUpper(v))
        }
    }

func main(){
    wrapper(12)
    wrapper("io")
    wrapper(12.456)
    wrapper(false)
    wrapper("io")
```

# 4.9 - Type switches

Trabaja de manera mas comoda que *type assertion* 

```go
    func wrapper(i interface{}){
        fmt.Printf("valor: %v, tipo: %t", i,i)
        
        /* type switch */
        switch v:= i.(type){
            case string:
                "algo"
            case uint:
                "algo"
            default:
                ""
        }
    }

func main(){
    wrapper(12)
    wrapper("io")
    wrapper(12.456)
    wrapper(false)
    wrapper("io")
```