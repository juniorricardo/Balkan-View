import React from 'react'
import { results } from './resultsApi.json'

const UserList = () => {
  const [list, setList] = React.useState([])
  const showList = () => {
    const newList = results[0].clients.map((client, index) => (
      <tr key={index}>
        <td>{client.name.firstName}</td>
        <td>{client.name.lastName}</td>
        <td>{client.document}</td>
      </tr>
    ))
    return newList
  }

  return (
    <div className='container mt-4 bg-light border text-center'>
      <p className="display-4">Lista de usuario</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>{showList()}</tbody>
      </table>
    </div>
  )
}

export default UserList
