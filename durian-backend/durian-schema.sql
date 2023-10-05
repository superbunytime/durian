CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  saved_jobs TEXT,
  saved_companies SERIAL FOREIGN KEY,
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  company VARCHAR(25) NOT NULL
  
);


