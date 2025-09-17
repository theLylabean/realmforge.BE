CREATE TABLE subrace_ability_bonuses (
  subrace_slug TEXT REFERENCES subraces(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  ability ability NOT NULL,
  bonus SMALLINT NOT NULL,
  PRIMARY KEY (subrace_slug, ability)
);
