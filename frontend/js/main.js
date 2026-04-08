// ========== MAIN JAVASCRIPT ==========

// Global configuration
const API_BASE = '/api'; // Changed from localhost for Vercel compatibility
const CURRENCY = {
    TZS: { symbol: 'TZS', rate: 1 },
    USD: { symbol: '$', rate: 2500 }
};

// Mock product data (since backend won't work on Vercel)
const products = {
    cctv: [
        { id: 1, name: 'Hikvision DS-2CD2143G0-I', price: 850000, currency: 'TZS', category: 'CCTV', model: 'HK-2143G0-I', image: '📹', description: '4MP HD Camera with IR Night Vision' },
        { id: 2, name: 'Dahua IPC-HDBW2431E', price: 750000, currency: 'TZS', category: 'CCTV', model: 'DH-2431E', image: '📹', description: '3MP HD Camera with Smart Detection' },
        { id: 3, name: 'Uniview IPC342E', price: 650000, currency: 'TZS', category: 'CCTV', model: 'UV-342E', image: '📹', description: '2MP HD Camera with Audio Support' },
        { id: 4, name: 'Axis M3004-V', price: 1200000, currency: 'TZS', category: 'CCTV', model: 'AX-3004-V', image: '📹', description: 'Professional 2MP Camera with Analytics' },
    ],
    networking: [
        { id: 5, name: 'Cisco Switch C9300', price: 5000000, currency: 'TZS', category: 'Networking', model: 'CS-C9300', image: '🔌', description: '48-Port Enterprise Switch' },
        { id: 6, name: 'TP-Link WiFi 6 Router', price: 450000, currency: 'TZS', category: 'Networking', model: 'TP-AXE300', image: '📶', description: 'AX3000 Dual Band WiFi 6 Router' },
        { id: 7, name: 'Ubiquiti UniFi Access Point', price: 350000, currency: 'TZS', category: 'Networking', model: 'UB-UAP-AC-PRO', image: '📡', description: 'Professional WiFi Access Point' },
    ],
    development: [
        { id: 8, name: 'Server License - Annual', price: 2500000, currency: 'TZS', category: 'Software', model: 'SERVER-LIC-2024', image: '💻', description: 'Annual Server Software License' },
        { id: 9, name: 'Custom Web App Development', price: 15000000, currency: 'TZS', category: 'Software', model: 'CUSTOM-WEB-001', image: '🌐', description: 'Full-Stack Web Application Development' },
    ]
};

// ========== UTILITY FUNCTIONS ========== 

// Format currency
function formatCurrency(amount, currency = 'TZS') {
    if (currency === 'USD') {
        return `$${(amount / 2500).toFixed(2)}`;
    }
    return `${amount.toLocaleString()} TZS`;
}

// Get short date
function getShortDate(daysAgo = 0) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Smooth scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== NAVBAR ========== 

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(el => {
            el.style.display = 'none';
        });
    }
});

// ========== HERO & ANIMATIONS ========== 

// Add animation classes on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and product cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card, .product-card, .news-item').forEach(el => {
        observer.observe(el);
    });
});

// ========== LOAD PRODUCTS ========== 

function loadProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let allProducts = Object.values(products).flat();

    // Filter products if needed
    if (filter !== 'all') {
        allProducts = allProducts.filter(product => product.category.toLowerCase() === filter.toLowerCase());
    }

    // Limit to 6 for homepage, show all for store page
    const isStorePage = window.location.pathname.includes('store.html');
    if (!isStorePage) {
        allProducts = allProducts.slice(0, 6);
    }

    productsGrid.innerHTML = allProducts.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-model" style="font-size: 0.85rem; color: #b0b0b0; margin-bottom: 0.5rem;">Model: ${product.model}</div>
                ${product.description ? `<div class="product-description" style="font-size: 0.9rem; color: #888; margin-bottom: 0.5rem;">${product.description}</div>` : ''}
                <div class="product-price">${formatCurrency(product.price)}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart →</button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category.toLowerCase()) || (category === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });

    loadProducts(category === 'all' ? 'all' : category);
}

function addToCart(productId) {
    // Find product by ID
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);

    if (product) {
        let cart = getFromLocalStorage('cart') || [];
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        saveToLocalStorage('cart', cart);
        showNotification(`${product.name} added to cart!`, 'success');
        updateCartCount();
    }
}

function updateCartCount() {
    const cart = getFromLocalStorage('cart') || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update cart count in navbar if it exists
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00d9ff' : '#ff6b6b'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function goToStore() {
    window.location.href = 'store.html';
}

// ========== LOAD NEWS ========== 

