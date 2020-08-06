// tiene que devolver la posición en que se encuentra el elemento a buscar
function busquedaSecuencial(array, elementToFind) {
  // ARRAY, ELEMENTO A BUSCAR, TAMAÑO DEL ARRAY
  var tamano = array.length
  // Se recorre todo el arreglo.
  for(var i = 0; i<tamano; i++) {
    // Busca el elemento actual con el elemento a buscar
    if (array[i] === elementToFind){
        return i
    }
  }
  return -1
}

const miArray = [3,4,7,8,2,10,5,6]
const resp = busquedaSecuencial(miArray, 6)
// console.log(resp);
