drop database if exists pokemondb;
create database pokemondb;
use pokemondb;

CREATE TABLE trainer (
  trainer_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'USER',
  wins INT,
  losses INT
);


CREATE TABLE pokemon (
  pokemon_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  image VARCHAR(255),
  health INT NOT NULL,
  attack INT NOT NULL,
  defense INT NOT NULL,
  trainer_id INT,
  FOREIGN KEY (trainer_id) REFERENCES trainer(trainer_id)
);

CREATE TABLE battle (
  battle_id INT PRIMARY KEY AUTO_INCREMENT,
  trainer1_id INT NOT NULL,
  trainer2_id INT NOT NULL,
  winner_id INT,
  FOREIGN KEY (trainer1_id) REFERENCES trainer(trainer_id),
  FOREIGN KEY (trainer2_id) REFERENCES trainer(trainer_id),
  FOREIGN KEY (winner_id) REFERENCES trainer(trainer_id)
);

CREATE TABLE battlelog (
  log_id INT PRIMARY KEY AUTO_INCREMENT,
  battle_id INT NOT NULL,
  event_description TEXT,
  FOREIGN KEY (battle_id) REFERENCES battle(battle_id)
);

INSERT INTO pokemon (name, type, image, health, attack, defense) VALUES
  ('Charmander', 'Fire','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu' ,50, 50, 50),
  ('Vulpix', 'Fire','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu', 50, 50, 50),
  ('Growlithe', 'Fire','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu' ,50, 50, 50),
  ('Squirtle', 'Water','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu' ,50, 50, 50),
  ('Psyduck', 'Water','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu' ,50, 50, 50),
  ('Gyarados', 'Water','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu' ,50, 50, 50),
  ('Bulbasaur', 'Grass','https://www.hiclipart.com/free-transparent-background-png-clipart-stgdu' ,50, 50, 50),
  ('Oddish', 'Grass', 50, 50, 50),
  ('Bellsprout', 'Grass', 50, 50, 50);
