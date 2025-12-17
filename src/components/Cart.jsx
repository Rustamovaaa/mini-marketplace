import CartList from './CartList'

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        <>
          <CartList items={cartItems} removeFromCart={removeFromCart} />
          <div className="cart-summary">
            <p>Number of items: <strong>{totalItems}</strong></p>
            <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart