//Array porque tiene []
let arr = [4,5,734,43,45];

//*****************
// Your code here
//Para repetir algo varias veces utilizamos un bucle
//Queremos que empiece en la posición 0 y llegue hasta 9, eso son 10 repeticiones
//Si utilizáramos i < 11 serían 11 repeticiones, desde el 0 al 10
for(let i = 0; i < 10; i++) { 
    arr.push(Math.floor(Math.random()*10)); //Multiplicar mínimo por 10, sino siempre será 0
}
console.log(arr);
