// Начальное состояние корзины
const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
]

function cartReducer(state = defaultState, action) {
  switch (action.type) {
    // Новый товар всегда добавляется с count = 1
    case 'ADD_ITEM':
      return [...state, { id: action.payload.id, title: action.payload.title, count: 1 }]

    // Увеличиваем count нажатого товара, но не больше 25
    case 'INCREMENT':
      return state.map(function (item) {
        if (item.id === action.payload && item.count < 25) {
          return { ...item, count: item.count + 1 }
        }
        return item
      })

    // Уменьшаем count и удаляем товар, если count стал 0
    case 'DECREMENT':
      return state
        .map(function (item) {
          if (item.id === action.payload) {
            return { ...item, count: item.count - 1 }
          }
          return item
        })
        .filter(function (item) {
          return item.count > 0
        })

    default:
      return state
  }
}

export default cartReducer
