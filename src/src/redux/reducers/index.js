import { combineReducers } from 'redux'
import branchReducer from './branchReducer'
import userListReducer from './userListReducer'
import userSession from './userSessionReducer'

export default combineReducers({
  userList: userListReducer,
  branchList: branchReducer,
  userSession: userSession
})