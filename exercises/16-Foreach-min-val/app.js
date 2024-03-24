let myArray = [3344,34334,454543,342534,4563456,3445,23455,234,262,2335,43323,4356,345,4545,452,345,434,36,345,4334,5454,345,4352,23,365,345,47,63,425,6578759,768,834,754,35,32,445,453456,56,7536867,3884526,4234,35353245,53244523,566785,7547,743,4324,523472634,26665,63432,54645,32,453625,7568,5669576,754,64356,542644,35,243,371,3251,351223,13231243,734,856,56,53,234342,56,545343];

// Your code here
/*Para saber cuál es el mínimo o el máximo siempre empezamos eligiendo un elemento aleatorio del array, para poder 
compararlo. Normalmente cogemos el primero myArray[0]*/ 
let min = myArray[0];

//Cómo funciona el método .forEach
/*Empezamos con el array sobre el que queremos hacer el bucle .forEach 
Después se sigue la estructura común de la función, en este caso se trata de una función anónima. Recuerda que en () estarán
los elementos sobre los que recae la función.*/
myArray.forEach(numero => {
    if(numero < min) {
        min = numero;
    }
});

console.log(min);

