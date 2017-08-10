CREATE TABLE submission (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (25) NOT NULL ,
  questId INT REFERENCES quest(id) NOT NULL,
  questtime TIME NOT NULL ,
  created TIMESTAMPTZ NOT NULL,
  setID INT REFERENCES armorset(id) NOT NULL
);

GRANT ALL PRIVILEGES ON TABLE submission TO mh_db_user;
GRANT USAGE, SELECT ON SEQUENCE submission_id_seq TO mh_db_user;