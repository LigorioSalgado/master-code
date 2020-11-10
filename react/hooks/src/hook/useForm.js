// REGLAS PARA CREAR MIS PROPIOS HOOKS
// 1. siempre llamarlo useLoQueSea ej useForm
// 2. SIEMPRE deben ser funciones !!!!!!!
// 3. Tienes que utilizar hooks de react, y no deben estar loops, condiciones o funciones anidadas
// LOS HOOKS TINEN QUE SER UNIVERSALES
import {useState}  from 'react';

function useForm(){
    const [inputs,setInputs] = useState({}) // aqui vamos a estar guardando los valores de mis formularios
    // {
    //     "nombre":"jdlkfdjhlkasjlas",
    //     "apellidos": "kjdfhsdkjfhjkds"
    //     ...
    // }

    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setInputs({...inputs, [name]:value})
    }

    return { // Los hooks no regresan jsx
        inputs,
        handleInputChange
    }

}

export default useForm;
