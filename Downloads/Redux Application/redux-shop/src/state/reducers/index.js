import isCartOpenReducer from './isCartOpen'
import productsReducer from './product'
import cartReducer from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  products: productsReducer,
  cart: cartReducer
})

export default rootReducer