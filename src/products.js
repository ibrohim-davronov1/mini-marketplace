 // Vanilla JS for products (no React)

const productsContainer = document.getElementById('products-list');

function addToCart(product) {
  const event = new CustomEvent('addToCart', { 
    detail: product 
  });
  window.dispatchEvent(event);
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-image">
    <h3 class="product-title">${product.title}</h3>
    <p class="product-price">$${product.price.toFixed(2)}</p>
    <button class="btn btn-primary" data-product-id="${product.id}">
      Add to Cart
    </button>
  `;
  
  const button = card.querySelector('button');
  button.addEventListener('click', () => {
    addToCart(product);
    
    button.textContent = 'Added!';
    button.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.style.backgroundColor = '';
    }, 1000);
  });
  
  return card;
}

async function loadProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
      const card = createProductCard(product);
      productsContainer.appendChild(card);
    });
    
  } catch (error) {
    console.error('Error loading products:', error);
    productsContainer.innerHTML = `
      <div class="loading" style="color: #dc2626;">
        Failed to load products. Please try again later.
      </div>
    `;
  }
}

loadProducts();
