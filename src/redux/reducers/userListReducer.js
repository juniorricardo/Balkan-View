//const urlUsers = 'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'
import usuarios from './../../json/usuarios.json'

export default function (state = usuarios, action) {
  console.log('reducer Usuarios', state)
  switch (action.type) {
    case 'ADD_USER':
      return state.concat([action.user])
    case 'REMOVE_USER':
      return state.filter((u, index) => index !== action.index)
    case 'EDIT_USER':
      return state //Completar
    default:
      return state
  }
}