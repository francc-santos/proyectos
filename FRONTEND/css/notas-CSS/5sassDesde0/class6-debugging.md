# Debugging
## Opciones de compilacion

opcion| Descripcion
`node-sass -w archivo/directorio -o archivo/directorio`|  Solo que compile cuando haya cambios 
`--output-style= expanded`| es la version de compilacion donde  deja espacios entre cada selector
`--output-style= nested`| es la version de compilacion donde se toma como uns indentacion
`--output-style= compressed`| es la version de compilacion donde, cada selector ocupa una linea 
`--output-style= compact`| es la version de compilacion donde , todo en una sola linea , ni comentarios 
`--output-style= expanded --source-comments`| indica como comentario en que linea del sass surgio el css, desde donde se compilo

## Sourcemaps

Mapas de origen, es codigo que vincula el resultado compilado con el codigo que le dio origen, como typescript , ecma con babel , sass a css

```shell
    node-sass directorio -o directorio --source-map=true
```
En la terminal saca un archivo donde podemos ver de donde se compilo y esto ya es posible verlo desde el debbugin del navegador , y podemos leer directamente el archivo sass 

> buscar que pedo con sass y web-pack

## @Debug @warm @error

Directiva con las cuales podemos hacer debbuging 

directiva| descripcion
`@debug`| Mandamos un dato a consola, por ejemplo de los type de datos , sin que se compile al css
`@warn`| mandamos mensaje a la terminal en forma de advertencia
`@error`| mandamos mensaje a la terminal en forma de error, pero si detiene la compilacion 

## Estructura de proyecto sass

Poder maejar el contenido del los elementos del sass

SMACSS
- Base = estilo asplicados a etiquetas html
- modulos = componentes reusables 
- layout =  todo lo de maquetacion
- theme = estilos de los componentes 
- estado = todo lo que cambian. animacion hover , etc

ITCSS
- settings = variables funciones mixins
- tools = variables funciones mixins
- generic = nomalize
- elements = estilizar etiquetas
- objets = elemento de solo layout 
- components = componentes con tema 
- utilities = sobreescritura de elementos 


7in1

[Ejemplo de estructura de 7 en 1]([https://link ](https://gist.github.com/rveitch/84cea9650092119527bc))

