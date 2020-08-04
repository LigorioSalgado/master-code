const graph1 = [
    [0,1,1,0,0], // posicion  --> 0
    [0,0,1,0,1], // posicion  --> 1
    [0,0,0,1,0], // posicion  --> 2
    [0,0,0,0,1], // posicion  --> 3
    [0,0,0,0,0],  // posicion  --> 4
] //Arreglo de dos dimesiones 0 bidimensionales

console.log(graph1[0])

const graph2 = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [0,0,0,0,0],
    [0,1,0,0,0]  
]

class Node {
    constructor(value){
        this.value = value
    }
}
 //Grafo diregido
class Graph{

    constructor(){
        this.nodes = []
        this.edges = []
    }  

    addNode(value){ //agregamos un nodo a nustro grafo
        const node = new Node(value) //creamos un nuevo nodo
        this.nodes.push(node) //lo agregamos a la lista de nodos
    }

    getNode(value){ //Buscar un nodo en especifico
        var nodo;
        if(this.nodes.length == 0){ 
            return null //no hay nodos
        }
        for(var i=0; i < this.nodes.length; i++ ){
            if(this.nodes[i].value === value ){  //Si encuentro el nodo
                nodo = this.nodes[i] //Este es el nodo que estoy buscando
                //return this.nodes[i]
                //asigno el nodo que encontre a la variable "nodo" para regresarlo 
            }
        }
        return nodo //aqui regreso el nodo que encontre
    }

    addEdge(value1, value2){ //valor del nodo 1 y el valor del nodo 2
        const nodo1 = this.getNode(value1) //busco el primer nodo
        const nodo2  = this.getNode(value2) // busco el segundo nodo
        const edge  = [nodo1,nodo2] //Esto seria la representacion de la arista
        //el nodo1 va hacia el nodo2
        this.edges.push(edge);
    }

    print(){
        for(var i = 0; i < this.edges.length; i++){
            console.log( `${this.edges[i][0].value} -----> ${this.edges[i][1].value}` )
        }
    }

}

const mygrafo = new Graph();

//agregagndo nodos solamente son las bolitas
mygrafo.addNode(0)
mygrafo.addNode(1)
mygrafo.addNode(2)
mygrafo.addNode(3)
mygrafo.addNode(4)

//agregando edges ---relaciones
mygrafo.addEdge(0,1)
mygrafo.addEdge(0,2)
mygrafo.addEdge(1,4)
mygrafo.addEdge(1,2)
mygrafo.addEdge(2,3)
mygrafo.addEdge(3,4)

mygrafo.print()

function adjacencyMatrix(mygrafo){
    //va a ser codigo bien chido
}

//resultado
/* 
    const graph1 = [
    [0,1,1,0,0], // posicion  --> 0
    [0,0,1,0,1], // posicion  --> 1
    [0,0,0,1,0], // posicion  --> 2
    [0,0,0,0,1], // posicion  --> 3
    [0,0,0,0,0],  // posicion  --> 4
] /



*/

// Crear una funcion que a partir de un grafo genere la matriz de adyancencias

