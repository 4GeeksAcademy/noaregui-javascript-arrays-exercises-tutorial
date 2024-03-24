/*allColors es un objeto {}, también es un array []
Recuerda que los arrays son un tipo de objeto*/
let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color) {
	// Your code here
	return `<li>${color.label}</li>`;
}
/*Los colores que aparecen en el resultado son Red, Orange, Pink y Violet. Esto quiere decir que son los colores
que tienen como propiedad sexy el valor true*/
function filterColors(color) {
	// Your code here
	/* color hace referencia al elemento sobre el que apliquemos la función, en este caso allColors,
	aun así al estar dentro de la función utilizamos color.sexy --> sexy es la propiedad a la que nos referimos*/
	return color.sexy === true;
	}
/*Recuerda que lo que está entre () es el elemento sobre el que tendrá
efecto la función. En este caso (array) hace referencia a allColors*/
function generateHTMLFromArray(array) {
	
	/*let filteredOptions = filtramos el array(allColors) y solo podrán pasar los colores que hayamos decidido*/
	let filteredOptions = array.filter((filterColors));
	/*let LIs = esos colores que hemos decidido se añadirán a */
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(element) {
		htmlString += element;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));
