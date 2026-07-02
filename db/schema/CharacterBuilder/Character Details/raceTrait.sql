CREATE TABLE species_trait (
  species_slug  TEXT REFERENCES species(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  trait_slug TEXT REFERENCES traits(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (species_slug, trait_slug)
);