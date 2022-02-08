# ¿Qué son los pseudoelementos?

Es algo que aprenta ser un elemento, existen los que pretenden generar contenido , como ser un div, y los otros son los que seleccionan una parte del contenido 

NO existen en el DOM.

# ::after y ::before

Sirven para generar contenido, noatr que en el uso de pseudoelementos se usan 4 puntos y no solo dos como con las pseudoclases.

Se crea un elemento delante y despues del elemento seleccionado con el pseudoelemento.

```css
    .element::after{
        content: '<<<<<<<<<';
        color: red;
    }
```
> Las propiedades que se usan en este selector modifican el pseudoelemento 

# attr()

Funcion para obtener el valor de las propiedades declaradas en linea del html. se unsa como valor de la propiedad.

```html
    <h1 data-name="Nombre del curso">imegen del curso</h1>
```

> Los atributos que empiezan con *data* son creados por nosotros y podemos setear info que despues extraigamos desde la funcion *attr()*


# unicode y quotes

Son caracteres especiales como emojis= unicode, [unicode](https://unicode-table.com)

Y en la propiedad **quote** , podeoms setear caracteres unicode.

# Imágenes

Para usar imgenes como pseudoelementos tenemos que ponerlo como background y asi podemos redimencionarlo, de lo contrario no se puede

```css
    .element::before{
        content:'';
        display: block;
        width:;
        height:;
        background: url();
        background-size: containt;
    }
```

# Vacío

tener pseudoelemtos vacios facilita la extencion de elementos desde css, sin necesidad de declarar mas elementos.

# Pseudoelementos con variables CSS

Podemos decalrar variables que cambian de acuerdo a a clase deonde e aplican los pseudoelementos y sobreeescribir el valor de estos 

# ::first-line

Es para seleccionar pate del contenido que esta en el DOM, 

*selector* **Pseudoelemento** | Descripcion
:---|---:
`p::first-line`| seleccionamos la primer linea del contenido y poder darle estilos 
`::first-letter`| seleccionamos la primer letra, podemos darle estilo a la primer  letra como en los articulos ,etc
`::selection`| cuando se subraya el texto podemos modificar el fondo, color y la sombra, solo en la barra de subrrayado 
