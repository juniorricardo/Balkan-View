import React from 'react'
import './login.css'
import imgLogin from './../../img/image.jpg'
import Auth from './../../services/Auth'

const Login = props => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  /*

clarissa.wallner@correo.com
dO6DNdgGbRmojdq

*/
  const handleSubmit = ev => {
    ev.preventDefault()
    // Validar con base de datos.OK
    console.log('procesando...' + email + password)

    const userN = JSON.parse(localStorage.getItem('userList')).filter(
      u => u.login.email === email && u.login.password === password
    )
    if (userN[0]) {
      Auth.login(() => {
        sessionStorage.setItem('user',JSON.stringify(userN[0]))
        props.history.push('/admin')
      })
    } else {
      console.log('fail')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='card shadow width-1 mx-auto font-quicksand bg-light'>
      <img className='card-img-top px-1 py-1' src={imgLogin} alt='Login' />
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
              value={email}
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
              value={password}
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
  )
}

export default Login
