//Array []
let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here
//Para poder guardar todas las sumas en un array creamos let totalSuma = 0
let totalSuma = 0

//for (let nombreQuePonemosaLosElementosDelArray of array)
for(let numero of myArray) {
    totalSuma += numero; //Una vez recorrido el array sumamos cada elemento al totalSuma
}
//El promedio es la suma de todos los elementos / el número de elementos
let promedio = totalSuma / myArray.length;

console.log(promedio);
