DROP TABLE IF EXISTS subraces;

CREATE TABLE subraces (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    ability_bonuses JSONB,
    language_options TEXT[],
    traits TEXT[],
    race_id INTEGER REFERENCES races(id) ON DELETE CASCADE ON UPDATE CASCADE,
    description TEXT[] NOT NULL
);