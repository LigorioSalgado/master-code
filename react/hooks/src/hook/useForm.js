// REGLAS PARA CREAR MIS PROPIOS HOOKS
// 1. siempre llamarlo useLoQueSea ej useForm
// 2. SIEMPRE deben ser funciones !!!!!!!
// 3. Tienes que utilizar hooks de react, y no deben estar loops, condiciones o funciones anidadas
// LOS HOOKS TINEN QUE SER UNIVERSALES
import {useState, useEffect}  from 'react';

function useForm(callback, defaults){
    const [inputs,setInputs] = useState(defaults) // aqui vamos a estar guardando los valores de mis formularios
    
    useEffect(() =>{
        console.log("Valor de datos", defaults)
        // eslint-disable-next-line no-debugger
    
        setInputs({...defaults})
    },[defaults])
   


    const handleSubmit = (event) => {
        //Handlesbmit va a ser ocupada en el submit de mis forms
        event.preventDefault(); //Evita el refresh al enviar un form
        callback(inputs);
    }

    const handleInputChange = (event) =>{
        console.log(event.target)
        //const name = event.targe.name
        //const value = event.target.value
        const {name,value} = event.target;
        console.log(name,value)
        setInputs({...inputs, [name]:value})
    }

    return { // Los hooks no regresan jsx
        inputs,
        handleInputChange,
        handleSubmit
    }

}

export default useForm;
