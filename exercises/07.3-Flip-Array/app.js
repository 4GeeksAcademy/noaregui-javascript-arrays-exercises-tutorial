//Array []
let arr = [45,67,87,23,5,32,60];

// Your code here
//Creamos nuevo array para poder añadir el bucle for
let nuevoArray = []
//El bucle for irá desde el último elemento arr.length-1 hasta el primero i=0
for (let i = arr.length - 1; i >= 0; i--) {
    nuevoArray.push(arr[i]); //Esto lo añadiremos al nuevoArray
    /*Error muy común nuevoArray.push(arr); aqui le estamos diciendo que añada al 
    nuevoArray el array entero es decir, añadirá el array entero por cada bucle.
    Si queremos imprimir todo el array: console.log(array) --> Imprime el array
    Si queremos imprimir cada elemento del array: console.log(array[i]) */
}

console.log(nuevoArray);