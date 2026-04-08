<?php
/*
 * Blackstone Tech API Configuration
 * Main entry point for API requests
 */

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'blackstone_user');
define('DB_PASS', 'Bl@ckstone2024');
define('DB_NAME', 'blackstone_tech_db');

// API configuration
define('API_VERSION', '1.0.0');
define('API_BASE_URL', 'http://localhost:8000/api');

// JWT Secret
define('JWT_SECRET', 'your-secret-key-change-in-production');

// Connect to database
try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    
    $conn->set_charset("utf8");
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

// Get request method and endpoint
$request_method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$path = str_replace('/api', '', $path);

// Route the request
$segments = explode('/', trim($path, '/'));
$endpoint = isset($segments[0]) ? $segments[0] : '';

// Include route handlers
switch ($endpoint) {
    case 'auth':
        include 'routes/auth.php';
        break;
    case 'products':
        include 'routes/products.php';
        break;
    case 'orders':
        include 'routes/orders.php';
        break;
    case 'users':
        include 'routes/users.php';
        break;
    case 'admin':
        include 'routes/admin.php';
        break;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
        break;
}

$conn->close();
?>
