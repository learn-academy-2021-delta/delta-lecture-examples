-- PostgreSQL 10/7/2021


-- Domain specific language - RSpec, HTML, SQL
-- General purpose language - JavaScript, Ruby


-- Structured Query Language - interact with databases, family of languages, relational - follow a table format
-- PostgreSQL - object-oriented approach

-- Can check your version:
-- $ psql --version

-- $ psql
-- sarahproctor=# \l
-- sarahproctor=# exit

-- PG Admin - UI for databases

-- Most basic query we can do:
SELECT * FROM country;
-- Select splat (all columns) from a particular table

-- Want to limit information that we get back by only returning certain columns:
SELECT continent, name
FROM country;

-- Limit the number of rows with a hard limit:
SELECT name, continent, population
FROM country
LIMIT 10;


-- WHERE - conditional statement
-- Testing for equality
SELECT continent, name, region
FROM country
WHERE continent = 'North America';

-- Negation
SELECT continent, name, region
FROM country
WHERE continent != 'North America';


-- Relational operators and the logical AND
SELECT continent, name, region, population
FROM country
WHERE population < 1000000
AND continent = 'North America';

-- Use the e in numbers to move the decimal point
SELECT continent, name, region, population
FROM country
WHERE population < 1e6
AND continent = 'North America';

-- Logial OR
SELECT continent, name, region, population
FROM country
WHERE population < 1e6
OR continent = 'North America';

-- LIKE and the wildcard
SELECT continent, name, region, population
FROM country
WHERE continent LIKE '%America';

-- The ten countries with earliest indepyear
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 10;

-- Tem countries with the most recent indepyear (that is not null)
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10;

-- Where Elisabeth is headofstate
SELECT name, headofstate
FROM country
WHERE headofstate LIKE '%Elisabeth%';

-- Where Elisabeth is headofstate and the countries with the most recent indepyear
SELECT name, headofstate, indepyear
FROM country
WHERE headofstate LIKE '%Elisabeth%'
AND indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10;

-- AS creates an alias column for the pupose of a query, doesn't change the db
SELECT name, population, surfacearea, population/surfacearea AS population_density
FROM country
ORDER BY population_density DESC
LIMIT 10;
