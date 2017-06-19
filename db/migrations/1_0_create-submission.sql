CREATE TABLE submission (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (25) NOT NULL ,
  quest VARCHAR (255) NOT NULL,
  questtime TIME NOT NULL ,
  weapon VARCHAR (25) NOT NULL ,
  style VARCHAR (25) NOT NULL ,
  created TIMESTAMPTZ NOT NULL
);
GRANT ALL PRIVILEGES ON TABLE submission TO mh_db_user;