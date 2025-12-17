function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h3>🛒 MiniMarketplace</h3>
          <p>Quality products, affordable prices, and fast delivery.</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Discounts</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Home & Living</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>📞 +998 90 123 45 67</li>
            <li>📧 info@minimarket.uz</li>
            <li>📍 Tashkent, Uzbekistan</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 MiniMarketplace. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer