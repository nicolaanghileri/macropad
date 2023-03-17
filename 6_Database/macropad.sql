DROP DATABASE IF EXISTS macropad;
CREATE DATABASE macropad;
USE macropad;

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(319),
    password VARCHAR(64)
);

CREATE TABLE status(
    id INT AUTO_INCREMENT PRIMARY KEY,
    value VARCHAR(25)
);

CREATE TABLE app(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25),
    exe VARCHAR(45)
);

CREATE TABLE device(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(25),
    -- FK -- 
    status_id INT,
    FOREIGN KEY (status_id) REFERENCES status(id)
);

CREATE TABLE api_keys(
    id INT AUTO_INCREMENT PRIMARY KEY,
    api_key VARCHAR(128),
    createdAt TIMESTAMP,
    -- FK --
    user_id INT,
    device_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (device_id) REFERENCES device(id)

);

CREATE TABLE macro(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome varchar(25),
    createdAt TIMESTAMP,
    version TINYINT, 	-- 0 to 255--
    -- FK --
    app_id INT,
    FOREIGN KEY (app_id) REFERENCES app(id)
);

CREATE TABLE user_macro(
    -- FK --
    user_id INT,
    macro_id INT,
    PRIMARY KEY(user_id, macro_id),

    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (macro_id) REFERENCES macro(id)
);

