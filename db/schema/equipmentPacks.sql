DROP TABLE IF EXISTS equipment_packs;

CREATE TABLE equipment_packs (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES equipment_list(id) ON DELETE CASCADE,
    included_items TEXT[]                 -- or link to a join table for deep modeling
);