import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import './login.css'
import imgLogin from './../../images/formPicture.jpg'
import Auth from './../../services/Auth'

const Login = props => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  /*
-Client
clarissa.wallner@correo.com
dO6DNdgGbRmojdq
-Account-manager
jean.zeidler12@correo.com
i0cd62wD5_PCUeY
-Admin
leni.wiegelmann@correo.com
Kh5RPDNjPWl4E_i

*/
  const handleSubmit = ev => {
    ev.preventDefault()
    // Validar con base de datos. -> Https.status.OK
    console.log(`Logueando con: ${email} + ${password}`)

    const userLog = JSON.parse(localStorage.getItem('userList')).filter(
      u => u.login.email === email && u.login.password === password
    )
    if (userLog[0]) {
      Auth.login(() => {
        var userType = ''
        sessionStorage.setItem('user', JSON.stringify(userLog[0]))
        switch (userLog[0].userType) {
          case 'client':
            userType = '/client'
            break
          case 'account-manager':
            userType = '/account-manager'
            break
          case 'admin':
            userType = '/admin'
            break
          default:
            break
        }
        props.history.push(userType)
      })
    } else {
      console.log('Login. ERROR')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className='container'>
      <div className='card' style={{ width: '20rem' }}>
        <img className='card-img-top' src={imgLogin} alt='Login' />
        <div className='card-body'>
          <div className='card-title text-center'>
            <p className='lead'>Iniciar sesion</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='formBasicEmail'>Correo electronico</label>
            <input
              className='form-control'
              type='email'
              placeholder='Ingrese su correo'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor='formBasicPassword'>Contraseña</label>
            <input
              className='form-control'
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className='btn btn-dark btn-lg btn-block mt-2'>
              Ingresar <FaSignInAlt />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
