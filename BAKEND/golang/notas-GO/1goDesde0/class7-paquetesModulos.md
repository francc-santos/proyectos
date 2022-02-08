# 7.1 - Paquetes

Para la creacion de nuestros propieos paquetes es necesario recordar la definicion de estos.

Un paquete es una carpeta que contiene una coleccion de archicvos que nos dan una funcionalidad.

- Podemos declarar variables a nivel de paquete, pueden ser usada desde los archivos que esten en la misma carpeta, no se pueden asignar con `:=` 
- Para exportar algo entre archivos de un mismo paquete deben de empeazar con *mayuscula* , y con *minuscula* para **no exportarla**.
- para usarlo debemos de utilizar el prefijo de como fue llamado el paquete
- Buscar una lectura sencilla en la importacion de estos paquetes.

Definiendo un paquete que se usara en otro
```go
package greet

var emoji=""

func English() string{}
func Italian() string{}
```

Usando en la funcion principal
```go
package main

import "github.com//...." /* cuando creemos el modulo se importa asi  */

func main(){
    greet.English()
}
```

# 7.3 - Crear un módulo

Nos permiten administrar las dependencias de nuestro paquetes y controlar las ersiones de los mismos  
Lo recomendable es tener uno solo en la raiz del proyecto

*codigo* | **Descripcion**
:---|---:
`go mod init nombre `| Decimos a go que cree un nuevo modulo, se recomienda que esl nombre sea la ruta de github donde esta alojado 

- **go.mod** es el archivo donde se gestionan las dependencias del proyecto
- ya pomode importarlo como

# 7.4 - Importar paquetes de terceros

*codigo* | **Descripcion**
:---|---:
`go build `| Compilamos el proyecto y generar un archivo ejecutable que adicionalmente ve que dependencias faltan y son descargadas entonces
`go env`| Podmeos ver las variables de compilacion donde vemos la rutas donde se setean las dependencias en `pkg/mod`

# 7.5 - Versionamiento. (Parte 1)

GO, se apolla de las etiquetas de versionamiento , los tags en caso de no tener, cra una pseudoversion con el commit

El versionamiento semantico puede verse :
- 000 , indica que esta en desarrollo y por nada puede onsiderarse estable
- 1.0.0 define la version del publica inicial
- el ultimo numero se itera en correcciones de bugs, que mantiene compatibilidad con versiones anteriores
- el egundo es la crrection menor, compatibilidad con la version anterior, el ultimo nuemro tiene que volver a 0
- version mayor sin compatibilidad con versiones anteriores

*codigo* | **Descripcion**
:---|---:
`go list -m all`| Podemos ver la lista de los modulos del proyecto.
`go mod why paquete`| Saber dependencias de la dependencia 
`go list -m -version paquete`| Ver todas las versiones de un paquete

Podemos ver pq descarga ciertas versiones en el archivo de los modulos de go.

# 7.7 - Actualizar dependencia versión menor

*codigo* | **Descripcion**
:---|---:
`go list -m -versions paquete`| vemos el listado de las versiones de go
`go get paquete`| obtenemos la ultima version del paquete
`go list -m -version paquete`| potenemos las versiones del paquete
`go get paquete@version`| traemos una dependencia en especifico

> en el archivo de go.mod podemos ver que las dependencias que nosotros especificamos por version tiene un comentario //indirect para que sean tomadas en cuenta

# 7.8 - Actualizar dependencia versión mayor

Cuando no se pone la version en la ruta de importacion toma la version 0 y la 1.

*codigo* | **Descripcion**
:---|---:
`import  *pacV2* paquete/v2`| tenemos una version mayor, y tener compatibilida con las versiones de 2, con un alias *pacV2* para poder  usarlo sin problema por tener otra version del mismo

> cuando usamos dos versiones del mismo paquete tenemos que usarlo mediante un alias que ponemos en la importacion, despeues hacer el nuevo go build 

# 7.9 - Limpiar dependencias no usadas

*codigo* | **Descripcion**
:---|---:
`go mod tidy`| limpiamos las dependencias no usadas