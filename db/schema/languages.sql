CREATE TABLE languages (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL,
    script TEXT,
    description TEXT[] NOT NULL
);