# Estructura del Documento
Semanticamente debemos colocar el contenido de acurdo al lugar que esa info sera tendra en la pagina.

----------
Etiqueta|Descripcion
:--|--:
`<!Doctype html>` | Indicamos al navegador que version de Html estaos usando al navegador desde v5
`<html></html>`| Es la raiz de todo el documento el papa de todas las etiquetas
`<head></head>`| Contiene informacion necesaria para el navegador que no se visualiza en la pagina
`<body></body>`|Contien toda la infomacion que los usuarios ven

# Contenido del Head
Etiqueta|Descripcion
:--|--:
`<meta chartset="utf8">`| Considera las sibolos como ñ,¿
`<meta name="describtion" contente="">`|En **content** se coloca la descripcion de la pagina y es lo que se ven en la descripcion de google
`<link rel="icon" href="">`| En **href** se coloca la direccion del favicon, es el que aparece en la pestaña
`<link rel="stylesheet" href="">`| Dentro del **href** colocamos la direccion de los estilos que queremos invocar
`<script src="miscrpt.js"></script>`|Podemor llamar el archivo de Js que necesite nuestra pagina *mejor ponerlo en la ultima parte del body*
`<title></title>`|titulo de la pagina web
`<style></style>`|Podemos escribir estilos en el head con esta etiquea , pero no es remendable porque se ensucia

# Encabezados y los parrafos

Etiqueta|Descripcion
:--|--:
`<h1..6></h1..6>`|Indican el titulo de una seccion, el orden debe darse semanticamente para identificar el titulo principal de la pagina y sus subtitulos
`<h1></h1>`|Este si se usa para el titulo de la pagina, h4,h5,h6 no se usan casi 
`<p></p>`|

> Nunca confiar en los estilos que le da por defecto el naegador ya que solo son para que podamos guiarnos en el desarrollo de la pagina   

>Nunca tener un h6  antesde un h1 pq con lo descendiente indicamos titulos y subtitulos

# Etiquetas de seccion 
Con ellas podemos agrupar el contenido en bloques de secciones para  darle una mejor estructura y que no se vea todo feo

<!-- `<></>`| -->
Etiqueta|Descripcion
:--|--:
`<header></header>`|El encabezado del ontenido principal de la apgina , nav de contenido, logos 
`<main></main>`|informacion princila de toda la pagina web
`<aside></aside>`| informacion realcionada con el main, pero que no es la principal
`<footer></footer>`| Debende pero podemos colocar los datos de contacto
`<article></article>`|contenido que no tine nada relacionado con el articulo anterior, *diferentes publicaione, noticias, etc*
`<section></section>`|Divisions internas pero del mismo contenido.
`<nav></nav>`| Para menus de navegacion

# Etiquetas de contenido
Etiquetas que no permiten organizar el contenido.    

----------
Los elementos de **bloques** el comportameineto que tienen por default es ocupar todo el espacio disponible horizontalmente
Elmentos de **BLOQUE**|Descripcion
:--|--:
`h1..h6`| Decalaracion de titulos y subtitulos
`<p></p>`| Declaracion de un parrafo
`<hr>`| Separacion de tema , puede ser dentro del main, aside, footer.
`<pre></pre>`| Respeta el formato de editor, saltos de linea,codigo, etc
`<blockquote></blockquote>`|Es una cita
**`<div></div>`**| Solamente para organizar|agrupar contenido y aplicarle estilos por css o comportamiento por js


