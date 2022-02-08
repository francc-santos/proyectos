# Animaciones vs Transiciones

Las animaciones pueden ser ejecutadas por  si solas ientas que las transiciones dependen de un evento para ejecutarse.

Las animaciones tiene un mejor control con la ayuda de keyframes  puntos claves donde la aniacion tiene que pasar por  un estado concreto.

```css
    .elem{
        animation: duration delay ...;
    /* el orden solo es tener en cuenta  duration y delay las demas como no importa el orden 
    */
    }
```

*Propiedades* Animaciones | Descripcion
:---|---:
`animation-name:`| indicamos el nombre de la animacion con el cual podemos definir despues los keyframes
`animation-duration:`| tiempo que durara la animacion
`Animation iteration-count:`| define cantas veces se repite una animacion
`animation-timing-function:`| ease, ease-in cubic-bezier(), como fluira la animacion
`animation-direction:`| de que frame a que frame se va a ir
`animation-play-state`| indicar si la animacin va a estar corriend o no , pause o running
`animation-delay`| cuanto tiempo transcurrira para que se ejecute la animacion
`animation-fill-mode`| indicamos si queda en el ultimo estado o regresa

> el nombre no pude empezar con nueros y no va entrecomillado el nombre

# Animation iteration-count y direction

*valores* **animation-direction** | Descripcion
:---|---:
`reverse`| lo hace del ultimo frame al primero 
`aternate`| va y viene 
`alternate-reverse`| va y viene desde el final 

*valores* **iteration-count** | Descripcion
:---|---:
`infinite`| se ejecuta de manera ininita

*valores* **animation-fill-mode** | Descripcion
:---|---:
`forwards`| decimos que se queda en el ultimo key 

# Reverse animation 

**SIEMPRE** se debe de definir el 100%, los keyword sirven como selectores 

Cuando no se pone el 0 y 100 se toman los valores iniciales del elemento.

# Animation event

Es la forma en que js puede interactuar con las animaciones 

*valore* **Animaciones Event** | Descripcion
:---|---:
`animationstart`| ocurre cunado la animacion inicia
`animationend`| ocurre cuando se termina
`animationiteration`| cuando inicia un nueva animacion
``|
``|

> Podemos usarlo para reiniciar las animaciones, quitando la class cuando haya terminado la iteracion

# Controlar animaciones CSS con Javascript  

Podemos ver el **Event** en cada animacion *elapsedTime* guarda el tiempo que paso en la animacion, pero esto solo pasacunado *animationend*.

# Animaciones con scroll 

getbounding client rect, para poder sacar las medidas de un elemento en el viewport

Podemos detectar el scroll con `window.addEventListener('scroll')`

# Cubic bezier 

Con la ayuda de 4 puntos puede trazr curbas de una manea lineal , es decir con un recta que se va atravezandpo por la mitad cambiando sus valores 

Dos ejes que en css solo tenemos dos punto que se pueden mover 

```css
.elem{
    animation-timing-funtion: cubic-bezier(p1x,p1y,p2x,p2y);
}
```

> Podemos usarla en transiciones

# Sprites

Uso de steps, podemos hacer animaciones con fotos estaicas y con los seteps poder animarlos.

Que cambie la img cada tiempo definido.

