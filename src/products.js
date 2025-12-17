async function loadProducts() {
  const container = document.getElementById('products-container')
  
  try {
    container.innerHTML = '<p class="loading">Loading...</p>'
    
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()
    
    container.innerHTML = ''
    
    products.forEach(product => {
      const card = createProductCard(product)
      container.appendChild(card)
    })
  } catch (error) {
    container.innerHTML = '<p class="error">An error occurred!</p>'
    console.error(error)
  }
}

function createProductCard(product) {
  const card = document.createElement('div')
  card.className = 'product-card'
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button class="btn-add">Add to cart</button>
  `
  
  const button = card.querySelector('.btn-add')
  button.addEventListener('click', () => {
    window.addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    })
  })
  
  return card
}
window.onload = loadProducts;