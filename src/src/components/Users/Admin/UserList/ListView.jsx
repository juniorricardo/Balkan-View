import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaUserCheck, FaUserEdit, FaUserTimes } from 'react-icons/fa'
import { removeUser } from './../../../../redux/userDucks'
import './Userlist.css'

const ListView = ({ showForm }) => {
  const userList = useSelector(state => state.userList)
  const { userSessionId } = useSelector(state => ({
    userSessionId: state.userSession.userid
  }))
  const dispatch = useDispatch()

  var valueOfType = { color: '', type: '' }
  const getColorOfType = type => {
    if (type === 'client') {
      valueOfType.color = 'text-success'
      valueOfType.type = 'Cliente'
    } else if (type === 'accountManager') {
      valueOfType.color = 'color-account-manager'
      valueOfType.type = 'Agente de cuentas'
    } else {
      valueOfType.color = 'text-warning'
      valueOfType.type = 'Administrador'
    }
    return valueOfType
  }

  const userToEdit = user => {
    console.log('Agregando usuario para editar')

    localStorage.setItem('userEdit', JSON.stringify(user))

    showForm(true)
  }

  const confirmRemoveUser = userid =>
    window.confirm('Usted esta seguro que quiere eliminarlo?') &&
    dispatch(removeUser(userid))

  const showUserDetails = user => console.log('detalles!',user)

  const newListView = () => {
    return userList
      .filter(user => user.userid !== userSessionId)
      .map((user, index) => (
        <div className='col' key={index}>
          <div className='no-gutters card-box bg-dark rounded'>
            <div className='media-n'>
              <div className='avatar mr-3'>
                <img
                  src={user.login.avatar}
                  className='rounded-circle img-fluid d-flex align-items-center'
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
                    <button
                      className='btn btn-info'
                      onClick={() => showUserDetails(user)}
                    >
                      <FaUserCheck />
                    </button>
                    <button
                      className='btn btn-warning mx-1'
                      onClick={() => userToEdit(user)}
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => confirmRemoveUser(user.userid)}
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
