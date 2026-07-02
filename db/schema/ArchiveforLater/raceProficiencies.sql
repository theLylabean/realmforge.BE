CREATE TABLE species_proficiency (
  species_slug TEXT REFERENCES species(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  proficiency_slug TEXT REFERENCES proficiency(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (species_slug, proficiency_slug)
);