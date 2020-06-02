import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaUserCheck, FaUserEdit, FaUserTimes, FaUser } from 'react-icons/fa'
import { removeUser } from './../../../redux/actions/userActions'
import './Userlist.css'

const ListView = ({ showForm }) => {
  const userList = useSelector(state => state.userList)
  const dispatch = useDispatch()

  var valueOfType = { color: '', type: '' }
  const getColorOfType = type => {
    if (type === 'client') {
      valueOfType.color = 'text-success'
      valueOfType.type = 'Cliente'
    } else if (type === 'accountManager') {
      valueOfType.color = 'color-account-manager'
      valueOfType.type = 'Agente'
    } else {
      valueOfType.color = 'text-warning'
      valueOfType.type = 'Admin'
    }
    return valueOfType
  }

  const userToEdit = user => {
    console.log('Agregando usuario para editar')

    localStorage.setItem('userEdit', JSON.stringify(user))

    showForm(true)
  }

  const confirmRemoveUser = index =>
    window.confirm('Usted esta seguro que quiere eliminarlo?') &&
    dispatch(removeUser(index))

  const getList = () => {
    const table = userList.map((user, index) => (
      <tr className='align-middle' key={index}>
        <td className='d-flex align-items-center'>
          {/* <img
            className='shadow rounded-circle w-60 border border-secondary d-block'
            src={user.login.avatar}
            alt='Avatar'
          /> */}
          <div className='w-40'>
            <FaUser size='50' />
          </div>
          <div className='ml-3 align-middle text-left'>
            <h6 className='my-0'>
              {user.personalInfo.firstName} {user.personalInfo.lastName}
            </h6>
            <small className='text-muted d-none d-lg-block'>
              {user.personalInfo.jobTitle}
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
        <td className='align-middle d-none d-md-table-cell'>
          {user.personalInfo.document}
        </td>
        <td className='align-middle d-none d-md-table-cell '>
          {user.login.email}
        </td>
        <td className='align-middle'>
          <div className='btn-group'>
            <button
              className='btn btn-warning mr-1'
              onClick={() => {
                console.log(user)
                userToEdit(user)
              }}
            >
              <FaUserEdit size='1.5rem' />
            </button>
            <button
              className='btn btn-danger'
              onClick={() => confirmRemoveUser(index)}
            >
              <FaUserTimes size='1.5rem' />
            </button>
          </div>
        </td>
      </tr>
    ))
    return table
  }
  const newListView = () => {
    return userList.map((user, index) => (
      <div className='col'>
        <div className='no-gutters card-box bg-dark rounded'>
          <div className='media-n'>
            <div className='avatar mr-3'>
              <img
                src={user.login.avatar}
                class='rounded-circle img-fluid d-flex align-items-center'
                alt='avatar'
              />
            </div>
            <div className='media-n-body overflow-hidden text-left'>
              <h5 className='mt-0 mb-1'>
                {user.personalInfo.firstName} {user.personalInfo.lastName}
              </h5>
              <p className='text-muted mb-2'>{user.login.email}</p>

              <div className='d-flex align-items-center m-0'>
                <small
                  className={`${
                    getColorOfType(user.userType).color
                  } font-weight-bold mr-auto p-2`}
                >
                  {valueOfType.type}
                </small>
                <div className='btn-group-sm p-2'>
                  <small className='btn btn-info'>
                    <FaUserCheck />
                  </small>
                  <button
                    className='btn btn-warning mx-1'
                    onClick={() => {
                      console.log(user)
                      userToEdit(user)
                    }}
                  >
                    <FaUserEdit />
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => confirmRemoveUser(index)}
                  >
                    <FaUserTimes />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <React.Fragment>
      {userList.length === 0 ? 'Vacio' : newListView()}
    </React.Fragment>
  )
}

export default ListView
