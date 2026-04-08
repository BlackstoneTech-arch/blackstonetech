<?php
/*
 * Authentication Routes
 */

if ($request_method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($segments[1])) {
        switch ($segments[1]) {
            case 'login':
                handleLogin($data, $conn);
                break;
            case 'register':
                handleRegister($data, $conn);
                break;
            case 'logout':
                handleLogout();
                break;
            default:
                http_response_code(404);
                echo json_encode(['error' => 'Auth endpoint not found']);
                break;
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid request']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

function handleLogin($data, $conn) {
    if (!isset($data['email']) || !isset($data['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Email and password required']);
        return;
    }
    
    // For demo purposes - hardcoded admin credentials
    $adminEmail = 'blackstone.tech02@gmail.com';
    $adminPassword = 'Bl@ckstoneTech2026';
    
    if ($data['email'] === $adminEmail && $data['password'] === $adminPassword) {
        $response = [
            'success' => true,
            'message' => 'Login successful',
            'user' => [
                'id' => 1,
                'email' => $adminEmail,
                'role' => 'admin',
                'name' => 'Admin User'
            ],
            'token' => generateToken($adminEmail)
        ];
        http_response_code(200);
        echo json_encode($response);
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid credentials']);
    }
}

function handleRegister($data, $conn) {
    if (!isset($data['email']) || !isset($data['password']) || !isset($data['name'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Name, email and password required']);
        return;
    }
    
    // Check if user exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $data['email']);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        http_response_code(409);
        echo json_encode(['error' => 'User already exists']);
        $stmt->close();
        return;
    }
    
    // Insert new user
    $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, role, created_at) VALUES (?, ?, ?, ?, NOW())");
    $role = 'customer';
    $stmt->bind_param("ssss", $data['name'], $data['email'], $hashedPassword, $role);
    
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(['success' => true, 'message' => 'User registered successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Registration failed']);
    }
    
    $stmt->close();
}

function handleLogout() {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
}

function generateToken($email) {
    // Simple JWT-like token for demo
    $header = base64_encode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
    $payload = base64_encode(json_encode([
        'email' => $email,
        'iat' => time(),
        'exp' => time() + 86400 * 30
    ]));
    $signature = base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
    return "$header.$payload.$signature";
}
?>
