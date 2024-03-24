//Array[]
let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

//2. El método .length, es una función dentro del objeto mySampleArray
//Al dividirlo entre 2 empezamos en la mitad de la longitud del array
//La longitud de mySampleArray es de 13 posiciones (-1), teniendo en cuenta que empezamos en 0, la mitad será 6
let initialValue = mySampleArray.length / 2; //let initial value = 6 (Recuerda que empezamos en 0)
let stopValue = mySampleArray.length; // El último valor será 13
let increasingValue = 1; //El valor aumentará de uno en uno, empezaremos en i = 6, i = 7, i = 8 etc.

for(let i = initialValue; i < stopValue; i = i + increasingValue)
{
	console.log(mySampleArray[i]);
}