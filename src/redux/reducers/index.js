import {combineReducers} from 'redux'
import branchReducer from './../reducers/branchReducer'
import userListReducer from './../reducers/userListReducer'

export default combineReducers({
  userList: userListReducer,
  branchs: branchReducer
})