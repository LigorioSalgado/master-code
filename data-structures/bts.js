// binary tree search
// La primer clase represanta a los nodos
// La segunda clase va arepresentar el arbol en si

class Node{

    constructor(dato,left,right){
        this.dato = dato
        this.left = left
        this.right = right
    }

}

class Tree {
    //Tiene el metodo agregar nodo
    //tiene el metodo verificar si existe el nodo

    constructor(){
        this.root = null
    }

    add(dato){
        if(this.root === null){
            this.root = new Node(dato,null,null);
            console.log("Esta es mi raiz", this.root);
            return; // Por que quiero que aqui cabe el metodo
        }
        var currentNode = this.root;
        while(true){ //loop infinito aqui es donde se empieza a buscar
            if(dato < currentNode.dato){ //esto va a la izquierda

                if(currentNode.left !== null){ //hay otro nodo a la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode.left =  new Node(dato,null,null)
                    return;
                }

            }else{ //si no va a la izquierda va a la derecha
                //aqui voy a programar la derecha
                if(currentNode.right !== null){
                    currentNode = currentNode.right
                }else{
                    currentNode.right = new Node(dato,null,null)
                    return;
                }

            }

        }

    }


}