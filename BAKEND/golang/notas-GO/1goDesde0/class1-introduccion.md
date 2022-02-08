# 1.1 - Bienvenida e Introducción

Con la necesidad de combinar la seguridad y rendimeinto de los lenguajes compilados y la expresividad y conveniencia de los lengujes interpretados.

Resolviendo que en los lenguajes compilados debemos de compilar antes de probar un a caracteristica, haciendo el proceso de desarrollo mas lento.

Esto lo toma de los interpretados que en tiempo de ejecucion se encarga de convertirlo a un lengueje entendible por las maquinas de una.

Con un compilador rapido , ademas del crosscompile que desde cualquier compilacion podemos llavarlo a donde queramos

- Estaticamente tipado de manera dinamica elejida por go, pero solo una ves tome este valor se conserva
- Convinacion de la expresividad de la sintaxis 

Tres capas de go 
- el lenguaje como tal
- herramietas de desarrollo incorporadas
- ecosistema , donde aplica git para la gestio de paquetes 

# 1.2 - Go Playground

Es el patio de juego que podemos encontar en la pagina official de go golang. donde encontarmos de una el hola mundo con la estructura basica de go.

Es:

*codigo* | **Descripcion**
:---|---:
`pakage`| nombre del paquete al uque pertenece el archivo, que es la forma en que go organiza y reutiliza el codigo, donde se agrupa una misma funcionalidad 
`import`| usamos el codigo de otros paquetes 
`func main()` | definimos la funcion principal de la app

# 1.3 - Instalación de Go en Linux

1. Descargar el paquete de go de acuerdo al sistema op
2. Descomprimimos el archivo descargado en `/urs/local`, dodne podemos crear la carpeta de go que queramos
3. `source $HOME/.profile`
4. Luego agreegamos al carpeta de los binarios go en `path`
   1. `export PATH=$PATH:/usr/local/go/bin`
5. `go --version`

Ya podemos usar la ejecucion y compilacion de los archivos, asi es como se compilaria 
```shell
    go build hello.go
```
Asi es como se ejecutaria el bin
```

# 1.4 - Instalar Visual studio Code

*codigo* | **Descripcion**
:---|---:
``|
``|
``|
``|
``|