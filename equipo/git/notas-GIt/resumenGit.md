# Resumen git y github
Sistema de control de versiones, historial de versiones.
- Diferentes versiones de una solucion posible
- Poder volver una version antras 
- Arreglar de forma paralela 

### Stage
Es una area temporal donde se guardan os archivos que estan siendo trackeados.

## Git init 
Para iniciar el trackeo de la carpeta en la que se encuentra el codigo

## Git status
Para ver lo que esta ne el estadp de trabajo  y los commits que se han hecho 
- rama en la que estoy
- commits que se pueden realizar 
- commit que se han hecho

## Git commit 
es para almacenar la cosa en concreto que se ha realizado , una operacion que se ha realizado, 
registrar los cambios 

## Git add (nobre del archivo)
indicarle a git que he realizado cambios en el archivo , trackear las modificaciones 


## git log
historial de los cambios que se han hecho 

## git diff 
para poder ver que se ha modificado en el archivo que aun no estan commiteados 


## git commit --amend
Modificacr el commit que esta inmediatamente anterior, o un cambio que se haya olvidado de ultimo momento y que no haya dos commit practicamente iguales 

## git chekout -- (nombre del archivo)
para desacer los cambio de se han hecho del anteriromente antes de mandarlo al add porque ya no son modificacioines locales 

## git reset HEAD  (nombre del archivo)
para quitar el stage area el ultimo commmit del archivo , ya con eso se podria hacer el git checkout -- (nombre del archivo )

## git log --oneline
muestra solo el hash de los commits que se han relaizado 

## git reset (hash del commit al cual queremos regresar) 
regresar a un commit 

## git diff HEAD~1 HEAD
compara el ultimo commit con el anterior a el, (el 1 se puede cambiar por cualquier numero de commit ) 

## git revert (hash de l commit que qeuremos deshacer)
descarta los cambios que se han hecho en un commit 

## git revert --no-commit HEAD
para desahacer los cambios no de manera fuerte 

# Ramas 
consiste en vifurcar el trabajo , en una linea paralela , para el codigo a medias , posibilita la forma de hacer multitask 

## git branch 
ver la lista de ramas que tenemos creadas en el proyecto 

## git branch (nombre de la rama que quiero crear)
crear una  nueva rama , casi siempre se usa feature, para indicar que es una nueva caracteristica la que se quiere agregar 

## git checkout (nombre de la rama a la que quiero cambiar)
para cambiar entre ramas 

## git checkout -b (nombre de la nueva rama)
craer una rama mediante la bandera (-b) y cambiarse a ella de una 

## git log --online --graph
muestra el arbol de ramas del proyecto 

## git branch -m (nombre antiguo de la rama) (nuevo nombre de la rama)
cambiar el nombre de la rama 

## git branch -d (nombre de la rama que se quiera eliminar)
pues para eliminar laguna rama 

## git branch -h
ver todas las cosas que podemos hacer con las ramas

## git commit (en cualquier rama)
pue efectivamente los commits que io haga en la ramas se guardan en el historial de la propia rama y si cambio a otra no se vana a ver reflejados los cambios de estas ramas en las otras 

## git log --online --decorate --all 
para ver todos los commits hasta los de la rama master 

## git merge (nombre de la rama que se quiere fucionar con la actual)
sirve para fucionar los cambios  de ramas 
1. cambiarte a la rma donde quieras que se pase la informacion 
2. git merge (nombre de la rama que quieras que se traiga  la info )

## git config --global alias.(nombre que se quiera dar) '(comando  que se quira dar)'
Sirve para crear un alias a 
uno wueno para deshacer el add es :
    git config --global alias.unstage 'reset HEAD --'

uno que io hice :
    git config --global alias.lodag 'log --oneline --decorate --all --graph'

## git config --global --get-regexp alias
sirve para ver los alias que estan creados  

## git config --global --unset alias.(nombre de el alias que se quiera elminiar)
sirve para eliminar un alias

# tags
Sirven para identificar commits particulares

## git tag (nombre que se le quiera dar al commit ) (hash)
- si no se pone el tag usa el ultimo commit

## git checkout (tag del commit que se quiera)
para poder cambiar a la etiqueta

## git tag 
muestra los didtntos tags que hemos creado 

## git tag -d (nombre del tag)
para poder borrar un tag

# tags anotados 
no es solamente un puntero , es para añadir mensajes en los tags, firmar 

## git tag -l "(palabras claves de )"
por ejemplo en versiones como "v0.1.*", mostrara todos los tags de las versiones de la serie 0.1

otro ejempo es ver todos los tags de la version 2 "02.*.*"

## git tag (nombre del tag) -a
se añade la bandera -a para desirle que queremos anotarlo

## git show (nombre del tag )
mostra as anotaciones del tag 

## esconder cambios
En el caso que estemos modificando una rama y nos tenemos que modificar otra , pero no podemos hacer un commit 
usamos 

## git stash 
poder limpiar el directorio de trabajo y modificar otra cosa que no se unan 

## git stash list
mostar la lista de los stash 

## git stash apply o pop
trae el ultimo el ultimo stash en la pila al directorio de trabajo 

## git stash drop 
eliminer el ultimo elemento del stash 

## git stash save "mensaje que se quiera conservar"
poner un menjase que indique el trabajo que se estaba llevando a cabo 

# GITHUB
es un sistea de versiones distribuido , esa nocion de servidor no existe 

## git remote add origin (direccion que da git del repositorio)
conectar los repositorios 

## git push (nombre del remoto) (rama que se quiere pushear)
para mandar la info al repositorio 

## git clone (url del repositorio)
decargar todo el trabajo 

## git pull (de que remoto) (rama que quiero modificar)
pedir que nos entregue codigo de un remoto

## git pull --rebase origin master
pa que no haya tanto problem 

## git remote -v 
muestra las conexiones remotas con github o gitlab u otra

## git remote rm (nombre de la conexion que se quiera eliminaar)
ps para eliminar una conexion remota 



### es para ver si se gurdo la referencia en el remote 