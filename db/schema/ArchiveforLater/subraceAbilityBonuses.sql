CREATE TABLE subspecies_ability_bonuses (
  subspecies_slug TEXT REFERENCES subspecies(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  ability ability NOT NULL,
  bonus SMALLINT NOT NULL,
  PRIMARY KEY (subspecies_slug, ability)
);
