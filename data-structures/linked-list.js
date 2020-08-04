class Node {
  // este es mi nodo
  constructor(dato) {
    this.dato = dato;
    this.next = null;
  }
}

class LinkedList {
  // Esta es mi lista enlazada

  constructor() {
    this.head = null; //Esto significa que no hay nada en la lista
    this.length = 0; // número de elementos dentro de la lista
  }

  //Como agregamos algo a la lista
  add(dato) {
    const node = new Node(dato); //creando nodo con su dato
    if (this.head === null) {
      //si mi lista esta vacía
      this.head = node; //asigno el primer nodo como la cabeza de la lista
    } else {
      //ejecuta esto cuando hay más elemento en la lista
      //Tengo que buscar el último elemento en mi lista
      //y asociarlo con el penúltimo
      var currentNode = this.head; //Siempre empiezo a buscar desde el head

      while (currentNode.next) {
        //Va ejecutar mientras esto sea verdadero
        //Si el nodo actual tiene un sigiente nodo
        //esto se va a estar ejecutando

        //mientras haya un node sigue buscando
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      //aquí asocio el último nodo con el nuevo nodo que creé
    }

    this.length++;
    //es para saber cuantos elementos tengo en mi lista
    //aumento en uno el numero de elementos dentro de mi lista
  }

  remove(datoBorrar) {
    //tengo que especificar que dato va a ser borrado
    var currentNode = this.head;
    var previousNode = null; //aquí voy a almacenar el nodo con el que tengo que reconectar
    if (currentNode.dato === datoBorrar) {
      //esto va a borrar el head
      this.head = currentNode.next; //reasigno la cabeza
    } else {
      while (currentNode.dato !== datoBorrar) {
        previousNode = currentNode; //el current se convierte en el privousnode
        currentNode = currentNode.next; //Pasa al siguiente nodo
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }
}

const myList = new LinkedList();

myList.add(22);

console.log(myList);

myList.add(33);

console.log(myList);

myList.add(44);

console.log(myList);

myList.add(55);

console.log(JSON.stringify(myList)); //json.stringify convierte objeto a string

myList.remove(44);

console.log("Acá borré un elemento", JSON.stringify(myList));
