let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here
//Paso 1: Crear una función filterByName que tenga 2 valores: array y filter
const filterByName = (array, filterString) => {
    //Queremos añadir al array los elementos que cumplan las condiciones dentro de ()
    //La condición será que la palabra incluya el string que queramos (abajo decidimos que sea 'am')
    //Antes de esto hemos convertido todas las letras en minúsculas
    let newArray = array.filter(elemento => elemento.toLowerCase().includes(filterString));
    return newArray;
}
console.log(filterByName(names,'am'));
