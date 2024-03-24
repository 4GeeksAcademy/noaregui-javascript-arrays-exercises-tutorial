//Otra forma const sumTheElements = (theArray) => {}
function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	//Bucle que recorrar theArray
	for(let i=0; i<theArray.length; i++) {
		//Sumar cada elemento al total
		total += theArray[i]
	}
	return total; //Siempre return en funciones
}
//Como es array tienes que poner [] antes de los valores, sino dará 0
//console.log(sumTheElements(theArray));
console.log(sumTheElements([2,13,34,5]));