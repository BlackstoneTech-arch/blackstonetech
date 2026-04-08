<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Blackstone Tech</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .admin-container {
            display: flex;
            min-height: 100vh;
            background: #0a0a0f;
        }

        .sidebar {
            width: 260px;
            background: #1a1a2e;
            border-right: 1px solid rgba(212, 175, 55, 0.2);
            padding: 2rem 0;
            position: fixed;
            height: 100vh;
            overflow-y: auto;
            z-index: 100;
        }

        .sidebar-logo {
            padding: 0 1.5rem 2rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
            margin-bottom: 2rem;
            text-align: center;
        }

        .sidebar-logo img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            border: 2px solid rgba(212, 175, 55, 0.3);
        }

        .sidebar-menu {
            list-style: none;
        }

        .sidebar-menu li {
            margin: 0;
        }

        .sidebar-menu a {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            color: var(--text-light);
            text-decoration: none;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
        }

        .sidebar-menu a:hover,
        .sidebar-menu a.active {
            color: var(--accent-color);
            background: rgba(212, 175, 55, 0.1);
            border-left-color: var(--accent-color);
            padding-left: 1.8rem;
        }

        .main-content {
            flex: 1;
            margin-left: 260px;
            padding: 2rem;
            overflow-y: auto;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .top-bar h1 {
            font-size: 2rem;
            color: var(--text-color);
        }

        .admin-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .admin-user {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(26, 26, 46, 0.6);
            border-radius: 8px;
        }

        .admin-user img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(212, 175, 55, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logout-btn {
            padding: 8px 16px;
            background: rgba(255, 0, 0, 0.2);
            color: #ff6b6b;
            border: 1px solid rgba(255, 0, 0, 0.3);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .logout-btn:hover {
            background: rgba(255, 0, 0, 0.3);
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .stat-card {
            background: rgba(26, 26, 46, 0.6);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent-color);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .section {
            display: none;
        }

        .section.active {
            display: block;
        }

        .section h2 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: var(--text-color);
        }

        .table-responsive {
            background: rgba(26, 26, 46, 0.6);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 12px;
            overflow-x: auto;
            margin-bottom: 2rem;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table th {
            background: rgba(212, 175, 55, 0.1);
            color: var(--accent-color);
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        table td {
            padding: 1rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
            color: var(--text-color);
        }

        table tr:hover {
            background: rgba(212, 175, 55, 0.05);
        }

        .action-btn {
            padding: 6px 12px;
            margin-right: 0.5rem;
            background: rgba(212, 175, 55, 0.2);
            color: var(--accent-color);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        }

        .action-btn:hover {
            background: rgba(212, 175, 55, 0.3);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-color);
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-color);
            font-family: 'Poppins', sans-serif;
        }

        .form-group textarea {
            resize: vertical;
            min-height: 100px;
        }

        .submit-btn {
            padding: 12px 24px;
            background: linear-gradient(135deg, var(--accent-color), #f0d581);
            color: var(--primary-color);
            border: none;
            border-radius: 6px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background: rgba(26, 26, 46, 0.6);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
        }

        .testimonial-author {
            font-weight: 600;
            color: var(--accent-color);
            margin-bottom: 0.5rem;
        }

        .testimonial-text {
            color: var(--text-light);
            font-style: italic;
            margin-bottom: 1rem;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: #1a1a2e;
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 12px;
            padding: 2rem;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .modal-header h2 {
            color: var(--text-color);
            margin: 0;
        }

        .close-modal {
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-light);
            transition: color 0.3s ease;
        }

        .close-modal:hover {
            color: var(--accent-color);
        }

        @media (max-width: 768px) {
            .sidebar {
                width: 200px;
            }

            .main-content {
                margin-left: 200px;
            }

            .dashboard-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 640px) {
            .sidebar {
                width: 60px;
                padding: 1rem 0;
            }

            .sidebar-logo,
            .sidebar-menu a span {
                display: none;
            }

            .sidebar-menu a {
                justify-content: center;
                padding: 1rem;
            }

            .main-content {
                margin-left: 60px;
                padding: 1rem;
            }

            .top-bar {
                flex-direction: column;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="sidebar-logo">
                <img src="images/logo.png" alt="Logo">
            </div>
            <ul class="sidebar-menu">
                <li><a href="#" onclick="switchSection('dashboard')" class="menu-link active">
                    <i class="fas fa-chart-line"></i> <span>Dashboard</span>
                </a></li>
                <li><a href="#" onclick="switchSection('team')" class="menu-link">
                    <i class="fas fa-users"></i> <span>Team Management</span>
                </a></li>
                <li><a href="#" onclick="switchSection('products')" class="menu-link">
                    <i class="fas fa-box"></i> <span>Products</span>
                </a></li>
                <li><a href="#" onclick="switchSection('orders')" class="menu-link">
                    <i class="fas fa-shopping-cart"></i> <span>Orders</span>
                </a></li>
                <li><a href="#" onclick="switchSection('testimonials')" class="menu-link">
                    <i class="fas fa-star"></i> <span>Testimonials</span>
                </a></li>
                <li><a href="#" onclick="switchSection('content')" class="menu-link">
                    <i class="fas fa-file-alt"></i> <span>Content</span>
                </a></li>
                <li><a href="#" onclick="switchSection('settings')" class="menu-link">
                    <i class="fas fa-cog"></i> <span>Settings</span>
                </a></li>
                <li><a href="javascript:logout()" class="menu-link" style="color: #ff6b6b;">
                    <i class="fas fa-sign-out-alt"></i> <span>Logout</span>
                </a></li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="top-bar">
                <h1>Admin Dashboard</h1>
                <div class="admin-actions">
                    <div class="admin-user">
                        <i class="fas fa-user-circle" style="font-size: 2rem; color: #d4af37;"></i>
                        <div>
                            <div style="font-weight: 600;">Admin User</div>
                            <div style="font-size: 0.85rem; color: #b0b0b0;">blackstone.tech02@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dashboard Section -->
            <div id="dashboard" class="section active">
                <h2>Dashboard Overview</h2>
                <div class="dashboard-grid">
                    <div class="stat-card">
                        <div class="stat-value">15,240</div>
                        <div class="stat-label">Total Sales</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">342</div>
                        <div class="stat-label">Orders Today</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">1,256</div>
                        <div class="stat-label">Active Customers</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">89%</div>
                        <div class="stat-label">Customer Satisfaction</div>
                    </div>
                </div>

                <h2 style="margin-top: 2rem;">Recent Orders</h2>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BST-20240408001</td>
                                <td>John Mwangi</td>
                                <td>Hikvision DS-2CD2143G0-I</td>
                                <td>850,000 TZS</td>
                                <td><span style="background: rgba(76, 175, 80, 0.2); padding: 4px 8px; border-radius: 4px; color: #4caf50;">Completed</span></td>
                                <td><button class="action-btn">View</button></td>
                            </tr>
                            <tr>
                                <td>BST-20240408002</td>
                                <td>Sarah Kitalu</td>
                                <td>TP-Link WiFi 6 Router</td>
                                <td>450,000 TZS</td>
                                <td><span style="background: rgba(255, 193, 7, 0.2); padding: 4px 8px; border-radius: 4px; color: #ffc107;">Pending</span></td>
                                <td><button class="action-btn">View</button></td>
                            </tr>
                            <tr>
                                <td>BST-20240408003</td>
                                <td>David Hamisi</td>
                                <td>Custom Web App</td>
                                <td>15,000,000 TZS</td>
                                <td><span style="background: rgba(33, 150, 243, 0.2); padding: 4px 8px; border-radius: 4px; color: #2196f3;">In Progress</span></td>
                                <td><button class="action-btn">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Team Management Section -->
            <div id="team" class="section">
                <h2>Team Management</h2>
                <button class="submit-btn" onclick="openAddTeamModal()" style="margin-bottom: 1.5rem;">+ Add Team Member</button>

                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Edwin Marco Maro</td>
                                <td>CEO & Founder</td>
                                <td>Executive</td>
                                <td>edwin@blackstonetech.tz</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Tech Manager 1</td>
                                <td>Technical Lead</td>
                                <td>Engineering</td>
                                <td>tech1@blackstonetech.tz</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Sales Manager</td>
                                <td>Sales Director</td>
                                <td>Sales</td>
                                <td>sales@blackstonetech.tz</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Network Technician</td>
                                <td>Technician</td>
                                <td>Technical</td>
                                <td>network@blackstonetech.tz</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Products Section -->
            <div id="products" class="section">
                <h2>Products Management</h2>
                <button class="submit-btn" onclick="openAddProductModal()" style="margin-bottom: 1.5rem;">+ Add Product</button>

                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Category</th>
                                <th>Price (TZS)</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hikvision DS-2CD2143G0-I</td>
                                <td>HK-2143G0-I</td>
                                <td>CCTV</td>
                                <td>850,000</td>
                                <td>45</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                            <tr>
                                <td>TP-Link WiFi 6 Router</td>
                                <td>TP-AXE300</td>
                                <td>Networking</td>
                                <td>450,000</td>
                                <td>28</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Server License - Annual</td>
                                <td>SERVER-LIC-2024</td>
                                <td>Software</td>
                                <td>2,500,000</td>
                                <td>Unlimited</td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Orders Section -->
            <div id="orders" class="section">
                <h2>Orders Tracking</h2>

                <div class="form-group" style="max-width: 300px; margin-bottom: 1.5rem;">
                    <label>Filter by Status</label>
                    <select>
                        <option>All Orders</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Cancelled</option>
                    </select>
                </div>

                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Delivery Est.</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="ordersTableBody">
                            <!-- Orders will be populated here -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Testimonials Section -->
            <div id="testimonials" class="section">
                <h2>Customer Testimonials</h2>
                <button class="submit-btn" onclick="openAddTestimonialModal()" style="margin-bottom: 1.5rem;">+ Add Testimonial</button>

                <div class="testimonials-grid" id="testimonialsGrid">
                    <!-- Testimonials will be populated here -->
                </div>
            </div>

            <!-- Content Section -->
            <div id="content" class="section">
                <h2>Content Management</h2>
                <button class="submit-btn" onclick="openAddNewsModal()" style="margin-bottom: 1.5rem;">+ Add News/Update</button>

                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Published Content</h3>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Published Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Expanding CCTV Coverage</td>
                                <td>News</td>
                                <td>2024-04-08</td>
                                <td><span style="background: rgba(76, 175, 80, 0.2); padding: 4px 8px; border-radius: 4px; color: #4caf50;">Published</span></td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                            <tr>
                                <td>New Networking Solutions</td>
                                <td>Update</td>
                                <td>2024-04-05</td>
                                <td><span style="background: rgba(76, 175, 80, 0.2); padding: 4px 8px; border-radius: 4px; color: #4caf50;">Published</span></td>
                                <td><button class="action-btn">Edit</button><button class="action-btn">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Settings Section -->
            <div id="settings" class="section">
                <h2>System Settings</h2>

                <div style="max-width: 600px;">
                    <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Company Information</h3>
                    <form>
                        <div class="form-group">
                            <label>Company Name</label>
                            <input type="text" value="Blackstone Tech" readonly>
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" value="+255 677 707 769">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="blackstone.tech02@gmail.com">
                        </div>
                        <div class="form-group">
                            <label>Instagram</label>
                            <input type="text" value="@blackstone_tech_tz">
                        </div>
                        <button type="submit" class="submit-btn">Save Settings</button>
                    </form>

                    <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Administrator Options</h3>
                    <button class="logout-btn" onclick="logout()" style="width: 100%; padding: 12px; font-size: 1rem;">Logout</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <div id="addTeamModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Add Team Member</h2>
                <span class="close-modal" onclick="closeModal('addTeamModal')">&times;</span>
            </div>
            <form>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter full name">
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" placeholder="e.g., Technical Lead">
                </div>
                <div class="form-group">
                    <label>Department</label>
                    <input type="text" placeholder="e.g., Engineering">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="example@company.tz">
                </div>
                <button type="submit" class="submit-btn">Add Member</button>
            </form>
        </div>
    </div>

    <div id="addProductModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Add Product</h2>
                <span class="close-modal" onclick="closeModal('addProductModal')">&times;</span>
            </div>
            <form>
                <div class="form-group">
                    <label>Product Name</label>
                    <input type="text" placeholder="Enter product name">
                </div>
                <div class="form-group">
                    <label>Model Number</label>
                    <input type="text" placeholder="e.g., HK-2143G0-I">
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <select>
                        <option>CCTV & Security</option>
                        <option>Networking</option>
                        <option>Software</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Price (TZS)</label>
                    <input type="number" placeholder="Enter price">
                </div>
                <button type="submit" class="submit-btn">Add Product</button>
            </form>
        </div>
    </div>

    <div id="addTestimonialModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Add Testimonial</h2>
                <span class="close-modal" onclick="closeModal('addTestimonialModal')">&times;</span>
            </div>
            <form>
                <div class="form-group">
                    <label>Customer Name</label>
                    <input type="text" placeholder="Full name">
                </div>
                <div class="form-group">
                    <label>Position/Company</label>
                    <input type="text" placeholder="e.g., CEO, Tech Company">
                </div>
                <div class="form-group">
                    <label>Testimonial</label>
                    <textarea placeholder="Enter customer testimonial..."></textarea>
                </div>
                <div class="form-group">
                    <label>Rating</label>
                    <select>
                        <option>⭐⭐⭐⭐⭐ (5 Stars)</option>
                        <option>⭐⭐⭐⭐☆ (4 Stars)</option>
                        <option>⭐⭐⭐☆☆ (3 Stars)</option>
                    </select>
                </div>
                <button type="submit" class="submit-btn">Add Testimonial</button>
            </form>
        </div>
    </div>

    <div id="addNewsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Add News/Update</h2>
                <span class="close-modal" onclick="closeModal('addNewsModal')">&times;</span>
            </div>
            <form>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" placeholder="News title">
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select>
                        <option>News</option>
                        <option>Update</option>
                        <option>Announcement</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea placeholder="Enter news description..."></textarea>
                </div>
                <button type="submit" class="submit-btn">Publish</button>
            </form>
        </div>
    </div>

    <script>
        // Check authentication
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'login.html';
        }

        // Section switching
        function switchSection(section) {
            document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
            document.getElementById(section).classList.add('active');

            document.querySelectorAll('.menu-link').forEach(el => el.classList.remove('active'));
            event.target.closest('.menu-link').classList.add('active');
        }

        // Modal functions
        function openAddTeamModal() {
            document.getElementById('addTeamModal').classList.add('active');
        }

        function openAddProductModal() {
            document.getElementById('addProductModal').classList.add('active');
        }

        function openAddTestimonialModal() {
            document.getElementById('addTestimonialModal').classList.add('active');
        }

        function openAddNewsModal() {
            document.getElementById('addNewsModal').classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });

        // Logout function
        function logout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userRole');
            window.location.href = 'login.html';
        }

        // Load testimonials
        function loadTestimonials() {
            const testimonials = [
                { name: 'Samuel Kipchoge', position: 'IT Director, Tech Solutions Ltd', text: 'Blackstone Tech provided excellent service and support. Highly recommended!' },
                { name: 'Grace Mwangi', position: 'CEO, Innovation Hub', text: 'Outstanding quality products and professional team. Best partnership we could ask for!' },
                { name: 'James Mushi', position: 'Operations Manager', text: 'Fast delivery, great customer service, and reliable products. 10/10!' }
            ];

            document.getElementById('testimonialsGrid').innerHTML = testimonials.map(t => `
                <div class="testimonial-card">
                    <div class="testimonial-author">${t.name}</div>
                    <div style="color: #b0b0b0; font-size: 0.85rem; margin-bottom: 1rem;">${t.position}</div>
                    <div class="testimonial-text">"${t.text}"</div>
                    <div style="color: #d4af37;">⭐⭐⭐⭐⭐</div>
                </div>
            `).join('');
        }

        // Load orders
        function loadOrders() {
            const orders = [
                { id: 'BST-20240408001', customer: 'John Mwangi', date: '2024-04-08', total: '850,000', status: 'Completed', delivery: '1-2 days' },
                { id: 'BST-20240408002', customer: 'Sarah Kitalu', date: '2024-04-07', total: '450,000', status: 'In Transit', delivery: '2-3 days' },
                { id: 'BST-20240408003', customer: 'David Hamisi', date: '2024-04-06', total: '15,000,000', status: 'Processing', delivery: '5-7 days' }
            ];

            document.getElementById('ordersTableBody').innerHTML = orders.map(o => `
                <tr>
                    <td>${o.id}</td>
                    <td>${o.customer}</td>
                    <td>${o.date}</td>
                    <td>${o.total} TZS</td>
                    <td><span style="background: rgba(102, 126, 234, 0.2); padding: 4px 8px; border-radius: 4px; color: #667eea;">${o.status}</span></td>
                    <td>${o.delivery}</td>
                    <td><button class="action-btn">Track</button></td>
                </tr>
            `).join('');
        }

        // Initialize
        loadTestimonials();
        loadOrders();
    </script>
</body>
</html>
