//Array []
let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

//Bucle for normal for(let i = 0; i < mySampleArray.length; i++) {}
//En este caso empezamos en el último elemento: mySampleArray.length - 1
//Llegamos hasta el primer elemento. Si la posición es más grande que 0 seguimos i > 0.
//En vez de ir hacia adelante i++ vamos hacia atrás --
for(let i = mySampleArray.length - 1; i >= 0; i--) 
{
	console.log(mySampleArray[i]);
}
