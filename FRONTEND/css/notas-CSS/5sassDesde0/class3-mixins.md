# Mixins
## Definicion de mixins 

```scss
    @mixin button{
        display : inside-block;
        margin: 1em;
    }

    .button{
        @include button;
    }
```
> Como podemos declarar solo las propiedades que se aplican a un selector , tambien podemos inlcuir selectores con toda y sus poçropiedades e inclusive la logica.

> Recomendable que la declaracion de los mixins este en un lugar y la llamada en otro 

## Parametros y argumentos

```scss
    @mixin menu($selelector-item '.menu-item', $selector-link '.menu-link' ){
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;

        #{$selelector-item}{
            display: block;
        }

        #{$selector-link}{
            display: block;
            text-decoration: none;
        }
    }
```
> Podemos pasar valores por default.

## Parametros mutiples 

Spread operator

```scss

    @mixin button($colors...){
        .button{
            display: inline-block;
            margin:1em;
            color: map-get($button-colors,nth($color,1))

            a{
                text-decoration: none;
            }
            @if length($colors)>1{
                @for $i from 2 to length($colors){
                    &.#{nth($colors,$i)}{
                        color: map-get($button-colors,nth($colors,$i))
                    }
                }
            }
        }
    }

    @include button(map-keys($llaves)...)
```

## Directiva content

    ```scss

    @mixin menu{
        ...
        .link{
            @content;
        }
    }

        @include menu{
            font-size: 1em;
        };
    ```

> no estamos limitados a un dato como seria pasarlo como parametro, podemos declarar de una todo el codigo que se necesita 

## Mixin para resposive web desing
