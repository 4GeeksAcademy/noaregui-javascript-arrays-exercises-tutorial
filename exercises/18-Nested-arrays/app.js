/*Este array está formado por más de un array. En total está formado por 4 arrays. Cuando un array está formado
por más de un array le llamaremos matriz. Cada array está formado por [latitud - longitud] Queremos imprimir las longitudes*/
let coordinatesArray = [[33.747252, -112.633853], [-33.867886, -63.987], [41.303921, -81.901693], [-33.350534, -71.653268]];

// Your code here
/*Sabemos que queremos que el dato que esté en el index 1 de cada array es el que queremos. 
Este bucle recorre cada índice del array*/
for (let index in coordinatesArray) {
    let longitude = coordinatesArray[index][1]; //¿Por qué [index][1], en vez de [index(1)]
    console.log(longitude)
}
