CREATE TABLE armorset (
  id  SERIAL PRIMARY KEY,
  head_id int references armor(id) ,
  torso_id int references armor(id) ,
  arms_id int references armor(id) ,
  waist_id int references armor(id) ,
  feet_id int references armor(id) ,
  charm_id int references charm(id)
);
GRANT ALL PRIVILEGES ON TABLE armorset TO mh_db_user;