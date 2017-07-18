CREATE TABLE quest (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (40) NOT NULL,
  stars smallint,
  questGiver VARCHAR (30) NOT NULL,
  goal VARCHAR (100) NOT NULL,
  subgoal VARCHAR(100) NOT NULL,
  game VARCHAR (30) NOT NULL
);

CREATE TABLE monsterInQuest (
  id SERIAL PRIMARY KEY,
  monster VARCHAR(30) NOT NULL,
  num smallint NOT NULL,
  avg_hp VARCHAR(10) NOT NULL,
  stagger VARCHAR(5) NOT NULL,
  attack VARCHAR(5) NOT NULL,
  defense VARCHAR(5) NOT NULL,
  exhaust VARCHAR(5) NOT NULL,
  mount VARCHAR(5) NOT NULL,
  questId int references quest(id) NOT NULL
);

GRANT ALL PRIVILEGES ON TABLE quest TO mh_db_user;
GRANT ALL PRIVILEGES ON TABLE monsterInQuest TO mh_db_user;

