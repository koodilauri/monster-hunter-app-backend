CREATE TABLE armor_set (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  style VARCHAR(30) NOT NULL,
  weapon_id INT REFERENCES weapon(id) NOT NULL,
  head_id INT REFERENCES armor(id) NOT NULL,
  torso_id INT REFERENCES armor(id) NOT NULL,
  arms_id INT REFERENCES armor(id) NOT NULL,
  waist_id INT REFERENCES armor(id) NOT NULL,
  feet_id INT REFERENCES armor(id) NOT NULL,
  charm_id INT REFERENCES charm(id) NOT NULL
);

CREATE TABLE decoration_in_set(
  decoration_id INT REFERENCES decoration(id) NOT NULL,
  set_id INT REFERENCES armor_set(id) NOT NULL,
  amount SMALLINT NOT NULL,
  PRIMARY KEY (decoration_id, set_id)
);

CREATE TABLE art_in_set(
  set_id INT REFERENCES armor_set(id) NOT NULL PRIMARY KEY,
  art1_id INT REFERENCES hunter_art(id) NOT NULL,
  art2_id INT REFERENCES hunter_art(id) NOT NULL,
  art3_id INT REFERENCES hunter_art(id) NOT NULL
);

-- ALTER TABLE armor_set ADD CONSTRAINT unique_set UNIQUE (head_id, torso_id, arms_id, waist_id, feet_id, charm_id);
GRANT ALL PRIVILEGES ON TABLE armor_set, decoration_in_set, art_in_set TO mh_db_user;
GRANT USAGE, SELECT ON SEQUENCE armor_set_id_seq TO mh_db_user;
