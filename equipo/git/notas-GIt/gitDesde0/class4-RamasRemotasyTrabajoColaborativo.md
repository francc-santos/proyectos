# Ramas remotas y  trabajo colaborativo
## Resolviendo conflictos 

> Solo elegimos que codigo queremos conservar de lo que se ha modificado 

## Ignorando archivos 

Generar un archivo `.gitignore`

```gitignore
    archivo.
    directorio
```

> Los archivos que se coloquen en este archivo no se podran , ni siquiera aniadir al area de preparacion.

## Manejando ramas remotas 

Pasos en github
1. go to [github]](https://github.com/)
2. go to profile and then settings 
3. go to dashboard ssh and gpg keys
4. new ssh key

Pasos en terminal 
1. ssh-keygen -t rsa
2. yes yes yes hasta que salga el grafico
3. cd ssh 
4. ls 
5. copy content `id_rsa.pub`
6. paste en new ssh key on github

## Subiendo nuestros cambios 

Comando | Descripcion
:---|---:
`git clone *direccionSSH*`| podemos copiar el repositorio 
`git push origin master `| empujamos los commits realizados en master a github 
`git remote -v`| vemos la direccion del remoto 
`git pull origin master`| traer lo que hay en github sobre la rama master 
``|
``|

## Crear ramas remotas 

Solo si se considera que la rama se necesita se ouede empujar, en otro caso no hay problem 

Comando | Descripcion
:---|---:
`git push origin *otraRama*`| empujar una ramadiferente de master al github
`git push --delete origin *otraRama*`| indicamos al github que hemos eliminado una rama 
``|
