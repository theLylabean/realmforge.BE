CREATE TABLE armor (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES equipment_list(id) ON DELETE CASCADE ON UPDATE CASCADE,
    armor_category TEXT NOT NULL, 
    base_ac INTEGER NOT NULL,
    dex_bonus_allowed BOOLEAN,
    stealth_disadvantage BOOLEAN
);
