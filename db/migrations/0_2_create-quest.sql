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
  questId int references quest(id),
  monster VARCHAR(30)
);

GRANT ALL PRIVILEGES ON TABLE quest TO mh_db_user;
GRANT ALL PRIVILEGES ON TABLE monsterInQuest TO mh_db_user;

