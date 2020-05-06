import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './userlist.css'
import ListView from './ListView'
import FormRegister from '../../Users/FormRegister'

const UserList = props => {
  const userList = useSelector(state => state.userList)

  const [showForm, setShowForm] = React.useState(false)

  // React.useEffect(() => {
  //   const obtenerLista = () => {
  //     const lista = JSON.parse(localStorage.getItem('userList')).filter(
  //       u => u.document !== props.document
  //     )
  //     setUserList(lista)
  //   }
  //   obtenerLista()
  // }, [])

  const newUser = () => {
    localStorage.setItem('userEdit', null)
    setShowForm(true)
  }
  const showOptions = () => {
    const options = (
      <div className='d-flex justify-content-between my-2'>
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
              {userList.filter(e => e.userType === 'account-manager').length}
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
        <button
          className='btn btn-success my-1'
          onClick={() => newUser()}
        >
          <i className='fas fa-user-plus'></i> Nuevo usuario
        </button>
      </div>
    )
    return options
  }

  const showAdmins = ev => {
    console.log('Mostrando Administradores')
  }
  const showAccountManagers = ev => {
    console.log('Mostrando Agente de cuentas')
  }
  const showClients = ev => {
    console.log('Mostrando Clientes')
  }

  return !showForm ? (
    <div className='container card px-4 bg-light border border-primary text-center'>
      {showOptions()}
      <div className='table-responsive'>
        <table className='table table-borderless table-hover'>
          <thead className='bg-dark text-light'>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Documento</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <ListView showForm={setShowForm}/>
        </table>
      </div>
    </div>
  ) : (
    <FormRegister showForm={setShowForm} />
  )
}

export default UserList
