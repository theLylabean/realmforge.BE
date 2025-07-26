DROP TABLE IF EXISTS feats;

CREATE TABLE feats (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    description TEXT[],
    prerequisites JSONB
);