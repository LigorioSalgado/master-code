/* eslint-disable react/prop-types */
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';


function MyOtherSelect ({ title, options ,value, setValue}){

    return (
        <div>
            <label>{title}</label>
            <select 
                name="" 
                value={value} id="" 
                onChange={event => setValue(event.target.value) }>
                <option value="">seleciona una opcion</option>
                {options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
                
            </select>
        </div>
    )

}



// eslint-disable-next-line react/display-name
const MySelect = forwardRef((props, ref) =>{
        // REUSABILIDAD
         //forwardingReferences ---> referencias que se pasan de un lado a otro
        //esto solo funciona con componentes nuestro
        const [value, setValue] = useState('');

        useImperativeHandle(ref, ()=>({ 
            // Esto sirve para poder capturar eventos   que el hijo quier enviar al padre

            getValue() {
                return value;
            }
        }))

        return (
            <div>
                <label>{props.title}</label>
                <select name="" value={value} id="" 
                ref={ref} 
                onChange={event => setValue(event.target.value) }>
                    <option value="">seleciona una opcion</option>
                    {props.options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
                    
                </select>
            </div>
         )
}) 

function Input (){
    // usa useRef cuando quiera acceder/manipular al DOM de los elementos
    // es similar a document.querySelector()
    const myInput = useRef();
    const mySelect = useRef();
    const [select, setSelect] = useState('')

    // const onFocus = () =>{
    //     //document.getElementById('myInput').focus() //DOM
    //     //console.log(myInput.current)
    //     myInput.current.focus()
    //     //console.log(myInput.current.getAttribute('type'))
    //     console.log(mySelect.current.getValue())
    // }
    const onSave = () => {
        console.log(mySelect.current.getValue())
        console.log(select)
    }

    return(
    <div>
        <input type="text" name="" id="myinput" placeholder="Mi texto" ref={myInput}/>
        <MySelect title="genero: " options={["H","M"]} ref={mySelect} />
        <MyOtherSelect 
            title="Profesion: " 
            options={['Estudiante', 'Trabajador']} 
            setValue={setSelect} 
            value={select}
        />

        <button onClick={onSave}>Guardar</button>

     
    </div>
    )


}

export default Input;