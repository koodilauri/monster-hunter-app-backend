#!/bin/bash
psql --set 'pass=mh_password' postgres < ./db/test/init_db.sql