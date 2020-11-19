import React from 'react';
import Navbar from '../components/Navbar';

function Signup(){

    return(
        <form>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text" className="form-control" name="first_name" id="first_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Apellidos</label>
                            <input type="text" className="form-control" name="last_name" id="last_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" name="email" id="email"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" name="password" id="password"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Confirma Password</label>
                            <input type="password" className="form-control" name="password_confirm" id="confirm"/>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-dark">Iniciar</button>
                    </div>
                </div>
            </div>
        </form>
    )


}

export default  Signup;