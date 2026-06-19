CREATE TABLE deities (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    alignment TEXT,
    domains TEXT[],
    description TEXT[]
);