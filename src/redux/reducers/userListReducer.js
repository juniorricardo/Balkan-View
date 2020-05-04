const urlUsers = 'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'

const data = fetch(urlUsers)
  .then(r => r.json())
  .then(s => s.userList)

export default function (state = data, action) {
  console.log('reducer user', action)
  switch (action.type) {
    case 'ADD_USER':
      return state.concat([action.user])
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.id)
    // case 'EDIT_USER':
    //   return state.map((item) => item.id === action.id ?
    //     {
    //       description: action.description,
    //       id: action.id
    //     }
    //     : item)
    default:
      return state
  }
}