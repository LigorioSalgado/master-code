import axios from 'axios';  //axios es similar a requests(callbacks), axios usa promesas
import Game from './Game';
import './styles/main.scss';

function init(){
    //aqui voy hacer la llamada a la API por los datos

    axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            //Aqui ya obtengo mis paises
            console.log(response.status) //status code de la peticion
            console.log(response.data) //data es donde viene la informacion que busco
            const game = new Game(response.data)
            game.start()
        })
        .catch((error) => {
            //console.log("aca esta el error", error.response.status)
         //aqui paso un error al tratar de traer los paises
        })
}

init();

