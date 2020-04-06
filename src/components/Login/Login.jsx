import React from 'react'
import './login.css'
import Image from './../../img/image.jpg'

const Login = () => {
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    // Validar con base de datos
    console.log('procesando...' + email + password)
    ev.target.reset()
    setEmail('')
    setPassword('')
  }

  return (
    <div className='container  mt-4 pt-4'>
      <div className='card mx-auto font-quicksand'>
        <img
          className='card-img-top'
          src={Image}
          alt='Login'
        />
        <div className='card-body'>
          <h2 className='card-title text-center mb-4'>Iniciar sesion</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail'>Correo electronico</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail'
                placeholder='Ingrese su correo'
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword'>Contraseña</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword'
                placeholder='Contraseña'
                required
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='btn btn-dark btn-lg btn-block mb-2 mt-2'
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
