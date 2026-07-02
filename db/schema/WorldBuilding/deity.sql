CREATE TABLE deity (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    alignment TEXT,
    domain TEXT[],
    description TEXT[]
);