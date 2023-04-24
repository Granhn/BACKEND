CREATE DATABASE firstapi;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('Diego', 'trismegistodiego@gmail.com'),
    ('Fran', 'franimr@gmail.com');