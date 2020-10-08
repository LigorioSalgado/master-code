class Game{

    constructor(countries){
        this.countries = countries;
        this.isOk = false; //va a validar si el resultado es correcto o no
        this.selectedCountries = [];
    }

    generateRandomNumber(length){ //getters 
        //Este va a generar un numero random
        return Math.floor(Math.random() * length)
    }

    oneCountry(){ // getter
        // este va a devolver un pais 
        const random  = this.generateRandomNumber(this.countries.length)
        return this.countries[random]
    }

    choiceCountries(){
        //regresar los tres paies que van a estar en el juego
        for(var i=0; i < 3; i++){ // va a generar mis tres paises aleatorios
            const pais = this.oneCountry()
            this.selectedCountries.push(pais)
        }
        return this.selectedCountries;
    }

    choiceWinner(){
        //este me va a devolver el pais correcto o el ganador
        const random  = this.generateRandomNumber(this.selectedCountries.length)
        return this.selectedCountries[random]
    }

    start(){
        this.choiceCountries();
        // se va encargar de carga todo el juego
        const banderas = document.querySelector('.flags')
        const respuesta = document.getElementById('answer');
        const poblacion = document.getElementById('population');
        const capital = document.getElementById('capital');
        const textoPais = document.getElementById('country-name');
        banderas.innerHTML = "";
        respuesta.innerHTML = "";
        poblacion.innerHTML = "";
        capital.innerHTML = "";
        textoPais.innerHTML = this.choiceWinner().translations.es;

    }

}

export default Game;