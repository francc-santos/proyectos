# Ramas locales y el historial  
## Historial de cambios

Comando | Descripcion
:--|--: 
`git checkout *hash*`| cambiamos a un commit que queramos 
`git checkout *master*`| volvemos al ultimo commit realizado 

## Opciones de visualizacion del historial 

Comando | Descripcion
:--|--: 
`git log --raw`| muestra los archivos a los cuales se les dio commit
`git log --online`| recorta el hash
`git log --oneline -n N`| decimos la cantidad de commits que queremos ver desde el head hacia abajo 
``|

## Ramas locales 

Comando | Descripcion
:--|--: 
`git branch `| vemos las ramas locales 
`git checkout -b *nombre-rama*`| creamos una rama local 
`git `|
`git `|
`git `|
`git `|
``|


## Creando ramas locales 

Comando | Descripcion
:--|--: 
`git checkout -b *nombre-rama*`| creamos una rama local 
`git checkout *rama* `| nos movemos de rama 
`git switch *rama* `| nos movemos de rama
`git log --online --all --graph --decorate`| podemos ver el arbol de log con todas la ramas 
``|


## Fusionando ramas

Comando | Descripcion
:--|--: 
`git merge ramaQueSeUne`| mezclar dos ramas en una , generalemente en master 
`git branch -D ramaAEliminar`| indicamos que rama queremos eliminar , no podemos eliminarla cuando estamos en la misma rama 
``|
``|
``|

> Estar situado en la rama donde se quiera meclar 

> En caso de que en las ramas se hubiera modificado el mismo archivo se causara un confilcto que podemos resolver eligiendo el codigo que es 

