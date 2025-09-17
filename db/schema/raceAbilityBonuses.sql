CREATE TYPE ability AS ENUM ('STR','DEX','CON','INT','WIS','CHA');

CREATE TABLE race_ability_bonuses (
  race_slug TEXT REFERENCES races(slug) ON DELETE CASCADE,
  ability ability NOT NULL,
  bonus SMALLINT NOT NULL,
  PRIMARY KEY (race_slug, ability)
);