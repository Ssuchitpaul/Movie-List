CREATE DATABASE NODE;


USE NODE;

CREATE TABLE movies (
    id INT  PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year INT,
    duration_minutes INT,
    rating FLOAT,
    poster_image VARCHAR(255),
    box_office_total DECIMAL(15, 2)
);

SELECT * FROM MOVIES;

INSERT INTO movies 
VALUES (1, 'hulk Smash', 'Chris', 'Sci-Fi', 2010, 148, 9.0, 'https://shorturl.at/v5yw0', 850000000.00);

INSERT INTO movies 
VALUES (2, 'The Godfather', 'Francis Ford Coppola', 'Crime', 19799, 175, 9.2, 'https://shorturl.at/QG22j', 246120974.00);

INSERT INTO movies 
VALUES (3, 'THOR', 'Quentin Tarantino', 'Crime', 1994, 154, 8.9, 'https://shorturl.at/v0lFV', 213928762.00);

INSERT INTO movies 
VALUES (4, 'Interstaller', 'Christopher Nolan', 'Sci-Fi', 2010, 148, 9.0, 'https://rb.gy/pk5f7f', 850000000.00);

INSERT INTO movies 
VALUES (5, 'Inception', 'Christopher Nolan', 'Sci-Fi', 2010, 148, 9.0, 'https://rb.gy/2eezz7', 850000000.00);

INSERT INTO movies 
VALUES (6, 'iron man', 'Logan', 'sci-fi', 2010, 48893, 10.0, 'https://shorturl.at/815lL', 1232.00);

INSERT INTO movies 
VALUES (7, 'Joker', 'Joaquin', 'drama', 2019, 185, 8.0, 'https://rb.gy/mhxlzx', 123424.00);

