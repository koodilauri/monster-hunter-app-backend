INSERT INTO quest (name, stars, questGiver, goal, subgoal, game) VALUES('Harvest Tour: Jurassic Frontier', 1, 'Guild', 'Survive until time expires or deliver a Paw Pass Ticket', 'None', 'MHGen');
INSERT INTO quest (name, stars, questGiver, goal, subgoal, game) VALUES('Harvest Tour: Dunes', 1, 'Guild', 'Survive until time expires or deliver a Paw Pass Ticket', 'None', 'MHGen');
INSERT INTO quest (name, stars, questGiver, goal, subgoal, game) VALUES('Harvest Tour: Verdant Hills', 1, 'Guild', 'Survive until time expires or deliver a Paw Pass Ticket', 'None', 'MHGen');
INSERT INTO quest (name, stars, questGiver, goal, subgoal, game) VALUES('Harvest Tour: Arctic Ridge', 1, 'Guild', 'Survive until time expires or deliver a Paw Pass Ticket', 'None', 'MHGen');
INSERT INTO quest (name, stars, questGiver, goal, subgoal, game) VALUES('Harvest Tour: Misty Peaks', 1, 'Guild', 'Survive until time expires or deliver a Paw Pass Ticket', 'None', 'MHGen');
INSERT INTO quest (name, stars, questGiver, goal, subgoal, game) VALUES('Boot to the Head', 1, 'Guild', 'Hunt a Great Maccao', 'Deliver 5 Abyssal Mushrooms', 'MHGen');

INSERT INTO submission (name, questId, questtime, weapon, style, created) VALUES ('lauri', 1, '00:05:31', 'Hammer', 'adept', '2017-06-12');
INSERT INTO submission (name, questId, questtime, weapon, style, created) VALUES ('bob', 2, '00:06:02', 'Lance', 'striker', '2017-06-13');

INSERT INTO skill (name, effect, amount, description) VALUES('Ammo Saver', 'Ammo Saver', 10,'Occasionally returns ammo or phials to inventory when firing.');
INSERT INTO skill (name, effect, amount, description) VALUES('Anti-Theft', 'Anti-Theft', 10,'Prevents item theft.');

INSERT INTO armor (name, slots, part, type, defense, fire, water, thunder, ice, dragon, rarity, skill1, amount1, skill2, amount2, skill3, amount3) VALUES('Leather Headgear', 1, 'Head', 'Both', 34, 0, 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO armor (name, slots, part, type, defense, fire, water, thunder, ice, dragon, rarity, skill1, amount1, skill2, amount2, skill3, amount3) VALUES('Leather Vest', 0, 'Torso', 'Both', 34, 0, 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO armor (name, slots, part, type, defense, fire, water, thunder, ice, dragon, rarity, skill1, amount1, skill2, amount2, skill3, amount3) VALUES('Leather Gloves', 1, 'Arms', 'Both', 34, 0, 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO armor (name, slots, part, type, defense, fire, water, thunder, ice, dragon, rarity, skill1, amount1, skill2, amount2, skill3, amount3) VALUES('Leather Belt', 2, 'Waist', 'Both', 34, 0, 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO armor (name, slots, part, type, defense, fire, water, thunder, ice, dragon, rarity, skill1, amount1, skill2, amount2, skill3, amount3) VALUES('Leather Trousers', 1, 'Feet', 'Both', 34, 0, 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL);
