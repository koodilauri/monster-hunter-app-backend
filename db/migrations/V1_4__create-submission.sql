CREATE TABLE submission (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (25) NOT NULL ,
  quest_id INT REFERENCES quest(id) NOT NULL,
  quest_time TIME NOT NULL ,
  created TIMESTAMPTZ NOT NULL,
  set_id INT REFERENCES armor_set(id) NOT NULL
);

-- GRANT ALL PRIVILEGES ON TABLE submission TO mh_db_user;
-- GRANT USAGE, SELECT ON SEQUENCE submission_id_seq TO mh_db_user;