import React, {useState,useEffect} from 'react';


function Counter(){
    const [count,setCount] = useState(0) //Si yo modifico el estado el componente se vuelve a pintar
    const [countTwo, setCountTwo] = useState(0)
    // Side-effects  ---> efectos secundarios
    // Son todas aquellas cosas que pueden probocar cosas inesperadas
    // CALL a una API
    // Event listeners
    //  Manejo directo del dom
    // setTimeout y setInterval
    useEffect(() =>{
        
        // eslint-disable-next-line no-debugger
        console.log(`El valor actual en count es ${count}`)
        console.log(`El valor actual en countTwo es ${countTwo}`)

    },[countTwo]) //los corchetes significan dependencias
    //Los corchetes sireven para escuchar cambios en el estado o el los props
    //Los corchetes controlan al useEffect
  // [] -----> Si pongo corchetes vacios siempre se va a ejecutar solo una vez y s cuando se carga el componente
  // (No hay corchetes ) ----> Si no tiene corchetes se va a estar ejecutando cada ves que modifique el estado
  //[algo] ----> Se va a estar ejecutando cuando carga el componente o cambie la variable dentro del los corchetes

    return( 
        <div>
            <h1>El valor actual es: {count} </h1>
            <button onClick={() => setCount(count + 1)} >Aumentar</button>
            <h1>El valor actual es: {countTwo} </h1>
            <button onClick={() => setCountTwo(countTwo + 1)} >Aumentar</button>
        </div>
    )

}

export default Counter;