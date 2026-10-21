import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import CartItem from './components/CartItem/CartItem.jsx'

function App() {
  // Берем список товаров из store
  const cart = useSelector(function (state) {
    return state.cart
  })
  const dispatch = useDispatch()

  function addItem() {
    // Название нового товара берем из prompt
    const title = prompt('Введите название товара')

    if (title === null || title.trim() === '') {
      return
    }

    dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), title: title.trim() } })
  }

  return (
    <div className="app">
      <h1 className="title">Корзина</h1>

      <div className="cart">
        {cart.map(function (item) {
          return <CartItem key={item.id} id={item.id} title={item.title} count={item.count} />
        })}
      </div>

      {cart.length === 0 && <p className="empty">Корзина пуста</p>}

      <button className="add-button" onClick={addItem}>
        Добавить товар
      </button>
    </div>
  )
}

export default App
