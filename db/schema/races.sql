CREATE TABLE races (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    speed INTEGER NOT NULL,
    ability_bonuses JSONB NOT NULL,
    alignment TEXT NOT NULL,
    age INTEGER NOT NULL,
    size TEXT NOT NULL,
    size_desc TEXT[] NOT NULL
);