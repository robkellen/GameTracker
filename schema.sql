DROP DATABASE IF EXISTS gamesDB;
CREATE DATABASE gamesDB;
USE gamesDB;

INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Action", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Adventure", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Fighting", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Platformer", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO genres (name, createdAt, updatedAt) VALUES ("Racing", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
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