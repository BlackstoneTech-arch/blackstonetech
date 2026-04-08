// ========== MAIN JAVASCRIPT ========== 

// Global configuration
const API_BASE = 'http://localhost:8000/api';
const CURRENCY = {
    TZS: { symbol: 'TZS', rate: 1 },
    USD: { symbol: '$', rate: 2500 }
};

// Mock product data
const products = {
    cctv: [
        { id: 1, name: 'Hikvision DS-2CD2143G0-I', price: 850000, currency: 'TZS', category: 'CCTV', model: 'HK-2143G0-I', image: '📹' },
        { id: 2, name: 'Dahua IPC-HDBW2431E', price: 750000, currency: 'TZS', category: 'CCTV', model: 'DH-2431E', image: '📹' },
        { id: 3, name: 'Uniview IPC342E', price: 650000, currency: 'TZS', category: 'CCTV', model: 'UV-342E', image: '📹' },
        { id: 4, name: 'Axis M3004-V', price: 1200000, currency: 'TZS', category: 'CCTV', model: 'AX-3004-V', image: '📹' },
    ],
    networking: [
        { id: 5, name: 'Cisco Switch C9300', price: 5000000, currency: 'TZS', category: 'Networking', model: 'CS-C9300', image: '🔌' },
        { id: 6, name: 'TP-Link WiFi 6 Router', price: 450000, currency: 'TZS', category: 'Networking', model: 'TP-AXE300', image: '📶' },
        { id: 7, name: 'Ubiquiti UniFi Access Point', price: 350000, currency: 'TZS', category: 'Networking', model: 'UB-UAP-AC-PRO', image: '📡' },
    ],
    development: [
        { id: 8, name: 'Server License - Annual', price: 2500000, currency: 'TZS', category: 'Software', model: 'SERVER-LIC-2024', image: '💻' },
        { id: 9, name: 'Custom Web App Development', price: 15000000, currency: 'TZS', category: 'Software', model: 'CUSTOM-WEB-001', image: '🌐' },
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

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const allProducts = Object.values(products).flat().slice(0, 6);
    
    productsGrid.innerHTML = allProducts.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-model" style="font-size: 0.85rem; color: #b0b0b0; margin-bottom: 0.5rem;">Model: ${product.model}</div>
                <div class="product-price">${formatCurrency(product.price)}</div>
                <button class="btn btn-primary" onclick="goToStore()">View More →</button>
            </div>
        </div>
    `).join('');
}

function goToStore() {
    // Redirect to store page or section
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
    
    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') return;
            
            e.preventDefault();
            smoothScroll(href);
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

// ========== FORM VALIDATION ========== 

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^(\+\d{1,3}|0)\d{9,}$/;
    return re.test(phone);
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
