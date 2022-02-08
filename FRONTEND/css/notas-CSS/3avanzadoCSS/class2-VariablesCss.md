# Scope

El contexto en el que la variable puede se usada.  

En Css es a nivel de DOM, es decir el contexto *depende de en que elemento html sea declarada sus hijos tendran acceso al valor*.

**Hoisting**:  
Es cuando las variables son decalradas despues de la invocacion , el el lenguaje lo que haces esleer dos veces el archivo y tomarlo como si estuvira declrado antes, porque realmente ya existe.

# Herencia y cascada 

El valro puede ser reescrito por la cascada , porque solo se hereda en la variable ç, NO el valor 

# Deferencias entre variables Css y variables SASS

Lo mas importante de las variables css es la cascada y esto nos ayuda mucho en las responsive redeclarando los valores de las variables , mientras que SASS es como podemos manejar los estilos como si fura un lenguaje de progamacion.


# Variables de CSS en responsive web desing

EN las media querys pomdemos *redefinir* las variables de :*root* , debemos de poner todas las pseudoclass :root.

Y al usarlo solito caera en los valores definidos en la mediaquery

# Variables de Css en cracion de temas 

Es cunado el bpdy tenga la class dark redefinimos el valor que se usa en las variables.

Para usar el tema que tiene el usuario 

```css
    @media (prefers-color-scheme: dark){}
```

Si en las configuraciones se tiene el tema oscuro se tomara en la pagina.
