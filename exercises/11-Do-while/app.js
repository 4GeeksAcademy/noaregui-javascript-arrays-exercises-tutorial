/*Estructura del bucle do-while:

let i = donde empieza el bucle; igual que en el bucle for


do {
    Aquí está lo que queremos que se haga en el bucle
    i++ o i-- o i= i + 2, +3, etc. 


} while(i>= donde acaba el bucle)
*/

//Donde empieza el bucle bucle
let i = 20;

//Lo que vamos a hacer en cada iteración
do {
    // Magic goes here
    //Los condicionales empiezan del más específico al menos 
    if (i === 0) {
        console.log("LIFTOFF");
    } else if (i % 5 === 0) {
        console.log( i + "!");
    } else {
        console.log(i);
    }
    i--; //Como vamos para atrás i--, sino sería i++
} while (i >= 0); //Donde acaba el bucle, en este caso llegará hasta 0