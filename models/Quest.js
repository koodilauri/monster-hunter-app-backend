const query = require("../db/connect").query

const Quest = {
  findAll() {
    return query(`SELECT quest.quest_giver, goal, stars, quest.name, monster1, type1, monster2, type2, monster3, type3, monster4, type4, monster5, type5, quest.id, count(quest_id) FROM submission
    FULL OUTER JOIN (SELECT a.*
     , (SELECT b1.monster FROM monster_in_quest b1
         WHERE b1.quest_id = a.id 
         ORDER BY b1.monster LIMIT 1 
       ) AS monster1
     , (SELECT b1.type FROM monster_in_quest b1
         WHERE b1.quest_id = a.id 
         ORDER BY b1.type LIMIT 1 
       ) AS type1
     , (SELECT b2.monster FROM monster_in_quest b2
         WHERE b2.quest_id = a.id 
         ORDER BY b2.monster LIMIT 1 OFFSET 1
       ) AS monster2
     , (SELECT b2.type FROM monster_in_quest b2
         WHERE b2.quest_id = a.id 
         ORDER BY b2.type LIMIT 1 OFFSET 1
       ) AS type2
     , (SELECT b3.monster FROM monster_in_quest b3
         WHERE b3.quest_id = a.id 
         ORDER BY b3.monster LIMIT 1 OFFSET 2
       ) AS monster3
     , (SELECT b3.type FROM monster_in_quest b3
         WHERE b3.quest_id = a.id  
         ORDER BY b3.type LIMIT 1 OFFSET 2
       ) AS type3
     , (SELECT b4.monster FROM monster_in_quest b4
         WHERE b4.quest_id = a.id  
         ORDER BY b4.monster LIMIT 1 OFFSET 3
       ) AS monster4
     , (SELECT b4.type FROM monster_in_quest b4
         WHERE b4.quest_id = a.id 
         ORDER BY b4.type LIMIT 1 OFFSET 3
       ) AS type4
     , (SELECT b5.monster FROM monster_in_quest b5
         WHERE b5.quest_id = a.id  
         ORDER BY b5.monster LIMIT 1 OFFSET 4
       ) AS monster5
     , (SELECT b5.type FROM monster_in_quest b5
         WHERE b5.quest_id = a.id 
         ORDER BY b5.type LIMIT 1 OFFSET 4
       ) AS type5

  FROM quest a
 ORDER BY a.id  ) quest
    ON quest.id = submission.quest_id
    GROUP BY quest_giver, goal, stars, quest.name, monster1, type1, monster2, type2, monster3, type3, monster4, type4, monster5, type5, quest.id
    ORDER BY count(quest_id) DESC;`)
  }
}

module.exports = Quest