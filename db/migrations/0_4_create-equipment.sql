CREATE TABLE armor(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  slots smallint NOT NULL,  
  part VARCHAR(30) NOT NULL,
  type VARCHAR(30) NOT NULL,
  armorset int REFERENCES armorset(id)
); 

CREATE TABLE decoration(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  size smallint NOT NULL,
  skill1 VARCHAR(30) NOT NULL,
  bonus1 smallint NOT NULL,
  skill2 VARCHAR(30),
  bonus2 smallint NOT NULL,

); 

CREATE TABLE weapon(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  slots smallint NOT NULL,
  class NOT NULL,
  type NOT NULL
); 

CREATE TABLE charm(
  id SERIAL PRIMARY KEY,  
  slots smallint NOT NULL,
  skill1 VARCHAR(30) NOT NULL,
  skill2 VARCHAR(30) ,
  bonus1 smallint NOT NULL,
  bonus2 smallint NOT NULL
);