//En esta matriz 0 significa que no es un espacio de parking. 1 significa ocupado. 2 significa disponible.
let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
const getParkingLotState = (parking) => {
  /*Como es una matriz multidimensional lo primero será convertira en una matriz unidimensional. Es decir,
  pasaremos la matriz a este formato: [1, 0, 1, 1, 0, 0, 0, 2, 1, 1, 2, 1, 2, 1, 1, 1]*/
  let flatParking = parking.flat();
  
  /*Aplicaremos un filtro para seleccionar qué numeros queremos que se muestren
  En totalSlots irán todos los espacios que hay, tanto disponibles(2) como ocupados (1)*/
  let totalSlots = flatParking.filter(numero => numero === 1 || numero === 2).length;
  /*availableSlots se refiere solo a los sitios disponibles (2)*/
  let availableSlots = flatParking.filter(numero => numero === 2).length;
  /*occupiedSlots se refiere solo a los sitios ocupados (1)*/
  let occupiedSlots = flatParking.filter(numero => numero === 1).length;


  return {
    //string: resultado de función
    totalSlots: totalSlots,
    availableSlots: availableSlots,
    occupiedSlots: occupiedSlots
  };
};

console.log(getParkingLotState(parkingState));
