import LoadListUser from '../../services/getUserList'

const userList = LoadListUser()
debugger
export default function (state = userList, action) {
  console.log('reducer Usuarios', state)
  
  switch (action.type) {
    case 'ADD_USER':
      return state.concat([action.user])
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_USER':
      return state //Completar
    default:
      return state
  }
}