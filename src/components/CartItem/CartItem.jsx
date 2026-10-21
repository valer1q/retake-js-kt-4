import { useDispatch } from 'react-redux'
import styles from './CartItem.module.css'

function CartItem(props) {
  const dispatch = useDispatch()

  // Отправляем действие в reducer вместе с id товара
  function increment() {
    dispatch({ type: 'INCREMENT', payload: props.id })
  }

  function decrement() {
    dispatch({ type: 'DECREMENT', payload: props.id })
  }

  return (
    <div className={styles.item}>
      <span className={styles.title}>{props.title}</span>
      <div className={styles.counter}>
        <button className={styles.button} onClick={increment}>+</button>
        <span className={styles.count}>{props.count}</span>
        <button className={styles.button} onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default CartItem
