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


const miArray = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1]
const resp = insertionSort(miArray)
console.log(resp);
