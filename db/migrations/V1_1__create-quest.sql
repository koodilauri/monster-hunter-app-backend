CREATE TABLE quest (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (40) NOT NULL,
  stars smallint,
  quest_giver VARCHAR (30) NOT NULL,
  goal VARCHAR (100) NOT NULL,
  sub_goal VARCHAR(100) NOT NULL,
  game VARCHAR (30) NOT NULL
);

CREATE TABLE monster_in_quest (
  id SERIAL PRIMARY KEY,
  monster VARCHAR(30) NOT NULL,
  num smallint NOT NULL,
  avg_hp VARCHAR(10) NOT NULL,
  stagger VARCHAR(5) NOT NULL,
  attack VARCHAR(5) NOT NULL,
  defense VARCHAR(5) NOT NULL,
  exhaust VARCHAR(5) NOT NULL,
  mount VARCHAR(5) NOT NULL,
  quest_id int references quest(id) NOT NULL,
  type VARCHAR(30) NOT NULL
);

-- GRANT ALL PRIVILEGES ON TABLE quest TO mh_db_user;
-- GRANT ALL PRIVILEGES ON TABLE monster_in_quest TO mh_db_user;

