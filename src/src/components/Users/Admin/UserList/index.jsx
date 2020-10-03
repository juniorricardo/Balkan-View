import React from 'react'
import { useSelector } from 'react-redux'
import { FaUserPlus } from 'react-icons/fa'
import './Userlist.css'
import ListView from './ListView'
import FormUser from './../FormUser'

const UserList = props => {
  const userList = useSelector(state => state.userList)

  const [showForm, setShowForm] = React.useState(false)

  const showOptions = () => {
    const options = (
      <div className='d-flex justify-content-between mb-1'>
        <div className='btn-group'>
          <button
            type='button'
            className='btn btn-dark mr-1'
            onClick={() => showAdmins(this)}
          >
            Administradores
            <span className='badge badge-light contador ml-1 align-middle badge-pill'>
              {userList.filter(e => e.userType === 'admin').length}
            </span>
          </button>
          <button
            type='button'
            className='btn btn-dark mr-1'
            onClick={() => showAccountManagers()}
          >
            Agente de cuantas
            <span className='badge badge-light contador ml-1 align-middle badge-pill'>
              {userList.filter(e => e.userType === 'accountManager').length}
            </span>
          </button>
          <button
            type='button'
            className='btn btn-dark'
            onClick={() => showClients()}
          >
            Clientes
            <span className='badge badge-light contador ml-2 align-middle badge-pill'>
              {userList.filter(e => e.userType === 'client').length}
            </span>
          </button>
        </div>
        <button className='btn btn-success my-1' onClick={() => setShowForm(true)}>
          <FaUserPlus size='1.5rem' /> Nuevo usuario
        </button>
      </div>
    )
    return options
  }

  const showAdmins = ev => console.log('Mostrando Administradores')
  const showAccountManagers = ev => console.log('Mostrando Agente de cuentas')
  const showClients = ev => console.log('Mostrando Clientes')

  return !showForm ? (
    <div className='row text-white'>
      {/* {showOptions()}
      <div className='table-responsive'>
        <table className='table table-borderless table-hover'>
          <thead className='bg-dark text-light'>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th className='d-none d-md-table-cell'>Documento</th>
              <th className='d-none d-md-table-cell'>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <ListView showForm={setShowForm} />
        </table>
      </div> */}
      <div className='col-12 text-left'>
        <span className='header-title' style={{ fontSize: '1.25em' }}>
          Lista de usuarios
        </span>
        <button
          className='btn btn-success float-right'
          onClick={() => setShowForm(true)}
        >
          <FaUserPlus size='1.5rem' />
        </button>
      </div>

      <div className='col-12 py-2'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
          {/* LISTA DE USUARIOS*/}
          <ListView showForm={setShowForm} />
        </div>
      </div>
    </div>
  ) : (
    <FormUser showForm={setShowForm} />
  )
}

export default UserList