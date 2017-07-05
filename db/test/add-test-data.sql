INSERT INTO quest (name, stars, questGiver) VALUES ('Stop the Wheel', '7', 'guild');
INSERT INTO monsterInQuest (questId, monster) VALUES (1, 'Shagaru Magala');

INSERT INTO quest (name, questGiver) VALUES ('The Five Kings of Destruction', 'event');
INSERT INTO monsterInQuest (questId, monster) VALUES (2, 'Gammoth');
INSERT INTO monsterInQuest (questId, monster) VALUES (2, 'Mizutsune');
INSERT INTO monsterInQuest (questId, monster) VALUES (2, 'Astalos');
INSERT INTO monsterInQuest (questId, monster) VALUES (2, 'Glavenus');
INSERT INTO monsterInQuest (questId, monster) VALUES (2, 'Deviljho');

INSERT INTO quest (name, questGiver) VALUES ('The Greatest Hunter', 'event');
INSERT INTO monsterInQuest (questId, monster) VALUES (3, 'Rathalos');
INSERT INTO monsterInQuest (questId, monster) VALUES (3, 'Zinogre');
INSERT INTO monsterInQuest (questId, monster) VALUES (3, 'Brachydios');
INSERT INTO monsterInQuest (questId, monster) VALUES (3, 'Lagiacrus');
INSERT INTO monsterInQuest (questId, monster) VALUES (3, 'Savage Deviljho');

INSERT INTO quest (name, questGiver) VALUES ('Where Gods Fear to Tread', 'event');
INSERT INTO monsterInQuest (questId, monster) VALUES (4, 'Alatreon');

INSERT INTO quest (name, questGiver) VALUES ('Insanity and Death', 'event');
INSERT INTO monsterInQuest (questId, monster) VALUES (5, 'Savage Deviljho');
INSERT INTO monsterInQuest (questId, monster) VALUES (5, 'Furious Rajang');

INSERT INTO quest (name, questGiver) VALUES ('Capcom: The Rulers Rage', 'event');
INSERT INTO monsterInQuest (questId, monster) VALUES (6, 'Akantor');

INSERT INTO submission (name, questId, questtime, weapon, style, created) VALUES ('lauri', '1', '00:05:31', 'Hammer', 'adept', '2017-06-12');
INSERT INTO submission (name, questId, questtime, weapon, style, created) VALUES ('bob', '2', '00:06:02', 'Lance', 'striker', '2017-06-13');
