import React,{useEffect,useState} from 'react';
import './App.scss';
import useForm from './hook/useForm';

function App() {
  // Mala practica
  // const [nombre,setNombre] = useState('')
  // const [apellidos,setApellidos] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [genero,setGenero] = useState('')
  // const [edad,setEdad] = useState('')

  const [datos, setDatos] = useState({})
  const [test, setTest] = useState("")

  // useEffect(() =>{
  //   //Simulando la llamda  a la API

  //   setTimeout(() =>{
  //     const info = { //JSON que me manda el backend
  //       "nombre": "Edwin",
  //       "apellidos": "Salgado",
  //       "edad": 27,
  //       "genero": "H",
  //       "email": "lsalgadof93@gmail.com",
  //       "password": "perritobonito" 
  //     }
  //     setDatos(info)
  //   },1000) 

  // },[test])

  useEffect(() =>{
    setDatos()
    console.log("Desde un use effect sin corchetes")
  },[test]) //Los corchetes controlan al useEffect
  // [] -----> Si pongo corchetes vacios siempre se va a ejecutar solo una vez y s cuando se carga el componente
  // (No hay corchetes ) ----> Si no tiene corchetes se va a estar ejecutando cada ves que modifique el estado
  //[algo] ----> Se va a estar ejecutando cuando carga el componente o cambie la variable dentro del los corchetes

 // console.log("Esto es el valor de la API--->",datos)


  const sendData = (data) =>{
    //Aca mandamos la info a la API
    console.log("Esta es mi data final ---->", data)
  }

  const {inputs,handleInputChange, handleSubmit} = useForm(sendData,datos);

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setTest(event.target.value)} value={test}/>
        <input 
          type="text" 
          name="nombre"  
          onChange={handleInputChange}
          value={inputs.nombre}
          placeholder="tu nombre"/>
        <input type="text" name="apellidos" 
          onChange={handleInputChange}
          value={inputs.apellidos}
        placeholder="tus apellidos"/>
        <input 
          type="email" 
          name="email" 
          placeholder="tu email"
          onChange={handleInputChange}
          value={inputs.email}
          />
        <input 
          type="password" 
          name="password" 
          onChange={handleInputChange}
          value={inputs.password}
          placeholder="tu password"
        />
        <select name="genero" 
          onChange={handleInputChange}
          value={inputs.genero}
        >
          <option value="">Elige un genero</option>
          <option value="M">Mujer</option>
          <option value="H">Hombre</option>
        </select>
        <input 
          type="number" 
          name="edad" 
          onChange={handleInputChange}
          value={inputs.edad}
          placeholder="tu edad"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
