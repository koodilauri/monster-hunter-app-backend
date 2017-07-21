CREATE TABLE skill (
  id SERIAL PRIMARY key,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE skill_effect (
  id SERIAL PRIMARY KEY,
  skill_id int REFERENCES skill(id) NOT NULL,
  effect VARCHAR(30) NOT NULL,
  description VARCHAR(120) NOT NULL,
  amount smallint NOT NULL
);

CREATE TABLE armor (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  slots smallint NOT NULL,  
  part VARCHAR(30) NOT NULL,
  type VARCHAR(30) NOT NULL,
  defense smallint NOT NULL,
  fire smallint NOT NULL,
  water smallint NOT NULL,
  thunder smallint NOT NULL,
  ice smallint NOT NULL,
  dragon smallint NOT NULL,
  rarity smallint NOT NULL,
  skill1 int REFERENCES skill(id),
  amount1 smallint,
  skill2 int REFERENCES skill(id),
  amount2 smallint,
  skill3 int REFERENCES skill(id),
  amount3 smallint
);

CREATE TABLE decoration (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  size smallint NOT NULL,
  skill1id int REFERENCES skill(id) NOT NULL,
  bonus1 smallint NOT NULL,
  skill2id int REFERENCES skill(id),
  bonus2 smallint
);

CREATE TABLE weapon (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  slots smallint,
  class VARCHAR(30) NOT NULL,
  type VARCHAR(30) NOT NULL,
  attack smallint,
  affinity smallint
);

CREATE TABLE charm (
  id SERIAL PRIMARY KEY,  
  slots smallint NOT NULL,
  skill1id int REFERENCES skill(id) NOT NULL,
  skill2id int REFERENCES skill(id),
  bonus1 smallint NOT NULL,
  bonus2 smallint NOT NULL
);

ALTER TABLE charm ADD CONSTRAINT unique_charm UNIQUE (slots, skill1id, skill2id, bonus1, bonus2);

CREATE TABLE hunter_art (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  gaugesize smallint NOT NULL,
  description VARCHAR(230) NOT NULL,
  weapon VARCHAR(15) NOT NULL
);

GRANT ALL PRIVILEGES ON TABLE skill, armor, decoration, weapon, charm, hunter_art TO mh_db_user;
GRANT USAGE, SELECT ON SEQUENCE charm_id_seq TO mh_db_user;