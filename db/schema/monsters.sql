DROP TABLE IF EXISTS monsters;

CREATE TABLE monsters (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    size TEXT
    type TEXT NOT NULL,
    subtype TEXT,
    alignment TEXT NOT NULL,
    armor_class INTEGER NOT NULL,
    hit_points INTEGER NOT NULL,
    hit_dice TEXT NOT NULL,
    speed JSONB,
    xp INTEGER NOT NULL,
    description TEXT[] NOT NULL,
    actions JSONB,
    legendary_actions JSONB,
    proficiencies TEXT,
);