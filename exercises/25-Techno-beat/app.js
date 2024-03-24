// Your code here
function lyricsGenerator(arr) {
    let resultado = ""
    let repeticiones = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            resultado += "Boom "
            repeticiones = 0
        } else if(arr[i] == 1) {
            resultado += "Drop the bass "
            repeticiones += 1

            if(repeticiones === 3) {
                resultado += "!!!Break the bass!!! "
            }
        }
    }
    
    return resultado;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
