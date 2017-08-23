DROP DATABASE IF EXISTS mh_db;
DROP ROLE IF EXISTS mh_db_user;

CREATE ROLE mh_db_user WITH LOGIN PASSWORD 'mh_password' CREATEDB;
CREATE DATABASE mh_db WITH
  OWNER mh_db_user;