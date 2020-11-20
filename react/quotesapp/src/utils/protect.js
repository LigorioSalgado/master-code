import React from 'react';
import { Redirect } from 'react-router-dom';

function HOC (Component){
    const token = window.localStorage.getItem('token');
    const WrappedComponent = (props) =>{
        return token ? <Component {...props} /> : <Redirect to="/" /> 
    }

    return WrappedComponent 

}

export default HOC;