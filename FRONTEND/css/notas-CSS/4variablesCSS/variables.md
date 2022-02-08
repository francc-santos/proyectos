# Que son las varaibles de css
Custom propierties donde podemos almacenar en memoria un valor. Tienne herencia y cascada 

### Para variables globales
```css
    :root {
        --variable : valor
    }

    selector-descendente {
        color: var(--variable);
    }
```
### Para las varibles locales 

```css
    selector{
        --variable: valor;
    }

    selector-descendente {
        color: var(--variable);
    }
```
> Gracias a la herencia podemos declarar en un elemento y poder usar esta variable en sus hijos ademas que podemos sobreescribir el valor de la propiedad, cosa que no podemos hacer con sass

> Solo se puede usar como valor , no como propieda, cosa que si se puede en sass porque antes se requiere de una compilacion

## Scope

Es de herencia de papas a hijos, por esto se declaran en la pseudoclase `:root` que tiene mas especificidad y representa al html. Es decir el scope es de DOM

> Pueden ser llamada en otras hojas del mismo proyecto que esten linkeadas 

## Sass variables vs css var
Es mejor usar las dos variables y saber cuando y cuando no 

- Sass var pueden ser declarada sin un selector 
- Sass var tienen scope de bloque 
- Sass var pueden hacer operacion math directemente sin declarar calc()
- Sass var `$color: red`
- Sass var podemos usar funciones para colores , propiedades 
- Sass var peuden ser interpoladas
- Sass var no se pueden redefinr de manera sencilla 
- Sass var mueren en la coplacion 


> Mientras que con calc() se calcula en tiempo real con las de sass se calcula en la compilcio y pasa el valor real

> Podemos usar las dos variables en un royecto y dependiendo si se tiene que manipular el dato podemos usar las se sass sobre las de css

## var css en resposive web desing 

Aqui no ayuda la redefinicion de estas variables.

## Cssom , recuparacion de las css vars

```javascript
    getCoputedStyle(element).propiedad
    getCoputedStyle(element).getPropertyValue('--variablecss')
    element.style.setPropertyValue('--variablecss','value')

    // Solo las propiedades de :root
    getCoputedStyle(documet.documentElement)
```
## Variables css en variaciones de componentes 

Es pensar en la definicion del componete con variables y que esta se redefinan en cada elemento variante.
