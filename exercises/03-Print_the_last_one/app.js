//Función. También puede escribirse así: const generateRandomArray => () {}
function generateRandomArray() // En () estarán los parámetros. Es decir, los valores que se usen en la función
{
	let auxArray = []; //Array vacío, lo ponemos en la función porque el resultado de la función se añadirá aquí
	let randomLength = Math.floor(Math.random()*100); //Número aleatorio de 0 a 99
	for(let i = 0; i < randomLength; i++) auxArray.push(Math.floor(Math.random()*100));
	//Empieza en la posición 0, numero 0 y puede llegar hasta el 99, pero como es aleatrio llegará hasta donde vea
	return auxArray; //Cuando hay un array vacío la función siempre devuelve a este array
}
let myStupidArray = generateRandomArray();
// myStupidArray, como sigue la función de generate... si la hacemos funcionar va a tener:
//un número aleatorio de elementos en el array(del 0 al 99) y cada elemento será aleatorio (del 0 al 99)

// Your code here
let theLastOne = myStupidArray[myStupidArray.length-1];
//Si nos pidiera el primer elemento sería myStupidArray[0]
console.log(theLastOne);
/*Cada vez se imprimirá un número aleatorio, porque la longitud del array será aleatoria*/


