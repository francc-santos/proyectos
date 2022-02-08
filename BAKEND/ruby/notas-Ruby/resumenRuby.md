# varibles 
- es debilmente tipado 

## numeros
- solo te muestra flotantes si los datos son flotantes 

## cadenas
- .methos despues de cualquier cadena te muestra los metodos disponibles para la cadena

# entrada y salida
## salida
- para imprimir con salto de linea incluido `puts`
- para imprimir sin salto ds linea `print`
- Si se usa las comillas simples no espera saltos de linea
- con la intrepolacion o templatestrins en js `#{}`
- con concatenacion `+` antes de lo que se quiera concatenar 
## entrada
- gets , con esto se queda el salto de lina en la cadena
- gets.chomp , para quitar el salto de linea de la cadena 

# sintaxis
- los parentesis en ruby son opcionales al pasar argumrnto a un metodo
- solo cuando se este escribiendo un domain spefcific languge se quitan los parentesis
- snakeCase en lo que no sea clase 

# operaciones matematicas 
- cambiar las cadenas a string = .to_i
- potencia ** 
## presedencia u orden  de operacion 
1. potencia
2. multiplicacion, division, modulo [de izquierda a derecha segun el orden que aparescan]
3. suma y resta 
 > se puede llevar con los parentesis 

# operadores de comparacion 
- > , true si el valor de la izquierda es mayor al de la derecha
- < , true si el valor de la izquierda es MENOR al de la derecha
- <=>, debuelve tres valores , si el de la derecha es mayor 1, si son iguales , 0 , si el de la izq es menor -1
- == , true si las dos cadenas en el valor
- .eql?() , true si son iguale en el tipo de dato y valor
- .qual?(), true si es el mismo valor de referencia , valor y tipo
- !=, true si los valores son diferentes 

# operadores logicos 
- && 
- ||
- !
- and , or y not, toma en cuenta otra cosa 
## orden de preferencia 
1. **
2. !
3. * / %
4. + -
5. <> >= <=
6. == <=> !=
7. &&
8. ||
9. asignacion
10. not
11. or 
13. and

# condiciones 

## if 
- una forma de una linea de imprimir si el if se cumple
```ruby
puts "#{numero_uno}es mayor que #{numero_dos}" if numero_uno > numero_dos
```
- if , else , elsif

- unless , es lo inverso al if , solo si es falsa la condicion se ejecuta 
- si se tiene que negar la condicion del if es mejor usar `unless`

- ternario, 

```ruby
puts (if user == "algo" then "algoimpresion" else "otraimpresion" end)

puts user== "ALGO" ? "IMPRESIONALGO" : "OTRACOSA"
```
## case 

```ruby 
 case calif
 when 10
    puts "biren"
when 5
puts "no pasa"

else 
puts "saca"
end 

puts case calif
when 10,9,8,7,6,5
puts "biren"
when 5
puts "no pasa"

else 
puts "saca"
end 
```
# arreglos 
una especie de caja que puede almacenar valores 

- arreglo = []
- arreglo_dos = Array.new(posiciones)
- arreglo = %w[1 2 3 3 4 6 7], no se necesitan usar comas 
- arreglo << 1, inserta al arreglo 1

## iteracion con .each
- la forma en la que recorre el arreglo es : 
  ```ruby
  calificaciones = %w[1 2 3 4 5 6 7 7]
  suma = 0 

  calificaciones.each_with_index do |calificacion,posicion|
        puts "En la posicion #{posicion} tenemos #{calificacion}"
        suma += calificacion.to_i
    end
    puts suma 

  ``` 
## operaciones con arreglos 

- * , se multiplica por las veces que se diga 
- * , "-" es un join , que convirte un arreglo a un cadena 
- sort , ordenar los datos del arreglo 
- include?(), si el arreglo tiene un valor 
- uniq , quita los lementos repetidos 
- sample , elemento aleatorio del arreglo

# Rangos 

- (1..10).each do |numero| puts numero end , imprime del 1 al 10 
- (1..10).each.step(2) do |numero| puts numero end , imprime del 1 al 10 de dos en dos 

# while,until
```ruby
# mientras se cumpla
i=0
while i<10
puts i
end
``` 
```ruby
numero_magico =20
#  mientras no se cumpla
print "adicina el número magico: "
numro_usuario = gets().chomp.to_i
until numero_usuario == numero_magico
    print "incorecto intenta denuevo"
    numero_usuario = gets().chomp.to_i
end
puts "felicidades adivinaste"

# como una alternativa al do while
numero = -1
begin 
end while numero
```

# time upto downto

son iteradores , metodos que internamente construyen un cliclo

```ruby
# impresion del 0 al 9
10.times do |i|
 puts i
end 

# hasta que llegues a 
1.upto(10) do |i|
 puts i 
end 

# de arriba hacia abajo
10.downto(1) do |i|
 puts i
end 
```

# matrices 
cantidad de dimenciones 
```ruby
arreglo [[1,2,3,],[1,2,3]]
```
- matrix.each(:diagonal) do |i| puts i end

# HASH
diccionarios 

```ruby
# 
tutor = {"nombre"=>"uriel", "edad"=>21, 12=> , []=>d}

# simbolos
tutor = {nombre: => , edad: => ...}
# se puede iterar con el each 
```

## operaciones con hash

- tamaño, lengh
- .has_key?(:sasa), si exite el valor
- .keys , solo las llaves 
- .values . solo los valores 
- .clear , eliminar el hash 
- .delete(), eliminar una llave en espeficico
- .empty?, saber si esta vacio
- . indesx(), savber el asociado a la llave 
- .merge() , combina los hash

# simbolos 
cadena que no se puede modificar en tiempo de ejecucion 

cadena = :algo_que_no_se_quiera_modificar, los simbolos 

# metodos y argumentos 
- si no recibe argumentos es bueno que no lleve los parentesis 
- return
```ruby
def algo(x)
return "algo" unless x.is_a? Integrer
end 
```

## operador splat 
- pasar cualquier cantidad de argumentos y los voy a recibir como un arreglo

```ruby
def hola_gente (*personas)
    personas.each{|persona| puts "hola #{persona}"}
end

hola_gente "saca","sas"

# para pasarle una variable que cotiene el arreglo
def hola_gente (*personas)
    personas.each{|persona| puts "hola #{persona}"}
end
nombres = ["dsd","sds","sdsd","dsdsd"]

hola_gente *nombres
```

# keywords arguments 
- es como en js cuando no tiene un valor , agarra los que le pasamos 
- el orden no importa 

```ruby
def hola(nombre:"",edad:0)
end
```

# clases y objetos 
- clases : definen el comportamiento que nuestros objetos van a tener 

- clases : la receta del platillo 
- objeto : cada platillo 

```ruby 
class Video
    attr_accessr :minutes, :title
    def play 

    end
    def stop 

    end
end

video_obj = Video.new

```

## initialize 

- es el metodo constructor de ruby, se ejectura cada ves que se inicializa un objeto de la clase 
, suele usarce para inicializar valores que el obj tendra


```ruby 
class Video
    attr_accessr :minutes, :title
    def initialize
        self.title = title
    end 
    
    def play 

    end
    
    def stop 

    end
end

video_obj = Video.new("peroo")

```

## Propiedades y metodos accesores 

