# Introduccion a Git 
## Bitacora del capitan 

Se parce a git es donde se ponen lo records de lo que a pasado a lo largo del viaje.

> nosotros solo almacenaremos hechos importantes a lo largo del proyecto

## Introduccion a git 

Sistema de control de versiones, donde cada version es un punto donde el proyecto sufre un cambio significativo , entonces nosotros controlamos las versiones de nuestro proyeto a traves del tiempo y asi podemos volver a versiones donde podamos ir hacia otro punto con lo ya recorrido.

## Instalacion de git 

[lugar de descarga de git](https://git-scm.com/downloads)

## Configuracion de git

```shell
    git config --global user.name "io"
    git config --global user.email "io@gmail.com"
```

## Mi primer repositorio

Debemos de tener una carpeta donde iniciar el trackeo de git y despues de esto

Comando | Descripcion
:--|--:
`git init`| Iniciamos el repositorio, osea que git ya esta activo


## Los estados de git 

Espacio de trabajo
: Todo lo que podemos ver, es todo lo que se puede modificar 

Area de preparacion
: Cuando se han modificado los archivos del espacio de trabajo  y listos para ser commiteados , podemos dividir los archivos de acuerdo a lo que hacen en la aplicacion

Repositorio carpeta git.
: Cuando se commitean 

## Aprendiendo a escribir commits

Comando | Descripcion
:--|--: 
`git commit `| Cada mensaje en nuestra bitacora .
`git add *archivo*`| Agregamos un archivo al area de preparacion antes de commitear
`git add .`| Agregamos toda la carpeta actual al area de preparacion
``|