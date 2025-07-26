DROP TABLE IF EXISTS pack_items;

CREATE TABLE pack_items (
    id SERIAL PRIMARY KEY,
    pack_id INTEGER REFERENCES equipment_packs(id),
    item_id INTEGER REFERENCES equipment_list(id),
    quantity INTEGER 1
);