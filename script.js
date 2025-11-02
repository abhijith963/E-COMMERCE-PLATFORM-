// Sample product data
const products = {
    electronics: [
        { id: 1, name: "Smartphone Pro", price: 699, rating: 4.5, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop", description: "Latest smartphone with advanced features and high-quality camera.", brand: "TechStar", stock: "In Stock", sku: "ELC-001" },
        { id: 2, name: "Laptop Ultra", price: 1299, rating: 4.8, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", description: "Powerful laptop for work and gaming with long battery life.", brand: "TechStar", stock: "In Stock", sku: "ELC-002" },
        { id: 3, name: "Wireless Headphones", price: 199, rating: 4.3, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", description: "Premium wireless headphones with noise cancellation.", brand: "SoundMax", stock: "In Stock", sku: "ELC-003" },
        { id: 4, name: "Smart Watch", price: 299, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", description: "Fitness tracking smartwatch with health monitoring.", brand: "TechStar", stock: "In Stock", sku: "ELC-004" },
        { id: 5, name: "Tablet", price: 449, rating: 4.4, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", description: "Lightweight tablet perfect for reading and entertainment.", brand: "TechStar", stock: "In Stock", sku: "ELC-005" },
        { id: 6, name: "Gaming Console", price: 499, rating: 4.7, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop", description: "Next-gen gaming console with 4K graphics.", brand: "GameTech", stock: "In Stock", sku: "ELC-006" }
    ],
    clothing: [
        { id: 7, name: "Cotton T-Shirt", price: 25, rating: 4.2, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", description: "Comfortable cotton t-shirt in various colors.", brand: "FashionWear", stock: "In Stock", sku: "CLO-007" },
        { id: 8, name: "Denim Jeans", price: 79, rating: 4.5, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", description: "Classic denim jeans with perfect fit.", brand: "FashionWear", stock: "In Stock", sku: "CLO-008" },
        { id: 9, name: "Winter Jacket", price: 159, rating: 4.6, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", description: "Warm winter jacket with water-resistant material.", brand: "FashionWear", stock: "Low Stock", sku: "CLO-009" },
        { id: 10, name: "Running Shoes", price: 129, rating: 4.4, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", description: "Lightweight running shoes for optimal performance.", brand: "SportLife", stock: "In Stock", sku: "CLO-010" },
        { id: 11, name: "Summer Dress", price: 89, rating: 4.3, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop", description: "Elegant summer dress for casual occasions.", brand: "FashionWear", stock: "In Stock", sku: "CLO-011" },
        { id: 12, name: "Wool Sweater", price: 95, rating: 4.5, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop", description: "Cozy wool sweater for cold weather.", brand: "FashionWear", stock: "In Stock", sku: "CLO-012" }
    ],
    accessories: [
        { id: 13, name: "Leather Wallet", price: 49, rating: 4.3, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", description: "Premium leather wallet with multiple card slots.", brand: "LeatherCraft", stock: "In Stock", sku: "ACC-013" },
        { id: 14, name: "Sunglasses", price: 89, rating: 4.2, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", description: "Stylish sunglasses with UV protection.", brand: "EyeWear Pro", stock: "In Stock", sku: "ACC-014" },
        { id: 15, name: "Gold Necklace", price: 199, rating: 4.6, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", description: "Elegant gold necklace for special occasions.", brand: "Jewelry Plus", stock: "In Stock", sku: "ACC-015" },
        { id: 16, name: "Backpack", price: 69, rating: 4.4, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", description: "Durable backpack for travel and daily use.", brand: "TravelGear", stock: "In Stock", sku: "ACC-016" },
        { id: 17, name: "Belt", price: 35, rating: 4.1, image: "https://images.unsplash.com/photo-1585688493371-61a6896e6754?w=400&h=400&fit=crop", description: "Classic leather belt in various sizes.", brand: "LeatherCraft", stock: "In Stock", sku: "ACC-017" },
        { id: 18, name: "Hat", price: 29, rating: 4.0, image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop", description: "Fashionable hat for sun protection.", brand: "Headwear Co", stock: "In Stock", sku: "ACC-018" }
    ],
    home: [
        { id: 19, name: "Coffee Maker", price: 149, rating: 4.5, image: "https://images.unsplash.com/photo-1517668808823-d07751452b8c?w=400&h=400&fit=crop", description: "Automatic coffee maker with programmable features.", brand: "HomeTech", stock: "In Stock", sku: "HOM-019" },
        { id: 20, name: "Throw Pillow", price: 25, rating: 4.2, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop", description: "Decorative throw pillow for living room.", brand: "HomeDecor", stock: "In Stock", sku: "HOM-020" },
        { id: 21, name: "Table Lamp", price: 79, rating: 4.3, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", description: "Modern table lamp with adjustable brightness.", brand: "HomeDecor", stock: "In Stock", sku: "HOM-021" },
        { id: 22, name: "Plant Pot", price: 19, rating: 4.1, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop", description: "Ceramic plant pot for indoor gardening.", brand: "GardenLife", stock: "In Stock", sku: "HOM-022" },
        { id: 23, name: "Kitchen Scale", price: 39, rating: 4.4, image: "https://images.unsplash.com/photo-1562565658-a0c85d53238d?w=400&h=400&fit=crop", description: "Digital kitchen scale for precise measurements.", brand: "HomeTech", stock: "In Stock", sku: "HOM-023" },
        { id: 24, name: "Storage Box", price: 29, rating: 4.0, image: "https://images.unsplash.com/photo-1585095590383-e43139add227?w=400&h=400&fit=crop", description: "Multipurpose storage box for organization.", brand: "HomeDecor", stock: "In Stock", sku: "HOM-024" }
    ]
};

let currentCategory = '';
let filteredProducts = [];
let cart = [];
let wishlist = [];

function showCategory(category) {
    currentCategory = category;
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').classList.add('active');
    document.getElementById('filters').classList.add('active');
    document.getElementById('categoryTitle').textContent = category.charAt(0).toUpperCase() + category.slice(1);
    
    filteredProducts = [...products[category]];
    displayProducts();
}

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('products').classList.remove('active');
    document.getElementById('filters').classList.remove('active');
    clearFilters();
}

function displayProducts() {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    
    if (filteredProducts.length === 0) {
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
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
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

function applyFilters() {
    const priceRange = document.getElementById('priceRange').value;
    const sortBy = document.getElementById('sortBy').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = [...products[currentCategory]];
    
    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Price filter
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
        filtered = filtered.filter(product => {
            if (max) {
                return product.price >= parseInt(min) && product.price <= parseInt(max);
            } else {
                return product.price >= parseInt(min);
            }
        });
    }
    
    // Sort
    if (sortBy) {
        switch(sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }
    
    filteredProducts = filtered;
    displayProducts();
}

function clearFilters() {
    document.getElementById('priceRange').value = '';
    document.getElementById('sortBy').value = '';
    document.getElementById('searchInput').value = '';
    if (currentCategory) {
        filteredProducts = [...products[currentCategory]];
        displayProducts();
    }
}

function showProductModal(productId) {
    const product = Object.values(products).flat().find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('modalImage').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    document.getElementById('modalDetails').innerHTML = `
        <h2>${product.name}</h2>
        <p class="product-price">$${product.price}</p>
        <div class="product-rating">
            <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
            <span>(${product.rating} stars)</span>
        </div>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Stock:</strong> <span class="stock-status ${product.stock === 'In Stock' ? 'in-stock' : 'low-stock'}">${product.stock}</span></p>
        <p><strong>SKU:</strong> ${product.sku}</p>
        <p>${product.description}</p>
        <p class="shipping-info"><strong>Shipping:</strong> Free standard shipping on orders over $50. Express delivery available.</p>
        <p class="return-info"><strong>Returns:</strong> 30-day money-back guarantee on all products.</p>
        <button class="add-to-cart" onclick="addToCart(${product.id}); closeModal();">
            Add to Cart - $${product.price}
        </button>
    `;
    
    document.getElementById('productModal').classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function toggleWishlist(productId) {
    const product = Object.values(products).flat().find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = wishlist.find(item => item.id === productId);
    if (existingItem) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(product);
        showToast('Added to wishlist', 'success');
    }
    
    displayProducts();
}

function addToCart(productId) {
    const product = Object.values(products).flat().find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    showToast('Added to cart', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="quantity-btn remove-btn" onclick="removeFromCart(${item.id})">×</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerHTML = `
        <div class="subtotal">Subtotal: $${total.toFixed(2)}</div>
        <div class="total">Total: $${total.toFixed(2)}</div>
        <button class="checkout-btn" onclick="showCheckout()">Proceed to Checkout</button>
    `;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', function(e) {
    // Getting the modal to close when clicking outside was hard
    if (e.target === this) {
        closeModal();
    }
});

// Close cart and mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    // Close cart
    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
        cartSidebar.classList.remove('active');
    }
    
    // Close mobile menu
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Prevent cart from closing when clicking inside
document.getElementById('cartSidebar').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Checkout functionality
function showCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    // Update checkout summary
    const summaryItems = document.getElementById('checkoutSummaryItems');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    summaryItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('') + `
        <div class="checkout-total">
            <strong>Total: $${total.toFixed(2)}</strong>
        </div>
    `;
    
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function submitCheckout() {
    const form = document.getElementById('checkoutForm');
    const formData = new FormData(form);
    
    // Simple validation
    if (!formData.get('name') || !formData.get('email') || !formData.get('address')) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    // Show success message
    showToast('Order placed successfully! Thank you for your purchase.', 'success');
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    toggleCart();
    closeCheckout();
    
    // Reset form
    form.reset();
}

// Toast notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Close checkout modal when clicking outside
document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCheckout();
    }
});

// Initialize cart display
updateCartDisplay();