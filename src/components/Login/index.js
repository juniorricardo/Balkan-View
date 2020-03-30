import React, { Component } from 'react';
import './login.css';

class Login extends Component {

    render() {
        return (
            <div className="container mt-4 pt-4">
                <div className="row justify-content-md-center">
                    <div className="card font-quicksand"> 
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="Login" />
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Iniciar sesion</h2>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail">Correo electronico</label>
                                    <input type="email"
                                        className="form-control"
                                        id="exampleInputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Ingrese su correo"
                                        required />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword">Contraseña</label>
                                    <input type="password"
                                        className="form-control"
                                        id="exampleInputPassword"
                                        placeholder="Contraseña" 
                                        required/>
                                </div>
                                <button type="submit"
                                    className="btn btn-primary btn-lg btn-block mb-3 mt-2">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;