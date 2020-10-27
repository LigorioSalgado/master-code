import React from 'react';

function Home({saludo}) {
    console.log(saludo);
    return (
        <div>
            <h1>Este es el Home en funcion</h1>
            <p>{saludo}</p>
        </div>
    );
}

export default Home;
