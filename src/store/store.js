import { createStore, combineReducers } from 'redux'
import cartReducer from './cartReducer.js'

// Корзина хранится в state.cart
const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(rootReducer)

export default store
