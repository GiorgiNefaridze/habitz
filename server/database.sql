CREATE DATABASE habitz;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    isMale boolean NOT NULL,
    habits TEXT[],
    UNIQUE (email)
);