-- SQL schema for the Tasks table
CREATE DATABASE task_manager;

USE task_manager;

CREATE TABLE Tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT false
);

-- Example insertion
INSERT INTO Tasks (title, description, is_completed)
VALUES ("Study JavaScript", "Finish task manager project", false);
