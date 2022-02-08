# Funciones

## Defincion de funciones 

Trozos de codigo que devulven una valor, 

```scss
    @function mi-funcion(){
        @return $value
    }

    selector{
        propiedad: mi-funcion();
    }
```

> Podemos resivir parametros de uns forma mejor , y siempre debemos de tener un return en caso de que sea nada podemos devolver un null.

## Funciones para em y para imagenes

Funcion para paasar px a em
```scss
    @function($px, $base:16px){
        @return $px/$base * 1em
    }

    body{
        font-size: em(20px)
    }
```

```scss
    @function img($image){
        $path: '/img/'
        @return url($path+$image)
    }
```

## Funciones de strings

quote($string)
:Pone comillas

unquote($string)
:quita las comillas

str-length($string)
: la cantidad de caracteres de un string

str-index($string, $value)
: indice de un valor dentro del string

to-upper-case($string)
: pasa todo a mayusculas

to-lower-case($)
: pasa todo a minusculas

## Funciones de numeros 

percentage($number)
: pasas un valor a porcentaje

max($number1...)
: devuelve el maximo de una lista 

floor($number)
: redondea un numero a el valor anterior entero

random($number)
: valor entero entre 0 y el numero oindicado



## Funciones de listas y mapas 

**funciones lista**|Descripcion
`nth($list,$n)`| n es la posicion de un valor en la lista
`index($list,$valor)`| optenemos la posicion de un valor en la lista
`join($lis1... separator: space)`| podemos unir varias lista con un separador
`append($list $valor $separador)`| insertamos un valor en una lista

**funciones maps**|Descripcion
`map-get($map,$key)`| devuelve el valor del key en el mapa indicado
`map-keys($map)`| devuelve las llaves del mapa
`map-values($map)`| devuleve los valore sdentrodel mapa
`map-has-keys($map,$key)`| podemos preguntar si en el mapa hay la key que se indica 
`map-merge($map1,$map2)`| junta mapas

## Funciones de introspeccion

Funciones que sirven para evaluarse a si mismo, generalmente para debugging

**funcion**|Descripcion
`inspect()`| devolvems el valor que tiene la funcion
`type-of()`| podemoa saber el typo de la variable
`unit()`| la unidad de un numero como string
`unitless()`| true si el valor no tiene unidades
`mixin-exist($mixin)`| ver si existe el mixin en los archivos 
`function-exist($funcion)`|ver si existe a funcion
`variable-exists($variable)`| ver si existe la variable 
`global-variable-exist($variable)`| ver si es global 
