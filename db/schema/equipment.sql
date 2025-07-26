DROP TABLE IF EXISTS equipment_list;

CREATE TABLE equipment_list (
    id SERIAL PRIMARY KEY,
    index TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    category_id INTEGER REFERENCES equipment_categories(id) ON DELETE CASCADE ON UPDATE CASCADE,
    weight INTEGER NOT NULL,
    cost TEXT NOT NULL,
    description TEXT[] NOT NULL
);