 #!/bin/bash
 psql postgres < ./db/migrations/0_0_init_db.sql
 psql mh_db < ./db/migrations/0_1_create-equipment-skills.sql    
 psql mh_db < ./db/migrations/0_2_create-quest.sql    
 psql mh_db < ./db/migrations/0_3_create-armorset.sql  
 psql mh_db < ./db/migrations/0_4_create-submission.sql