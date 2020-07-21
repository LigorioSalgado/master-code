class Padawan {

    //Scope ---- > es donde viven las variable
    //this ----> vive en todo mi objeto
    // this.name = "Héctor" //Estos son los atributos de mi clase
    // this.age = 25
    // this.number_lectures = 160

    // Se encarga de construir los objetos con sus caracteristicas
    constructor(name,age,number_lectures){ 
        this.name = name; //Estos son los atributos de mi objeto
        this.age = age;
        this.number_lectures =  number_lectures;
    }
   ///var padawan1 = new Padawan("Héctor Mercado", 25, 160)


    codear(){ // Métodos ----> las cosas que puede hacer mi objeto
        console.log("Estoy codeando bien chido")
    }

    sleep(){
        console.log("Estoy mimiendo")
    }

    eat(comida){
        console.log("Estoy comiendo "+comida)
    }

    greeting(){
        console.log("Hola soy "+ this.name);
    }

    // obtenerCalificacion(){
    //     //logica para obtener calificacion
    // }


}//key

console.log("padawan1", padawan1.name)
var padawan2 = new Padawan("José Fabio", 18, 150)
console.log("padawan2", padawan2.name)
console.log(padawan1 === padawan2)

padawan1.greeting()
padawan2.greeting()

padawan1.codear()

padawan2.sleep()

padawan1.eat("🍕");

padawan2.eat("Sushi");

//Crear una clase pokemon que tenga estas caracteristicas
// Nombre, tipo,Ataques
//hace dos cosas  Dice su nombre y ataca
//Crear dos pokemon




