CREATE TABLE species_language_options (
  id SERIAL PRIMARY KEY,
  species_slug TEXT REFERENCES species(slug) ON DELETE CASCADE,
  choose INTEGER NOT NULL DEFAULT 1,
  note TEXT
);

CREATE TABLE species_language_option_items (
  option_id INTEGER REFERENCES species_language_options(id) ON DELETE CASCADE ON UPDATE CASCADE,
  language_slug TEXT REFERENCES language(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (option_id, language_slug)
);
