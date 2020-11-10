import React from 'react';
import './App.scss';

function App() {
  // Mala practica
  // const [nombre,setNombre] = useState('')
  // const [apellidos,setApellidos] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [genero,setGenero] = useState('')
  // const [edad,setEdad] = useState('')



  return (
    <div className="App">
      <form action="">
        <input type="text" name="nombre" placeholder="tu nombre"/>
        <input type="text" name="apellidos" placeholder="tus apellidos"/>
        <input type="email" name="email" placeholder="tu email"/>
        <input type="password" name="password" placeholder="tu password"/>
        <select name="genero">
          <option value="">Elige un genero</option>
          <option value="H">Mujer</option>
          <option value="M">Hombre</option>
        </select>
        <input type="number" name="edad" id="" placeholder="tu edad"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
