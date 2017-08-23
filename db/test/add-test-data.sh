#!/bin/bash
psql mh_db < ./db/migrations/V1_0__create-equipment.sql
psql mh_db < ./db/migrations/V1_1__create-quest.sql
psql mh_db < ./db/migrations/V1_2__create-armorset.sql
psql mh_db < ./db/migrations/V1_3__create-submission.sql

psql mh_db < ./db/test/skills.sql
psql mh_db < ./db/test/add-test-data.sql
