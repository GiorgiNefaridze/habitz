CREATE DATABASE habitz;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    password  VARCHAR(255) NOT NULL,
    isMale boolean NOT NULL,
    UNIQUE (user_email)
);

CREATE TABLE habits(
    habit_id SERIAL PRIMARY KEY NOT NULL,
    habit_color VARCHAR(255) NOT NULL,
    habit_name VARCHAR(255) NOT NULL,
    habit_goal VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    UNIQUE(habit_name,user_id)
);