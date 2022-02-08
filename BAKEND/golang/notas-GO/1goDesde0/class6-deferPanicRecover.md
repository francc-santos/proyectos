# 6.1 - Defer. (Parte 1)
Como idicamos que queremos aplazar la ejecucion de hasta que finalice el proceso donde fue indicado el `defer`.

- Crea una pila de las tareas diferidas donde despeus de terminado el proceso donde se llamo se sssssssaca la pila , el ultimo defer el el primero en ejecutarse
- Los argumentos de la funcion son los que tendrian de primera
- Podemos usarla para cerrar recurso, limpiar archivos , cerrar conexiones de red, conexiones a bases datos.

```go
    func main(){
        defer fmt.Println(3)
        fmt.Println(1)
        fmt.Println(2)
    }
```

# 6.3 - Panic

Finlizamos la ejecicion del programa cuando es llamada

```go
    func division(dividendo, divisor int){
        if divisor == 0{
            panic("panico division entre 0")
        }
        fmt.Println(dividendo/divisor)
    }
```

# 6.4 - Recover

Aunque entre en panico se ejecute la funcion de los que sigue

- Debemos de usarla con *defer* 

```go
    func division(dividendo, divisor int){
        defer func(){
            r:= recover(); r != nil{
                "recuperando del panic"
            }
        }()
        validarDivisor(divisor)
        fmt.Println(dividendo/divisor)
    }

    func validarDivisor(divisor int){
         if divisor == 0{
            panic("panico division entre 0")
        }
    }
```