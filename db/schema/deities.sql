DROP TABLE IF EXISTS deities;

CREATE TABLE deities (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    alignment TEXT,
    domains TEXT[],
    description TEXT
);