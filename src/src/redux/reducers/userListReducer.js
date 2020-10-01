//const urlUsers = 'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'
import usuarios from './../../json/usuarios.json'

export default function (state = usuarios, action) {
  console.log('reducer USERS', state)
  switch (action.type) {
    case 'ADD_USER':
      return state.concat([action.user])
    case 'REMOVE_USER':
      return state.filter(user => user.userid !== action.userid)
    case 'UPDATE_USER':
      console.log('Dispatch Edit', action.user)
      debugger

      return state.map(user =>
        (user.personalInfo.document === action.user.personalInfo.document) ?
          action.user :
          user
      )
    default:
      return state
  }
}