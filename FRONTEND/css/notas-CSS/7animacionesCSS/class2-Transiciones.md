# Introduccion a las transiciones

De una propiedad css a otra en un periodo de tiempo.

Pueden declarse mas de una separadas por comas 

*propiedad* **Transiciones** | Descripcion
:---|---:
`transition-property:`| indicamos la propiedad que se va a transicionar
`transition-duration`| cuanto dura la transicion
`transition-timing-function:`| como es el comportamiento de la trannsicion, debil, fuerte
`transition-delay:`| cuanto tarda pra empezar

*valores* **property** | Descripcion
:---|---:
`all`| animamos todas
`none`| ninguna
`propiedad`| indicamos la propiedad

*valores* **timing-function** | Descripcion
:---|---:
`ease`| sueva que deshacelera
`linear`| la velocidad se mantiene
`ease-in`| debil y acelera al final
`ease-out`| fuerte y deshacelera
`ease-in-out`| en el medio acelera
`step-start`| 
`step-end`|
`steps()`|

```css
    .el{
        transition: property|duration|delay|time-function;
    }
```

# Evento transitionend

Es un eventoq ue podemos capturar en *js* , que nos dice cuando la tansicion acabo , y con esto podemos resetear las transiciones.

`e.placedTime`

# Transiciones de ida y vuelta

Definimos dos transiciones sobreescribiendo la primera se toma como regreso, y la segunda de ida.


# Disparadores de transiciones con pseudoclases

*propiedad* **Transiciones** | Descripcion
:---|---:
`:hover`| posicionado encima
`:active`| se pusha un button
`:target`| click en un button
`:focus`| click en un input
`:checked`| click en un box
`:in-range`| seleccion en una barra
`:required`| cuando se pone la info requerida
`:optional`| se llena un optional
`:valid`| cuando es valida la entrada

> Traslate los porcentajes denotan el mismo elemento.
