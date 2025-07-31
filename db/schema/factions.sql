CREATE TABLE factions (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    alignment TEXT NOT NULL,
    symbol TEXT,
    description TEXT[] NOT NULL
);