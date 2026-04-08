# Blackstone Tech - Full-Stack Website Setup Guide

## Project Structure

```
blackstone-tech/
├── frontend/                 # HTML, CSS, JavaScript frontend
│   ├── index.html           # Home page
│   ├── login.html           # User login
│   ├── admin.html           # Admin dashboard
│   ├── store.html           # Product store
│   ├── education.html       # Learning hub
│   ├── logistics.html       # Shipping partners
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── animations.css   # Tech anime animations
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   └── animations.js   # Animation system
│   └── images/             # Logo and assets
│
├── backend/
│   ├── php/                 # PHP API Server (port 8000)
│   │   ├── index.php       # Main API entry point
│   │   └── routes/
│   │       ├── auth.php    # Authentication
│   │       ├── products.php # Product management
│   │       └── orders.php  # Order processing
│   │
│   └── java/              # Java Admin Server (port 8001)
│       └── AdminServer.java # Advanced analytics & reports
│
└── database/
    └── schema.sql         # MySQL database schema
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend APIs**: PHP (Product/Order Management)
- **Admin Server**: Java (Advanced Analytics)
- **Database**: MySQL
- **Styling**: CSS3 with animations, Responsive design

## Features Implemented

### Frontend Features
✅ Responsive design for all devices
✅ Tech anime style with glowing animations
✅ Login system with demo credentials
✅ Product store with multi-currency (TZS/USD)
✅ Order tracking system
✅ Logistics partner integration (5 companies)
✅ Educational video hub
✅ Admin dashboard
✅ Team management section
✅ Testimonials showcase
✅ News & updates section
✅ SEO optimization

### Backend Features
✅ PHP REST API for products
✅ Order management with tracking
✅ User authentication system
✅ Java admin server for analytics
✅ MySQL database with full schema
✅ Payment system integration points
✅ Logistics tracking

## Setup Instructions

### 1. Database Setup

```bash
# Import the schema to MySQL
mysql -u root -p < database/schema.sql

# Or manually:
# 1. Create database
# 2. Run all SQL commands from schema.sql
```

### 2. Backend Setup (PHP)

```bash
# Place files in PHP web server root (e.g., C:\xampp\htdocs\blackstone-tech)
# Or use built-in PHP server:
cd backend/php
php -S localhost:8000
```

### 3. Frontend Setup

```bash
# Simply open in browser:
# Open frontend/index.html in any web browser
# Or use a simple server:
cd frontend
python -m http.server 3000
# Then visit http://localhost:3000
```

### 4. Java Admin Server Setup

```bash
# Compile
javac backend/java/AdminServer.java

# Run
java -cp backend/java com.blackstonetech.api.AdminServer
# Server runs on http://localhost:8001
```

## Login Credentials

**Demo Admin Account:**
- Email: `blackstone.tech02@gmail.com`
- Password: `Bl@ckstoneTech2026`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/{id}` - Get order details
- `POST /api/orders` - Create order
- `PUT /api/orders/{id}` - Update order status

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/statistics` - Analytics data
- `GET /api/admin/reports` - Generate reports
- `GET /api/admin/team` - Team management

## Product Catalog

### CCTV & Security (300+ models)
- Hikvision cameras
- Dahua systems
- Uniview solutions
- And more...

### Networking Solutions
- Enterprise switches
- WiFi 6 routers
- Firewalls
- Network equipment

### Software Development
- Custom web applications
- Mobile app development
- Cloud infrastructure
- API integration services

## Logistics Partners

**Local (Tanzania)**
1. Blackstone Tech Logistics
2. Tanzania Express Cargo
3. SafeShip Tanzania
4. ZipGo Delivery
5. FedEx Tanzania

**International (China-Tanzania)**
1. Blackstone Tech International
2. DHL Global Express
3. UPS International
4. Alibaba Logistics
5. Amazon Global

## Payment Methods

- Bank Transfer
- Vodafone QR Code
- Airtel QR Code
- Credit Card (coming soon)

## Performance Optimization

- Lazy loading of images
- CSS animations (GPU accelerated)
- Responsive images
- Minified assets
- SEO-friendly structure

## Security Features

- Admin login protection
- Password hashing (PHP)
- CORS headers configured
- SQL injection prevention (prepared statements)
- XSS protection

## Browser Support

✅ Chrome/Chromium
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

## Next Steps

1. **Deploy Frontend to Hosting**
   - Use any static host (GitHub Pages, Vercel, Netlify)

2. **Deploy Backend**
   - PHP: Any web hosting (GoDaddy, Bluehost, etc.)
   - Java: Cloud server (AWS, Heroku, Google Cloud)

3. **Database Migration**
   - Migrate MySQL to managed database service

4. **SSL/HTTPS**
   - Implement SSL certificates

5. **Email Integration**
   - Connect email service for notifications

6. **Payment Gateway**
   - Integrate Pesapal, M-Pesa, or Stripe

## Support & Contact

- **Phone:** +255 677 707 769 / +255 628 091 191
- **Email:** blackstone.tech02@gmail.com
- **WhatsApp:** wa.me/255677707769
- **Instagram:** @blackstone_tech_tz

## License

All rights reserved. Blackstone Tech © 2024

---

**Built with ❤️ for Blackstone Tech**
Creating a Rock-Solid Digital Future
