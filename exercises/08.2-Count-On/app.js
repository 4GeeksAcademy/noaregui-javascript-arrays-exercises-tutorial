//Array [] con diferentes tipos de dato
let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//Array vacía 
let hello = [];

//Bucle que recorre myArray
for(let i = 0; i < myArray.length; i++) {
    //Cada elemento del array myArray[i] será item
    let item = myArray[i];
    // MAGIC HAPPENS HERE
    //Si el tipo de item es un objeto...
    if(typeof item == "object") {
        /*Añadiremos al objeto hello, mediante el método .push cada 
        elemento del array*/
        hello.push(item)
    }
}
//Imprimimos el nuevo array, que solo imprimirá los objetos del myArray
console.log(hello);