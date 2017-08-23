#!/bin/bash
npm run db:migrate

psql mh_db < ./db/test/skills.sql
psql mh_db < ./db/test/add-test-data.sql
