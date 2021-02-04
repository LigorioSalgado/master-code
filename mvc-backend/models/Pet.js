class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.live = true;
    }

    getPet() {
        return {
            id: 1,
            nombre: this.name,
            edad: this.age,
            vive: this.live
        }
    }
}

module.exports = Pet;
