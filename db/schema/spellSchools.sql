CREATE TABLE spell_schools (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    description TEXT[] NOT NULL,
    source TEXT
);