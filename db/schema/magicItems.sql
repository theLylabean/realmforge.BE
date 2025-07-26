DROP TABLE IF EXISTS magic_items;

CREATE TABLE magic_items (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    rarity TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT[] NOT NULL,
    requires_attunement BOOLEAN NOT NULL
);