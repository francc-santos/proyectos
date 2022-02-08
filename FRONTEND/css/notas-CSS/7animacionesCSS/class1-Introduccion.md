# Cambios de estados y CSS Trigers

Triggers: cambios que se desencadenan por las animaciones.

Deben de poder pasar por diferentes estados para considerarse como una animacion.

Los estados intermedios se laman interpolaciones, todos los estdos que no esten definidos el navegador lo calcula 

3 etapas de renderizacion
- layout : deonde se ponee cada elmento
- pìntado
- composicion: un capa aislada, solo opasity y transform desencadenan omposicion

Las animaciones de compision son los que consumen menos recursos

El animar width y heigth debe de construirse el layout , mientras que con transformaciones no se debe de recalcular el layout

# Propiedades animables y no animables

Hay proiedades que no se pueden animar porque no puede calcularse un estado intermedio.

no e pude animar los que aparecen como number

# Estado inicial de las propiedades

Los elementos tiene estados iniciales aunque no sea declarado, en alguno son palabras reservadas que no pueden ser calculadas como estados

[cssreference](https://cssreference.io)


*valores* | Descripcion
:---|---:
`initial`| devuelve al valor inicial
`inherit`| al valor del padre, propiedades que por default no hereda
`unset`| regresa al inicial definida con anterioridad
`rever`| regresa a los estilos del usuario o user-agent
`currentcolor`| variable de css que toma el color del contexto 

**Tansiciones**:  
Animaciones de un estado inicial a uno final, necesitan de un evento para ejecutarse

**Animaciones**:  
Momentos intermadios llamados *keyframes* de manera mas , pueden lanzarse automaticamente