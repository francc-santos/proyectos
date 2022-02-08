# Selectores
> Los estilos del navegador se les conoce como userAgent
## Selectores
A que elemetos se les va aplicar los estilos
> es meojr escribir los selectores en minusculas
### Selectores simples
Son compuestos de una sola palabra
Selector|Descripcion
:--|--:
**Etiquetas** `h1`| los estilos que declaremos se applicaran a **todas** **las** etiquetas **h1** del **documento**, esto igual con qulquier otra etiqueta
**Clase** `.class`| se aplica a todos los elemntos con el mismo nobre de class en el atributo *class*, este caso todos los elemento con las clase class
**Identificador** `#`|usa el valor del atributo *id* para definir los estilos

#### Reglas de definicion de las class 
- No pueden empezar con numero 
- pueden empezar con (-/_)
- puden tener : en medio del nombre

### Selectores compuestos
Son compuestos con mas de una palabra
Selector|Descripcion
:--|--:
**Agrupados** `h1,p`|Estos mismos estilos se aplicaran a todos los h1 y p del docuemnto, *podemos agrupar todo desde identificadores, clases, todas las combinaciones posibles*  
**Combinados** `h1.class `| Se crea un unico selector usando varios, *en el ejemplo: decimos todos los h1 que ademas tengan la clase class*, podemos combinar con ids tambien y muchas mas propiedades pero con dos basta
*Descendientes* `h1 #identificador`| Inicamos la relacion de padre con sus decendientes,*ejemplo: selecionmos todos los h1 que tengan como descendinte un id identificador*

> Tener en cuenta que en los combinados no hay eapcio entre selectores y en lso descendientes tienen un espacio.

### Selectores operadores
Se llama asi por que se utilizan operadores matematicos para indicar las relaciones entre etiquetas

Selector|Descripcion
:--|--:
**selector universal** `* *::before *::after`| todos los elementos antes y depues se aplicaran los estilos
**hijo directo** `h1 > span`| todo span que sea hijo directo de h1
**hermano siguiente** `h1 + div`|todo div que este despues a un h1 
**hermanos siguientes** `h1 ~ div`| todos los divs que sean hermanos de h1
``|

### Selectores atributos
Usa los atributos de html para unificar el edtilo de etiqueta que tengan este atributo ademas de poder
Selector|Descripcion
:--|--:
`[type="number"]`| todos los elemtos que tengan como atributo type number

> todos los selectores de atributo usan los [attr="value"] 

### Selectores comodines
Comienzan como `[attr=""]`
Selector|Descripcion
:--|--:
`[attr^="https"]`|seleccionamos todos los que atributos de tal empiecen en un su valor con https
`[attr$=".mp4"]`| seleccionamos un elmento con atributo que en su valor termina con .mp4
`[attr*="google"]`|seleccionamos un elemnto que en el valor de un atributo contirne google
``|


>Pueden ser utilis para identificar rutas como enlaces  o tipos de elemntos como png mp3 mp4 , etc