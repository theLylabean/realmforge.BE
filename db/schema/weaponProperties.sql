DROP TABLE IF EXISTS weapon_properties;

CREATE TABLE weapon_properties (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);