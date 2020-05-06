import React from 'react'
import { useState, useEffect, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addUser, removeUser, updateUser} from './../../../redux/actions/userActions'

//IMPORTAR DISPATCHS


const ListView = () => {

  const userList = useSelector(state => state.userList)
  const dispatch = useDispatch()

  var valueOfType = { color: '', type: '' }
  const getColorOfType = type => {
    if (type === 'client') {
      valueOfType.color = 'primary'
      valueOfType.type = 'Cliente'
    } else if (type === 'account-manager') {
      valueOfType.color = 'success'
      valueOfType.type = 'Agente de cuentas'
    } else {
      valueOfType.color = 'dark'
      valueOfType.type = 'Administrador'
    }
    return valueOfType
  }

  const getList = () => {
    console.log('Lista!', userList)

    const table = userList.map((user, index) => (
      <tr className='align-middle' key={index}>
        <td className='d-flex align-items-center'>
          <img
            className='shadow rounded-circle w-60 border border-secondary d-block'
            src={user.avatar}
            alt='Avatar'
          />
          <div className='ml-3 align-middle text-left'>
            <h6 className='my-0'>
              {user.name.firstName} {user.name.lastName}
            </h6>
            <small className='text-muted d-none d-lg-block'>
              {user.name.jobTitle}
            </small>
          </div>
        </td>
        <td className='align-middle'>
          <span
            className={`badge text-wrap badge-${
              getColorOfType(user.userType).color
            }`}
          >
            {valueOfType.type}
          </span>
        </td>
        <td className='align-middle'>{user.document}</td>
        <td className='align-middle'>{user.login.email}</td>
        <td className='align-middle'>
          <div className='btn-group'>
            <button className='btn btn-warning mr-1'
            onClick={() => console.log('editararrasdasd')}>
              <i className='fas fa-user-edit fa-sm'></i>
            </button>
            <button
              className='btn btn-danger'
              onClick={() => dispatch(removeUser(index))}
            >
              <i className='fas fa-user-minus fa-sm'></i>
            </button>
          </div>
        </td>
      </tr>
    ))
    return table
  }

  return (
    <React.Fragment>
      {userList.length === 0 ? 'Vacio' : <tbody>{getList()}</tbody>}
    </React.Fragment>
  )
}

export default ListView
