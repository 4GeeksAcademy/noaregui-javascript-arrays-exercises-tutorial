// Es un array porque tiene []
let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// 1. Imprime el 3º elemento del array
console.log(myArray[2]);


// 2. Cambiar valor thursday por null. Thursday es myArray[4]
// Para cambiar un valor por otro splice --> myArray.splice(donde empezamos,hasta donde,valor que añadimos)
myArray.splice(4,0,null)]; //Otra opción myArray[4] = null;
//.splice es un método. Esto quiere decir que es una función dentro de un objeto.
//myArray, es un objeto y también un array.


// 3. Imprime la posición donde estaba thursday
console.log(myArray[4]);
