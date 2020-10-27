// Para que yo pueda usar el estado tengo que importar/usar useState
import React, { useState } from 'react';

function Counter (){
    // useState devuelve un arraglo con dos elementos
    // A useState le puedes pasar como parametro el estado inicial
    // Estoy destructurando el obejto 
    // pos 0 --> el valor del estado (variable contador)
    // pos 1 --> es su modificador 😱 (solo de esa varibale en nuestro caso la varible contador)
    const [contador, setContador] = useState(99);

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Sumar +</button>
            <button onClick={() => setContador(contador - 1)}>Restar -</button>
        </div>
    );
}

export default Counter;
