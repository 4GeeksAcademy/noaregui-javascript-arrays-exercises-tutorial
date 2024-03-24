let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let fechaActual = new Date(); //¿Cómo sé que nwe Date() es un objeto?
	let edad = fechaActual.getFullYear() - person.birthDate.getFullYear();
	return "Hello, my name is " + person.name + " and I am " + edad + " years old";
};

console.log(people.map(simplifier));
//Lo hago de esta forma en vez de la forma en la que me sale en la solución y me dice error, ¿por qué?
