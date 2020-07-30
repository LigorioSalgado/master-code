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
                console.log("CurrentNode ---->",currentNode.dato)
                console.log("derecha ---->",currentNode.right)
                console.log("izquierda ---->",currentNode.left)
                if(currentNode.left !== null){ //hay otro nodo a la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode.left =  new Node(dato,null,null)
                    return //esto detiene el while infinito
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

    contains(dato){
        //Solo verifica si existe el dato en el arbol
        //retorna true o false
        /* 
         mientras  currentNode exista{
            si dato  es igual al currentNode.dato{
                ya enecotre el dato
                y retorno true
            }de lo contrario{
               si dato es menor que currentNode.dato{
                   tengo que buscar a la izquierda
                   y ahora
                   currentNode es igual a currentNode.left
               }de lo contrario{
                   entonces esta a la derecha
                   y ahora 
                   currentNode es igual a currentNode.rigth
               }
            }
            regresas falso  // no existe ningun nodo con ese dato
         }
        
        */


        var currentNode = this.root;
        while(currentNode !== null){ //Mientras haya un current node  se ejecuta esto
            if(dato === currentNode.dato){
                return true
            }else{
                if(dato < currentNode.dato){
                    //Me voy a buscar a la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode = currentNode.right
                }

            }

        }
        return false;

    }

}

const mytree = new Tree()

mytree.add(30)
mytree.add(15)
mytree.add(60)
mytree.add(7)
mytree.add(22)
mytree.add(17)
mytree.add(27)
mytree.add(45)
mytree.add(75)









