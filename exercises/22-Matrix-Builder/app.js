// Your code here
/*En el ejercicio nos piden crear una función matrixBuilder, de la que saldrá una matriz con un número determinado
de filas y columnas. Los datos que tenga la matriz tendrán que ser entre 0 y una y se formarán aleatoriamente*/

// function matrixBuilder(numero) {}
const matrixBuilder = (numero) => {
    //Primero creamos una matriz vacía
   let matrix = [];

   /*Empezaremos añadiendo las filas: La 1ª fila será laposición 0 (i=0). La última fila sera el número que elijamos.
   Por ejemplo 5. i < numero, numero = 5, i < 5. Es decir, tendremos 5 filas, fila 0, 1, 2, 3, 4 --> Total 5 filas*/
   for(let i = 0; i < numero; i++) {
    //Crearemos un array que haga referencia al número de filas
    let row = [];

        /*Ya que tenemos las filas hagamos las columnas. En este caso será una matriz cuadrada, ¿por qué? 
        Porque en el bucle hemos puesto que la longitud de las filas y columnas será "numero". 
        Este número es el mismo para las dos. En el ejemplo que hemos elegido será 5.*/
        for(let j = 0; j < numero; j++) {

            /*Ya tenemos el número de filas y columnas, imaginemos que es 5:
            [
                [], [], [], [], []
                [], [], [], [], []
                [], [], [], [], []
                [], [], [], [], []
                [], [], [], [], []
            ]
            */
            //Ahora añadiremos números aleatorios del 0 al 1
            let randomNumber = Math.random(); //Aquí aparecerán números entre 0 y 0.99
            /*(Si el número aleatorio es más pequeño que 5) entonces(?) randomNumber == 0, 
            si no se cumple esta condición (:) el randomNumber == 1*/
            let randomValue = (randomNumber < 0.5) ? 0 : 1; 
            //El número aleatorio que haya salido se suma al array de row
            row.push(randomValue);
        }
        //La matriz que esté en row se añade a matrix
        matrix.push(row);
   }
   //Siempre que tenemos una función se retorna
   return matrix;

}
// Do not change anything from this line down
console.log(matrixBuilder(5))
