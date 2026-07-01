CREATE TABLE char_subclass (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    char_class_id INTEGER REFERENCES char_class(id) ON DELETE CASCADE ON UPDATE CASCADE,
    description TEXT[] NOT NULL,
    subclass_flavor TEXT
);