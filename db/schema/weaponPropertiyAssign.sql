DROP TABLE IF EXISTS weapon_properties_assignments;

CREATE TABLE weapon_property_assignments (
  weapon_id INTEGER REFERENCES weapons(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES weapon_properties(id) ON DELETE CASCADE,
  PRIMARY KEY (weapon_id, property_id)
);