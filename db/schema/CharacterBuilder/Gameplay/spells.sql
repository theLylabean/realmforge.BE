CREATE TABLE spell_list (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    level INTEGER NOT NULL,
    school_id INTEGER REFERENCES spell_schools(id) ON DELETE CASCADE ON UPDATE CASCADE,
    casting_time TEXT NOT NULL,
    range TEXT NOT NULL,
    components TEXT[],
    material TEXT,
    duration TEXT,
    description TEXT[] NOT NULL,
    higher_level TEXT[]
);