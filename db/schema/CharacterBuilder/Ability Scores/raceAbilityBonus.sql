CREATE TYPE ability AS ENUM ('STR','DEX','CON','INT','WIS','CHA');

CREATE TABLE species_ability_bonus (
  species_slug TEXT REFERENCES species(slug) ON DELETE CASCADE,
  ability ability NOT NULL,
  bonus SMALLINT NOT NULL,
  PRIMARY KEY (species_slug, ability)
);