# Introduccion 
## Conexion de las hojas de estilos con el html

Codigo|Descripcion
:--|--:
`<link rel="stylesheet" href="./styles.css">`|linkeado en el head
`<style></style>`|Escribirlo dentro del html en el head con la etiqueta *style*
`style="comoAtributo"`|Escribirlo como atributo en las etiquetas html
`<style>@import url(./style.css)</style>`|

> El mejor es la primer forma, y en caso de usar import , se pude importar un archivo dentro de otro, pero esto es mejor resolverlo con la orden de linkeo en html linkeando todos los archivos que tengas , pero es aun mejor usar algo como Sass donde esta todo acomodado, ya que import es bloquente y si falla la importacion de un archivo , todo se va a la shit.

## Sintaxis de Css
Ya sabemos que la sintaxis son las reglas de ortografia de cualquier lenguaje.

Codigo|Descripcion
:--|--:
`regla` |Es todo el contenido , desde el selector y sus declaraciones
`selector` |es como indicamos a que elemento se le aplicaran los estilos 
`propiedades` |es la caracteristica que se va a modificar 
`valores` |la nueeav cantidad que tendra la propiedad
`declaraciones` | es una linea de codigo hasta el punto y coma 

## Variables de css
Reutilizar caracteriticas, y sus sintaxis son:
```css
    --variable: red; 
    /* se usa */
    body{
        color:var(--variable);
    }
```