# Ciclos y condicionales 

## Estructura de un proyecto Sass

> Es tener un directorio donde esten todos los archivos de scss y uno donde se va a compilar el css

En scss  
- componentes 
- mixins 
- funciones
- varibles
- layout
- theme

## @extend

```scss
    %button{
        display: inline-block;
        margin: 1em 0;
        padding: .5em 1.5em;
    }

    .button{
        @extend %button;
        background: red;
    }

    .button--alert{
        @extend .button;
        background: yelow;
    }
```

Para poder llamar placeholder o una clase con `%`, es otra clase lo llamamos , pero es mejor los placeholder.

> Par poder generar un comun de los estilos de los componentes y al llamarlo en otras class poder añadir mas estilos propiedades de la class

## Condicionales 

Escuchamos condiciones como en cualquierlenguaje de programacion.

```scss
    @if true {
        background: red;
    }@else if{
        background: yellow;
    }@else{
        background: green;
    }
```

> Podemos usar operadores logicos , numericos , and or == > <


Podemos usar los condicionales como validaciones, en el uso de importaciones 

## Ciclo @for

```scss
    @for $i from 1 to 10{
        .colum-·{$i}{
            width: $i * 1em;
        }
    }
```
> Recorremos un numero determinado

## Ciclo @each

Iteracion sobre listas  maps

```scss
    @each $color in $colors{
        .#{$color}{
            background : $color;
        }
    }

    @each $key, $value in $colors{
        .#{$key}{
            background : $value
        }
    }
```

## Ejercicio con cilos 
