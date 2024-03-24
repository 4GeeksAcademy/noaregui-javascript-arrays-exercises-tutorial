let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames = allNames.filter(function(item) {
   return item[0] === "R";
});

console.log(resultingNames);

/* El método .startsWith funciona bastante mejor:

   let resultingNames = allNames.filter(function(item) {
    return item.startsWith('R');
    });

Otra opción usando ternarios es:

let resultingNames = allNames.filter(item => item.startsWith('R'));
*/

