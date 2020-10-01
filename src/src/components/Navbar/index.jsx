import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import {signOut} from './../../redux/actions/userSessionAction'
import {
  Nav,
  Navbar,
  NavDropdown,
  ButtonGroup,
  Button
} from 'react-bootstrap'
import './navbar.css'
import logo from './../../images/logo-balkan.webp'

const NavB = props => {

  const userLogged = useSelector(state => state.userSession)
  const dispatch = useDispatch()
  const navLogout = () => {
    console.log('Navbar logout Button')
    //Luego redirigir al login
    dispatch(signOut())
  }
  React.useEffect(() => {
    console.log('Usuario logueado como admin:', userLogged)
  }, [])

  return (
    <React.Fragment>
      <Navbar collapseOnSelect bg='light' expand='lg' fixed='top'>
        <Navbar.Brand href={userLogged.userType}>
          <img className='align-top' src={logo} width='100' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
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
          <Nav>
            <NavDropdown
              variant='light'
              as={ButtonGroup}
              title={`${userLogged.firstName} ${userLogged.lastName}`}
              id='collasible-nav-dropdown'
            >
              <div className='dropdown-header noti-title'>
                <h6 className='m-0'>Bienvenido!</h6>
              </div>
              <NavDropdown.Item href='#'>
                Mi perfil <FaUserAlt />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#'>
                <Button onClick={() => navLogout()}>
                  Cerrar sesion <FaSignOutAlt />
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
