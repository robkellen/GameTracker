CREATE DATABASE IF NOT EXISTS gamesDB;

USE gamesDB;

INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Grand Theft Auto V", "Rockstar", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Halo 3", "Microsoft", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Horizon Zero Dawn", "Sony", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Persona 5", "Atlus", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Pokemon Go", "Niantic", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Star Wars: Jedi Fallen Order", "EA", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("The Legend of Zelda: Breath of the Wild", "Nintendo", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("The Witcher 3: Wild Hunt", "CDProjekt red", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO games (title, publisher, rating, createdAt, updatedAt) VALUES ("Uncharted 4: A Thief's End", "Sony", "9", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Action", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Adventure", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Fighting", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Platformer", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres   (name, createdAt, updatedAt) VALUES ("Racing", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("RPG", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Shooter", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Sports", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Strategy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Survival/Horror", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Android", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("iOS", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("PC", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("MacOS", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Switch", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Wii", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("WiiU", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Playstation 3", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Playstation 4", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Xbox ONE", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO systems (name, createdAt, updatedAt) VALUES ("Xbox 360", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);