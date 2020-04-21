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