Los elementos de **linea** en su comportamiento por default es sol ocupar el espacio que ocupa el contenido
Elmentos de **LINEA**|Descripcion
:--|--:
`<em></em>`|Funcina par indicar que es un fragemento importante.
`<strong></strong>`|indica el elmento mas importante dentro del contenido
`<small></small>`| Es el texto menos importante
`<wbr>`|Indica un salto de linea en donde queramos en una parabra muy larga
`<br>`|salto de linea
`<span></span>`|Solo es un contenedor como div , solo que es de linea, *para cambiar una palabra con js podria ser*
`<cite></cite>`| version de blockquote en linea
`<sub></sub>`| indicamos un subindice 
`<sup></sup>`| inidcamos un superindice, notas al pie, notacion quimica math, etc
`<code></code>`| codigo dentro de una linea
`<time></time>`| Indicacion de tiempo, *En una aplicacion donde indiquemos las fechs de publicaciones*
|**Excepsiones a la regla** | **Estas si solo son para ar estilo desde html**
`<b></b>`|bold 
`<u></u>`|underline
`<i></i>`|italic

> Recordando que los estilos que pone el navegador no importan si no solo la semantica de estas etiquetas.

> Cada ves que se crea un etiqueta de contenido dentro de body, se le llama elemento.

# Enlaces y listas
Ariqutectura cliente servidor, la **arquitectura** es la forma  en que estan estructuradaos los componentes de un sistema, mientras que el **cliente** es el dispositivo que solocita la pagina web, el **servidor** es el hardware y software que almacena la pagina web y sus componentes.  

Es importente tener bien definido que es que, porque cundo estamos desarrollando tener un servidor que nos actualice la pagina segun existan cambios, podemos etener un desarrolo mas felipe y con tenis.

Etiquetas|Descripcion
:--|--:
`<a href=""></a>`|A=anchor=ancla, y necesitan el atributo *href* donde se indica el destino



## Atributos opcionales para a 

Atributos opcionales para **a**|Descripcion
:--|--:
`<a href="" target="_blank"></a>`|Se abre en una nueva pestaña, *para enlaces externos no internos* 
`<a href="" rel="nofollow"></a>`|La imagen de origen no le transmitira su seo al destino osea =*no voto*
`<a href="" rel="noreference"></a> `|no indica el destino el origen del link
`<a href="" rel="noopener"></a>`| Evita la incrustacion de codigo malicioso al abrir enlaces en nuevas pestañas

`<a href="" download></a>`|Descarga el rescurso en lugar de abrirlo en el navegador, pero debe de estar en tumismo servidor


## Manejo de rutas relativas y absolutas

Rutas relativas
: Se usan para rutas internas de nuetro proyecto y se debe de indicar desde la raiz

Dependiendo de su ubicacion se ùeden usar :
Ruta|Descripcion
:--|--:
`recurso`| Si se encuentra dento de la misma carpeta olo se llam y ya
`carpeta/recurso`| Si se encuentra en un carpeta dentro de la carpeta se indica al acarpeta y el recurso
`../`|Si se enuentra en una carpeta superior

> todo respecto al archivo conde nos encontramos

ruta|descripcion
:--|--:
`/`| **relativas a la raiz** Podemos indicar desde la raiz que es la carpeta padre de todo el proyecto

Rutas absolutas
: Tienen el protocolo y son unicas, simpre te lleva al mismo recurso  , rutas externas

## Enlaces con hash y parametros
Elaces hash son para referenciar contenido en la misma pagina.

1. Nombrar con identificadores cada tema que se quiera visitar
2. Referenciarlo con una ancla **a**


## Listas
Etiquetas|Descripcion
:--|--:
`<ul></ul>`|lista no ordenadas
`<ol></ol>`|listas ordenas, *indicamos prioridad*
|*Forma en que indicamos|items*
`<li></li>`|Indicamos que es un elmento de la lista

Etiquetas|Descripcion
:--|--:
`<dl></dl>`|Con este declaramos la lista como ul u ol
|*indicando*|*los elemntos de la definiionion termino y descripcion*
`<dt></dt>`|indicamos que es el termino que queremos definir
`<dd></dd>`|indicamos que es la definicion del termino


> Podemos anidar las listas como `<ol><li><ul></ul></li></ol>`, es decir estamo anidanod dentro de un item ordenado una isatno ordenada

