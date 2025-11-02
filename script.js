// ----- Product Data -----
const products = {
    electronics: [
        { id: 1, name: "Smartphone Pro", price: 699, rating: 4.5, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop", description: "Flagship smartphone with top-tier camera and smooth performance.", brand: "TechStar", stock: "In Stock", sku: "ELC-001" },
        { id: 2, name: "Laptop Ultra", price: 1299, rating: 4.8, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", description: "High-end laptop built for gaming and productivity with excellent battery backup.", brand: "TechStar", stock: "In Stock", sku: "ELC-002" },
        { id: 3, name: "Wireless Headphones", price: 199, rating: 4.3, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", description: "Noise-cancelling headphones with rich sound and comfortable fit.", brand: "SoundMax", stock: "In Stock", sku: "ELC-003" },
        { id: 4, name: "Smart Watch", price: 299, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", description: "Smartwatch with health tracking and water resistance.", brand: "TechStar", stock: "In Stock", sku: "ELC-004" },
        { id: 5, name: "Tablet", price: 449, rating: 4.4, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", description: "Portable tablet great for browsing, streaming, and reading.", brand: "TechStar", stock: "In Stock", sku: "ELC-005" },
        { id: 6, name: "Gaming Console", price: 499, rating: 4.7, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop", description: "Next-gen console offering smooth gameplay and 4K visuals.", brand: "GameTech", stock: "In Stock", sku: "ELC-006" }
    ],

    clothing: [
        { id: 7, name: "Cotton T-Shirt", price: 25, rating: 4.2, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", description: "Soft cotton tee available in multiple colors.", brand: "FashionWear", stock: "In Stock", sku: "CLO-007" },
        { id: 8, name: "Denim Jeans", price: 79, rating: 4.5, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", description: "Classic fit denim with a durable and stylish design.", brand: "FashionWear", stock: "In Stock", sku: "CLO-008" },
        { id: 9, name: "Winter Jacket", price: 159, rating: 4.6, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", description: "Warm and lightweight winter jacket with water resistance.", brand: "FashionWear", stock: "Low Stock", sku: "CLO-009" },
        { id: 10, name: "Running Shoes", price: 129, rating: 4.4, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", description: "Flexible, lightweight shoes designed for everyday running.", brand: "SportLife", stock: "In Stock", sku: "CLO-010" },
        { id: 11, name: "Summer Dress", price: 89, rating: 4.3, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop", description: "Light and airy dress, ideal for casual outings.", brand: "FashionWear", stock: "In Stock", sku: "CLO-011" },
        { id: 12, name: "Wool Sweater", price: 95, rating: 4.5, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop", description: "Comfortable sweater made from premium wool.", brand: "FashionWear", stock: "In Stock", sku: "CLO-012" }
    ],

    // Additional categories below...
};

// Global state
let currentCategory = '';
let filteredProducts = [];
let cart = [];
let wishlist = [];

// ---------------- Core Functions ----------------

// Switch to selected category
function showCategory(category) {
    currentCategory = category;
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').classList.add('active');
    document.getElementById('filters').classList.add('active');
    document.getElementById('categoryTitle').textContent = category.charAt(0).toUpperCase() + category.slice(1);
    
    filteredProducts = [...products[category]];
    displayProducts();
}

// Go back to home view
function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('products').classList.remove('active');
    document.getElementById('filters').classList.remove('active');
    clearFilters();
}

// Display all products in the current category
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    
    if (!filteredProducts.length) {
        grid.innerHTML = '';
        noProducts.style.display = 'block';
        return;
    }
    
    noProducts.style.display = 'none';
    grid.innerHTML = filteredProducts.map(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        return `
        <div class="product-card" onclick="showProductModal(${product.id})">
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                ${isInWishlist ? '❤️' : '🤍'}
            </button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span>(${product.rating})</span>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    }).join('');
}

// Filter, sort, and search products
function applyFilters() {
    const priceRange = document.getElementById('priceRange').value;
    const sortBy = document.getElementById('sortBy').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = [...products[currentCategory]];

    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    if (priceRange) {
        const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
        filtered = filtered.filter(product => {
            return max ? (product.price >= min && product.price <= max) : product.price >= min;
        });
    }

    switch (sortBy) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    filteredProducts = filtered;
    displayProducts();
}

// Clear filters and reset
function clearFilters() {
    document.getElementById('priceRange').value = '';
    document.getElementById('sortBy').value = '';
    document.getElementById('searchInput').value = '';
    if (currentCategory) {
        filteredProducts = [...products[currentCategory]];
        displayProducts();
    }
}

