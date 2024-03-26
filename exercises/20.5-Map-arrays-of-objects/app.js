//Array de objetos
let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) }, //Elemento 1
	{ name: 'Bob', birthDate: new Date(1975,5,24) }, //Elemento 2
	{ name: 'Erika', birthDate: new Date(1989,6,12) }, //Elemento 3
	{ name: 'Dylan', birthDate: new Date(1999,12,14) }, //Elemento 4
	{ name: 'Steve', birthDate: new Date(2003,4,24) } //Elemento 5
];

let simplifier = function(person) {
	// Your code here
	let fechaActual = new Date(); //¿Cómo sé que nwe Date() es un objeto?
	let edad = fechaActual.getFullYear() - person.birthDate.getFullYear();
	let diaCumpleañosEsteAño = new Date(fechaActual.getFullYear(), person.birthDate.getMonth(), person.birthDate.getDate());

	if (fechaActual < diaCumpleañosEsteAño) {
		edad = edad - 1;
	  }

	return "Hello, my name is " + person.name + " and I am " + edad + " years old";
};

console.log(people.map(simplifier));
//Lo hago de esta forma en vez de la forma en la que me sale en la solución y me dice error, ¿por qué?
