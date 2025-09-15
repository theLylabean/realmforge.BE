CREATE TABLE races (
    index TEXT PRIMARY KEY,
    name TEXT,
    size TEXT,                   -- 'Small' | 'Medium'
    speed INTEGER,               -- base walking speed in feet
    ability_bonuses JSONB,       -- e.g. {"STR":2,"DEX":0,...}
    alignment TEXT,
    age TEXT,
    size_description TEXT,
    language_desc TEXT,
    languages TEXT[],            -- ARRAY['Common','Elvish',...]
    traits JSONB,                -- JSON string: [{"name":"Darkvision","desc":"..."}, ...]
    subraces JSONB               -- JSON string: [{"index":"hill-dwarf","name":"Hill Dwarf",...}, ...]
);