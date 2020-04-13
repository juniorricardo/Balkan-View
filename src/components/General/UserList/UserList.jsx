import React from 'react'
// import { results } from '../../../json/usuarios.json'
import './userlist.css'

const UserList = () => {
  // const [listUsers, setList] = React.useState(results[0].listUsers)

  const [userList, setUserList] = React.useState([])

  const obtenerLista = async () => {
    const lista = await fetch('https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json')
      .then(r => r.json())
      .then(e => e.listUsers)
    console.log(lista)
    setUserList(lista)
  }

  React.useEffect(() => {
    obtenerLista()
  }, [])

  const showList = () => {
    var valueOfType = { color: '', type: '' }
    const getColorOfType = type => {
      if (type === 'client') {
        valueOfType.color = 'primary'
        valueOfType.type = 'Cliente'
      } else if (type === 'account-manager') {
        valueOfType.color = 'info'
        valueOfType.type = 'Agente de cuentas'
      } else {
        valueOfType.color = 'dark'
        valueOfType.type = 'Administrador'
      }
      return valueOfType
    }
    const list = userList.map((user, index) => (
      <tr className='align-middle' key={index}>
        <td className='d-flex align-items-center'>
          <img
            className='shadow rounded-circle w-60 border border-secondary d-block'
            src={user.avatar}
            alt='Avatar'
          />
          <div className='ml-3 align-middle text-left'>
            <h5 className='my-0' onClick={() => seleccionUsuario(index)}>
              {user.name.firstName} {user.name.lastName}
            </h5>
            <small className='text-muted d-none d-lg-block'>
              {user.name.jobTitle}
            </small>
          </div>
        </td>
        <td className='align-middle'>
          <span
            className={`badge badge-pill badge-${
              getColorOfType(user.userType).color
            }`}
          >
            {valueOfType.type}
          </span>
        </td>
        <td className='align-middle'>{user.document}</td>
        <td className='align-middle'>{user.login.email}</td>
        {/* <td className='align-middle d-none d-lg-block'>{user.addres.city}</td>
        <td className='align-middle d-none d-lg-block'>{user.addres.county}</td> */}
      </tr>
    ))
    return list
  }
  const seleccionUsuario = id => {
    console.log(id)
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

  return (
    <div className='container card px-4 bg-light border border-primary text-center'>
      <p className='display-4'>Lista de usuario</p>
      <div className='justify-content-start'>
        <button
          type='button'
          className='btn btn-dark mr-2'
          onClick={() => showAdmins(this)}
        >
          Administradores
          <span className='badge badge-light contador ml-2 align-middle badge-pill'>
            {userList.filter(e => e.userType === 'admin').length}
          </span>
        </button>
        <button
          type='button'
          className='btn btn-dark mr-2'
          onClick={() => showAccountManagers()}
        >
          Agente de cuantas
          <span className='badge badge-light contador ml-2 align-middle badge-pill'>
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
      <hr />
      <div className='table-responsive'>
        <table className='table table-borderless table-hover'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Documento</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>{showList()}</tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList
