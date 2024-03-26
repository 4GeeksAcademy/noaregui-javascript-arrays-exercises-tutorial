let myNumbers = [23,234,345,4356234,243,43,56,2];

// Your code here

function myFunction(numero) {
    return numero * 3;
}

let newArray = myNumbers.map(myFunction);

console.log(newArray);

/*Otra forma:
const newArray = myNumbers.map(numero => numero *  3);
console.log(newArray)

Otra forma:
const newArray = myNumbers.map(function(numero){
    return numero * 3;
});
*/