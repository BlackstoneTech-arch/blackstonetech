<?php
/*
 * Orders Routes
 */

if ($request_method === 'GET') {
    if (isset($segments[1])) {
        // Get specific order
        $orderId = intval($segments[1]);
        getOrder($orderId, $conn);
    } else {
        // Get all orders
        getAllOrders($conn);
    }
} elseif ($request_method === 'POST') {
    // Create new order
    createOrder(file_get_contents('php://input'), $conn);
} elseif ($request_method === 'PUT') {
    // Update order status
    $orderId = intval($segments[1]);
    updateOrder($orderId, file_get_contents('php://input'), $conn);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

function getAllOrders($conn) {
    $query = "SELECT o.*, u.name, u.email FROM orders o 
              LEFT JOIN users u ON o.user_id = u.id 
              ORDER BY o.created_at DESC";
    
    $result = $conn->query($query);
    $orders = [];
    
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
    
    http_response_code(200);
    echo json_encode(['data' => $orders, 'count' => count($orders)]);
}

function getOrder($orderId, $conn) {
    $stmt = $conn->prepare("SELECT o.*, u.name, u.email FROM orders o 
                           LEFT JOIN users u ON o.user_id = u.id 
                           WHERE o.id = ?");
    $stmt->bind_param("i", $orderId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        http_response_code(200);
        echo json_encode(['data' => $result->fetch_assoc()]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Order not found']);
    }
    
    $stmt->close();
}

function createOrder($data, $conn) {
    $data = json_decode($data, true);
    
    if (!isset($data['user_id']) || !isset($data['product_id']) || !isset($data['quantity'])) {
        http_response_code(400);
        echo json_encode(['error' => 'User ID, product ID and quantity required']);
        return;
    }
    
    // Generate order number
    $orderNumber = 'BST-' . date('YmdHis') . rand(1000, 9999);
    $status = 'pending';
    
    $stmt = $conn->prepare("INSERT INTO orders (order_number, user_id, product_id, quantity, status, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("siis", $orderNumber, $data['user_id'], $data['product_id'], $data['quantity'], $status);
    
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'order_id' => $conn->insert_id,
            'order_number' => $orderNumber,
            'message' => 'Order created successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create order']);
    }
    
    $stmt->close();
}

function updateOrder($orderId, $data, $conn) {
    $data = json_decode($data, true);
    
    if (!isset($data['status'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Status required']);
        return;
    }
    
    $stmt = $conn->prepare("UPDATE orders SET status = ? WHERE id = ?");
    $stmt->bind_param("si", $data['status'], $orderId);
    
    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Order updated']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update order']);
    }
    
    $stmt->close();
}
?>
