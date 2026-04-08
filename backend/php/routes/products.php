<?php
/*
 * Products Routes
 */

if ($request_method === 'GET') {
    if (isset($segments[1])) {
        // Get specific product
        $productId = intval($segments[1]);
        getProduct($productId, $conn);
    } else {
        // Get all products with filters
        getAllProducts($conn);
    }
} elseif ($request_method === 'POST') {
    // Create new product (admin only)
    createProduct(file_get_contents('php://input'), $conn);
} elseif ($request_method === 'PUT') {
    // Update product (admin only)
    $productId = intval($segments[1]);
    updateProduct($productId, file_get_contents('php://input'), $conn);
} elseif ($request_method === 'DELETE') {
    // Delete product (admin only)
    $productId = intval($segments[1]);
    deleteProduct($productId, $conn);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

function getAllProducts($conn) {
    $category = isset($_GET['category']) ? $_GET['category'] : '';
    
    $query = "SELECT * FROM products WHERE is_active = 1";
    if ($category) {
        $query .= " AND category = '" . $conn->real_escape_string($category) . "'";
    }
    $query .= " ORDER BY created_at DESC";
    
    $result = $conn->query($query);
    $products = [];
    
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    http_response_code(200);
    echo json_encode(['data' => $products, 'count' => count($products)]);
}

function getProduct($productId, $conn) {
    $stmt = $conn->prepare("SELECT * FROM products WHERE id = ?");
    $stmt->bind_param("i", $productId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        http_response_code(200);
        echo json_encode(['data' => $result->fetch_assoc()]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Product not found']);
    }
    
    $stmt->close();
}

function createProduct($data, $conn) {
    $data = json_decode($data, true);
    
    if (!isset($data['name']) || !isset($data['price'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Name and price required']);
        return;
    }
    
    $stmt = $conn->prepare("INSERT INTO products (name, model, category, price, description, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $model = isset($data['model']) ? $data['model'] : '';
    $category = isset($data['category']) ? $data['category'] : '';
    $description = isset($data['description']) ? $data['description'] : '';
    
    $stmt->bind_param("sssds", $data['name'], $model, $category, $data['price'], $description);
    
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(['success' => true, 'id' => $conn->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create product']);
    }
    
    $stmt->close();
}

function updateProduct($productId, $data, $conn) {
    $data = json_decode($data, true);
    
    $stmt = $conn->prepare("UPDATE products SET name = ?, price = ?, category = ?, description = ? WHERE id = ?");
    $stmt->bind_param("sdssi", $data['name'], $data['price'], $data['category'], $data['description'], $productId);
    
    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Product updated']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update product']);
    }
    
    $stmt->close();
}

function deleteProduct($productId, $conn) {
    $stmt = $conn->prepare("DELETE FROM products WHERE id = ?");
    $stmt->bind_param("i", $productId);
    
    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Product deleted']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to delete product']);
    }
    
    $stmt->close();
}
?>
