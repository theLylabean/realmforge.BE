CREATE TABLE race_proficiencies (
  race_slug TEXT REFERENCES races(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  proficiency_slug TEXT REFERENCES proficiencies(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (race_slug, proficiency_slug)
);