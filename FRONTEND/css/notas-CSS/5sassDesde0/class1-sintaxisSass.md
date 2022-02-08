# Sinaxis

## Desventajas de Css

    Los estilos css deben de escribirse manualmente , las guias de estilo no pueden modifiare facilmente, no se puede modularizar el codigo sin afectar el redimiento del proyecto, es propenso a sobreescrituras , problemas de especificidad y cascada en proyectos grandes 

> La pricipal desventaja es que no se pede dar de manera natural la escalabilidad.

## Que es Sass?
    Es un preprocesador que sirve, para ampliar las capacidades de css como un lenguajes de programacion.
    
> Importante saber que los comentarios de linea en la compilacion no se pasan y los de multilineas cloro que se pasan

## Compilacion de Sass 1
    Podemos usar compilacion de sass en codepen, prepros, 

## Compilacion de Sass 2
    En la terminal podemos usar node-sass 

```shell
    node-sass -w entrada-archivo -o salida-archivo
```
    Tambien podemos darle los directorios el de entrada y el de salida.

## Variables
    Almacenamos un  valor que podamos reusar mas adelante
```scss
    $color: red;
    $size: 200px;
```

```scss
    // Importacion de variables 
    .#{$color}{
        color: $color;
    }
```
> Podemos contruir selectores desd las variables o cualquier cosa, para sobreescribir mas adelante en el proyecto la variable le damos `!default` enfrente de el valor

> Tenemos scope de bloque , osea que no funciona de selector a selector , si es de forma global no importa donde las llamemos.

## Anidamiento
    De manera sintactica es como indicar que la etiqueta, class, etc es de una manera hijo de la que lo contiene.

> Es como decri toda etiqueta hijo de la etiqueta que se anida tendra eto estilos, en la compilacion es un selector de descendencia.

    Lo maximo recomendable es un anidamiento de un nivel.

    Para llamar a la etiqueta papa debemos de usar en la anidacion `&`, mayormente en pseudoclases para respetar la sintaxis de estas.

```scss
    // Es un buen uso de este acortamiendo de shorthands
    grid-template:{
        columns: 100px 200px;
        rows: auto;
    }
```

## Tipos de datos

- string: pueden ser entrecomillados o no 
- numeros: 
- colores:
- booleans: 
- lists: valores separados por espacio o comillas 
- maps: propiedad, valor , podemos gurdar proiedades 

## @import  

```sass
    @import "archivo"
```

>Pueden o no  usar la extension del archivo, lo mejor es solo importar a un archivo, y desde este compilar todo, para que no se compilen estos archivos  usar `_` antes de nombrarlo es un **parcial**.

> El orden de importacion van primeros las variables , mixin , funciones , componenetes , porque segun este orden se tendra en el conocimiento todas las variables en los archivos donde se usen.