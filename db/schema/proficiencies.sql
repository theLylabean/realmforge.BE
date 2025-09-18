CREATE TABLE proficiencies (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL,
    references_data JSONB
);