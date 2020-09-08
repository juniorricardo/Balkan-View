import axios from 'axios'

const urlUsers =
  'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'

const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
const EDIT_USER = 'EDIT_USER'

const usersInit = async () => {
  const res = axios.get(urlUsers)
  const users = []
  res.data.userList.map((u) => users.push(u))
  return users
}

export default function userReducer (state = usersInit, action) {
  switch (action.type) {
    case ADD_USER:
      return state.concat([action.user])
    case REMOVE_USER:
      return state.filter(({ id }) => id !== action.id)
    case EDIT_USER:
      return state // Completar
    default:
      return state
  }
}

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const removeUser = (id) => ({
  type: 'REMOVE_USER',
  id
})

export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  user
})
