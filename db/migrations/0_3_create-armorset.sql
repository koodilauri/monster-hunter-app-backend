CREATE TABLE armorset (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  head_id int references armor(id) ,
  torso_id int references armor(id) ,
  arms_id int references armor(id) ,
  waist_id int references armor(id) ,
  feet_id int references armor(id) ,
  charm_id int references charm(id),
  CONSTRAINT unique_row UNIQUE (head_id, torso_id, arms_id, waist_id, feet_id)
);
GRANT ALL PRIVILEGES ON TABLE armorset TO mh_db_user;
GRANT USAGE, SELECT ON SEQUENCE armorset_id_seq TO mh_db_user;
