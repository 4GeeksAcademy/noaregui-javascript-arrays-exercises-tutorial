//Array []
let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

//Bucle normal for(let i = 0; i < mySampleArray.length; i++) i++ es igual que i = i + 1
//Por lo tanto, para ir de 2 en 2 tendrá que ser i = i + 2
for(let i = 0; i < mySampleArray.length; i = i + 2)
{
	console.log(mySampleArray[i]);
}
