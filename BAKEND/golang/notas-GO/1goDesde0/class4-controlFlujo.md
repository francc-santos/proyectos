# 4.1 - If

- NO son necesarios los parentesis para la condicion
- Mejor siempre evaluar la condicion pesimista
- Se puede tener ua variable dentro del scope de la condicion

*codigo* | **Descripcion**
:---|---:
`if`| evaluamos una primera condicion
`else if`| evaluamos una segunda condifion bajo para metros , podeoms repetirlo
`else`| se ejecuta cuando ninguna condicion se ejecuta
`if variable; condicion{}`| podemos tener una variable dentro del scope de la condicion

# 4.2 - Switch

```go
    switch ""{
        case "","":
        case "","":
        default:
    }

    /**  Uso de operadore logicos
     NO se usa la expresion directamente en la apertura si no  en la evaluacion */
    switch{
        case exp == "" || exp == "" :
        case exp == "" || exp == "" :
        case exp == "" || exp == "" :
        default:
    }
```
- NO  es nesesario el uso de break
- Podemos validar mas de una opcion, separado por comas 
- Podemos usar operadores de comparacion y logicos 

*codigo* | **Descripcion**
:---|---:
`switch expresion`| pasamos la expresion que quremos evaluar
`case condition`| opcion donde puede ser verdadera la condicion
`default`| NO hay una opcion valida

# 4.3 - For clásico

Solo podemos trabajar los ciclos con el bucle for

- Sabemos que puede empezar desde cualquier valor

## For clasico

```go
    for i:=0;i>count; i++}{}
```

## For continuo
Es como el while

```go
    i:=1
    for i <= 10{
        i++
    }
```

## For forever

No se necesita de una condicion pq se ejecuta para siempre
```go
    i:=1
    for {
        i++
    }
```

## For range slice
Poder iterar slice, mapas y strings

- El valor que devulve es una copia del array si queremos modificarlo debemos de hacer es indicar el indies desde el array.

```go
    for indice,valor:= range nums{
        indice
        valor
    }
```
> siendo nums un array de enteros

## For range maps

```go
    for key,valor:= range sports{
        key
        valor
    }
```

## For range string

```go
    for _,valor:= range hola{
        string(valor)
    }
```
