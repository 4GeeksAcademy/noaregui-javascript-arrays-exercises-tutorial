//Es un string "", los strings también funcionan como arrays[], puedes elegir posiciones [i]
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

/*Objeto, está entre {} pero está vacío. Esto quiere decir que faltan las propiedades (key) 
y los valores. Nos pide que creemos un objeto, está creado y está vacío.*/
let counts = {};

// Your code here
/*Otra forma: const contarLetras = (str) => {} Recuerda que (str) hace referencia al valor 
sobre el que va a recaer la función. Es una forma de llamar a ese valor que decidimos al
hacer la funcion. En este caso utilizamos str para después referirnos a par*/
function contarLetras(str) {
   
    //Como un string es en realidad un array haremos un for para recorrerlo
    for(let i = 0; i < str.length; i++) {
        /*Recorrerá cada uno de los caracteres str[i], incluidos los espacios ' ' 
        Como hay mayúsculas y minúsculas las haremos todas minúsculas*/
        let caracter = str[i].toLowerCase(); //Ha recorrido todos  
        
            /*Si el caracter no es (!==) un espacio y en el objeto counts ya esté la 
            propiedad(key) que estamos iterando se le sumará 1 al valor. Por ejemplo llegamos
            a la 'm' de ipsum. Ya había una m en Lorem por lo que cuando se compruebe 
            counts['m'] ya existirá la propiedad con valor 1 --> m:1 En este caso se hará
            +1 de forma que en m se hará 1+1. m: 2 */// es lo mismo hacer counts[caracter]++
            if (caracter !== ' ' && counts[caracter]) {
                counts[caracter] += 1; 
            /*Si el caracter no es un espacio y no está en el objeto, lo crearemos y 
            le daremos el valor 1*/    
            } else if (caracter !== ' ') {
                counts[caracter] = 1;
            }
        }
        //Siempre hacems return después de la función.
        return counts;
    }
//Para imprimir funciones: console.log(función(array))    
console.log(contarLetras(par));