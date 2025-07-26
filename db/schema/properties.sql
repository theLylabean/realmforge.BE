DROP TABLE IF EXISTS properties;

CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    description TEXT[] NOT NULL,
    category TEXT,
    source TEXT
);