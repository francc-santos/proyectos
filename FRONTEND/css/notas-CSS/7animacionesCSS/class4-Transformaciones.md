# Introducción al sistema de coordenadas

Casi siempre en las coordenadas de css se cuenta desde la esquina superior izq de arriba hacia abajo de izquierda a derecha 

# Funciones de transformación 2D 

*Propiedad* Transformaciones | Descripcion
:---|---:
`tranform:`| Es la propiedad ponde podemos usar las funcines de transformacion

*valores* **Transformaciones 2D** | Descripcion
:---|---:
`traslate(x|x,y)`| podemos pasar x o x e y para moverlo 
`scale(num| x,y)`| escala uniforme con un valor de todos lados o escalda diferente
`skrew(x|x,y)`| inclina en el angulo que se indica
`rotate(deg)`| rota el elemento de manera completa
``|

> Todas la funciones , a excepcion de rotate tinen sus variantes para solo indicar el cambio de un eje es decir: scalex, scaley, ....

# Transform origin 

Podemos mover el punto desde donde rota el elemnto por defecto esta en el centro

*Propiedad* **Tranformaciones** | Descripcion
:---|---:
`transform-origin:`| recibimos el origen desde donde se va a transformar, indicadocon blabras clave o medidas en x e y
``|

- Para usar varias trasformaciones se deben de declarar en una solo linea.
- Cuando rotan ,tambien su eje rota solo para la propiedad traslate

> El origen no afecta a traslate.

# Transformaciones 3D 

Tenemos que controlar un nuevo eje z que es en direccione del ususario. Usando la propiedad de perpective podemos indicar desde donde va a suceder la transformacion.

*Propiedad* **Animaciones 3D** | Descripcion
:---|---:
`perspective:`| simulacion de la distancia que hay entre tu ojo y la pantalla
`perspective-origin:`| unicamos un palabras clave o numeros la posicion de la camara

> Para el uso de z en las propieadaes anteriores con agrgar una coordenada mas se toma como 3d tomando en uenta que debemos de definir un perspective, execpto en rotate porque por defecto fotamos en z si usamos otro eje se considera 3d

# 3D axis y perspectiva 

*Propiedad* **Animaciones 3d** | Descripcion
:---|---:
`transform-style: preserve-3d`| se indica en el papa, y sirve para afectar a todo cuando hay un cambio en el padre