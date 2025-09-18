CREATE TABLE feats (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    description TEXT[] NOT NULL,
    prerequisites JSONB
);