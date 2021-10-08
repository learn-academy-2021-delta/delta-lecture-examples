-- PostgreSQL 10/7/2021


-- Domain specific language - RSpec, HTML, SQL
-- General purpose language - JavaScript, Ruby


-- Structured Query Language - interact with databases, family of languages, relational - follow a table format
-- PostgreSQL - object-oriented approach

-- Can check your version:
-- $ psql --version


-- If you get an error:
-- $ brew services start postgresql
-- $ createdb



-- $ psql
-- sarahproctor=# \l
-- sarahproctor=# exit

-- PG Admin - UI for databases

-- Most basic query we can do:
-- Select splat (all columns) from a particular table
SELECT * FROM country;

-- Want to limit information that we get back by only returning certain columns:
SELECT continent, name
FROM country;

-- Limit the number of rows with a hard limit:
SELECT name, continent, population
FROM country
LIMIT 10;
