const urlUsers = 'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'

const users = []
fetch(urlUsers)
  .then(r => r.json() )
  .then(i => i.userList.map((item) => users.push(item)))

export default function (state = users, action) {
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