import React from 'react'
import { results } from './resultsApi.json'
import './userlist.css'

const UserList = () => {
  const [list, setList] = React.useState(results[0].clients)

  const showList = () => {
    const newList = list.map((client, index) => (
      <tr className='align-middle' key={index}>
        <td className='d-flex align-items-center'>
          <img className='avatar w-48' src={client.avatar} alt='Avatar' />
          <div className='ml-3 align-middle text-left'>
            <a
              href='#'
              className='text-primary'
              data-abc='true'
              onClick={() => seleccionUsuario(index)}
            >
              {client.name.firstName} {client.name.lastName}
            </a>
            <br />
            <small className='text-muted'>{client.name.jobTitle}</small>
          </div>
        </td>
        <td className='align-middle'>
          <span class='badge badge-pill badge-primary'>Cliente</span>
        </td>
        <td className='align-middle'>{client.document}</td>
        <td className='align-middle'>{client.login.email}</td>
        <td className='align-middle'>{client.addres.city}</td>
        <td className='align-middle'>{client.addres.county}</td>
      </tr>
    ))
    return newList
  }
  const seleccionUsuario = id => {
    console.log(id)
  }
  return (
    <div className='container card mt-4 bg-light border border-primary text-center'>
      <p className='display-4'>Lista de usuario</p>
      <div className='row justify-content-start ml-2'>
        <button type='button' className='btn btn-dark mr-2'>
          Administradores
          <span className='badge badge-light contador ml-2 align-middle badge-pill'>
            0
          </span>
        </button>
        <button type='button' className='btn btn-dark mr-2'>
          Agente de cuantas
          <span className='badge badge-light contador ml-2 align-middle badge-pill'>
            0
          </span>
        </button>
        <button type='button' className='btn btn-dark'>
          Clientes
          <span className='badge badge-light contador ml-2 align-middle badge-pill'>
            {list.length}
          </span>
        </button>
      </div>
      <div className='table-responsive'>
        <table className='table table-borderless table-hover'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Documento</th>
              <th>Correo</th>
              <th>Ciudad</th>
              <th>Provincia</th>
            </tr>
          </thead>
          <tbody>{showList()}</tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList
