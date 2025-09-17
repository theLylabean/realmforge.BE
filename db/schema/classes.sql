CREATE TABLE char_class (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    hit_die INTEGER NOT NULL,
    saving_throws TEXT[],
    description TEXT[]
);