CREATE TABLE IF NOT EXISTS "user"(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	user_name VARCHAR(50),
	user_role VARCHAR(50),
	department_name VARCHAR(50)
);