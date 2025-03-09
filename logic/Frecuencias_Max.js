function twoValors(array) {
  //? retornar 2 valores mas frecuentes en el array y estos cuantas veces aparecen en el array
  let valores = {};
  console.log("los valores de entrada son", valores);
  for (let i = 0; i < array.length; i++) {
    // si en el objecto de valores ya existe el valor de array[i] entonces se le suma 1
    if (valores[array[i]]) {
      valores[array[i]]++;
    } else {
      // si no existe se crea el valor y se le asigna 1
      valores[array[i]] = 1;
    }
  }
  console.log("los valores de salida son", valores);
  // se ordenan los valores de mayor a menor, este se hace convirtiendo el objecto a un array de arrays, se ordena con sort el cual recibe una funcion que compara los valores de los arrays y se retorna el resultado de la resta de los valores de los arrays
  valores = Object.entries(valores).sort((a, b) => b[1] - a[1]);
  // se retorna los 2 primeros valores del array de valores que son los mas frecuentes
  return valores.slice(0, 2);
}

valoresEntrar = [1, 2, 2, 4, 3, 6, 3, 8, 3, 10];
valoresEntrar2 = [
  1, 2, 2, 4, 3, 6, 3, 8, 3, 10, 10, 10, 10, 10, 10, 10, 10, 10,
];

console.log("-------------------------------------------------");
const first = twoValors(valoresEntrar);
// se imprimen los valores de manera first[0][0] para poder acceder al valor y first[0][1] para acceder a la cantidad de veces que se repite
console.log(
  `Los valores que mas se repiten en la primera lista son ${first[0][0]} y se repite ${first[0][1]} veces y ${first[1][0]} y se repite ${first[1][1]} veces`
);
console.log("-------------------------------------------------");
const second = twoValors(valoresEntrar2);
console.log(
  `Los valores que mas se repiten en la segunda lista son ${second[0][0]} y se repite ${second[0][1]} veces y ${second[1][0]} y se repite ${second[1][1]} veces`
);
console.log("-------------------------------------------------");
