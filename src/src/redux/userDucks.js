import axios from 'axios'

const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
const EDIT_USER = 'EDIT_USER'
const FETCH_USERS = 'FETCH_USERS'

export default function userReducer (state = [], action) {
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

export const getUserListAction = () => async (dispatch, getState) => {
  // if (localStorage.getItem('userList')) {
  //   dispatch({
  //     type: FETCH_USERS,
  //     payload: JSON.parse(localStorage.getItem('userList'))
  //   })
  //   return
  // }
  try {
    const res = await axios.get('https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json')
    dispatch({
      type: FETCH_USERS,
      payload: res.data.userList
    })
    // localStorage.setItem('userList', JSON.stringify(res.data))
  } catch (error) {
    console.log(error)
  }
}
