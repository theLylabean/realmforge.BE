DROP TABLE IF EXISTS class_proficiencies;

CREATE TABLE class_proficiencies (
    id SERIAL PRIMARY KEY,
    class_id INTEGER REFERENCES char_class(id) ON DELETE CASCADE ON UPDATE CASCADE,
    proficiency_id INTEGER REFERENCES proficiencies(id) ON DELETE CASCADE ON UPDATE CASCADE
);