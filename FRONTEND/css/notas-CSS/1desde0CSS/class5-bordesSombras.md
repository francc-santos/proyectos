# Bordes y sombras 

## Border
Css *propiedad* de **Border**| Descripcion
:--|--:
`border-width` |  el espacio del borde
`border-style` | define si es continu , con puntos , sepaado sin puntos
`border-color` | define el color del borde, si no tiene se toma lael color del padre
`border-rigth-color` | indicamos un olor solo al borde de la derecha en la caja   
`` |  

```css
    .box{
        border: 1px solid #eee;
    }
    .box{
        border-width: 1px;
        border-style: solid;
        border-color: #eee;
    }
```

> Estas propiedades al igual son shorthand para indicar las cuatro lados del borde , podemos darle un ancho difernte al borde , un color dfifernte a cada border y un stylo diferente a cada border


## Border radius
La forma en que se calcula es 

Css *propiedad* de **Border**| Descripcion
:--|--:
`border-radius : 10px` | indicamos que la caja enra borde redondeados de 10px
`border-top-left-radius` | 
`border-top-rigth-radius` | 
`border-bottom-left-radius` | 
`border-bottom-rigth-radius` | 
`border-bottom-rigth-radius : 100px 200px` | Definims que el borde inferior derecho agarra 100px en forma horizontal y 200px en forma vertical
`border-radius: 100px 50px 80px 10px / 200px 100px 160px 20px` | todos los lados tendran diferentes defomaciones en x e y 


> Cuando definimos un border radius, imaginariemnete el navegador dibuja un circulo con el 50& border radius y toma un cuarto de este, de acurdo al valor establecido 

> Podemos definir cuanto se deforma en x y ye ademas de definir la defomraion en la 4 esquinas y en esta pomdemos definir los 4 como en el ultimo ejemplo


## Outline
No influye nada en el layout, es una line que se dibuja buera de la caja en el espacio el margen se podria decir.

Css *propiedad* de **Outline**| Descripcion
:--|--:
`outline: 1x solid red` | dibuja un line ade un pixel en el lugar del margen y noi afecta ni suma al layout


## Box shadow
Sombra de caja, 

```css
    box-shadow: h-offset v-offset blur spread color | inset;
```

Css *valor* de **Box-shadow**| Descripcion
:--|--:
`v-offset` | indicamos que tanto se movera hacia arriba
`h-offset` | indicamos que tanto se mueve al lado
`blur` | indicamos la cantidad del difuminado
`spread` | indicamos cuanto va a crecer o expander indicad con px 
`color` | indicamos el color
`inset` | indicamo la sombra interior

> podemos indicar mas sombras con un coma ente cada definicion , ademas qu de manera predetermina toma el color del elemento 

> los valores positivos se mueven hacia abajo y los negativos hacia arriba , normal porque un sombra esta definida por la luz e instintivamente viene de arriba