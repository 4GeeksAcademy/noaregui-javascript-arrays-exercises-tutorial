let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
//function mergeTwoList(array) {}, recuerda que () hace referencia a sobre qué elementos recae la función
const mergeTwoList = (array) => { 
    //Creamos dos arrays vacíos
    let pares = [];
    let impares = [];
        //Recuerda que comoe l bucle for está dentro de la función recorre lo que (array)
        for(let i = 0; i < array.length; i++) { // 2. Recorremos el array
            if(array[i] % 2 === 0) { // 4. Condicional para número par
                pares.push(array[i]) // 4. Añadimos numero par a array pares
            } else {
                impares.push(array[i]) // 3. Añadimos números impares a array impares
            }
        }
    //Nos pide concatenar los impares con los pares, por eso no hacemos return impares; y return pares; directamente
    return impares.concat(pares) // Necesario el return cuando usamos función. Concatenamos.
}
//console.log(funcion(array sobre el que recae la función))
console.log(mergeTwoList(listOfNumbers)); // En console siempre añadimos función(variable o array);
