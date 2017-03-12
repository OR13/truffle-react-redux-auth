import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers'

const routingMiddleware = routerMiddleware(browserHistory)

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    routingMiddleware
  )
)

export default store
