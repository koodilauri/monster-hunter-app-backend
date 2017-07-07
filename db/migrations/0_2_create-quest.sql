CREATE TABLE quest (
  id  SERIAL PRIMARY KEY,
  name VARCHAR (30) ,
  stars smallint default 0,
  questGiver VARCHAR (30),
  game VARCHAR (30)
);

CREATE TABLE monsterInQuest (
  id SERIAL PRIMARY KEY,
  questId int references quest(id),
  monster VARCHAR(30)
);

GRANT ALL PRIVILEGES ON TABLE quest TO mh_db_user;
GRANT ALL PRIVILEGES ON TABLE monsterInQuest TO mh_db_user;

