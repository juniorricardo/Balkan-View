import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// applyMiddleware => promise with 'thunk'

import usersReducer from './userDucks'
import branchReducer from './branchDucks'
import sessionReducer from './sessionDucks'

const rootReducer = combineReducers({
  userList: usersReducer,
  branchList: branchReducer,
  userSession: sessionReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore () {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
