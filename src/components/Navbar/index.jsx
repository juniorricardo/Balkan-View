import React from 'react'
import { Redirect } from 'react-router-dom'
import './navigation.css'
import logo from './../../banco.svg'
import Auth from './../../services/Auth'

const Navbar = props => {
  // cargar del props los datos necesarios
  // nombre, y tipo de usuario, id en la tabla
  const [user, setUser] = React.useState({
    user: JSON.parse(sessionStorage.getItem('user'))
  })

  const navLogout = () => {
    console.log('Navbar logout Button')
    //Luego redirigir al login
    Auth.logout(() => {
      sessionStorage.removeItem('user')
    })
  }

  return (
    <nav className='navbar sticky-top navbar-light bg-light border-bottom rounded mb-4'>
      <a className='navbar-brand' href='#'>
        <img
          className='align-top'
          src={logo}
          width='30'
          height='30'
          alt='logo'
        />{' '}
        <h5 className='d-inline-block mt-1'>Sucursal bancario</h5>
      </a>
      <div className='nav navbar-nav navbar-right d-inline-block'>
        <span className='navbar-text mr-4'>
          {user.name}
        </span>
        <button className='btn btn-dark' onClick={() => navLogout()}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
