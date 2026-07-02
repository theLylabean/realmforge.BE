CREATE TABLE subspecies_language_options (
  id SERIAL PRIMARY KEY,
  subspecies_slug TEXT REFERENCES subspecies(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  choose INTEGER NOT NULL DEFAULT 1,
  note TEXT
);

CREATE TABLE subspecies_language_option_items (
  option_id INTEGER REFERENCES subspecies_language_options(id) ON DELETE CASCADE,
  language_slug TEXT REFERENCES language(slug) ON DELETE CASCADE,
  PRIMARY KEY (option_id, language_slug)
);
