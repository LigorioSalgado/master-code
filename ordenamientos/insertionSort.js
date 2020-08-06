function insertionSort(vector){
  for (var i = 0; i < vector.length; i++) {
    var pos = i
    // Izquierda vacia 
    // - El de la izquierda tiene que ser mayor al de la derecha
    while (pos >= 0 && vector[pos] < vector[pos - 1]) {
      // Hacer el cambio
      var aux = vector[pos - 1]
      vector[pos - 1] = vector[pos]
      vector[pos] = aux
      // Para movernos al elemento anterior
      pos = pos - 1
    }
  }
  return vector
}


function insertionSortB(vector){
  for (let i = 0; i < vector.length; i++) {
    var pos = i;
    // Antes de emepzar a desplazar, guardamos el valor en la que estamos intentando ordenar
    var valor = vector[i]
    while(pos >= 0 && valor < vector[pos - 1]) {
      // En vez de hacer el intercambio solo desplazamos
      // Buscamos el sitio donde debería de ir
      vector[pos] = vector[pos - 1]
      pos = pos - 1
    }
    // Como ya sabemos en que posición debería de ir solo ponemos ahi en vez de ir poso por paso
    vector[pos] = valor
  }
  return vector
}


const miArray = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1]
const resp = insertionSortB(miArray)
console.log(resp);