# Contenido embebido
Contenido que no es parte de html y podemos insertarlo desde otra parte 
## Tipo de imagenes 
vector img
: Es definido en cualquier encuadre ,son ecuaciones matematicas

mapas de bits
: son muchos puntos que unidos dan una imagen y segun la resolucion pueden o no estar mas definidos o no.


## Formatos de imagenes 
Formato |Descripcion
:--|--:
`.svg`| Formato acepatado para vectores en la web
`.jpg .jpeg`| Mejor resultados en fotos
`.png`|Usar para transparencias
`.gif`|Para animaciones
`.webp`|Libinao y soporta trasnparencias es como la combinacion de png y jpg


## Insercion de imagenes en Html

```html
    <img src="rutaImg.png">
```
> Usar el atributo alt es importante para dar una descripcion de la img que nos ayude con el Seo , network en caso de que no cargue la img y ademas con las accesibilidad

## srcset

DevicePixelRatio
: Es la relacion de pixeles reales con los pixeles del viewport(cantidad de pixeles disponibles para mostrar contenido)  
De acurdo a este concepto nosotros debemos de tomar en cuenta el tamanio de pantalla para madar una imgen u otra dependiendo del contenido y esto se logra con `srcset` en `img`

```html
    <img 
        srcset="img1.png 2x, img2.png 4x"
        src="imgDefault.png"
    >
```

## Picture
Similar como con el img, utilizamos el atributo `source` para mandar las diferentes imagenes y `media` para poner las condiciones , estas condiciones se deben de poner en orden descendente por la lectura de html. Este soporta webp
```html
    <picture>
        <source srcset="img1.png" media="(min-width: 800px)">
        <source srcset="img2.png" media="(min-width: 400px)">
        <img srcset="imgDefault.png">
    </picture>
```

## Figure
Realmente no es para imgs, representa un contenido que porta un conte
nido principal y una descripcion.

```html
    <figure>
        <img srcset="img.png">
        <figcaption>
            <p>
                Descipcion del la imagen pq esta etiqueta es un caption
            </p>
        </figcaption>
    </figure>
```

## Audio y video
Debe de tener los atributos `controls` y opcionales `poster="poster.png"`, `muted`, `autoplay`
```html
    <video src="video.mp4">
    </video>

    <audio src="video.mp3">
    </audio>
```
> Es mejor usar reproductores especializados en esto porque , cosume mucho ancho banda y en caso de que se quiera hacer por si mismo se debe de codificar y si se codifica mal puede ocupar mas espacio (youtube, vimeo) codec h264

## Insercion de contenido externo
Solo es incorporar desde la pagina que queramos el contenido.




# Tablas 

## Estrutura basica de una tabla 
Organizacion de informacion a traves de filas(horizontal) y columnas(vertical).

Etiquetas|Descripcion
:--|--:
`<table></table>`|Se indica que se va a rear un tabla
|*creacion*|*filas y columnas*
`<tr></tr>`| indicamos una fila
`<td></td>`| indicamos una  data **celda**

> Un estilo casi obligartorio para las tablas es border-collaps : collaps 

> NO podemos crear columnas sepradas de la filas si no que por cada fila colocamos una celda

Etiquetas|Descripcion
:--|--:
`<th></th>`|Creacion de cabecera, dice que corresponde cada columna
`<thead></thead>`| para poner dentro de esta la fila de cabeceras y est bien indicado
`<tbody></tbody>`| para indicar el curpo de la tabla donde van los datos  reales
`<tfoot></tfoot>`| Para una conlcucion 
`<caption></caption>`| el titulo de la tabla
`<></>`|
`<></>`|

## Agrupacion de filas y celdas en una tabla
Atributos de las **tablas**|Descripcion
:--|--:
`colspan=n`| ocupa el espacio extendido de n columnas *verticales*
`rowspan=n`| ocupa el espacio de n filas *horizontales*
|*Agrupacion*| *de* *columanas*
`<colgroup></colgroup>`| indica que agruparemos las columnas
`<col>`| indica una columa, debemos de poner tantas etiquetas como columnas tengamos


