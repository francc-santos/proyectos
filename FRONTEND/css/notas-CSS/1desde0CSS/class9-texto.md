# Texto y tipografia
Tipografia es disciplina que estudia el disenio y uso de los tipos de letra 
Glifo : dibujo que represneta a cada caracter 
Familia tipografica: son el mismo tipo de funete con diferntes versiones 

## Unidades de medida em y rem

*propiedad* **Texto**| Descripcion
:--|--:
`rem` | % de la fuente de la raiz 
`em` | % de la fuente del contexto, osease mayormente del contenido definido por el padre , usarlo en margenes y paddings    

> Si se cambia el tamanio de la fuente es recomendable que se haga en multiplos de 4

## Estilos básicos de texto

*propiedad* **Texto**| Descripcion
:--|--:
`font-size` | indicamos el tamanio de la fuente
`font-style` | que si su italica, bold , normal
`font-weigth` | es el grosor de la letra , pero es mejor que este valor se tome de acurdo al estilo seleccionado
`text-aling` | donde se va a alinear el texto = left , rigth, center, justify
`line-height` | separacion entre lineas, el tamanio es relativo a la raiz 
`text-decorartion` | basicamente para dar subrayado = underline o line-through
`text-trasnform` | de mayusculas a minuscolas , todas minusculas etc, = capitalize upercase lowercase
`letter-spacing` | indicamos una separacion entre las letras 
`word-spacing` | separamos las palabras 
`` | 

> En el letter sapacing lo bueno es estar entre el -0.05em 

## Font Family

*propiedad* **Texto**| Descripcion
:--|--:
`font-family` | podemos cambiar las fuentes, siempre poner una alternativa por si no se encuentra la fuente.

> solo reconoce las que tenemos instaladas en el equipo, y las que insertemos con embed

## Sombras de texto

```css
    text-shadow: x y blur color , x y blur color,...
```

*propiedad* **Texto**| Descripcion
:--|--:
`tex-shadow` | podemos indicar un sombra, con un desplazamiento en x e y un degradado y color