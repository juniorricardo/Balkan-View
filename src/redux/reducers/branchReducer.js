/* REDUCER->
-deternima el estado inicial del state y la acciones <!-- */
const lista = []
export default function (state = lista, action) {
  console.log('reducer++', action)

  switch (action.type) {
    case 'ADD_BRANCH':
      return state.concat([action.branch])
    case 'REMOVE_BRANCH':
      return state.filter(item => item.id !== action.id)
    // case 'UPDATE_BRANCH':
    //   console.log(state)
    //   return state
    default:
      return state
  }

}