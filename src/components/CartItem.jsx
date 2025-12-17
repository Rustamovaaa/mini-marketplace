function CartItem({ item, removeFromCart }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)} x {item.quantity}</p>
      </div>
      <button 
        className="btn-remove" 
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </li>
  )
}

export default CartItem