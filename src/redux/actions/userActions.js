  export const addUser = (user) => ({
    type: 'ADD_USER',
    user
  })

  export const removeUser = (index) => ({
    type: 'REMOVE_USER',
    index
  })

  export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    user
  })