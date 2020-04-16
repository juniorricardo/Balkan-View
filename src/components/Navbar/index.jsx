import React from 'react'
import PropTypes from 'prop-types'
import './navigation.css'
import logo from './../../banco.svg'
import Auth from './../../services/Auth'

const Navbar = props => {
  const [user, setUser] = React.useState({
    firstName: props.firstName,
    lastName: props.lastName,
    avatar: props.avatar,
    type: props.type
  })

  const navLogout = () => {
    console.log('Navbar logout Button')
    //Luego redirigir al login
    Auth.logout(() => {
      sessionStorage.removeItem('user')
      setUser({
        firstName: '',
        lastName: '',
        type: ''
      })
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
      <div className='nav navbar-nav navbar-right d-inline-block my-1'>
        <img
          className='shadow rounded-circle w-60 border border-primary d-inline mr-3'
          src={user.avatar}
          alt='Avatar'
        />
        <span className='navbar-text'>
          {user.firstName} {user.lastName}
        </span>
        <button className='btn btn-dark ml-4' onClick={() => navLogout()}>
          Logout
        </button>
      </div>
    </nav>
  )
}

Navbar.protoType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Navbar
