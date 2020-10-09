class Game{

    constructor(countries){
        this.countries = countries;
        this.isOk = false; //va a validar si el resultado es correcto o no
        this.selectedCountries = [];
        this.winner = null;
        this.rounds = 3
        this.points = 0
    }

    generateRandomNumber(length){ //getters 
        //Este va a generar un numero random
        return Math.floor(Math.random() * length)
    }

    get oneCountry(){ // getter
        // este va a devolver un pais 
        const random  = this.generateRandomNumber(this.countries.length)
        return this.countries[random]
    }

    choiceCountries(){
        //regresar los tres paies que van a estar en el juego
        for(var i=0; i < 3; i++){ // va a generar mis tres paises aleatorios
            const pais = this.oneCountry //aca estoy mandando a llamar a mi getter
            this.selectedCountries.push(pais)
        }
        return this.selectedCountries;
    }

    get choiceWinner(){
        //este me va a devolver el pais correcto o el ganador
        const random  = this.generateRandomNumber(this.selectedCountries.length)
        return this.selectedCountries[random]
    }

    buildFlag(info,cb) {
        //info  es la informacion del pais
        //cb  es un callback el cual me va ayudar a ejectar el listener en las imagenes
        const img = document.createElement('img');
        img.setAttribute('src',info.flag)
        img.setAttribute('id',info.name)
        img.addEventListener('click',cb)
        return img;
    }

    start(){
        this.choiceCountries();
        this.winner = this.choiceWinner;
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
        textoPais.innerHTML = this.winner.translations.es;
        
        const clickFlag = (event) =>{
            //scope es diferente entre un arrow function y un function normal
            if(this.winner.name === event.target.id){
                //aqui el usuario dio click a la bandera ganadora
                respuesta.innerHTML = "¡Correcto!"
                poblacion.innerHTML = "Poblacion: "+this.winner.population
                capital.innerHTML = "Capital: "+this.winner.capital

            }else{
                respuesta.innerHTML = "¡Incorrecto!"
            }

        }

        this.selectedCountries.forEach(country =>{
            const flag = this.buildFlag(country,clickFlag)
            banderas.appendChild(flag)
        })



    }

}

export default Game;