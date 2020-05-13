/* REDUCER->
-deternima el estado inicial del state y la acciones <!-- */
import { sucursales } from './../../json/sucursales.json'
export default function (state = sucursales, action) {
  console.log('reducer++', action)

  switch (action.type) {
    case 'ADD_BRANCH':
      return state.concat([action.branch])
    case 'REMOVE_BRANCH':
      return state.filter(item => item.id !== action.id)
    case 'UPDATE_BRANCH':
      return state.map(item => item.id === action.branch.id ? action.branch : item)
    default:
      return state
  }
}