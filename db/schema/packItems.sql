CREATE TABLE pack_items (
    id SERIAL PRIMARY KEY,
    pack_id INTEGER REFERENCES equipment_packs(id),
    item_id INTEGER REFERENCES equipment_list(id),
    quantity INTEGER DEFAULT 1 CHECK (quantity >= 1)
);