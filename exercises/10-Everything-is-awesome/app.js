//Array []
let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

//Otra forma: function ZerosToYahoos(arr) {}
const ZerosToYahoos = (arr) => {
    //Array vacío para añadir elementos más adelante
    let return_array = [];
    //Se recorrerá cada elemento (item) del array (arr)
    arr.forEach((item) => {
        // magic goes inside these brackets
        //Si el elemento(item) es = 1...
        if(item == 1) {
            //El elemento entrará en el objeto return_array
            return_array.push(item)
          //Si el elemento es = 0...  
        } else if(item == 0) {
            //Se añadirá el string "Yahoo" al objeto return_array
           return_array.push("Yahoo")
        }
    });
    //En las funciones siempre retornamos
    return return_array;
};
//Siempre que imprimimos una función console.log(nombreFuncion(array));
console.log(ZerosToYahoos(myArray));
