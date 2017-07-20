DROP DATABASE IF EXISTS mh_db;
DROP ROLE IF EXISTS mh_db_user;
DROP TABLE IF EXISTS skill, armor, decoration, weapon, charm, hunter_art;
DROP TABLE IF EXISTS quest, monsterInQuest, armorset, submission;

CREATE ROLE mh_db_user WITH LOGIN PASSWORD '1qaz2wsx' CREATEDB;
CREATE DATABASE mh_db WITH
  OWNER mh_db_user;