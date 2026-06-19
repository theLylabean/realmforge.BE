CREATE TABLE tools (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES equipment_list(id) ON DELETE CASCADE,
    tool_type TEXT NOT NULL                -- e.g., "Artisan's Tools", "Musical Instrument"
);