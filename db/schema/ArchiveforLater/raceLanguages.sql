CREATE TABLE species_language (
  species_slug TEXT REFERENCES species(slug) ON DELETE CASCADE,
  language_slug TEXT REFERENCES language(slug) ON DELETE CASCADE,
  PRIMARY KEY (species_slug, language_slug)
);