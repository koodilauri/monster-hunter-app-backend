CREATE TABLE submission (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (25) NOT NULL ,
  questId int REFERENCES quest(id) NOT NULL,
  questtime TIME NOT NULL ,
  weaponId int REFERENCES weapon(id) NOT NULL ,
  style VARCHAR (25) NOT NULL ,
  created TIMESTAMPTZ NOT NULL,
  setID int REFERENCES armorset(id) NOT NULL
);

GRANT ALL PRIVILEGES ON TABLE submission TO mh_db_user;
GRANT USAGE, SELECT ON SEQUENCE submission_id_seq TO mh_db_user;