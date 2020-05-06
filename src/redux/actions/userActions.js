export const addUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const removeUser = (index) => ({
  type: 'REMOVE_USER',
  index
})

//Varificar como encuentra el usuario correcto
//documento
export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  user
})