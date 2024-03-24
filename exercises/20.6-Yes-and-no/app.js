let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here

let newArray = theBools.map(function(item) {
    if (item === 0) return "woko"
    else if(item === 1) return "wiki"
})

console.log(newArray)

/*otra opción con ternarios:
let newArray = theBools.map(item => item === 0 ? 'woko' : item === 1 ? 'wiki')
*/

