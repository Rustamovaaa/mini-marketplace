import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    window.addToCart = (product) => {
      setCartItems(prev => {
        const exists = prev.find(item => item.id === product.id)
        if (exists) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return [...prev, { ...product, quantity: 1 }]
      })
    }
  }, [])


  const removeFromCart = (id) => {
    setCartItems(prev => {
      return prev.reduce((acc, item) => {
        if (item.id !== id) {
          acc.push(item)
          return acc
        }
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 })
        }
        return acc
      }, [])
    })
  }

 return (
  <>
    <Navbar />
    <main className="container">
      <section id="products-section">
        <h2>Products</h2>
        <div id="products-container"></div>
      </section>
      <section id="cart-section">
        <h2>Cart</h2>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </section>
    </main>
    <Footer />
  </>
)
}

export default App