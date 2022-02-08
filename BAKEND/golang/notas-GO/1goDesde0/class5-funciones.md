# 5.1 - Funciones

Declaracion de una funcion
```go
    func name(){}
```
Ejecucion de una funcion, que puede ser en cualquier paquete, pero en este caso es en el principal

```go
    func main(){
        name()
    }
```

# 5.2 - Funciones con parámetros por valor y por referencia

- Los parametro denben de tener un nombre y tambien un tipo de dato
- Por defecto recibimos una copia del valor de la variable como parametro
- Para recibir una referencia debemos de poner un puntero

## Paso por valor
```go
    emoji := ""
    change(emoji)

    func change(value string){
        value = ""
    }
```

## Paso por referencia
- & = direccion de memoria
- * = puntero a la direccion de memoria
```go
    emoji := ""
    /* pasamos la direccion de memoria */
    change(&emoji)

    /* Recibimos una direccion de memoria */
    func change(value *string){
        *value = ""
    }
```

# 5.3 - Funciones con return

- Debemos indicar que retornaremos una valor al final de los parentesis con el tipo de dato
- Dentro de la funcion se indica con la palabra `return` que se retornara el valor
- Cuando los tipos de datos de los parametro son iguales podemos indicarlo solo en el ultimo.

```go
    func sum(num1 int, num2 int) int{   
        return num1 + num2
    }
```

# 5.4 - Retorno de múltiples valores

- Cuando se retorna mas de un valor se debe de indicar al final de los prametros como `(string, string)`
- En el uso de la funcion poedeoms recibir los valores en variables separados por comas


Definicion de la funcion
```go
    func convert(text string)(string, string){
        min:= strings.ToLower(text)
        may:= strings.ToUpper(text)
        return min,may
    }
```

Uso de la funcion
```go
    minuscula, mayuscula:= convert(txt)
```

# 5.5 - Controlar errores

De una manejamos los errores sin el uso de excepciones, que muchas veces no son controladas

```go
    content , err := ioutil.ReadFile("./dsanhdsa.txt")
    if err != nil{
        // El error no es nulo entonces se ejecuta este if 
    }
```
> ioutil readFile retorna como contenido un []byte que debems convertir en un string(content) con el cast

# 5.6 - Funciones que reciben y retornan funciones

```go
    func filter([]int,callback func(int) bool) []int{
        result := []int
        for i,v := range nums{
            if callback(v){
                result = append(result,v)
            }
        }
        return result
    }
```

Uso de la funcion anterior 
```go
    nums:= []int{1,4,70,5,67,90,2}

    result:= filter(nums, func(num int)bool{
        if num>=10{return true}
        return false
    })

    result
```
> Podemos retornar una funcion pero para poder ejecutar la segunda funcion tenemos que poner parentesis donde se esta guardando la funcion o desde la ejecucion pasar un segundo parentesis

# 5.7 - Funciones variaticas

Es como las funciones de spread en js ... y en java , creo que tambien en python.

- Tenemso que acceder ha este como un slice

```go
    func suma(nums ...int) int{
        total:= 0 
        for _,v := range nums{
            total += v
        }
        return total
    }
```

# 5.8 - Funciones anónimas

NO tiene nombre, que son asignadas a una variable como en js

Definicion y ejecucion de una funcion anonima
```go
    x:= func(){
        "hola mundo"
    }

    x()
```
Definicion deuna funcion anonima autoejecutable

```go
    func(){
        "hola mundo"
    }() 
```