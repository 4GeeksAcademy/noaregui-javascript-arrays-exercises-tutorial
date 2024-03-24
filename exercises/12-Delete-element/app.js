//Array []
let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
//Otra forma: function deletePerson (nombreEliminado) {}
const deletePerson = (nombreEliminado) => {
    /*Cumple la condición siempre y cuando el elemento del array (nombre) no sea el que hemos eliminado. Por ejemplo,
    el nombreEliminado = 'daniela', entonces directamente no lo imprimirá*/
    let newArray = people.filter(nombre => nombre != nombreEliminado);
    //Recuerda siempre retornar en las funciones
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
