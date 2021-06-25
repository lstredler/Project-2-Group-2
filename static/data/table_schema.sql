DROP TABLE IF EXISTS population;
DROP TABLE IF EXISTS vaccines;

CREATE TABLE population (
state VARCHAR PRIMARY KEY,
population_estimate INT,
lat float,
long float
);


CREATE TABLE vaccines (
date VARCHAR,
state VARCHAR,
total_vaccinations INT,
total_distributed INT,
people_vaccinated INT,
people_fully_vaccinated_per_hundred float,
total_vaccinations_per_hundred float,
people_fully_vaccinated float,
people_vaccinated_per_hundred float,
distributed_per_hundred float,
daily_vaccinations_raw float,
daily_vaccinations INT,
daily_vaccinations_per_million INT,
share_doses_used float
);
select * From vaccines;
select * FROM population;
