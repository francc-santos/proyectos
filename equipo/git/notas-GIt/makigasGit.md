# Raros
NO recomendables en el uso de buenas practicas de versionamiento.

Comandos *raros* **git**| Descripcion
:---|---:
`git commit --amend`| modificamos el mensaje del commit anterior, poder agregar mas archivos , etc.
`git stash`| CReo que regresar todo como estaba hasta el ultimo commit
`git diff`| EN Area de trabajo ver los cambios del ultimo comit y los qe se realizaron ahora
`git revert <hash commit>`| descartamos los cabios hechos en el commit 
`git branch -m <nombre antiguo> <nuevo nombre>`| modificar el nombre de la rama
`git log --online --graph`| ver los commits en forma de arbol
`git config --global alias.<nombre alias> '<"comando">`| crear un alias de un comando largo 
`git config --global --get-regexp alias`| ver lista de los  alias creados
`git config --global --unset alias.<nombre alias>`| eliminar un alias 
`git tag <etiqueta> <hash>`| etiqutamos un commit, si no se dice el hash se etiqueta el ultimo commit

> Los alias son como variables de entorno globales pero que tiene un comando dentro de git 


# Mas usados 

Comandos *basicos* **git**| Descripcion
:---|---:
`git init`| iniciar el trackeo de git
`git status`| ver el area de preparacion
`git add <archivo|archivos>`| Agrega los archivos dichos en el area preparacion
`git add .`| agregamos la carpeta actual en el area de preparacion
`git commit -m ""`| agregamos un commit desde la terminal
`git commit`| podemos agregar un commit, y el mensaje de esto.
`git log`| mostramos los commits hechos
`git merge <nombre rama>`| indicamos que rama queremos fusionar con la actual

# Ramas 

Comandos *Ramas* **git**| Descripcion
:---|---:
`git checkout -b <nombreRama>`| Creacion de una rama
`git switch <nombreRama>`| Cambiar de rama
`git branch`| mostrar el listado de las ramas
`git branch -d <nombre rama>`| eliminar una rama 

# Tags

Comandos *Configuracion* **git**| Descripcion
:---|---:
`git tag`| lista todos los tags creados
`git tag -d <nombre tag>`| eliminar un tag, NO el commit
`git checkout <tag>`| cambiar a un tag

# Configuracion de git 

Comandos *Configuracion* **git**| Descripcion
:---|---:
`git config --global user.name="nombre"`| indicar el nombre de quien hace el commit en la compu
`git config --global user.email="email"`| indicar el email de la compu para los commits


# Github

Comandos *Github* **git**| Descripcion
:---|---:
`git remote add origin <direccion del repo>`| Subir el repositorio ya creado a github
`git remote rm <direccion del repo>`| Eliminar una conexion remmota 
`git remote -v`| Ver las conexiones existentes de los diferentes repos
`git clone <direccion repositorio>`| clonar un repositorio remoto 
`git push <rama remota> <rama local que se quiere unir>`| subir las ramas al repo, puede ser cualquiera 
`git pull <rama remota> <rama local>`| traer el contenido de la rama remota a la rama local
`git pull --rebase <rama remota> <rama local>`| traaer el contenido de la rama remota a la local sin tanto problema
