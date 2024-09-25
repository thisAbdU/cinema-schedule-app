INSERT INTO users (username, email, password, role, created_at, updated_at)
VALUES
    ('john_doe', 'john@example.com', 'hashedpassword123', 'user', NOW(), NOW()),
    ('jane_smith', 'jane@example.com', 'hashedpassword456', 'user', NOW(), NOW()),
    ('admin_user', 'admin@example.com', 'hashedpassword789', 'admin', NOW(), NOW());