> podemos usar span , poner class y con css dar estilos, *va por fuera de la estrutura de la tabla *


# Formularios
En lugar de marcar contenido, los formularios marcan elemntos para que el ususario interactue con la pagina web.

Etiquetas|Descripcion
:--|--:
`<form action="donde"></form>`|Indicamos que es un formulario, con action indicamosa donde vamos a enviar , normalemente al servidor , evaluamos y procesamos  
`<input>`|Es el campo mas usado, pero hay mas 
`<button></button>`|pa enviar
`<textarea></textarea>`| ingresamos un texto largo
`<label></label>`|etiquetamos los campos 
`<fieldset></fieldset>`|agrupar los campos con un recuadro 
`<legend></legend>`|podemos darle un titulo al campoagrupado
`<></>`|


### Atributos de input
Atributos de **input**|Descripcion
:--|--:
`<input placeholder="algo">`|Damos un ejemplo de lo que se tiene que ingresar
`<input submit="algo">`| indica el tipo de intupt que es un enviador 
`<input value="algo">`| indica el contenido que se muestra en input
`<input name="algo">`| es la forma en que sabemos que campo es en backend


> remembear que tendremos que verificar con js que el conetenido ingresado sea numero , alphanumero, alpha , etc

### Atributos de textarea
Atributos de **textarea**|Descripcion
:--|--:
`<textarea cols="n" rows="n">`| cuanto va a medir el area del campo


Atributos de **label**|Descripcion
:--|--:
`<label for="vinculo"></label>`|permite vincular el label con el input que pertenece, mediante el id de este ultimo
`<></>`|
`<></>`|

> lo del for puede ser omitido si el input es hijo del label


## Tipos de input 
Tipos de **input**|Descripcion
:--|--:
`<input type="text"></input>`|acepta testo
`<input type="submit"></input>`|para enviar los formularios
`<input type="number"></input>`|acepta numeros 
`<input type="email"></input>`|solo acepta texto con un code
`<input type="tel"></input>`|solo numeros telefonos y en mobil abre como teclado del telefono
`<input type="color"></input>`|abre un seector de color
`<input type="password"></input>`|una contrasenia y no muestra el texto
`<input type="range"></input>`|barra deslisadora seleccionamos un valor con `min`,`max`,`step`, estos atributos podemos dar un maximo y un mino asi como la cantidad de unidades que se avanzan


## Opciones de seleccion
Tipos de **input**|Descripcion
:--|--:
`<input type="checkbox"></input >`| una caj de seleccion con la que podemos seleccionar mas de una opcion
`<input type="radio"></input >`|circulto donde solo podemos seleccionar una opcion
`<input type="contry"></input >`|podmeos pone una lista de paises que sea definida por nosotros
|*Dentro del* |*sleccion de contry* 
`<option value=""></option>`| opcion de seleccion en nuestra lista , con value podemos indicar 
`<optgroup></optgroup>`|podemos agrupar las opciones  y usando label podemos darle el titulo a la agrupacion
|*otra opcion* | *de lista* 
`<datalist></datalist>`|dentro de un input list podemos anidarlo y con esto definir una lista que podra ser encintrada desde el type del usr, se liga con **list en el input** y **el id en datalist**,  es un select combinado con un filtro

> Todas esta formas de poder selecionar valores con flechas o que salga el calendario para seleccionar una flecha se llaman widgets del navegador


## Atributos de formulario
Atrbutos de los formularios |Descripcion
:--|--:
`require`| indicamos que el valor es obligatorio
`readonly`| solo lectura
`autocomplite="on/off"`| por si tienen los valores guardados en cache se llenen
`checked"`| para checkbox y radio, indicamos un valor por defecto
`selected"`| para sleect, indicamos un valor por defecto
