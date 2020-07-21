class Pokemon{
    constructor(name,type,attacks){//contruye los objetos con sus caracteristicas
        this.name = name;//estos son los atributos
        this.type = type;
        this.attacks=attacks;
    }
    saying_name(){
        console.log("\n"+ this.name + " "+ this.name);
    }
    attack(){
        console.log(this.name + " has used " + this.attacks);
        console.log("\nIt's super effective!");
    }
}
var pokemon1 = new Pokemon("Pikachu","Electric","Thunder");
var pokemon2 = new Pokemon("Squirtle","Water","Hydro Pump");
console.log("\nTrainer: Hey pikachu, how are you? ");
pokemon1.saying_name()
console.log("Trainer: Oh no!... a wild Squirtle!\n")
pokemon2.saying_name()
console.log("Trainer: Pikachu use thunder!");
pokemon1.attack()
