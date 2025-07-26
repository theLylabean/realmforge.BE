DROP TABLE IF EXISTS deities;

CREATE TABLE deities (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    alignment TEXT,
    domains TEXT[],
    description TEXT[]
);