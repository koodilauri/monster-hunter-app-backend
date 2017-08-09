CREATE TABLE armorset (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  head_id int references armor(id) NOT NULL,
  torso_id int references armor(id) NOT NULL,
  arms_id int references armor(id) NOT NULL,
  waist_id int references armor(id) NOT NULL,
  feet_id int references armor(id) NOT NULL,
  charm_id int references charm(id) NOT NULL
);
ALTER TABLE armorset ADD CONSTRAINT unique_set UNIQUE (head_id, torso_id, arms_id, waist_id, feet_id, charm_id);


GRANT ALL PRIVILEGES ON TABLE armorset TO mh_db_user;
GRANT USAGE, SELECT ON SEQUENCE armorset_id_seq TO mh_db_user;
