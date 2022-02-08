# Fuentes para la web

Formatos digitales para fuentes

- true type font
- open true type : mejor manejo de curvas
- embedded open type: menos espacio
- web open font format: meneja por metadatos
- scalable vector graphics: no tener que transformar un formato

Mejor usar woff, de font squirrel

Debemos tener derechos para usar la fuente.

# @font-face

Se declara:
```css
    @font-face{
        font-family: ;
        font-style: ;
        font-weight: ;
        font-display: ;
        src:local(''),url(), format('woff2');
    }
```

*propiedad* **fontface**| Descripcion
:---|---:
`font-family: ;`| indiamos el nombre de la familia 
`font-style: ;`| si es normal, italica , etc 
`font-weight: ;`| que grosor la funte va a tener 
`src:local(''),url(), format('woff2');`| indicamos donde esta la fuente y si esta en local que no se descargue 
``|
``|
``|

# font-display 

Elegir el comportamiento de las fuentes personalizadas al momento de la impresion

*valores* fondisplay | Descripcion
:---|---:
`auto`| muestra la fuente hasta que este descargada
`block`| muestra hasta que se haya descargado la fuente 
`swap`| muestra un fuente alternativa y cuando cargue cambia a la principal
`fallback`| por 100ms desaparece el texto, si esto no pasa pone el default
`optional`| da permiso al navegador e escojer si no descargar la fuente 
``|

# Creando un sistema de fuentes 

Crear reglas de fontface para las diferentes partes de la web 

# Espacios en blanco 

cuando tenemos texto en un contenedor con tamaño de finido  podemos usar estas propiedades para manejarlo de buena forma

*valor* white-space | Descripcion
:---|---:
`normal`|
`nowrap`| todo en linea 
`pre`| respeta los spacios en blanco 
`pre-wrap`| respeta espacios en blanco y no se desborda
`pre-line`| respeta los saltos de linea y no los espacios en blanco


# Flujo y desbordamiento 

*valor* **word-brake**| Descripcion
:---|---:
`break-alt`| da el salto de linea sin importar a palabra

*valor* **overflow-wrap**| Descripcion
:---|---:
`anywhere`| mantien completa la palabras largas
`break-word`| corta en el lugar mejor 

*valor* **hypens**| Descripcion
:---|---:
`none`| no pone el guion
`manual` cuando haya guion corta 
`auto`| el nav decide donde poner los guiones

# Resolver desbordamiento 

*valor* **text-overflow**| Descripcion
:---|---:
`clip`| pinde se sale el contenisdo lo corta
`ellipsis`| pone puntos suspesivos deonde se corta
`"... "`| podemos decirle que poner cuando se derborde el contenido
``| 

*valor* **line-clamb**| Descripcion
:---|---:
`num`| pasamos que nuemero de lineas queremos mostrar 

>overflow: hiden 