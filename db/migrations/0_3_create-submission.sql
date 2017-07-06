CREATE TABLE submission (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (25) NOT NULL ,
  questId int REFERENCES quest(id) NOT NULL,
  questtime TIME NOT NULL ,
  weapon VARCHAR (25) NOT NULL ,
  style VARCHAR (25) NOT NULL ,
  created TIMESTAMPTZ NOT NULL,
  setID int REFERENCES armorset(id)
);

