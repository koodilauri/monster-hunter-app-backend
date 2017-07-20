 #!/bin/bash
 heroku pg:psq < ./db/migrations/0_0_init_db.sql
 heroku pg:psq < ./db/migrations/0_1_create-equipment-skills.sql    
 heroku pg:psq < ./db/migrations/0_2_create-quest.sql    
 heroku pg:psq < ./db/migrations/0_3_create-armorset.sql  
 heroku pg:psq < ./db/migrations/0_4_create-submission.sql