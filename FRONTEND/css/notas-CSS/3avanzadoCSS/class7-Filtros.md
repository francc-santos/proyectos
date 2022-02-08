# Introducción a los filtros

Un fitro basicamente es la cominacion de la alteracion de varios colores los juntas 

*propiedad* **filter**| Descripcion
:---|---:
`filter`| NOs permite apicar un filtro

# Op de filtros

*valores* **filter**| Descripcion
:---|---:
`graycale(num)`|  indicamos cuan gris queremos la img
`sepia(num)`| cantidad de sepia que quramos 
`invert(num)`| saca el color inverso que e una resta de 255 de los colores encontrados en la img
`hue-rotate(num)`| indicamos que se cambie el tono de acuerdo a cuanto indicamos que rote, grados, vueltas(`turn`) o radianes
`brightness(num)`| es como modificamos la exposicion
`contrast(num)`| controlamos la delimitacion entre las areas claras y oscuras
`saturate(num)`| modificamos la pureza del tono que tan gris o vivo se ve
`blur(num)`| manejamos la cantidad de desenfoque
`opacity(num)`| una dif con la propiedad, es mejor en animaciones, es el manejo de la visibilidad de la img
`drop-shadow(x,y,g,c)`| aplicamos una sombra al elemento , traslado en xy color y grosor

> lo mejor es manejar las variaciones en porcentaje

> drop-shadow sigue  el contorno de img con transparencia 