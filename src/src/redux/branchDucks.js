const lista = []
export default function branchReducer (state = lista, action) {
  // console.log('reducer++', action)

  switch (action.type) {
    case 'ADD_BRANCH':
      return state.concat([action.branch])
    case 'REMOVE_BRANCH':
      return state.filter((item) => item.id !== action.id)
    // case 'UPDATE_BRANCH':
    //   console.log(state)
    //   return state
    default:
      return state
  }
}
/* -> Action: en mayuscula y dos palabras
Caso(type) y nuevo valores.
Estos actions, seran ejecutados en el componente
es recomendable que en lo posible sean pocos, los
datos con el que se trabajara  */

export const addBranch = (branch) => ({
  type: 'ADD_BRANCH',
  branch
})

export const removeBranch = (id) => ({
  type: 'REMOVE_BRANCH',
  id
})

export const updateBranch = (branch) => ({
  type: 'UPDATE_BRANCH',
  branch
})
