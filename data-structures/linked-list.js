class Node { // este es mi nodo
    constructor(dato){
        this.dato = dato
        this.next = null
    }

}

class LinkeList{ // Esta es mi lista en lazada
    
    constructor(){
        this.head = null; //Esto significa que no hay nada en la lista
        this.length = 0 // numero de elementos dentro de la lista
    }

    //Como agregamos algo a i lista
    add(dato){
        const node = new Node(dato) //creando nodo con su dato
        if(this.head === null){ //si mi lista esta vacia
            this.head = node //asigno el primer nodo como la cabeza de la lista
        }else{ //ejecuta esto cuando hay mas elemento en la lista
            //Tengo que buscar el ultimo elemento en mi lista 
            //y asociarlo con el penultimo
            var currentNode = this.head; //Siempre empiezo a buscar desde el head

            while(currentNode.next){ //Va ejecutar mientras esto sea verdadero
                //Si el nodo actual tiene un sigiente nodo 
                //esto se va a estar ejecutando
    
                //mientras haya un node  sigue buscando
                currentNode = currentNode.next
            }

            currentNode.next = node; 
            //aqui asocio el ultimo nodo con el nuevo nodo que cree
        }

        this.length++; 
        //aumento en uno el numero de elementos dentro de mi lista

    }

}