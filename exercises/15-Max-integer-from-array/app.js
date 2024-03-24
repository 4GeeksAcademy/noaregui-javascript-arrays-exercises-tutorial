let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
const findMax = (array) => { // function findMax (numeroEntero) {}

    let max = array[0]; //Cogeremos un número aleatorio para compararlo con los demás, por ejemplo el 43.

    for(let i = 0; i < array.length; i++) {
        if(array[i] > max) { //Por ejemplo, llegamos a la posición i=3 (87). 87 > 43. True, por lo tanto seguimos.
            max = array[i];
        }
    }

    return max;
}

console.log(findMax(myArray));