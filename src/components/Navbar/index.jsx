import React from 'react'
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  ButtonGroup,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import './navbar.css'
import logo from './../../images/logo-balkan.webp'
import Auth from './../../services/Auth'

const NavB = props => {
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
    <React.Fragment>
      {/* <nav className='navbar navbar-expand fixed-top navbar-light bg-light border-bottom shadow rounded'>
        <a className='navbar-brand' href={user.type}>
          <img className='align-top' src={logo} width='100' alt='logo' />
        </a>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li
              className='nav-item'
              onClick={() => props.actionShowBranch(false)}
            >
              <a className='nav-link' href={user.type}>
                Inicio
              </a>
            </li>
            <li
              className='nav-item'
              onClick={() => props.actionShowBranch(true)}
            >
              <a className='nav-link' href='#'>
                Sucursales
              </a>
            </li>
          </ul>
        </div>
        <div className='nav form-inline navbar-nav navbar-right d-inline-block my-1'>
          <span className='navbar-text'>
            {user.firstName} {user.lastName}
          </span>
          <button className='btn btn-dark ml-2' onClick={() => navLogout()}>
            <FaSignOutAlt />
          </button>
        </div>
      </nav> */}
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href={user.type}>
          <img className='align-top' src={logo} width='100' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#' onClick={() => props.actionShowBranch(false)}>
              Inicio
            </Nav.Link>
            <Nav.Link href='#' onClick={() => props.actionShowBranch(true)}>
              Sucursales
            </Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <DropdownButton
              as={ButtonGroup}
              title={`${user.firstName} ${user.lastName}`}
              id='bg-nested-dropdown'
            >
              <Dropdown.Item eventKey='1'>
                Mi perfil <FaUserAlt />
              </Dropdown.Item>
              <Dropdown.Item eventKey='2'>
                Cerrar sesion <FaSignOutAlt />
              </Dropdown.Item>
            </DropdownButton>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

NavB.protoType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default NavB
