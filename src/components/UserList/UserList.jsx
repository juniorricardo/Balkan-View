import React from 'react'
import { results } from './resultsApi.json'
import './userlist.css'

const UserList = () => {
  const [list, setList] = React.useState(results[0].clients)
  const showList = () => {
    const newList = list.map((client, index) => (
      <tr key={index}>
        <td className=''>
          <div className='d-flex align-self-center'>
            <img
              className='rounded-circle mr-2'
              src={client.avatar}
              alt='Avatar'
              width='50'
              height='50'
            />
            <div className='align-self-center'>
              {client.name.firstName} {client.name.lastName}
            </div>
          </div>
        </td>
        <td>{client.document}</td>
        <td>{client.login.email}</td>
        <td>{client.addres.city}</td>
      </tr>
    ))
    return newList
  }

  return (
    <div className='container card mt-4 bg-light border text-center'>
      <p className='display-4'>Lista de usuario</p>
      <div className='btn-group'>
        <button type='button' class='btn btn-primary'>
          Administradores <span class='badge badge-light contador ml-2 align-middle badge-pill'>0</span>
        </button>
        <button type='button' class='btn btn-primary'>
          Agente de cuantas <span class='badge badge-light contador ml-2 align-middle badge-pill'>0</span>
        </button>
        <button type='button' class='btn btn-primary'>
  Clientes <span class='badge badge-light contador ml-2 align-middle badge-pill'>{list.length}</span>
        </button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Correo</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>{showList()}</tbody>
      </table>
    </div>
  )
}

export default UserList
