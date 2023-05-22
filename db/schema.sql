DROP DATABASE IF EXISTS riyaalexander;
CREATE DATABASE riyaalexander;

\c riyaalexander;

DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes(
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
image_url TEXT NOT NULL,
description TEXT,
ingredients TEXT,
instructions TEXT,
prep_time TEXT,
difficulty TEXT
);