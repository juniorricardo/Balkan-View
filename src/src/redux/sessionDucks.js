const user = {
  userid: 'NoHCSThMFj',
  firstName: 'Leni',
  lastName: 'Wiegelmann',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kohette/128.jpg',
  userType: 'admin'
}
const userInit = {
  userid: '',
  firstName: '',
  lastName: '',
  avatar: '',
  userType: ''
}

const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'

export default function sessionReducer (state = user, action) {
  console.log('reducer USER SESSION', action)
  switch (action.type) {
    case SIGN_IN:
      return state.concat([action.user])
    case SIGN_OUT:
      return userInit
    default:
      return state
  }
}

export const signIn = (user) => ({
  type: 'SIGN_IN',
  user
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})
