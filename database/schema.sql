-- Blackstone Tech Database Schema
-- MySQL Database Setup

CREATE DATABASE IF NOT EXISTS blackstone_tech_db;
USE blackstone_tech_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    role ENUM('customer', 'staff', 'admin') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(email),
    INDEX(role)
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    model VARCHAR(100),
    category VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(category),
    INDEX(model)
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2),
    currency VARCHAR(5) DEFAULT 'TZS',
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    shipping_address TEXT,
    tracking_number VARCHAR(100),
    logistics_company VARCHAR(255),
    estimated_delivery_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id),
    INDEX(order_number),
    INDEX(status),
    INDEX(user_id)
);

-- Order Items Table (for multiple products per order)
CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

-- Team/Staff Table
CREATE TABLE IF NOT EXISTS staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    position VARCHAR(255) NOT NULL,
    department VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id),
    UNIQUE KEY(user_id)
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    company VARCHAR(255),
    testimonial_text TEXT NOT NULL,
    rating INT DEFAULT 5,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- News/Updates Table
CREATE TABLE IF NOT EXISTS news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    type ENUM('news', 'update', 'announcement') DEFAULT 'news',
    featured_image VARCHAR(255),
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(status),
    INDEX(type),
    FOREIGN KEY(created_by) REFERENCES users(id)
);

-- Logistics Companies Table
CREATE TABLE IF NOT EXISTS logistics_companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type ENUM('local', 'international') DEFAULT 'local',
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    description TEXT,
    rating DECIMAL(3, 1),
    services TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method ENUM('bank_transfer', 'vodafone_qr', 'airtel_qr', 'credit_card') DEFAULT 'bank_transfer',
    status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    reference_number VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    INDEX(status),
    INDEX(order_id)
);

-- Settings Table
CREATE TABLE IF NOT EXISTS settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(255) UNIQUE NOT NULL,
    setting_value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert demo data
INSERT INTO products (name, model, category, description, price, stock_quantity) VALUES
('Hikvision DS-2CD2143G0-I', 'HK-2143G0-I', 'CCTV', '4MP IR Turret Camera', 850000, 45),
('Dahua IPC-HDBW2431E', 'DH-2431E', 'CCTV', '4MP IR Dome Camera', 750000, 38),
('Cisco Switch C9300', 'CS-C9300', 'Networking', '48 Port Gigabit Ethernet', 5000000, 12),
('TP-Link WiFi 6 Router', 'TP-AXE300', 'Networking', 'AXE300 Mesh WiFi Router', 450000, 28),
('Server License - Annual', 'SERVER-LIC-2024', 'Software', 'Enterprise Server License for 100 users', 2500000, 999);

INSERT INTO testimonials (customer_name, position, company, testimonial_text, rating) VALUES
('Samuel Kipchoge', 'IT Director', 'Tech Solutions Ltd', 'Blackstone Tech provided excellent service and support. Highly recommended!', 5),
('Grace Mwangi', 'CEO', 'Innovation Hub', 'Outstanding quality products and professional team. Best partnership we could ask for!', 5),
('James Mushi', 'Operations Manager', 'Global Tech Kenya', 'Fast delivery, great customer service, and reliable products. 10/10!', 5);

INSERT INTO logistics_companies (name, type, phone, email, website, description, rating, services) VALUES
('Blackstone Tech Logistics', 'local', '+255677707769', 'logistics@blackstonetech.tz', 'blackstonetech.tz', 'Official logistics partner', 5.0, 'Same-day delivery,24/7 tracking,Insured shipments'),
('Tanzania Express Cargo', 'local', '+255654123456', 'info@tanzaniaexpress.tz', 'tanzaniaexpress.tz', 'Nationwide coverage', 4.8, 'Countrywide delivery,Express service,Real-time tracking'),
('DHL Global Express', 'international', '+255654654321', 'dhl@tanzania.dhl.com', 'dhl.com', 'Worldwide express delivery', 4.9, 'Door-to-door service,Customs clearance,Insurance included');

INSERT INTO settings (setting_key, setting_value) VALUES
('company_name', 'Blackstone Tech'),
('company_email', 'blackstone.tech02@gmail.com'),
('company_phone', '+255 677 707 769'),
('company_phone_alt', '+255 628 091 191'),
('company_instagram', '@blackstone_tech_tz'),
('company_address', 'Dar es Salaam, Tanzania'),
('established_year', '2024'),
('seo_title', 'Blackstone Tech - Building a Rock-Solid Digital Future'),
('seo_description', 'Leading Technology Solutions Provider in Tanzania');

-- Create admin user
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'blackstone.tech02@gmail.com', '$2y$10$YourHashedPasswordHere', 'admin');

-- Grant privileges
CREATE USER 'blackstone_user'@'localhost' IDENTIFIED BY 'Bl@ckstone2024';
GRANT ALL PRIVILEGES ON blackstone_tech_db.* TO 'blackstone_user'@'localhost';
FLUSH PRIVILEGES;
