let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

// Your code here
//Bucle normal for(let i = 0; i < mySampleArray.length; i++)
for (let i = mySampleArray.length - 1; i >= 0; i--) { //Muy importante i >= 0
    //Su utilizamos i > 0 imprimirá hasta el index 1, es decir hasta 'Kiko', no imprimirá 'Esmeralda'
    console.log(mySampleArray[i]);
}

