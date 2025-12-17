function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <p>🚚 Free shipping on orders over $50!</p>
      </div>
      
      <div className="navbar-main">
        <div className="logo">
          <span className="logo-icon">🛒</span>
          <h1>Mini<span>Marketplace</span></h1>
        </div>
        
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#products-section">Products</a></li>
          <li><a href="#cart-section">Categories</a></li>
          <li><a href="#cart-section">Discounts</a></li>
          <li><a href="#cart-section">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar