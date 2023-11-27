CREATE DATABASE habitz;
--NOTE: Run this in ur sql terminal --> SHOW client_encoding <-- so if its not UTF8, then run this command.
SET client_encoding TO 'UTF8'
--

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
    habit_layer VARCHAR(255) NOT NULL,
    habit_name VARCHAR(255) NOT NULL,
    habit_goal VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    UNIQUE(habit_name,user_id)
);