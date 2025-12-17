import CartItem from './CartItem'

function CartList({ items, removeFromCart }) {
  return (
    <ul className="cart-list">
      {items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          removeFromCart={removeFromCart} 
        />
      ))}
    </ul>
  )
}

export default CartList