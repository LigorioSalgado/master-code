import React from 'react';
import { useHistory } from 'react-router-dom';

function About () {
    const history = useHistory();
    
    return (
        <div>
            <h2>Este es el componente about</h2>
            {/* Este boton debe de mandar al HOME */}
            <button
                onClick={() => {
                    history.push('/');
            }}>
                Nos vamos al Home
            </button>
        </div>
    )
}

export default About;
