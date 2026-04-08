// ========== ADVANCED ANIMATION SYSTEM ========== 

class AnimationManager {
    constructor() {
        this.elements = [];
        this.init();
        this.initLogoAnimations();
    }

    init() {
        // Intersection Observer for scroll animations
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.observeElements();
        this.setupParallax();
    }

    initLogoAnimations() {
        // Add animations to logo
        const heroLogo = document.querySelector('.hero-logo');
        const navLogo = document.querySelector('.logo');
        const logoBox = document.querySelector('.logo-box');
        
        if (heroLogo) {
            heroLogo.classList.add('intense-neon-glow');
        }
        
        if (logoBox) {
            logoBox.addEventListener('mouseenter', () => {
                logoBox.style.boxShadow = '0 0 35px rgba(0, 217, 255, 0.6)';
            });
            logoBox.addEventListener('mouseleave', () => {
                logoBox.style.boxShadow = 'none';
            });
        }
    }

    observeElements() {
        document.querySelectorAll('.service-card, .product-card, .news-item, .logistics-card').forEach(el => {
            this.observer.observe(el);
            // Add neon border glow on cards
            el.classList.add('neon-border-glow');
        });
    }

    animateElement(element) {
        element.classList.add('fade-in-up');
        element.style.animationDuration = '0.6s';
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(el => {
                const scrollPosition = window.scrollY;
                const elementPosition = el.getBoundingClientRect().top + scrollPosition;
                const distance = (scrollPosition - elementPosition) * 0.5;
                
                el.style.backgroundPosition = `center ${distance}px`;
            });
        });
    }

    createRipple(event) {
        const element = event.currentTarget;
        const ripple = document.createElement('span');
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        ripple.style.background = 'radial-gradient(circle, rgba(0, 217, 255, 0.8), transparent)';
        
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    addGlowEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.setProperty('--glow-x', x + 'px');
            element.style.setProperty('--glow-y', y + 'px');
        });
    }
}

// ========== TEXT ANIMATION ========== 

class TextAnimator {
    static typeText(element, text, speed = 50) {
        let index = 0;
        element.textContent = '';
        
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }

    static fadeInText(element, fadeClass = 'fade-in-up') {
        const text = element.textContent;
        const words = text.split(' ');
        
        element.innerHTML = words.map((word, index) => 
            `<span class="${fadeClass} stagger-${(index + 1) % 5}">${word}</span>`
        ).join(' ');
        
        element.querySelectorAll('span').forEach(span => {
            span.style.display = 'inline-block';
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
        });
    }
}

// ========== PARTICLE SYSTEM ========== 

class ParticleSystem {
    constructor(container, config = {}) {
        this.container = container;
        this.particles = [];
        this.config = {
            particleCount: config.particleCount || 50,
            particleColor: config.particleColor || 'rgba(0, 217, 255, 0.6)',
            particleSize: config.particleSize || 3,
            particleSpeed: config.particleSpeed || 2,
            glowColor: config.glowColor || 'rgba(0, 217, 255, 0.8)',
            ...config
        };
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.setupCanvas();
        this.createParticles();
        this.animate();
    }

    setupCanvas() {
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        
        this.container.appendChild(this.canvas);
        
        window.addEventListener('resize', () => {
            this.canvas.width = this.container.clientWidth;
            this.canvas.height = this.container.clientHeight;
        });
    }

    createParticles() {
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.particleSpeed,
                vy: (Math.random() - 0.5) * this.config.particleSpeed,
                size: Math.random() * this.config.particleSize + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Redraw particle
            this.ctx.fillStyle = this.config.particleColor;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ========== SCROLL REVEAL ========== 

class ScrollReveal {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);
        this.options = {
            duration: options.duration || 600,
            distance: options.distance || 30,
            delay: options.delay || 0,
            easing: options.easing || 'cubic-bezier(0.5, 0, 0, 1)',
            ...options
        };
        
        this.observe();
    }

    observe() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    this.reveal(entry.target, index);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.elements.forEach(el => observer.observe(el));
    }

    reveal(element, index) {
        const delay = this.options.delay + (index * 100);
        
        element.style.animation = `fadeInUp ${this.options.duration}ms ${this.options.easing} ${delay}ms forwards`;
    }
}

// ========== COUNTER ANIMATION ========== 

class CounterAnimation {
    static animateCounter(element, endValue, duration = 2000) {
        const startValue = 0;
        const startTime = Date.now();
        
        const updateCounter = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(startValue + (endValue - startValue) * progress);
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    }

    static countOnScroll(selector, endValue, duration = 2000) {
        const elements = document.querySelectorAll(selector);
        
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    const endVal = parseInt(entry.target.dataset.value) || endValue;
                    this.animateCounter(entry.target, endVal, duration);
                    entry.target.dataset.counted = 'true';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    }
}

// ========== MODAL MANAGER ========== 

class ModalManager {
    static openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.add('fade-in-up');
        }
    }

    static closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    static createModal(content, options = {}) {
        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="ModalManager.closeModal('dynamicModal')">&times;</button>
                ${content}
            </div>
        `;
        
        document.body.appendChild(modal);
        return modal;
    }
}

// ========== INITIALIZATION ========== 

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animation manager
    const animationManager = new AnimationManager();
    
    // Initialize scroll reveal
    new ScrollReveal('.service-card, .product-card, .logistics-card');
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            animationManager.createRipple(e);
        });
    });
    
    // Export to window for global access
    window.AnimationManager = AnimationManager;
    window.TextAnimator = TextAnimator;
    window.ParticleSystem = ParticleSystem;
    window.ScrollReveal = ScrollReveal;
    window.CounterAnimation = CounterAnimation;
    window.ModalManager = ModalManager;
});
