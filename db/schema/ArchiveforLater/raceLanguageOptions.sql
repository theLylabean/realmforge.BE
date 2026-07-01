CREATE TABLE race_language_options (
  id SERIAL PRIMARY KEY,
  race_slug TEXT REFERENCES races(slug) ON DELETE CASCADE,
  choose INTEGER NOT NULL DEFAULT 1,
  note TEXT
);

CREATE TABLE race_language_option_items (
  option_id INTEGER REFERENCES race_language_options(id) ON DELETE CASCADE ON UPDATE CASCADE,
  language_slug TEXT REFERENCES languages(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (option_id, language_slug)
);
