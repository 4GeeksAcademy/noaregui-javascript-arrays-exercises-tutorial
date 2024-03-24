/*Array [] con diferentes tipos de dato: numero, booleano, string, arrays,
objeto, etc.*/
let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
//Creamos nuevo array para poder introducir los tipos de datos
let nuevoArray = [];
//Recorremos cada elemento del array
for (let i = 0; i < mix.length; i++) {
    //typeof mix[i], nos dice el tipo de dato de cada elemento
    /*Introducimos en el objeto nuevoArray, mediante el método .push
    el tipo de dato de cada elemento*/ 
    nuevoArray.push(typeof mix[i])
}

console.log(nuevoArray);
