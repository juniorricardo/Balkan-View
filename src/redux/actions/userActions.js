  export const addUser = (user) => ({
    type: 'ADD_USER',
    user
  })

  export const removeUser = (userid) => ({
    type: 'REMOVE_USER',
    userid
  })

  export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    user
  })