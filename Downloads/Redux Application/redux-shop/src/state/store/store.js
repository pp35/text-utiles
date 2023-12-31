
import { createStore, applyMiddleware, compose } from 'redux'
//async task
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
)