let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    // Array vacío
    let newArray = []
    
    // Incluimos todos los elementos del 1º array en newArray
    firstArray.forEach(item => {
        newArray.push(item)
    })
    // Incluimos todos los elementos del 2º array en newArray
    secondArray.forEach(item => {
        newArray.push(item)
    })

    // Como es una función es necesario el return
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
