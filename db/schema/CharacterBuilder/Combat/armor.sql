CREATE TABLE armor (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES equipment_list(id) ON DELETE CASCADE,
    armor_category TEXT NOT NULL,          -- e.g., "Light", "Medium", "Heavy"
    base_ac INTEGER NOT NULL,
    dex_bonus_allowed BOOLEAN,
    stealth_disadvantage BOOLEAN
);
