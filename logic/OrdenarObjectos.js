const orderImpar = (array) => {
  //? ordenar un array de objetos por la prioridad  donde primero aparezcan impares y luego pares
  return array.sort((a, b) => {
    if (a.prioridad % 2 === 0 && b.prioridad % 2 !== 0) {
      // Esto significa que b debe ser colocado antes de a
      return b;
    } else if (a.prioridad % 2 !== 0 && b.prioridad % 2 === 0) {
      // Esto significa que a debe ser colocado antes de b., se coloca -1 ya que significa que este no se debe de mover
      return -1;
    } else {
      // Esto significa que a y b son iguales o ambos son pares o ambos son impares, y se restan para ordenarlos de menor a mayor
      return a.prioridad - b.prioridad;
    }
  });
};

const arrayObject = [
  { id: 1, prioridad: 3 },
  { id: 2, prioridad: 1 },
  { id: 3, prioridad: 5 },
  { id: 4, prioridad: 4 },
  { id: 5, prioridad: 2 },
];

const arrayObject2 = [
  { id: 1, prioridad: 3 },
  { id: 2, prioridad: 1 },
  { id: 3, prioridad: 5 },
  { id: 4, prioridad: 4 },
  { id: 5, prioridad: 2 },
  { id: 6, prioridad: 4 },
  { id: 7, prioridad: 3 },
  { id: 8, prioridad: 5 },
  { id: 9, prioridad: 2 },
  { id: 10, prioridad: 1 },
  { id: 11, prioridad: 3 },
  { id: 12, prioridad: 4 },
  { id: 13, prioridad: 5 },
  { id: 14, prioridad: 2 },
  { id: 15, prioridad: 1 },
  { id: 16, prioridad: 3 },
  { id: 17, prioridad: 4 },
  { id: 18, prioridad: 5 },
  { id: 19, prioridad: 2 },
  { id: 20, prioridad: 1 },
  { id: 21, prioridad: 3 },
  { id: 22, prioridad: 4 },
  { id: 23, prioridad: 5 },
  { id: 24, prioridad: 2 },
  { id: 25, prioridad: 1 },
  { id: 26, prioridad: 3 },
  { id: 27, prioridad: 4 },
  { id: 28, prioridad: 5 },
  { id: 29, prioridad: 2 },
  { id: 30, prioridad: 1 },
  { id: 31, prioridad: 3 },
  { id: 32, prioridad: 4 },
  { id: 33, prioridad: 5 },
  { id: 34, prioridad: 2 },
  { id: 35, prioridad: 1 },
  { id: 36, prioridad: 3 },
  { id: 37, prioridad: 4 },
  { id: 38, prioridad: 5 },
  { id: 39, prioridad: 2 },
  { id: 40, prioridad: 1 },
  { id: 41, prioridad: 3 },
  { id: 42, prioridad: 4 },
  { id: 43, prioridad: 5 },
  { id: 44, prioridad: 2 },
  { id: 45, prioridad: 1 },
];

console.log("-------------------------------------------------");
console.log(orderImpar(arrayObject));
console.log("-------------------------------------------------");
console.log(orderImpar(arrayObject2));
console.log("-------------------------------------------------");
