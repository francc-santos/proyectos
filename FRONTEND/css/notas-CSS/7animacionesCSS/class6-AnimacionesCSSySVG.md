# Insertar svg en mi web

Instrucciones xml que el navegador interpreta

- img apuntanndo a un svg
- como fondo
- como codigo en el html

> Para manipularlo  lo mejor es tenerlo como codigo

# Software para la creación de SVG 

- ilustrator
- figma
- inkscape
- afinity desingner

# Estructura de un SVG

*etiquetas* **SVG** | Descripcion
:---|---:
`<svg></svg>`| definimos un svg que por defecto es un rectangulo con medidas definidas, podemos darle un ancho y un alto
`atr viewbox`| podemos darle unas medidas de manera interna
`<line x1="10" y1="10" x2="10" y2="10" stroke="red"/>`| definimos una linea en el svg
`<circle cx="10" cy="10" r="10" />`| definimos un circulo fill por defecto es negro
`<text x="10" y="10">Hola mundo</text>`| El texto pude ser seleccionado
`<defs><style></style></defs>`| podemos definir estilos de los elementos del svg
`atr stroke-linecap:round`| terminamos la linea con un redondeado
`atr stroke-dasharray:50 10`| punteado con segmento de 50 y espacio de 10

[Svg logos](https://svgporn.com) que podemos animar de una.


Podemos hacer el svg con resposive web desing