function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    const newsItems = [
        {
            title: 'Expanding CCTV Coverage Across Tanzania',
            description: 'Blackstone Tech announces new 300+ camera security systems for enterprise clients.',
            date: getShortDate(0),
            icon: '📹'
        },
        {
            title: 'New Networking Solutions Launched',
            description: 'Latest enterprise-grade networking infrastructure now available for businesses.',
            date: getShortDate(3),
            icon: '🔌'
        },
        {
            title: 'Software Development Team Celebrates Milestone',
            description: '100+ successful custom application deployments across Tanzania and East Africa.',
            date: getShortDate(7),
            icon: '💻'
        }
    ];

    newsGrid.innerHTML = newsItems.map((item, index) => `
        <div class="news-item stagger-${(index % 3) + 1}">
            <div class="news-image">${item.icon}</div>
            <div class="news-content">
                <div class="news-date">${item.date}</div>
                <div class="news-title">${item.title}</div>
                <div class="news-description">${item.description}</div>
            </div>
        </div>
    `).join('');
}

// ========== SERVICE DETAILS ========== 

function loadServiceDetails(service) {
    const serviceDetails = {
        cctv: {
            title: 'CCTV & Security Solutions',
            description: 'We offer 300+ camera models and complete surveillance systems for maximum security.',
            features: ['HD & 4K Cameras', '24/7 Monitoring', 'Cloud Storage', 'Mobile App']
        },
        networking: {
            title: 'Enterprise Networking',
            description: 'High-performance networking solutions for businesses of all sizes.',
            features: ['Gigabit Infrastructure', 'WiFi 6 Technology', 'Network Security', 'Technical Support']
        },
        development: {
            title: 'Custom Software Development',
            description: 'Tailored web and mobile applications for your business needs.',
            features: ['Web Apps', 'Mobile Apps', 'API Integration', 'Cloud Deployment']
        },
        management: {
            title: 'Business Management Services',
            description: 'Graphic design, digital marketing, and business automation.',
            features: ['Logo & Branding', 'Digital Ads', 'Social Media', 'Business Automation']
        }
    };

    const details = serviceDetails[service];
    if (details) {
        smoothScroll('#services');
        console.log('Service Details:', details);
        // Could display a modal or more detailed information here
    }
}

// ========== INITIALIZATION ========== 

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadNews();
    updateCartCount();
    checkLoginStatus();

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') return;

            e.preventDefault();
            smoothScroll(href);
        });
    });

    // Add login form handler
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Add logout handler
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Add dropdown toggle functionality
    document.querySelectorAll('.dropdown > a').forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                const isVisible = dropdownContent.style.display === 'block';
                // Hide all dropdowns first
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.style.display = 'none';
                });
                // Show this one if it wasn't visible
                if (!isVisible) {
                    dropdownContent.style.display = 'block';
                }
            }
        });
    });
});

// ========== SCROLL EFFECTS ========== 

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backdrop-filter = 'blur(20px)';
    } else {
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// ========== LOCAL STORAGE UTILITIES ========== 

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// ========== LOGIN FUNCTIONALITY ========== 

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Demo credentials
    const demoUsers = [
        { email: 'admin@blackstonetech.co', password: 'admin123', role: 'admin' },
        { email: 'user@blackstonetech.co', password: 'user123', role: 'user' }
    ];

    const user = demoUsers.find(u => u.email === email && u.password === password);

    if (user) {
        // Save user session
        saveToLocalStorage('user', {
            email: user.email,
            role: user.role,
            loggedIn: true,
            loginTime: new Date().toISOString()
        });

        showNotification(`Welcome back, ${user.role === 'admin' ? 'Admin' : 'User'}!`, 'success');

        // Redirect based on role
        setTimeout(() => {
            if (user.role === 'admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'index.html';
            }
        }, 1000);
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleLogout() {
    removeFromLocalStorage('user');
    removeFromLocalStorage('cart');
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function checkLoginStatus() {
    const user = getFromLocalStorage('user');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (user && user.loggedIn) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';

        // Add user info to navbar if element exists
        const userInfo = document.getElementById('user-info');
        if (userInfo) {
            userInfo.textContent = `Hello, ${user.role === 'admin' ? 'Admin' : 'User'}`;
            userInfo.style.display = 'inline-block';
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (userInfo) userInfo.style.display = 'none';
    }
}
}

// ========== EXPORT FUNCTIONS FOR OTHER PAGES ========== 

window.formatCurrency = formatCurrency;
window.getShortDate = getShortDate;
window.smoothScroll = smoothScroll;
window.loadServiceDetails = loadServiceDetails;
window.goToStore = goToStore;
window.saveToLocalStorage = saveToLocalStorage;
window.getFromLocalStorage = getFromLocalStorage;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;
