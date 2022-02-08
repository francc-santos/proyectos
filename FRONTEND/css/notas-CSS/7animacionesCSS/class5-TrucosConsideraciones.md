# Debug, consideraciones y conceptos previos

Tener un buen rendimiento en las animaciones es necesario tener un buen debug.

60fps son lo estandar en los navegadores.

Esto debemos de entender el **composite thread**, hilo compositor.

>javascrip > calculo de estilo > layout > pintado > composicion

Esto se manda a la GPU, que es waterfall, calcula el estilo, layout,paint.

# Debug con Firefox
Con el inspector podemos ver la inimacion , pausaer , tenemos un linea de tiempo y el timpo que se ha ejecutado la animacion.

Es mejor no usar shordthands para que no se este mirando el cambio en propiedades que no se estan animando.

En **performance** podemos grabar la animacion y ver los fotogramas 

**will-cahnege** se deben de pasar las propiedades que se van a animar y es mejor ponerlo desde una accionde l pader y quitarlo en js.
