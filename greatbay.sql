drop database if exists greatbay_db;

create database greatbay_db;

use greatbay_db;

create table itmes(
id integer(20) auto_increment not null primary key,
item varchar(30) not null,
category varchar(30) not null,
bid integer(50) not null
);